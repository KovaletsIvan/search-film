import { FILMS_DATA } from "./films.actions";

const initialState = { films: [] };

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILMS_DATA:
      return {
        ...state,
        films: action.payload.films,
      };
    default:
      return state;
  }
};
