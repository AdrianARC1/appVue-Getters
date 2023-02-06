<template>
    <section id="principal">
        <div id="div-input">
            <input type="checkbox" v-model="$store.state.stock">
            <span>Stock</span>
        </div>
        <div class="productos">
          <div v-if="$store.state.stock">
            <div id="div-productos" v-for="producto in $store.getters.disponibles" :key="producto.nombre">
              <img :src="producto.imagen">
              <h1>{{ producto.nombre }}</h1>
              <h3>{{ producto.precio }}</h3>
              <span v-if="producto.stock == false">Temporalmente sin stock</span>
              <button>Añadir al carrito</button>
            </div>
          </div>
        </div>

        <div class="productos">
          <div v-if="$store.state.stock == false">
            <div id="div-productos" v-for="producto in $store.state.productos" :key="producto.nombre">
              <img :src="producto.imagen">
              <h1>{{ producto.nombre }}</h1>
              <h3>{{ producto.precio }}</h3>
              <span v-if="producto.stock == false">Temporalmente sin stock</span>
              <button>Añadir al carrito</button>
            </div>
          </div>
        </div>
        
    </section>
</template>

<script>

export default {
  name: 'productosVue'
}
</script>

<style lang="sass">
body
    background: #123456

#principal
  display: flex
  flex-direction: column
  div
    display: flex
    justify-content: center
    align-items: center
  .productos
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    div
      width: 100%
      display: flex
      flex-wrap: wrap
      justify-content: center
      align-items: center
      #div-productos
        width: 20%
        height: 400px
        margin: 10px 5rem
        padding: 1rem
        flex-direction: column
        box-shadow: 2px 2px 3px black
        display: flex
        justify-content: center
        align-items: center
        background: white
        img
          width: 80%
        button
          padding: .5rem 1rem
          border: none
          font-size: 14px
          background: #1d1f20
          color: coral
          border-radius: 10px
          cursor: pointer

</style>
