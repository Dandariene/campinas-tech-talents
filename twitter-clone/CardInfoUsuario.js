
class CardInfoUsuario {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.userInfo = document.getElementById("user-info")
    }
  
    // monta o HTML do card com os dados do JSON
    mostraUserInfo(dados) {
  
      //cria variavel para armazenar o nome do usuario, vindo do localStorage
      let nomeUsuario = localStorage.getItem("nome-usuario")
  
      let card = `
          <h3 class="profile-fullname"><a>${nomeUsuario}<a></h3>
              <h2 class="profile-element"><a>@${dados[0].usuario}</a></h2>
              <a class="profile-element profile-website" hrerf=""><i
                  class="octicon octicon-link"></i>&nbsp;${dados[0].usuario}.com</a>
              <a class="profile-element profile-website" hrerf=""><i
                  class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
              <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${dados[0].cadastro}</h2>
              <button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados[0].nome}</button>
          `
  
      this.userInfo.innerHTML = card
      console.log("usuario", dados)
    }
  }