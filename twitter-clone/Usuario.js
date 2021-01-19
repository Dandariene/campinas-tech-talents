// cria classe Usuario
class Usuario {
    // cria método para buscar usuario no json
    buscaUsuario() {
        // retorna o fetch
        return fetch("./usuario.json")
            // fetch realizado, pego a resposta 
            .then(function (resposta) {
                // converto a resposta em json
                resposta.json()
                    // pego os dados convertidos em json  
                    .then(function (dados) {
                        console.log("nome-usuario", dados[0].nome)
                        localStorage.setItem("nome-usuario", dados[0].nome)
                        objetoCardUserInfo.mostraUserInfo(dados)
                        objetoCardHeaderInfo.mostraHeaderInfo(dados)
                    })
            })
    }
}