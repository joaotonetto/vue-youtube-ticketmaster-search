<template>
  <div id="container">
    <section id="result-container">
      <div id="toogle-bar" :class="{ toggleShow: defaultShow }">
        <span> </span>
        <button
          type="button"
          @click="toggleVideo"
          :class="{ active: defaultShow }"
        >
          Videos
        </button>
        <button
          type="button"
          @click="toggleEvent"
          :class="{ active: !defaultShow }"
        >
          Events
        </button>
      </div>
      <div id="filter-results">
        <p>
          <span v-show="defaultShow">{{ videos.length }}</span>
          <span v-show="!defaultShow">{{ events.length }}</span>
          Results
        </p>
        <div>
          <button
            @click="toggleList"
            :class="{ active: displayList }"
            type="button"
          ></button>
          <button
            @click="toggleCard"
            :class="{ active: !displayList }"
            type="button"
          ></button>
        </div>
      </div>
      <div id="result-display">
        <div v-show="defaultShow" id="videos-card">
          <div id="videos-roll">
            <div
              id="video-result"
              :class="{ list: displayList }"
              v-for="(videos, index) in videos"
              :key="videos[index]"
            >
              <div id="video-thumb">
                <a
                  :href="`https://www.youtube.com/watch?v=${videos.id.videoId}`"
                  target="_blank"
                  ><img :src="videos.snippet.thumbnails.medium.url"
                /></a>
                <span>Watch</span>
              </div>
              <div id="video-result-data">
                <h4 v-html="videos.snippet.title"></h4>
                <a
                  :href="`https://www.youtube.com/channel/${videos.snippet.channelId}`"
                  target="_blank"
                >
                  {{ videos.snippet.channelTitle }}
                </a>
                <p>
                  {{ videos.snippet.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-show="!defaultShow" id="events-card">
          <h3>Events</h3>
          <div id="events-roll" class="events-roll">
            <div
              id="event-result"
              :class="{ list: displayList }"
              v-for="(events, index) in events"
              :key="events[index]"
            >
              <div id="event-result-data">
                <div>
                  <i>Local</i>
                  <h4 id="event-name">{{ events.name }}</h4>
                </div>
                <div>
                  <i>Info</i>
                  <p>
                    <a :href="events.url" target="_blank" id="event-link"
                      >More...</a
                    >
                  </p>
                </div>
              </div>
              <div>
                <div id="event-thumb">
                  <a :href="events.url" target="_blank">
                    <img width="200" height="100" :src="events.images[0].url" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="bg"></div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    videos: Array,
    events: Array,
  },

  data() {
    return {
      defaultShow: true,
      displayList: true,
    };
  },
  methods: {
    toggleVideo() {
      if (this.defaultShow == false) {
        this.defaultShow = !this.defaultShow;
      }
    },
    toggleEvent() {
      if (this.defaultShow == true) {
        this.defaultShow = !this.defaultShow;
      }
    },
    toggleList() {
      if (this.displayList == false) {
        this.displayList = !this.displayList;
      }
    },
    toggleCard() {
      if (this.displayList == true) {
        this.displayList = !this.displayList;
      }
    },
  },
};
</script>

<style scoped>
/* css destinado a todas a resoluções, scooped */
/*  */
#container {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--resultbackground);
  position: relative;
}
#bg {
  background: url("../assets/pattern.png") repeat;
  background-size: 40%;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
  opacity: 0.1;
}

section {
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

section {
  display: flex;
}

h3 {
  margin-top: 0px;
  font-weight: 600;
  color: var(--black);
}

.mx-1 {
  margin: 0 5px;
}

#result-container {
  width: 100%;
}

/* listagem de resultados */
/* 
 */
#result-display {
  width: 55%;
  margin-bottom: 50px;
}

#videos-card,
#events-card {
  width: 100%;
}

/* grid */
#videos-roll,
#events-roll {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#video-result,
#event-result {
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: white;
  box-shadow: var(--blueLowShadow);
  padding: 10px;
  user-select: none;
  margin-bottom: 2%;
  border-radius: 20px;
  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

#video-thumb,
#event-thumb {
  position: relative;
}
#video-thumb a,
#event-thumb a {
  cursor: pointer;
  z-index: 0;
}
#video-thumb img,
#event-thumb img {
  border-radius: 10px;
  width: 100%;
  height: auto;
}
#video-thumb span {
  position: absolute;
  background: var(--gradBluePurple);
  color: white;
  font-size: 0.8rem;
  bottom: 0;
  right: 0;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 10px;
  z-index: 1;
}

#video-result-data,
#event-result-data {
  text-align: left;
  margin-top: 6px;
  padding: 6px;
}
#video-result-data h4 {
  color: var(--black);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  box-orient: vertical;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
#video-result-data a {
  font-size: 14px;
  font-weight: 600;
  color: var(--darkBlue);
  text-decoration: none;
  margin: 3px 0;
}
#video-result-data p {
  margin: 0px !important;
  color: var(--black);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-orient: vertical;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 5;
  -webkit-line-clamp: 5;
}

/* list */
#video-result.list,
#event-result.list {
  display: flex;
  flex-flow: nowrap;
  width: 100%;
  background-color: white;
  box-shadow: var(--blueLowShadow);
  padding: 10px;
  user-select: none;
}
.list #video-result-data,
.list #event-result-data {
  margin-left: 6px;
}
.list #video-thumb img ,
.list #event-thumb img {
  height: 100%;
  min-width: 150px;
}


#video-infos {
  margin: 10px 0;
}

#event-result {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
}

/* Estilização da scroolbar */
/*  */
#videos-card::-webkit-scrollbar,
#events-card::-webkit-scrollbar {
  width: 10px;
  height: 12px;
}

#videos-card::-webkit-scrollbar-track,
#events-card::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: rgba(78, 78, 80, 0.2);
}

#videos-card::-webkit-scrollbar-thumb,
#events-card::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  background: rgba(78, 78, 80, 0.5);
}

#toogle-bar {
  width: 40%;
  background-color: white;
  box-shadow: var(--blueLowShadow);
  border-radius: 0 0 30px 30px;
  display: flex;
  position: relative;
  user-select: none;
}
#toogle-bar button {
  width: 50%;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 2.5;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: none;
  color: var(--black);
  background-color: white;
  border-radius: 0 0 30px 30px;
  transition: font-weight 0.28s ease-in-out;
}

#toogle-bar span {
  position: absolute;
  width: 25%;
  height: 5px;
  left: calc(5 * 100% / 8);
  background: var(--gradDarkPurpleBlue);
  transform-origin: center;
  border-radius: 0 0 30px 30px;
  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toggleShow span {
  left: calc(1 * 100% / 8) !important;
}

.active {
  font-weight: 600 !important;
  color: var(--darkBlue);
}

#filter-results {
  width: 40%;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: space-between;
  margin: 20px 0;
}
#filter-results span {
  color: white;
  background: var(--gradBluePurple);
  font-size: 1.1rem;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 10px;
}
#filter-results p {
  color: var(--black);
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
}
#filter-results button {
  text-align: center;
  font-size: 1rem;
  width: 37px;
  height: 37px;
  line-height: 2.5;
  outline: 0;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  border: none;
  color: var(--black);
  background: transparent;
  position: relative;
  transition: 0.15s ease-in-out;
}
#filter-results button.active {
  background-color: var(--lightBlue);
  border-radius: 50%;
}
#filter-results button:last-child {
  margin-left: 25px;
}

#filter-results button:first-child::before {
  background: url("../assets/list-icon.svg") no-repeat;
  background-position: center;
  content: "";
  top: 18%;
  left: 13%;
  width: 27px;
  height: 24px;
  position: absolute;
}
#filter-results button:first-child.active::before {
  background: url("../assets/list-icon-selected.svg") no-repeat !important;
}
#filter-results button:last-child::before {
  background: url("../assets/grid-icon.svg") no-repeat;
  background-position: center;
  content: "";
  top: 18%;
  left: 18%;
  width: 24px;
  height: 24px;
  position: absolute;
}
#filter-results button:last-child.active::before {
  background: url("../assets/grid-icon-selected.svg") no-repeat !important;
}

/* Resolução a partir de tablets pequenos */
/*  */
@media (min-width: 1400px) {
  #result-container {
    width: 80%;
  }
}

@media (min-width: 992px) {
  #video-result,
  #event-result {
    width: 46%;
  }
}

/* Resolução entre Mobile e tablets pequenos */
/*  */
@media (min-width: 768px) and (max-width: 992px) {
  #result-container {
    width: 90%;
  }
  #toogle-bar,
  #filter-results {
    width: 60%;
  }
}

/* Resolução até tablets pequenos */
/*  */
@media (max-width: 992px) {
  section {
    flex-direction: column;
    align-items: center;
  }

  #result-display {
    width: 70%;
  }

  #videos-card,
  #events-card {
    width: 100%;
  }

  #videos-roll,
  #events-roll {
    display: flex;
    position: relative;
  }

  #video-description {
    line-clamp: 2;
    -webkit-line-clamp: 2;
  }

  #video-infos {
    margin: 5px 0;
  }
  #videos-card::-webkit-scrollbar,
  #events-card::-webkit-scrollbar {
    width: 10px;
    height: 12px;
  }

  #videos-card::-webkit-scrollbar-track,
  #events-card::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: rgba(78, 78, 80, 0.2);
  }

  #videos-card::-webkit-scrollbar-thumb,
  #events-card::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background: rgba(78, 78, 80, 0.5);
  }

  #toogle-bar,
  #filter-results {
    width: 70%;
  }
}

/* Resolução para ssMobile e Mobile */
/*  */

@media (max-width: 768px) {
  #result-display {
    width: 85%;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  #result-container {
    width: 90%;
  }
}

/* Resolução para ssMobile*/
/*  */

@media (max-width: 576px) {
  #result-container {
    width: 90%;
  }
  #toogle-bar,
  #filter-results {
    width: 90%;
  }
  #video-result,
  #event-reuslt {
    width: 100%;
  }
}
</style>