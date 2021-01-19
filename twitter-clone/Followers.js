// cria classe User
class Followers {
    // cria método para buscar usuario no json
    buscaFollowers() {
        // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
        return fetch("./follow.json")
            // fetch realizado, uso o then para pegar a resposta 
            .then(function (resposta) {
                // converto a resposta em json
                resposta.json()
                    // pego os dados convertidos em json  
                    .then(function (dados) {
                        console.log("followers: ", dados)
                        objetoCardFollowers.mostraFollowers(dados)
                        
                    })
            })
    }
}