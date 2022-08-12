## Описание проекта

Проект написан на **React**. В проекте задействован простейшая навигация и поиск информации по репозиториям **GitHUB**. Запросы к серверу (https://api.github.com/) реализованы при помощи библиотеки **@reduxjs/toolkit** (RTK). На базе данной библиотеки реализован механизм отложенной загрузки данных (lazy loading) по **REST/API endpoints** (точки входа на сервере). При наборе запроса в поле данных загрузка информации начинается с задержкой (для исключения флуда) от 4-х символов. В случае, если поиск информации результативный во всплывающем **<div>** отображается первые 15 пользователей при клике на которых отображаются ссылки на их репозитории. Ссылки можно также добавить и удалить в раздел Избранное. После повторного получения фокуса страницей происходит автоматическое обновление данных путем повторного запроса.
При написании проекта использовались исходные материалы с канала Владилена Минина. Были применены следующие библиотеки:
  - **@reduxjs/toolkit** (RTK) - создание хранилища данных (store/middleware), запросы (query/endpoints), actions (slice/redusers)
  - TypeScript - типизированный Javascript
  - TileWind - библиотека для стилизации dom компонентов, аналогичная, но более обширная, чем **bootstrap**

## Скрипты для запуска проекта

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
