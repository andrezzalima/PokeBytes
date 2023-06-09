/* 
clicar numa div para abrir o inventario do jogador
selecionar uma carta que quero trocar
verificar raridade da carta para a maquina escolher uma carta da mesma raridade
efetivar troca e carta passar pro inventario do jogador e apagar a anterior

*/

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./TradeMachine.css";
import returnIcon from "../../../icons/return_icon2.png";
import PokeBag from "../PokeBag/PokeBag";
import TradingMachineTheme from "../../../sounds/background_music/trading_machine_theme.mp3";
import VolumeIcon from "../../../icons/sound_icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TradeMachine(props) {
  const [showRules, setShowRules] = useState(false);
  const [opcoesDeTroca, setOpcoesDeTroca] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [selectTradedPokemon, setSelectTradedPokemon] = useState();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [modalInventario, setModalInventario] = useState(false);
  const [modalOpcoesTroca, setModalOpcoesTroca] = useState(false);
  const [isVolumeBarVisible, setIsVolumeBarVisible] = useState(false);

  const audioRef = useRef(null);

  const handleMusicToggle = () => {
    const audio = audioRef.current;

    if (audio && audio.paused) {
      audio.play();
    } else if (audio && !audio.paused) {
      audio.pause();
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    audio.volume = event.target.value;
  };

  const idUsuario = "647de2191f8686ad8f72ea51";

  function abrirInventario() {
    setModalInventario(true);
  }

  function abrirOpcoesTroca() {
    setModalOpcoesTroca(true);
  }
  function fecharOpcoesTroca() {

    setModalOpcoesTroca(false);
  }

  const handleCardClick = async (cardData) => {
    const carta = cardData;
    const rarity = cardData.pokemon.rarity;
    await getOpcoes(rarity, carta);
  };

  const handleSelectTradeCard = (card) => {
    setSelectTradedPokemon(card);
    fecharOpcoesTroca();
  };
  async function getOpcoes(rarity, carta) {
    const res = await fetch(`/api/user/${idUsuario}/card-trade`);
    const corpo = await res.json();
    let opcoesRaridade = corpo[rarity];
    if (opcoesRaridade) {
      setOpcoesDeTroca(opcoesRaridade);
      setSelectedPokemon(carta);
      setModalInventario(false);
    } else {
      console.log("Ocorreu um erro ao atualizar a troca de cartas");
    }
  }

  const handleChange = async () => {
    if (!selectedPokemon) return;
    const res = await fetch("/api/card-trades", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idUsuario,
        idPokemon: selectTradedPokemon.id,
        idCard: selectedPokemon.id,
      }),
    });
    const data = await res.json();
    console.log(res.status);
    if (res.status === 200) {
      setSelectedPokemon(undefined);
      setSelectTradedPokemon(undefined);

      toast.success("Trade successful!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return await data;
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };
  const handleVolumeIconClick = () => {
    setIsVolumeBarVisible(!isVolumeBarVisible);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && audio.paused) {
      audio.play();
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  //funções
  const getFormattedRarity = (rarity) => {
    const formattedRarity = rarity.replace("_", " ");
    const words = formattedRarity.split(" ");
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || index === words.length - 1) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    return capitalizedWords.join(" ");
  };

  function getTypeBackgroundImage(type) {
    const imagePath = "../../../images/pokemon-types-backgrounds/";

    let backgroundImage;

    if (type === "Normal") {
      backgroundImage = "Normal.png";
    } else if (type === "Fire") {
      backgroundImage = "Fire.png";
    } else if (type === "Water") {
      backgroundImage = "Water.png";
    } else if (type === "Electric") {
      backgroundImage = "Electric.png";
    } else if (type === "Grass") {
      backgroundImage = "Grass.png";
    } else if (type === "Ice") {
      backgroundImage = "Ice.png";
    } else if (type === "Fighting") {
      backgroundImage = "Fighting.png";
    } else if (type === "Poison") {
      backgroundImage = "Poison.png";
    } else if (type === "Ground") {
      backgroundImage = "Ground.png";
    } else if (type === "Flying") {
      backgroundImage = "Flying.png";
    } else if (type === "Psychic") {
      backgroundImage = "Psychic.png";
    } else if (type === "Bug") {
      backgroundImage = "Bug.png";
    } else if (type === "Rock") {
      backgroundImage = "Rock.png";
    } else if (type === "Ghost") {
      backgroundImage = "Ghost.png";
    } else if (type === "Dragon") {
      backgroundImage = "Dragon.png";
    } else {
      backgroundImage = null;
    }

    if (backgroundImage) {
      return imagePath + backgroundImage;
    } else {
      return null;
    }
  }

  function getTypeBackgroundGradient(type) {
    const imagePath = "../../../images/card-gradients/";

    let backgroundImage;

    if (type === "Normal") {
      backgroundImage = "Normal.png";
    } else if (type === "Fire") {
      backgroundImage = "Fire.png";
    } else if (type === "Water") {
      backgroundImage = "Water.png";
    } else if (type === "Electric") {
      backgroundImage = "Electric.png";
    } else if (type === "Grass") {
      backgroundImage = "Grass.png";
    } else if (type === "Ice") {
      backgroundImage = "Ice.png";
    } else if (type === "Fighting") {
      backgroundImage = "Fighting.png";
    } else if (type === "Poison") {
      backgroundImage = "Poison.png";
    } else if (type === "Ground") {
      backgroundImage = "Ground.png";
    } else if (type === "Flying") {
      backgroundImage = "Flying.png";
    } else if (type === "Psychic") {
      backgroundImage = "Psychic.png";
    } else if (type === "Bug") {
      backgroundImage = "Bug.png";
    } else if (type === "Rock") {
      backgroundImage = "Rock.png";
    } else if (type === "Ghost") {
      backgroundImage = "Ghost.png";
    } else if (type === "Dragon") {
      backgroundImage = "Dragon.png";
    } else {
      backgroundImage = null;
    }

    if (backgroundImage) {
      return imagePath + backgroundImage;
    } else {
      return null;
    }
  }

  function getIconTypes(type) {
    const imagePath = "../../../images/pokemon-types/";

    let backgroundImage;

    if (type === "Normal") {
      backgroundImage = "Normal.png";
    } else if (type === "Fire") {
      backgroundImage = "Fire.png";
    } else if (type === "Water") {
      backgroundImage = "Water.png";
    } else if (type === "Electric") {
      backgroundImage = "Electric.png";
    } else if (type === "Grass") {
      backgroundImage = "Grass.png";
    } else if (type === "Ice") {
      backgroundImage = "Ice.png";
    } else if (type === "Fighting") {
      backgroundImage = "Fighting.png";
    } else if (type === "Poison") {
      backgroundImage = "Poison.png";
    } else if (type === "Ground") {
      backgroundImage = "Ground.png";
    } else if (type === "Flying") {
      backgroundImage = "Flying.png";
    } else if (type === "Psychic") {
      backgroundImage = "Psychic.png";
    } else if (type === "Bug") {
      backgroundImage = "Bug.png";
    } else if (type === "Rock") {
      backgroundImage = "Rock.png";
    } else if (type === "Ghost") {
      backgroundImage = "Ghost.png";
    } else if (type === "Dragon") {
      backgroundImage = "Dragon.png";
    } else {
      backgroundImage = null;
    }

    if (backgroundImage) {
      return imagePath + backgroundImage;
    } else {
      return null;
    }
  }

  return (
    <>
      <div className="background-tradeMachine">
        <div className="selectCards">
          <div className="cartaSelecionada">
            {selectedPokemon && (
              <div
                className="carta-exterior"
                style={{
                  backgroundImage: `url(${getTypeBackgroundGradient(
                    selectedPokemon.pokemon.type[0]
                  )})`,
                }}
              >
                <div className="carta-interior">
                  <div className="card-upper-info">
                    <div className="id-label-hp-type">
                      <div className="id-and-label">
                        <p className="pokemonID">
                          <b>#{selectedPokemon.pokemon.id}</b>
                        </p>
                        <p className="pokemonLabel">
                          {selectedPokemon.pokemon.label}
                        </p>
                      </div>
                      <div className="hp-and-type">
                        <p className="pokemonHP">
                          {selectedPokemon.pokemon.base.HP}HP
                        </p>
                        <img
                          className="grassType w-6 h-6"
                          src={getIconTypes(selectedPokemon.pokemon.type[0])}
                        ></img>
                      </div>
                    </div>

                    <div className="image-wrapper">
                      <div className="pokemon-container">
                        <div
                          className="image-inner-wrapper"
                          style={{
                            backgroundImage: `url(${getTypeBackgroundImage(
                              selectedPokemon.pokemon.type[0]
                            )})`,
                          }}
                        >
                          <img
                            className="pokemon-field"
                            src={`/images/pokemons/${selectedPokemon.pokemon.id.toLocaleString(
                              "en-US",
                              { minimumIntegerDigits: 3 }
                            )}.png`}
                            alt={selectedPokemon.pokemon.label}
                          />
                        </div>
                      </div>
                      <div className="card-lower-info"></div>

                      <div className="info-pokemons">
                        <p className="pokemonRarity">
                          <b>Rarity:</b>{" "}
                          <span className="rarity border-dotted border-2">
                            {getFormattedRarity(selectedPokemon.pokemon.rarity)}
                          </span>
                        </p>
                        <p className="pokemonType">
                          <b>Type:</b> {selectedPokemon.pokemon.type.join(", ")}
                        </p>
                        <p className="pokemonAttack">
                          <b>Attack:</b> {selectedPokemon.pokemon.base.Attack}
                        </p>
                        <p className="pokemonDefense">
                          <b>Defense:</b> {selectedPokemon.pokemon.base.Defense}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="cartaTrocaSelecionada">
            {selectTradedPokemon && (
              <div
                className="carta-exterior"
                style={{
                  backgroundImage: `url(${getTypeBackgroundGradient(
                    selectTradedPokemon.type[0]
                  )})`,
                }}
              >
                <div className="carta-interior">
                  <div className="card-upper-info">
                    <div className="id-label-hp-type">
                      <div className="id-and-label">
                        <p className="pokemonID">
                          <b>#{selectTradedPokemon.id}</b>
                        </p>
                        <p className="pokemonLabel">
                          {selectTradedPokemon.label}
                        </p>
                      </div>
                      <div className="hp-and-type">
                        <p className="pokemonHP">
                          {selectTradedPokemon.base.HP}HP
                        </p>
                        <img
                          className="grassType w-6 h-6"
                          src={getIconTypes(selectTradedPokemon.type[0])}
                        ></img>
                      </div>
                    </div>

                    <div className="image-wrapper">
                      <div className="pokemon-container">
                        <div
                          className="image-inner-wrapper"
                          style={{
                            backgroundImage: `url(${getTypeBackgroundImage(
                              selectTradedPokemon.type[0]
                            )})`,
                          }}
                        >
                          <img
                            className="pokemon-field"
                            src={`/images/pokemons/${selectTradedPokemon.id.toLocaleString(
                              "en-US",
                              { minimumIntegerDigits: 3 }
                            )}.png`}
                            alt={selectTradedPokemon.label}
                          />
                        </div>
                      </div>
                      <div className="card-lower-info"></div>

                      <div className="info-pokemons">
                        <p className="pokemonRarity">
                          <b>Rarity:</b>{" "}
                          <span className="rarity border-dotted border-2">
                            {getFormattedRarity(selectTradedPokemon.rarity)}
                          </span>
                        </p>
                        <p className="pokemonType">
                          <b>Type:</b> {selectTradedPokemon.type.join(", ")}
                        </p>
                        <p className="pokemonAttack">
                          <b>Attack:</b> {selectTradedPokemon.base.Attack}
                        </p>
                        <p className="pokemonDefense">
                          <b>Defense:</b> {selectTradedPokemon.base.Defense}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="efetivarTroca" onClick={handleChange}></div>

        <div className="rules" onClick={toggleRules}>
          <span className="rules-text">RULES</span>
        </div>
        {showRules && (
          <div className="rules-content-box">
            <div className="rules-content">
              <div className="bg-image"></div>
              <p>
                <span className="rules-title">
                  It's time to trade Pokémon cards, trainer! Prepare for some
                  exciting swaps!
                </span>{" "}
                <br />
                <br />
                Remember, you can only trade cards that share the same rarity
                type, which is like a Pokémon's uniqueness level! <br />
                <br />
                The available rarities for trading are:{" "}
                <span className="very-common">very common</span>,{" "}
                <span className="common">common</span>,{" "}
                <span className="uncommon">uncommon</span>, and{" "}
                <span className="rare">rare</span>. Let's keep it fair and fun!{" "}
                <br />
                <br />
                Sorry, legendary trainers! Pokémon cards beyond rare (like{" "}
                <span className="very-rare">very rare</span>,{" "}
                <span className="epic">epic</span>, and{" "}
                <span className="legendary">legendary</span>) are off-limits for
                trading. They're just too precious! <br />
                <br />
                Your trusty program buddy will help you find the perfect trading
                partner based on the rarity you desire. Let the trading
                adventures begin! <br />
                <br />
                These rules aim to capture the spirit of Pokémon, creating an
                engaging and playful atmosphere. <br />
                <br />
                Happy trading, Pokémon trainers!
              </p>
            </div>
          </div>
        )}

        <div className="return-wrapper">
          <div className="return-to-homepage ">
            <Link to="/homePage">
              {" "}
              <img
                src={returnIcon}
                className="return-icon"
                alt="Return to Homepage"
              />{" "}
            </Link>
          </div>
        </div>

        

        <img
          src={VolumeIcon}
          alt="Volume Icon"
          className={`volume-icon ${isVolumeBarVisible ? "active" : ""}`}
          onClick={handleVolumeIconClick}
        />

        <audio
          ref={audioRef}
          src={TradingMachineTheme}
          loop
          style={{ display: "none" }}
        >
          Your browser does not support the audio element.
        </audio>

        <div className="tm-background">
          <div className="inventario" onClick={abrirInventario}>
            
          

          {modalInventario && (
            <div className="modal-overlay">
              <div className="modal-content-invent">
                <PokeBag onCardClick={handleCardClick} />
              </div>
            </div>
          )}
        </div></div>

        <div>
          <div className="opcoesTroca" onClick={() => abrirOpcoesTroca()}>
            {modalOpcoesTroca && (
              <div className="modal-overlay">
                <div className="modal-content-troca">
                  {opcoesDeTroca.map((carta, index) => (
                    <div
                      className="carta-exterior"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTradeCard(carta);
                      }}
                      key={index}
                      style={{
                        backgroundImage: `url(${getTypeBackgroundGradient(
                          carta.type[0]
                        )})`,
                      }}
                    >
                      <div className="carta-interior">
                        <div className="card-upper-info">
                          <div className="id-label-hp-type">
                            <div className="id-and-label">
                              <p className="pokemonID">
                                <b>#{carta.id}</b>
                              </p>
                              <p className="pokemonLabel">{carta.label}</p>
                            </div>
                            <div className="hp-and-type">
                              <p className="pokemonHP">{carta.base.HP}HP</p>
                              <img
                                className="grassType w-6 h-6"
                                src={getIconTypes(carta.type[0])}
                              ></img>
                            </div>
                          </div>

                          <div className="image-wrapper">
                            <div className="pokemon-container">
                              <div
                                className="image-inner-wrapper"
                                style={{
                                  backgroundImage: `url(${getTypeBackgroundImage(
                                    carta.type[0]
                                  )})`,
                                }}
                              >
                                <img
                                  className="pokemon-field"
                                  src={`/images/pokemons/${carta.id.toLocaleString(
                                    "en-US",
                                    { minimumIntegerDigits: 3 }
                                  )}.png`}
                                  alt={carta.label}
                                />
                              </div>
                            </div>
                            <div className="card-lower-info"></div>

                            <div className="info-pokemons">
                              <p className="pokemonRarity">
                                <b>Rarity:</b>{" "}
                                <span className="rarity border-dotted border-2">
                                  {getFormattedRarity(carta.rarity)}
                                </span>
                              </p>
                              <p className="pokemonType">
                                <b>Type:</b> {carta.type.join(", ")}
                              </p>
                              <p className="pokemonAttack">
                                <b>Attack:</b> {carta.base.Attack}
                              </p>
                              <p className="pokemonDefense">
                                <b>Defense:</b> {carta.base.Defense}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="return-wrapper">
          <div className="return-to-homepage">
            <Link to="/homePage">
              {" "}
              <img
                src={returnIcon}
                className="return-icon"
                alt="Return to Homepage"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default TradeMachine;
