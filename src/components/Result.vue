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
          <div class="failResult" v-if="videos.length == 0">
            We couldn't find videos for you, sorry :(
          </div>
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
          <div class="failResult" v-if="events.length == 0">
            We couldn't find events for you, sorry :(
          </div>
          <div v-else id="events-roll" class="events-roll">
            <div
              id="event-result"
              :class="{ list: displayList }"
              v-for="(events, index) in events"
              :key="events[index]"
            >
              <div id="event-thumb">
                <a :href="events.url" target="_blank">
                  <img :src="events.images[0].url" />
                </a>
              </div>
              <div id="event-result-data">
                <span>Local</span>
                <h4>{{ events.name }}</h4>
                <a :href="events.url" target="_blank"> Join Now </a>
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
  transition: 0.6s;
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

.failResult {
  font-size: 2rem;
  font-weight: 700;
  color: var(--blue);
  padding: 100px;
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
  transition: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
#event-result {
  justify-content: space-between;
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
#video-thumb img {
  border-radius: 10px;
  width: 100%;
  height: auto;
  object-fit: cover;
}
#event-thumb img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  min-height: 100px;
  max-height: 200px;
  object-fit: cover;
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

#video-result-data {
  text-align: left;
  margin-top: 6px;
  padding: 6px;
}
#event-result-data {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 13px;
  padding: 0 10px;
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

#event-result-data h4 {
  color: var(--black);
  font-size: 1.25rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  box-orient: vertical;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
#event-result-data span {
  font-size: 1rem;
  font-weight: 600;
  color: var(--darkBlue);
  text-decoration: none;
  margin: 3px 0;
}
#event-result-data a {
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 30px;
  text-decoration: none;
  user-select: none;
  background: var(--gradBluePurple);
  border-radius: 30px;
  margin-top: 20px;
  max-width: 170px;
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
.list #video-result-data {
  margin-left: 6px;
}

.list #event-result-data {
  width: 50%;
  align-self: center;
}

.list #video-thumb img {
  height: 100%;
  min-width: 150px;
}
.list #event-thumb {
  width: 50%;
}
.list #event-thumb img {
  min-width: 150px;
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

  #toogle-bar,
  #filter-results {
    width: 70%;
  }
}

/* Resolução para ssMobile e Mobile */
/*  */

@media (max-width: 768px) {
  #result-display {
    width: 90%;
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
  #result-display {
    width: 100%;
  }
  #toogle-bar,
  #filter-results {
    width: 90%;
  }
  #video-result {
    width: 100%;
  }
  #event-result {
    width: 100%;
  }
  .list #event-thumb img {
    min-width: 100px;
  }
}
</style>