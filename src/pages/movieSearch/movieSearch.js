import { useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchInput from '../../components/searchInput';
import MovieDetail from './movieDetail';
import getMoviesByTitle from '../../api/getMoviesByTitle';

const MovieSearch = () => {
  const [isPending, startTransition] = useTransition();

  const [movieTitle, setMovieTitle] = useState();
  const [movieId, setMovieId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movies', movieTitle, pageNumber],
    queryFn: () => getMoviesByTitle(movieTitle, pageNumber),
  });

  const movies = data?.data?.Search ?? [];

  const onSearchMovie = (value) => {
    setPageNumber(1);
    setMovieTitle(value);
  };

  const closeModal = () => {
    setMovieId(null);
  };

  const showMovieDetail = (id) => {
    startTransition(() => {
      setMovieId(id);
    });
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const numberOfPages = Math.ceil(data?.data?.totalResults / 10);

  const isPagination = movies?.length > 0 && numberOfPages > 1;
  console.log(isPending);

  return (
    <div className="h-full w-full bg-light_black ">
      <div className=" flex  items-center justify-between p-10">
        <h3 className="text-center text-3xl font-bold"> Movies </h3>
        <SearchInput onSearchMovie={onSearchMovie} />
      </div>
      <div className="p-10">
        <div className="flex items-center justify-between ">
          <h2 className="text-xl font-bold">Search Results</h2>
        </div>
        {isLoading ? (
          <h3 className="mt-6 text-xl font-bold">Loading ....</h3>
        ) : isError ? (
          <h3 className="mt-6 text-xl font-bold">Something went wrong ....</h3>
        ) : (
          <div className="grid grid-cols-3 gap-8 py-10">
            {movies.map(({ Title, Year, imdbID: id }) => (
              <button key={id} onClick={() => showMovieDetail(id)}>
                <div className="flex h-24 transform flex-col justify-center gap-2 transition duration-200 ease-in hover:scale-110 dark:bg-gray-700 dark:text-gray-400">
                  <h1 className="text-center text-xl">{Title}</h1>
                  <span>{Year}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {isPagination && (
        <div className="flex items-center justify-end px-10">
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={prevPage}
            disabled={pageNumber === 1}
          >
            <span className="">Prev</span>
          </button>
          <span className="mx-4">
            {pageNumber} of {numberOfPages}
          </span>
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={nextPage}
            disabled={pageNumber === numberOfPages}
          >
            <span className="">Next</span>
          </button>
        </div>
      )}

      {movieId && <MovieDetail movieId={movieId} closeModal={closeModal} />}
    </div>
  );
};

export default MovieSearch;
