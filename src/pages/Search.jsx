import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import {Card} from "../components"
import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [querySearch]=useSearchParams()
  const queryTerm=querySearch.get("q")
  // console.log(queryTerm)
  const {data:movies} = useFetch(apiPath,queryTerm);
 useTitle(queryTerm)

  
  return (
    
    <main className="bg-white dark:bg-gray-900">
    <section className='text-3xl dark:bg-gray-900 dark:text-white'>
      <p className='m-auto px-2'>
        {movies.length===0?`No result for '${queryTerm}'`:`result for '${queryTerm}' `}
      </p>
    </section>
      
      
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} /> // Pass movie data to Card
            ))}
          </div>
        </section>
      </main>
    
  );
};
