import React from "react";
import "./SectionHeader.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SectionHeader({ title, subTitle, linkHref }) {
  return (
    <div className="SectionHeader">
      <div>
        <h3 className="ms-4">{title}</h3>
        <h5 className="ms-4">{subTitle}</h5>
      </div>
      {linkHref ? (
        <Link to={`/${linkHref}`}>
          <Button className="me-4" variant="primary">Load More</Button>
        </Link>
      ) : null}
    </div>
  );
}
