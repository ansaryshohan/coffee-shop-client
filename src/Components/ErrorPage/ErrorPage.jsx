import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error=useRouteError()
  console.log(error)
  return (
    <div>
      <h1>error page</h1>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;