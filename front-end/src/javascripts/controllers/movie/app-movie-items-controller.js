
import appMovieItems from '@views/routes/app-movie-items.html'

const render = (req, res, next) => {
    res.render(appMovieItems)
}

export default {
    render
}