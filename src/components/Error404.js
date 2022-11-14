import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="content-wrapper poll">
      <h1>Uh-oh 404</h1>
      <p>The internally opinionated are lost...</p>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

export default Error404;
