import Modal from '../../components/modal';
import { useQuery } from '@tanstack/react-query';
import getMovieById from '../../api/getMovieById';

const MovieDetail = ({ movieId, closeModal }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movie-detail', movieId],
    queryFn: () => getMovieById(movieId),
  });

  const movie = data?.data;

  return (
    <Modal>
      <Modal.Header closeModal={closeModal} />
      {isLoading ? (
        <h3 className="text-xl font-bold">Loading ....</h3>
      ) : isError ? (
        <h3 className="text-xl font-bold">Something went wrong ....</h3>
      ) : (
        <Modal.Body>
          <div className="h-[25rem] md:h-[35rem]">
            <img
              src={
                movie.Poster
                  ? movie.Poster
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt={movie?.Title}
              className="rounded-xl"
            />
          </div>
          <div className="max-w-[50rem]">
            <h6 className="text-xl font-bold text-center py-2">
              {movie?.Title}
            </h6>

            <div className="px-2 mb-4">
              <h6 className="font-bold text-base mb-1">STORY:</h6>
              <p>{movie?.Plot}</p>
            </div>
            <div className="px-2 mb-4">
              <h6 className="font-bold text-base mb-1">Director:</h6>
              <p>{movie?.Director}</p>
            </div>
          </div>
        </Modal.Body>
      )}
    </Modal>
  );
};

export default MovieDetail;
