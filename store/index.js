export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Smartphone Samsung Galaxy S22',
      description: 'O Smartphone Samsung Galaxy S22 oferece um desempenho excepcional, uma tela vibrante e uma câmera de alta qualidade. Com recursos avançados, como um processador poderoso, uma tela AMOLED dinâmica e um sistema de câmera versátil, o Galaxy S22 é a escolha perfeita para quem busca um dispositivo premium.',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 2,
      title: 'Smart TV LG OLED 4K 55"',
      description: 'A Smart TV LG OLED 4K 55" oferece uma experiência de visualização impressionante com cores vivas, pretos profundos e detalhes nítidos em resolução 4K. Equipada com o webOS, esta TV oferece acesso a uma variedade de aplicativos de streaming e conteúdos sob demanda. Com design elegante e funcionalidades inteligentes, a LG OLED 4K 55" é uma escolha ideal para o entretenimento em casa.',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 3,
      title: 'Apple MacBook Pro 16"',
      description: 'O Apple MacBook Pro 16" é a combinação perfeita de desempenho e portabilidade. Com um processador rápido, gráficos poderosos e uma tela Retina deslumbrante, este laptop oferece uma experiência de usuário excepcional para profissionais criativos e usuários exigentes. Além disso, o MacBook Pro 16" possui uma bateria de longa duração e recursos avançados de segurança, tornando-o ideal para trabalho e entretenimento em movimento.',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 4,
      title: 'Sony PlayStation 5',
      description: 'O Sony PlayStation 5 é o console de próxima geração que oferece uma experiência de jogo imersiva e inovadora. Com gráficos de alta fidelidade, tempos de carregamento ultra-rápidos e um controlador revolucionário, o PS5 redefine o mundo dos videogames. Além disso, oferece uma ampla variedade de jogos exclusivos e recursos de entretenimento para toda a família.',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 5,
      title: 'Bose Noise Cancelling Headphones 700',
      description: 'Os Bose Noise Cancelling Headphones 700 oferecem um som impressionante e cancelamento de ruído ajustável para uma experiência auditiva premium. Com design elegante e confortável, esses fones de ouvido são ideais para viagens, trabalho ou simplesmente relaxar em casa. Além disso, possuem controles intuitivos e compatibilidade com assistentes de voz para uma conveniência total.',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 6,
      title: 'Dell XPS 15 Laptop',
      description: 'O Dell XPS 15 Laptop combina desempenho excepcional, design elegante e uma tela deslumbrante em um único dispositivo. Com processadores poderosos, gráficos dedicados e uma tela InfinityEdge de alta resolução, este laptop é ideal para profissionais criativos e usuários que buscam produtividade e entretenimento de alta qualidade. Além disso, possui uma construção premium e recursos avançados de conectividade.',
      price: 110,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 7,
      title: 'Nikon D850 DSLR Camera',
      description: 'A Nikon D850 DSLR Camera é uma câmera profissional que oferece desempenho excepcional e qualidade de imagem superior. Com um sensor de alta resolução, sistema de autofoco avançado e capacidade de gravação de vídeo em 4K, a D850 é ideal para fotógrafos profissionais e entusiastas. Além disso, possui um design durável, controles intuitivos e uma variedade de recursos avançados para capturar momentos inesquecíveis.',
      price: 50,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 8,
      title: 'Breville Barista Express Espresso Machine',
      description: 'A Breville Barista Express Espresso Machine é uma máquina de café semiautomática que oferece café espresso de qualidade profissional no conforto da sua casa. Com um moedor integrado, controle de temperatura e vaporizador de leite, esta máquina permite preparar uma variedade de bebidas de café com facilidade e precisão. Além disso, possui um design elegante e durável, ideal para entusiastas de café.',
      price: 35,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 9,
      title: 'DJI Mavic Air 2 Drone',
      description: 'O DJI Mavic Air 2 Drone é um drone dobrável e portátil que oferece imagens aéreas de alta qualidade e recursos avançados de voo. Com uma câmera de alta resolução, estabilização de imagem avançada e modos de voo inteligentes, o Mavic Air 2 é ideal para fotografia aérea, videografia e exploração de novas perspectivas. Além disso, possui uma bateria de longa duração e controles intuitivos para uma experiência de voo suave e segura.',
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    }
  ] ,
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/*
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
