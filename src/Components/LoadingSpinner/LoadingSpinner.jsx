
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[70vh]">
      <div
      className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-purple-500 border-t-transparent"
    ></div>
    </div>
  );
};

export default LoadingSpinner;
