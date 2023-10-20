import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchInput from '../../components/searchInput';
import getMoviesBytitle from '../../api/getMoviesByTitle';
import Modal from '../../components/modal';

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState();
  const [movieId, setMovieId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  let { data, isLoading, isError } = useQuery({
    queryKey: ['movies', movieTitle, pageNumber],
    queryFn: () => getMoviesBytitle(movieTitle, pageNumber),
  });

  const movies = data?.data?.Search ?? [];

  const onSearchMovie = (value) => {
    setMovieTitle(value);
  };

  const closeModal = () => {
    setMovieId(null);
  };

  const numberOfPages = Math.ceil(data?.data?.totalResults / 10);

  return (
    <div className="bg-light_black h-full w-full ">
      <div className=" p-10  flex justify-between items-center">
        <h3 className="text-3xl font-bold text-center"> Movies </h3>
        <SearchInput onSearchMovie={onSearchMovie} />
      </div>
      <div className="p-10">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold">Search Results</h2>
        </div>
        {isLoading ? (
          <h3 className="mt-6 text-xl font-bold">Loading ....</h3>
        ) : isError ? (
          <h3 className="mt-6 text-xl font-bold">Something went wrong ....</h3>
        ) : (
          <div className="grid grid-cols-3 gap-8 py-10">
            {movies.map(({ Title, Year, imdbID: id }) => (
              <button key={id} onClick={() => setMovieId(id)}>
                <div className="flex flex-col justify-center dark:text-gray-400 dark:bg-gray-700 h-24 relative transition duration-200 ease-in transform hover:scale-110">
                  <h1 className="text-center py-2 text-xl">{Title}</h1>
                  <span>{Year}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {movies?.length > 0 && numberOfPages > 1 && (
        <div className="flex justify-end items-center px-10">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber === 0}
          >
            <span className="">Prev</span>
          </button>
          <span className="mx-4">
            {pageNumber} of {numberOfPages}
          </span>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber === numberOfPages}
          >
            <span className="">Next</span>
          </button>
        </div>
      )}

      {movieId && <Modal id={movieId} closeModal={closeModal} />}
    </div>
  );
};

export default MovieSearch;
