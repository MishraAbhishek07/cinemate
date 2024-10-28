import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MovieDetail, MovieList, Search, PageNotFound } from '../pages';
import App from '../App'; // Import App component

export const Allroute = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />, // Set App as the main route element
      children: [
        {
          path: '',
          element: <MovieList apiPath="movie/now_playing" title="Home" />,
        },
        {
          path: 'movie/:id',
          element: <MovieDetail />,
          
        },
        {
          path: 'movies/popular',
          element: <MovieList  apiPath="movie/popular" title="Popular"/>,
          
        },
        {
          path: 'movies/top',
          element: <MovieList   apiPath="movie/top_rated" title="Top_Rated" />,
        
        },
        {
          path: 'movies/upcoming',
          element: <MovieList  apiPath="movie/upcoming" title="Upcoming"/>,
        
        },
        {
          path: 'search',
          element: <Search apiPath="search/movie"/>,
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
