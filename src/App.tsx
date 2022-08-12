import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';

import './index.css';
import { Navigation } from './components/Navigation';

function App() {
  return (
		<>
      <Navigation />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/favourites" element={<FavoritesPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
