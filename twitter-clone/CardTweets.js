class CardTweets {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.cardTweets = document.getElementById("tweets");
    }
  
    // monta o HTML do card com os dados do JSON
    mostraTweets(dados) {
      // cria uma variavel que ira armazenar todo o HTML com as informações
      let card = ""
  
      dados.tweets.map(tweet => {
        card += ` <li class="tweet-card">
          <div class="tweet-content">
            <div class="tweet-header">
              <span class="fullname">
                <strong>${tweet.nome}</strong>
              </span>
              <span class="username">${tweet.usuario}</span>
              <span class="tweet-time">- ${tweet.data}</span>
            </div>
            <a>
              <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
            </a>
            <div class="tweet-text">
              <p class="" lang="es" data-aria-label-part="0">${tweet.mensagem}</p>
            </div>
            <div class="tweet-footer">
              <a class="tweet-footer-btn">
                <i class="octicon octicon-comment" aria-hidden="true"></i><span> 18</span>
              </a>
              <a class="tweet-footer-btn">
                <i class="octicon octicon-sync" aria-hidden="true"></i><span> 64</span>
              </a>
              <a class="tweet-footer-btn">
                <i class="octicon octicon-heart" aria-hidden="true"></i><span> 202</span>
              </a>
            </div>
          </div>
        </li>`;
      }) 
      
  
      this.cardTweets.innerHTML = card;
     
    }
  }