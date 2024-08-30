/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Bread.css";
export default function Breadcrumbs({ pathname }) {
  let currentLink = "";

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
