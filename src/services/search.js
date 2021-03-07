import axios from 'axios';

// parametros e chaves das apis
// 
export const YOUTUBE = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: 'AIzaSyD9Llqh3kZKnzZpNAt0UhTOWPHUQaHO_MQ',
        q: ''
    },
});
export const TICKETMASTER = axios.create({
    baseURL: ' https://app.ticketmaster.com/discovery/v2',
    params: {
        apikey: 'b8bgOphhDQurAPBX8jGoCASBBUsggg7H',
        keyword: 'teste',
        size: '5'
    },
});