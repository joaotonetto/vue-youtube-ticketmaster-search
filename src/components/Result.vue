<template>
  <div id="result-container">
    <section >
      <div id="videos-card">
        <h3>Videos</h3>
          <div id="videos-roll" class="videos-roll">
            <div
              v-for="(videos, index) in videos"
              :key="videos[index]"
              id="video-result"
            >
              <div>
                <div id="video-thumb">
                 <a :href="`https://www.youtube.com/watch?v=${videos.id.videoId}`" target="_blank"><img width="200" height="100" :src="videos.snippet.thumbnails.medium.url"></a> 
                </div>
              </div>
              <div id="video-result-data">
                <h4 v-html="videos.snippet.title" id="video-title"></h4>
                <div id="video-infos">
                  <a id="video-channel" :href="`https://www.youtube.com/channel/${videos.snippet.channelId}`" target="_blank">
                    {{videos.snippet.channelTitle}}
                  </a>
                </div>
                <small id="video-description">
                  {{ videos.snippet.description }}
                </small>
              </div>
            </div>
          </div>
      </div>
      <div id="events-card">
        <h3>Events</h3>          
          <div id="events-roll" class="events-roll">
            <div
              v-for="(events, index) in events"
              :key="events[index]"
              id="event-result"
            >
              <div id="event-result-data">
                <div>
                  <i>Local</i>
                  <h4 id="event-name">{{ events.name }}</h4>
                </div>
                <div>
                  <i>Info</i>
                  <p>                    
                    <a :href="events.url" target="_blank" id="event-link">More...</a>
                  </p>
                </div>                
              </div>
              <div>
                <div id="event-thumb">
                  <a :href="events.url" target="_blank" >
                    <img width="200" height="100" :src="events.images[0].url">
                  </a>
                </div>
              </div>
            </div>
          </div>        
      </div>
    </section>
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
    return {};
  },
  methods: {},
};
</script>

<style scoped>

/* css destinado a todas a resoluções, scooped */
/*  */
#result-container {
  margin-top: 20px;
}

#videos-card,
#events-card {
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  margin: 10px;
  width: 50%;
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

#video-result {
  display: flex;
}
#video-thumb {
  margin-right: 10px;
}
#video-result-data {
  text-align: left;
}
#video-title {
  margin: 0;
}
#video-infos {
  margin: 10px 0;
}
#video-description {
  overflow: hidden;
  text-overflow: ellipsis;
  box-orient: vertical;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  -webkit-line-clamp: 3;
}

#event-link, #video-channel {
  font-size: 16px;
  font-weight: 600;
  color: var(--red);
  text-decoration: none;
}

#event-result {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
}
#event-thumb {
  margin-left: 10px;
}
#event-result-data {
  text-align: left;
}
#event-result-data i {
  font-size: 14px;
  font-weight: 600;
  color: var(--darkred);
}
#event-result-data h4 {
  color: var(--black);
}

#event-name,
#event-link,
#event-result-data p {
  margin: 0;
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


/* Resolução a partir de tablets pequenos */
/*  */
@media (min-width: 992px) {
  #result-container {
    width: 80%;
  }
  #videos-card,
  #events-card {
    height: 50vh;
    overflow-y: auto;
  }

  #events-roll > div,
  #videos-roll > div {
    border-top: 1px solid var(--black);
    padding: 18px 0;
  }
  #events-roll > div:first-child,
  #videos-roll > div:first-child {
    border-top: 0px;
  }
  #event-result-data div {
    margin-bottom: 5px;
  }
  #event-result-data div:last-child {
    margin-bottom: 0px;
  }  
}

/* Resolução entre Mobile e tablets pequenos */
/*  */
@media (min-width: 768px) and (max-width: 992px) {
  #result-container {
    width: 90%;
  }
}

/* Resolução até tablets pequenos */
/*  */
@media (max-width: 992px) {
  section {
    flex-direction: column;
    align-items: center;
  }
  #videos-card,
  #events-card {
    width: 100%;
  }
  #videos-roll,
  #events-roll {
    display: flex;
    overflow-y: auto;
  }
  #event-result {
    display: grid;
    border-right: 1px solid var(--black);
    margin: 0px;
    padding: 0 10px;
  }
  #video-result {
    display: block;
    border-right: 1px solid var(--black);
    margin: 0px;
    padding: 0 10px;
  }
  #video-description {
    line-clamp: 2;
    -webkit-line-clamp: 2;
  }
  #event-thumb {
    margin: 10px 0 0 0;
  }
  #video-thumb {
    margin: 0 0 10px 0;
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

  #video-title {
    overflow: hidden;
    text-overflow: ellipsis;
    box-orient: vertical;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    -webkit-line-clamp: 2;
  }
}

/* Resolução para ssMobile e Mobile */
/*  */

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
}
</style>