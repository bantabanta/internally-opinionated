import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="content-wrapper">
      <div className="center">
        <h1>Uh-oh 404</h1>
        <h2 className="text-standout">The internally opinionated are lost!</h2>
        <p>Sorry, this page isn't available...</p>
        <p>The link may be broken, or the page may have been removed.</p>
        <Link to="/">
          <button>Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
