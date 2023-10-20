import { useQuery } from '@tanstack/react-query';
import getMovieById from '../../api/getMovieById';

const Modal = ({ id, closeModal }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
  });

  const tv = data?.data ?? {};

  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-50"
    >
      <div className="relative w-full max-w-3xl h-4/6 dark:text-gray-400 dark:bg-gray-700 ">
        <div className="flex justify-end p-4 border-b rounded-t">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={closeModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {isLoading ? (
          <h3 className="text-xl font-bold">Loading ....</h3>
        ) : isError ? (
          <h3 className="text-xl font-bold">Something went wrong ....</h3>
        ) : (
          <div className="max_width px-4 grid md:grid-cols-2 lg:grid-cols-2 h-screen pt-10 gap-4">
            <div className="h-[25rem] md:h-[35rem]">
              <img
                src={
                  tv.Poster
                    ? tv.Poster
                    : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                }
                alt={tv?.Title}
                className="rounded-xl"
              />
            </div>
            <div className="max-w-[50rem]">
              <h6 className="text-xl font-bold text-center py-2">
                {tv?.Title}
              </h6>

              <div className="px-2 mb-4">
                <h6 className="font-bold text-base mb-1">STORY:</h6>
                <p>{tv?.Plot?.replace(/(<([^>]+)>)/gi, '')}</p>
              </div>
              <div className="px-2 mb-4">
                <h6 className="font-bold text-base mb-1">Director:</h6>
                <p>{tv?.Director}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
