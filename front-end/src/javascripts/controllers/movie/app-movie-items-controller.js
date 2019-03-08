
import appMovieItems from '@views/routes/app-movie-items.html'
import {getMovieItems} from '@models/movie-model'

const render = async (req, res, next) => {
    let data = await getMovieItems()
    // console.log(data)
    // res.render(appMovieItems)
    res.render(
        template.compile(appMovieItems)({
            items:data.data
        })
    )
}

export default {
    render
}