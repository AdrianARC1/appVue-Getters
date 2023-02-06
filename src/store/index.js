import { createStore } from 'vuex'

export default createStore({
  state: {
    stock: '',
    productos: [
      {
        nombre: 'Zapatilla 1',
        precio: 1,
        imagen: 'https://myekots.com/wp-content/uploads/2017/12/CCP6010-1.png',
        stock: true
      },
      {
        nombre: 'Zapatilla 2',
        precio: 2,
        imagen: 'https://i.pinimg.com/originals/ec/c3/fb/ecc3fb4bd1c505420d0376c2aaf3b314.gif',
        stock: false
      },
      {
        nombre: 'Zapatilla 3',
        precio: 3,
        imagen: 'https://www.revistaaral.com/images/showid2/4835558?w=900&mh=700',
        stock: true
      },
      {
        nombre: 'Zapatilla 4',
        precio: 4,
        imagen: 'https://www.seekpng.com/png/full/659-6598520_download-minions-clash-royale-clipart-clash-of-clans.png',
        stock: false
      }
    ]
  },
  getters: {
    disponibles(state){
      return state.productos.filter(prod=>prod.stock==true)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
