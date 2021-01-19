class CardFollowers {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.cardFollowers = document.getElementById("followers");
    }
  
    // monta o HTML do card com os dados do JSON
    mostraFollowers(dados) {
      // cria uma variavel que ira armazena as informações
      let card = ""
  
      dados.followers.map(follower => {
        card += ` <li class="tweet-card">
          <li class="tweet-card">
                    <div class="tweet-content">
                      <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                      <div class="tweet-header">
                        <span class="fullname">
                          <strong>${follower.nome}</strong>
                        </span>
                        <span class="username">${follower.usuario}</span>
                      </div>
                      <button class="btn btn-follow">Follow</button>
                    </div>
                  </li>`;
      }) 
      
  
      this.cardFollowers.innerHTML = card;
     
    }
  }