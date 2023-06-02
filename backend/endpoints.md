

Comprar PokeCoins:
Método: POST
Endpoint: /api/purchases/coins
Req: { 
    Corpo: {
        "paymentMethod": "MBWay",
        "amount": 100
    }    
}

Res: {
    status: 201, //aprovado
    status: 404, //rejeitado
}




Titulo: Visualizar Pokémons na PokeBag:
Método: GET
Endpoint: /api/pokebag






Comprar packs de cartas:

Método: POST
Endpoint: /purchases/packs
Exemplo de solicitação POST JSON: { "packType": "standard" }





Virar cartas na abertura do Pack:

Método: PATCH
Endpoint: /cards/{packId}
Exemplo de solicitação PUT ou PATCH JSON: { "flipped": true, cards: [] }




Realizar troca de cartas com a máquina:

Método: POST
Endpoint: /card-trades
Exemplo de solicitação POST JSON: { "offeredCardId": "123" }




Editar dados do perfil:

Método: PUT ou PATCH
Endpoint: /profile
Exemplo de solicitação PUT ou PATCH JSON: { "name": "Novo Nome" }
Apagar a conta:

Método: DELETE
Endpoint: /account

!!! FALTA BACKEND PARA AS EVOLUÇÕES !!!
            (ACHO EU :D)