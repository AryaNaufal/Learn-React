import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="App min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          welcome, please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

/* Conditional rendering */
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-sm text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-sm text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;