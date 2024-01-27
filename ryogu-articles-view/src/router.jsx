import App from './App';
import Discover from './pages/discover/discover';
import MyArticles from './pages/myArticles/myArticles';
import Article from './pages/article/article';
import Account from './pages/account/account';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Discover />,
      },
      {
        path: '/my_articles',
        element: <MyArticles />,
      },
      {
        path: '/article/:link',
        element: <Article />,
      },
      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
]);
