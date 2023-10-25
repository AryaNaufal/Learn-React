import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg">Oops! Page not found...</h1>
        <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
