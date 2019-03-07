
import appMoviePublish from '@views/routes/app-movie-publish.html'

const render = (req, res, next) => {
    res.render(appMoviePublish)
}

export default {
    render
}