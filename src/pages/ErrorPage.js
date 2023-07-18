import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>ERROR</h1>;
      <p>
        Click <Link to="/">Here</Link> to return to the home page
      </p>
    </>
  );
};

export default ErrorPage;
