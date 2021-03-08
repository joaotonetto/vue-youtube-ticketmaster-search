<template>
  <div :class="{ darkTheme: darkMode }" id="app">    
    <button class="dark-btn" @click="turnDark">
      {{themeStat}} side
    </button>
    <div :class="{ noResults: !showResults }" id="header">
      <Logo />
      <Search @onSearchRequested="search" />
    </div>    
    <Result v-if="showResults" :videos="videos" :events="events" />
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
      showResults: false,
      darkMode: false,
      themeStat: "dark",
    };
  },

  mounted() {
    this.search("");
  },

  methods: {
    turnDark() {
      this.darkMode = !this.darkMode;
      if(this.darkMode == true)
        this.themeStat = "ligth";           
      else        
        this.themeStat = "dark";    
    },
    search(queryString) {
      //verificação para evitar consulta vazia
      //
      if (queryString.length == 0) {
        this.events = [];
        this.videos = [];
      } else {   
        
        this.showResults = true;
        console.log(this.showResults);
        YOUTUBE.get("/search", {
          params: {
            q: queryString,
          },
        }).then((response) => {
          this.videos = response.data.items;
        });

        TICKETMASTER.get("/attractions", {
          params: {
            keyword: queryString,
          },
        }).then((response) => {
          this.events = response.data._embedded.attractions;
        });
      }
    },
  },
};
</script>

<style type="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s ease;
  background: var(--background);
}
#app {
  --background: #fff;
  --resultbackground: #F8F9FC;

  /* colors */
  --darkPurple: #551ED7;
  --darkPurpleHover: #5F21F0;
  --purple: #6255EC;
  --purpleHover: #6A5CFF;
  --blue: #5AB9F0;
  --blueHover:  #60C5FF;
  --darkBlue: #234D97;
  --darkBlueHover: #295AB0;
  --lightBlue: #DDE8FC;
  --black: #1a1a1c;
  --grey: #4e4e50;

  /* box shadows */
  --blueShadow: 0 5px 20px #234D9750;  
  --blueLowShadow: 0 3px 20px #234D9735;
  --hoverBlueShadow: 0 6px 20px #234D9775;

  /* gradients */
  --gradBluePurple: linear-gradient(45deg, var(--blue), var(--purple));
  --hoverGradBluePurple: linear-gradient(45deg, var(--blueHover), var(--purpleHover));
  --gradDarkPurpleBlue: linear-gradient(45deg, var(--darkPurple), var(--blue));

  
  --darkred: #950741;
  --red: #e1054e;
}

#app.darkTheme {
  --background: #070F1E;
  --resultbackground: #212F4A;

  /* colors */
  --darkPurple: #D71E1E;
  --darkPurpleHover: #F02121;
  --purple: #EC5555;
  --purpleHover: #FF5C5C;
  --blue: #F0A55A;
  --blueHover:  #FFAF60;
  --darkBlue: #974323;
  --darkBlueHover: #BD532C;
  --lightBlue: #F0A55A;
  --black: #fff;
  --grey: #4e4e50;

  /* box shadows */
  --blueShadow: 0 5px 20px #97432350;  
  --blueLowShadow: 0 3px 20px #97432335;
  --hoverBlueShadow: 0 6px 20px #97432375;

  /* gradients */
  --gradBluePurple: linear-gradient(45deg, var(--blue), var(--purple));
  --hoverGradBluePurple: linear-gradient(45deg, var(--blueHover), var(--purpleHover));
  --gradDarkPurpleBlue: linear-gradient(45deg, var(--darkPurple), var(--blue));

  
  --darkred: #950741;
  --red: #e1054e;

  margin-top: -8px;  
}
.dark-btn {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  outline: 0;
  padding: 5px 20px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: none;
  background: var(--gradDarkPurpleBlue);
  border-radius: 30px;
  transition: font-weight 0.28s ease-in-out;
  position: fixed;
  right: 25px;
  top: 25px;
  z-index: 10;
}

body {
  margin: 8px 0 0 0;
}


.noResults {
  margin-top: 10vh;
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
#header {
  width: 100%;
  max-height: 450px;
  height: 27vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.6s ease;
}


#header {
  background: url("./assets/band-background.png") no-repeat;
  background-position: top center;
  background-size: auto 100%;
}

#header div:last-child {
  margin-top: 3vw;
}

@media (max-width: 992px ) {
  #header {
    background-size: auto 100%;
    height: 32vw;
  }
}

@media (max-width: 768px ) {
  #header {
    background-size: auto 100%;
    height: 50vw;
  }
}

@media (min-width: 576px) and (max-width: 768px ) {
  #header div:last-child {
  margin-top: 6vw;
  }
}

@media (max-width: 436px) {
  #header div:last-child {
  margin-top: 1vw;
  }
}

</style>
