
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
export const MovieList = ({apiPath,title}) => {
  const {data:movies} = useFetch(apiPath);
useTitle(title)
  
  return (
    
      
      <main className="bg-white dark:bg-gray-900">
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
