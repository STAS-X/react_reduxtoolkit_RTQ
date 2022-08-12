import * as React from 'react';
import { useAppSelector } from '../hooks/redux';

export function FavoritesPage() {
	const { favourites } = useAppSelector((state) => state.gitHub);
	if (favourites.length === 0)
		return <p className="text-center">Нет репозиториев</p>;

	return (
		<div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
			<ul className='list-none'>
				{favourites.map((fav) => (
					<li key={fav}>
						<a href={fav} target='_blank' rel='noreferrer'>{fav}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
