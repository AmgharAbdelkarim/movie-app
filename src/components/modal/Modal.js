const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm "></div>
      <div className="relative z-10 h-4/6 w-full max-w-3xl rounded p-6 shadow-lg dark:bg-gray-700 dark:text-gray-400 ">
        {children}
      </div>
    </div>
  );
};

const Header = ({ closeModal }) => (
  <div className="flex justify-end rounded-t border-b py-4">
    <button
      type="button"
      className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={closeModal}
    >
      <svg
        className="h-3 w-3"
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
);

const Body = ({ children }) => {
  return (
    <div className="max_width grid content-center gap-4 px-4 pt-2 md:grid-cols-2 lg:grid-cols-2">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;

export default Modal;
