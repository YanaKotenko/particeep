import {
  GET_MOVIES,
  DELETE_MOVIE,
  SET_FILTERS_CATEGORIES,
	TOGGLE_CATEGORY_STATE,
	EVOLUATE_MOVIE,
} from './const';

const initState = {
  moviesList: [],
	categories: [],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesList: action.moviesList,
      };

    case SET_FILTERS_CATEGORIES: {
			const categories = action.categories.map((movie) => ({
				id: movie.id,
				title: movie.category,
				checked: false,
			}))
			const ddd = categories.map((movie) => {
				return categories.find((item) => item.title === movie.title)
			})

			console.log(ddd);
		 
			// const filtered = categories.filter((category, index) => {
			// 	console.log(categories.indexOf(category));

			// 	return categories.indexOf(category.title) === index
			// });
			// console.log(filtered);

      return {
        ...state,
        categories: categories,
      };
		}

    case DELETE_MOVIE: {
			const copyState = [...state.moviesList];
			const filtered = copyState.filter((movie) => movie.id !== action.id);
        
      return {
        ...state,
        moviesList: filtered,
      };
    }

    // case TOGGLE_CATEGORY_STATE: {
		// 	const copyState = [...state.moviesList]
		// 	const likedMovie = copyState.find((movie) => movie.id === action.id);
		// 	likedMovie.likes += 1
        
    //   return {
    //     ...state,
    //     moviesList: copyState,
    //   };
    // }

    case EVOLUATE_MOVIE: {
			const copyState = [...state.moviesList];
			const movie = copyState.find((movie) => movie.id === action.id);
			if (action.action === 'like') {
				movie.setLike = true;
				movie.setDislike = false;
			} else if (action.action === 'dislike') {
				movie.setDislike = true;
				movie.setLike = false;
			}
        
      return {
        ...state,
        moviesList: copyState,
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
