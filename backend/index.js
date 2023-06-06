const express = require("express");
const { getMongoCollection } = require("./database/db");
const { ObjectId } = require("mongodb");

const port = process.env.PORT ?? 5030;

const app = express();
app.use(express.json());
const fs = require("fs");
const pokemons = [];
const PACKAGES = [];
const PACK_OF_CARDS_SIZE = 10;

app.post("/api/user", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "no_body" });
    } else if (!req.body.username) {
      res.status(400).json({ message: "Required Fields: 'username'" });
    } else {
      const requestBody = req.body;

      const newUser = {
        username: requestBody.username,
        email: requestBody.email,
        birthday: requestBody.birthday,
        phoneNumber: requestBody.phoneNumber,
        password: requestBody.password,
        coins: 0,
      };

      const collection = await getMongoCollection("user");
      const result = await collection.insertOne(newUser);
      const id = result.insertedId;
      //criando o inventario
      const collectionInventario = await getMongoCollection("inventario");
      const newInventario = { idUsuario: id, cartas: [] };
      collectionInventario.insertOne(newInventario); //nao tem await pois essa informação nao eh necessario no momento

      res.status(201).json({ id: id });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/user", async (req, res) => {
  try {
    let pacote = getPackage("platinum");
    let common =
      pacote.epic +
      pacote.legendary +
      pacote.very_rare +
      pacote.rare +
      pacote.uncommon +
      pacote.common;
    let uncommon =
      pacote.epic +
      pacote.legendary +
      pacote.very_rare +
      pacote.rare +
      pacote.uncommon;
    let rare = pacote.epic + pacote.legendary + pacote.very_rare + pacote.rare;
    let very_rare = pacote.epic + pacote.legendary + pacote.very_rare;
    let epic = pacote.epic + pacote.legendary;

    let listaDeRaridade = [];
    for (let i = 0; i < 10; i++) {
      let aleatorio = Math.random() * 100;

      if (aleatorio < pacote.legendary) {
        listaDeRaridade.push("legendary");
      } else if (aleatorio < epic) {
        listaDeRaridade.push("epic");
      } else if (aleatorio < very_rare) {
        listaDeRaridade.push("very_rare");
      } else if (aleatorio < rare) {
        listaDeRaridade.push("rare");
      } else if (aleatorio < uncommon) {
        listaDeRaridade.push("uncommon");
      } else if (aleatorio < common) {
        listaDeRaridade.push("common");
      } else {
        listaDeRaridade.push("very_common");
      }
    }
    res.status(201).json(listaDeRaridade);
  } catch (err) {
    console.log(err);
  }
});

//COMPRAR POKECOINS

app.patch("/api/purchase/coins", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "no_body" }); //erro
    } else if (!req.body.id || !req.body.coinsAdded) {
      //se nao foi passado id ou coins
      res
        .status(400)
        .json({ message: "Required Fields: 'idUsuario' 'coinsAdded' " });
    } else {
      const collectionUser = await getMongoCollection("user"); //acessa a tabela user do bd
      const userFound = await collectionUser.findOne({
        _id: new ObjectId(req.body.id),
      }); //encontra o usuario atraves do id na tabela user
      if (!userFound) {
        res.status(404).json({ message: "not_found" });
      } else {
        await collectionUser.updateOne(
          { _id: new ObjectId(req.body.id) },
          { $inc: { coins: req.body.coinsAdded } }
        ); //atualiza o id com as novas moedas add
        const userUpdated = await collectionUser.findOne({
          _id: new ObjectId(req.body.id),
        });
        res.status(201).json({ id: userUpdated._id, coins: userUpdated.coins });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//VISUALIZAR POKEBAG

app.get("/api/user/:id/pokebag", async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(401).json({ message: "Required Field: idUser" });
    }
    const collectionUser = await getMongoCollection("user");
    const userFound = await collectionUser.findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!userFound) {
      res.status(404).json({ message: "not_found" });
    }
    const collectionInventario = await getMongoCollection("inventario");
    const pokebagFounded = await collectionInventario.findOne({
      idUsuario: new ObjectId(req.params.id),
    });
    if (pokebagFounded.cartas.length === 0) {
      res.status(200).json({ pokebagFounded });
    } else {
      const collectionCards = await getMongoCollection("carta");
      const cardsFounded = await collectionCards
        .find({ _id: { $in: pokebagFounded.cartas } })
        .toArray(); //1 parametro do find (e nesse ex unico) representa a query (consulta) que significa ache cartas em que o _id eh um dos itens INside lista
      const pokemons = getPokemons();
      let listaCartas = [];
      for (let i = 0; i < cardsFounded.length; i++) {
        let pokemondFounded = pokemons.find((pokemon) => {
          return pokemon.id === cardsFounded[i].idPokemon;
        });
        listaCartas.push({
          pokemon: pokemondFounded,
          XP: cardsFounded[i].XP,
          id: cardsFounded[i]._id, //id carta db
        });
      }
      res.status(200).json({cartas: listaCartas });
    }
  } catch (err) {
    console.log(err);
  }
});

//COMPRAR PACKS DE CARTAS
app.post("/api/purchases/packs", async (req, res) => {
  try {
    const user = await getUser();
    console.log(user);
    async function getUser() {
      const col = await getMongoCollection("user");
      return await col.findOne();
    }

    if (!req.body) {
      res.status(400).json({ message: "no_body" }); //erro
    } else if (!user._id || !req.body.packageType) {
      //se nao foi passado id ou coins
      res.status(400).json({ message: "Required Fields: 'id' 'packageType" });
    } else {
      const collectionUser = await getMongoCollection("user"); //acessa a tabela user do bd
      const userFound = await collectionUser.findOne({
        _id: new ObjectId(user._id),
      }); //encontra o usuario atraves do id na tabela user
      let package = getPackage(req.body.packageType);
      if (!userFound) {
        res.status(404).json({ message: "not_found" });
      } else if (userFound.coins <= package.value) {
        res.status(401).json({ message: "Insuficient Founds" });
      } else {
        const collectionCards = await getMongoCollection("carta");
        const collectionInventario = await getMongoCollection("inventario");

        let packCards = [];
        let packCardsFrontEnd = [];
        let rarityList = getListOfRarityOfPackages(
          package.type,
          PACK_OF_CARDS_SIZE
        );
        let pokemons = getPokemons();

        for (let i = 0; i < PACK_OF_CARDS_SIZE; i++) {
          let rarity = rarityList[i];
          let pokemonByRarity = pokemons.filter(
            (pokemon) => pokemon.rarity === rarity
          );
          let randomIndex = Math.floor(Math.random() * pokemonByRarity.length);

          let carta = {
            xp: 0,
            idPokemon: pokemonByRarity[randomIndex].id,
          };
          let cartaFrontEnd = {
            xp: 0,
            pokemon: pokemonByRarity[randomIndex],
          };
          packCards.push(carta);
          packCardsFrontEnd.push(cartaFrontEnd);
        }
        let idCards = await collectionCards.insertMany(packCards);

        collectionInventario.updateOne(
          { idUsuario: userFound._id },
          { $push: { cartas: { $each: Object.values(idCards.insertedIds) } } }
        );

        collectionUser.updateOne(
          { _id: new ObjectId(user._id) },
          { $inc: { coins: -package.value } }
        );
        res.status(200).json(packCardsFrontEnd);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

/*

//VIRAR CARTAS NA ABERTURA DO PACK id do jogador tambem
app.patch("/api/cards/:packid", async (req, res) => {

    try {
        if (condicao) {
            res.status(400).json({ message: "" }) //erro
        } else {
            res.status(201).json({ respostarecebida });
        }
    } catch (err) {
        console.log(err)
    }
})

//REALIZAR TROCA DE CARTAS COM A MAQUINA
app.post("/api/card-trades", async (req, res) => {

    try {
        if (condicao) {
            res.status(400).json({ message: "" }) //erro
        } else {
            res.status(201).json({ respostarecebida});
        }
    } catch (err) {
        console.log(err)
    }
})

//EDITAR DADOS DO PERFIL
app.patch("/api/profile", async (req, res) => {

    try {
        if (condicao) {
            res.status(400).json({ message: "" }) //erro
        } else {
            res.status(201).json({ respostarecebida });
        }
    } catch (err) {
        console.log(err)
    }
})

//APAGAR CONTA account? or profile
app.delete("/api/account", async (req, res) => {

    try {
        if (condicao) {
            res.status(400).json({ message: "" }) //erro
        } else {
            res.status(201).json({ respostarecebida });
        }
    } catch (err) {
        console.log(err)
    }
})*/

function getPokemons() {
  if (pokemons.length === 0) {
    let resultsJsonFile = fs.readFileSync("./database/pokemons.json", {
      encoding: "utf-8",
      lag: "r",
    });
    let resultInObject = JSON.parse(resultsJsonFile).pokemons;
    pokemons.push(...resultInObject);
  }
  return pokemons;
}

function getPackage(type) {
  if (PACKAGES.length === 0) {
    let resultsJsonFile = fs.readFileSync("./database/packages.json", {
      encoding: "utf-8",
      lag: "r",
    });
    let resultsInObject = JSON.parse(resultsJsonFile);
    PACKAGES.push(...resultsInObject); //spread. Incluir os itens na lista, ao inves de incluir a lista de itens. ex com spread: [{}, {}, {}] | ex sem spread: [[{}, {}, {}]]
  }
  console.log(PACKAGES);
  return PACKAGES.find((package) => package.type === type.toLowerCase());
}

function getListOfRarityOfPackages(type, size) {
  let pacote = getPackage(type);
  let common =
    pacote.epic +
    pacote.legendary +
    pacote.very_rare +
    pacote.rare +
    pacote.uncommon +
    pacote.common;
  let uncommon =
    pacote.epic +
    pacote.legendary +
    pacote.very_rare +
    pacote.rare +
    pacote.uncommon;
  let rare = pacote.epic + pacote.legendary + pacote.very_rare + pacote.rare;
  let very_rare = pacote.epic + pacote.legendary + pacote.very_rare;
  let epic = pacote.epic + pacote.legendary;

  let listaDeRaridade = [];
  for (let i = 0; i < size; i++) {
    let aleatorio = Math.random() * 100;

    if (aleatorio < pacote.legendary) {
      listaDeRaridade.push("legendary");
    } else if (aleatorio < epic) {
      listaDeRaridade.push("epic");
    } else if (aleatorio < very_rare) {
      listaDeRaridade.push("very_rare");
    } else if (aleatorio < rare) {
      listaDeRaridade.push("rare");
    } else if (aleatorio < uncommon) {
      listaDeRaridade.push("uncommon");
    } else if (aleatorio < common) {
      listaDeRaridade.push("common");
    } else {
      listaDeRaridade.push("very_common");
    }
  }
  return listaDeRaridade;
}

app.listen(port, () => {
  console.log(`À escuta em http://localhost:${port}`);
});
