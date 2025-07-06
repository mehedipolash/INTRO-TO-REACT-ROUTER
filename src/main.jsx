import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(
  res => res.json()
);

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'Mobiles',
        Component: Mobiles,
      },
      {
        path: 'laptops',
        Component: Laptops,
      },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
      {
        path: 'users2',
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => {
          console.log('params inside the loader: ', params.userId);
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
          );
        },
        Component: UserDetails,
      },

      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts,
      },
      {
        path: 'posts/:x',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.x}`),
        Component: PostDetails,
      },
    ],
  },

  {
    path: 'about',
    element: <div>About me here</div>,
  },
  {
    path: 'blogs',
    element: <div>All blogs are here</div>,
  },
  {
    path: 'app',
    element: <App></App>,
  },
  {
    path: 'app2',
    Component: App,
  },
  // {
  //   path: 'app3',
  //   element: <Laptops></Laptops>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
