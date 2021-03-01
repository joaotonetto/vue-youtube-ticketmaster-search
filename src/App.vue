<template>
  <div id="app">
        <Logo/>
        <Search/>  
        <Result/>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Search from './components/Search.vue'
import Result from './components/Result.vue'
export default {
  name: 'App',
  components: {
    Logo,
    Search,
    Result
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}
:root {
      --black: #1A1A1C;
      --grey: #4E4E50;
      --darkred: #950741;
      --red: #E1054E;
    }

html {
  background-color: var(--black);
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
.flex-column {
  flex-direction: column;
}
.d-flex {
  display: flex;
}
</style>
