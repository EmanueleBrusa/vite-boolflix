import { search } from "fontawesome";
import { reactive } from "vue";

export const store = reactive({
    filmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=63b7add0593bffe746bf7c6b6a1be32f',
    tvUrl: 'https://api.themoviedb.org/3/search/tv?api_key=63b7add0593bffe746bf7c6b6a1be32f',
    //apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=63b7add0593bffe746bf7c6b6a1be32f',
    filmsObj: [],
    tvsObj: [],
    searchFilm: '',
})