
import appMovieItems from '@views/routes/app-movie-items.html'
import {getMovieItems} from '@models/movie-model'

const render = (req, res, next) => {
    res.render(appMovieItems)
}

export default {
    render
}