import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gitHubApi } from "./gitHub/gitHub.api";
import { gitHubReducer } from "./gitHub/gitHub.slice";

export const store = configureStore({
	reducer: {
		[gitHubApi.reducerPath]: gitHubApi.reducer,
		gitHub: gitHubReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(gitHubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>