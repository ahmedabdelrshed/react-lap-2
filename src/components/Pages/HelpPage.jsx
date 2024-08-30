import { Link, Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../breadCrumbs/Breadcrumbs";

const HelpPage = () => {
  const location = useLocation();

  return (
    <>
      <Breadcrumbs pathname={location.pathname} />
      <div
        className="d-flex align-items-center justify-content-center flex-column bg-light"
        style={{ height: "80vh" }}
      >
        <h2 className="fw-bold mb-5">Who We Can Help You ?</h2>
        <article className="text-center fw-medium mb-5 px-5">
          All completely free & incredibly easy to use. Delight your viewers
          With real-time news feeds and weather updates. Link to your favorite
          data dashboards to boost productivity. Sync with the most popular
          design services to up your sales. Yodeck apps make your screens
          unforgettable.
        </article>
        <div className="d-flex justify-content-between">
          <Link
            to={`/help/contact`}
            className="btn btn-warning btn-outline-dark mx-2"
          >
            Contact US
          </Link>
          <Link
            to={`/help/fqa`}
            className="btn btn-light btn-outline-dark mx-2"
          >
            FQA
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HelpPage;
