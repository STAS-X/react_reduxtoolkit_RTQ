import * as React from 'react';
import { RepoCard } from '../components/RepoCard';
import { useDebounce } from '../hooks/debounce';
import { IRepo, IUser } from '../models/models';
import {
	useLazyGetUserRepositoryQuery,
	useSearchUsersQuery,
} from '../store/gitHub/gitHub.api';
    
export function HomePage() {

    const [search, setSearch] = React.useState('');
    const [username, setUserName] = React.useState('');
    const [dropDown, setDropDown] = React.useState(false)
    const debounced= useDebounce(search);
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length<4,
        refetchOnFocus: true
    });

    const [ fetchRepos,
			{ isLoading: isUserLoading, isError: isUserErrror, data: userData}
     ] = useLazyGetUserRepositoryQuery();
    React.useEffect(() => {
			setDropDown(debounced.length > 3 && data?.length! > 0);
		}, [debounced, data]);

    const handlerClick = (username: string) => {
        fetchRepos(username);
        setDropDown(false);
    }

    return (
			<div className=" flex justify-center pt-10 mx-auto h-screen w-screen">
				{isError && (
					<p className="text-center text-red-600">
						При запросе произошла ошибка...
					</p>
				)}
				<div className=" relative w-[560px]">
					<input
						type="text"
						className="border py-2 px-4 w-full h-[42px] mb-2"
						placeholder="Поиск в GitHub пользователей..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					></input>
					{dropDown && (
						<ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
							{isLoading && (
								<p className="text-center">Идет загрузка данных...</p>
							)}
							{data?.map((user: IUser) => (
								<li
									key={user.id}
									className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
									onClick={() => handlerClick(user.login)}
								>
									{user.login}
								</li>
							))}
						</ul>
					)}
					<div className="container">
						{isUserLoading && (
							<p className="text-center">
								Идет загрузка репозитория пользователя...
							</p>
						)}
						{ userData?.map( (repo: IRepo) => (
                            <RepoCard key={repo.id} repo={repo}/>
                        ))}
					</div>
				</div>
			</div>
		);
}