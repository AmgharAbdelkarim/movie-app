const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-3xl h-4/6 p-6 rounded shadow-lg z-10 dark:text-gray-400 dark:bg-gray-700 ">
        {children}
      </div>
    </div>
  );
};

const Header = ({ closeModal }) => (
  <div className="flex justify-end py-4 border-b rounded-t">
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
);

const Body = ({ children }) => {
  return (
    <div className="max_width px-4 grid md:grid-cols-2 lg:grid-cols-2 pt-2 gap-4">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;

export default Modal;
