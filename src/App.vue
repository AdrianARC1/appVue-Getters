<template>
  <nav>
    <router-link to="/productos">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box
  font-family: 'Rubik', sans-serif

nav
  display: flex
  justify-content: space-around
  align-items: center
  a
    text-decoration: none
    color: coral
    font-weight: 900

</style>
