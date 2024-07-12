const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-600">404</h1>
        <p className="text-2xl text-gray-800 mt-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-lime-600 text-white font-semibold rounded-md"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
