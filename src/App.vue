<template>
  <div id="app">
    <Logo />
    <Search @onSearchRequested="search" />
    <Result :videos="videos" :events="events" />
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";
import { TICKETMASTER, YOUTUBE } from "./services/search";

export default {
  name: "App",
  components: {
    Logo,
    Search,
    Result,
  },
  data() {
    return {
      videos: [],
      events: [],
    };
  },

  mounted() {
    this.search("");
  },

  methods: {
    search(queryString) {
      //verificação para evitar consulta vazia
      //
      if (queryString.length == 0) {
        this.events = [];
        this.videos = [];
      } else {
        YOUTUBE.get("/search", {
          params: {
            q: queryString,
          },
        }).then((response) => {
          console.log("YOUTUBE", response);
          this.videos = response.data.items;
        });

        TICKETMASTER.get("/attractions", {
          params: {
            keyword: queryString,
          },
        }).then((response) => {
          console.log("TICKETMASTER", response);
          this.events = response.data._embedded.attractions;
        });
      }
    },
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
