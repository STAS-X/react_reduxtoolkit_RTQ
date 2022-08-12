import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LS_FAV_KEY = 'rtk';

interface GitHubState {
	favourites: string[];
}

const initialState: GitHubState = {
	favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const gitHubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addFavourites(state, action: PayloadAction<string>) {
			state.favourites.push(action.payload);
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
		},
		removeFavourites(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(
				(item) => item !== action.payload
			);
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
		},
		// isFavourites(state, action: PayloadAction<string>) {
        //     return state.favourites.findIndex((item) => item !== action.payload)>-1;
        // }
	},
});

export const gitHubActions = gitHubSlice.actions;
export const gitHubReducer = gitHubSlice.reducer;
