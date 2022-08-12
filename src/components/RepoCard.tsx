import * as React from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

export function RepoCard({ repo }: { repo: IRepo }) {
	const { addFavourites, removeFavourites } = useActions();
    const { favourites } = useAppSelector((state) => state.gitHub);

    const [isFavourite, setIsFavourite] = React.useState( favourites.includes(repo.html_url)) ;

	const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		addFavourites(repo.html_url);
        setIsFavourite(true);
	};

	const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		removeFavourites(repo.html_url);
        setIsFavourite(false);
	};

	return (
		<div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
			<h2 className="text-lg font-bold">{repo.full_name}</h2>
			<p className="text-sm">
				Forks: <span className="font-bold mr-2">{repo.forks}</span>
				Watchers: <span className="font-bold">{repo.watchers}</span>
			</p>
			<p className="text-sm font-thin">{repo?.description}</p>
			{!isFavourite && <button
				className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
				onClick={addToFavourite}
			>
				В избранное
			</button>}
			{isFavourite && <button
				className="py-2 px-4 ml-2 bg-red-400 rounded hover:shadow-md transition-all"
				onClick={removeFromFavourite}
			>
				Удалить
			</button>}
		</div>
	);
}
