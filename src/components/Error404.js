import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="content-wrapper">
      <div className="center">
        <h1>Uh-oh 404</h1>
        <h2>The internally opinionated are lost!</h2>
        <p>This page isn't available..</p>
        <p>
          The link may be broken, or the page may have been removed. Check to
          see if the link you're trying to open is correct.
        </p>
        <Link to="/">
          <button>Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
