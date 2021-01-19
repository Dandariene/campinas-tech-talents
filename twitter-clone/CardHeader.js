class CardHeader {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.headerInfo = document.getElementById("header-info");
    }
  
    // monta o HTML do card com os dados do JSON
    mostraHeaderInfo(dados) {
      // cria uma variavel que ira armazenar todo o HTML com as informações
      let card = `
      <ul>
        <li class="profile-stats-item-active">
          <a>
            <span class="profile-stats-item profile-stats-item-label">Tweets</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
          </a>
        </li>
        <li>
          <a>
            <span class="profile-stats-item profile-stats-item-label">Following</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
          </a>
        </li>
        <li>
          <a>
            <span class="profile-stats-item profile-stats-item-label">Followers</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
          </a>
        </li>
        <li>
          <a>
            <span class="profile-stats-item profile-stats-item-label">Likes</span>
            <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
          </a>
        </li>
      </ul>
          `;
  
      this.headerInfo.innerHTML = card;
     
    }
  }