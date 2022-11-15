import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="content-wrapper poll">
      <h1>Uh-oh 404</h1>
      <h3>The internally opinionated are lost...</h3>
      <h4>This page isn't available</h4>
      <p>
        The link may be broken, or the page may have been removed. Check to see
        if the link you're trying to open is correct.
      </p>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

export default Error404;
