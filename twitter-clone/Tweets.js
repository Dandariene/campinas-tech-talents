// criando classe Tweets
class Tweets {
    // cria método para buscar usuario no json
    buscaTweets() {
        // retorna o fetch 
        return fetch("./tweets.json")
            // fetch realizado, pego a resposta
            .then(function (resposta) {
                // converto a resposta em json
                resposta.json()
                    // pego os dados convertidos em json  
                    .then(function (dados) {
                        console.log("tweets", dados)
                        objetoCardTweets.mostraTweets(dados)
                    })
            })
    }
}