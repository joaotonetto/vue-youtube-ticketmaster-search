<template>
  <div id="app">
    <Logo />
    <Search />
    <Result :videos = 'videos'/>   
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";
import { YOUTUBE } from "./services/search";

export default {
  name: "App",
  components: {
    Logo,
    Search,
    Result,
  },
  data () {
    return {
      videos: []
    }
  },

  mounted() {
    YOUTUBE.get('',{
      params: {
        term: "metallica",
      },
    }).then(response => {
      console.log(response);
      this.videos = response.data.items;
    });
  },
};
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
  --black: #1a1a1c;
  --grey: #4e4e50;
  --darkred: #950741;
  --red: #e1054e;
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
