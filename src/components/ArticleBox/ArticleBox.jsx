import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import "./ArticleBox.css";

export default function ArticleBox() {
  return (
    <div className="Article">
      <img src="/images/airpodimg.webp" alt="" />
      <h4 className="article-title">title</h4>
      <p className="article-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo quasi,
        facilis, exercitationem dolores velit quos tempore, suscipit nam
        aspernatur impedit temporibus quam! Eveniet incidunt corporis autem
        natus similique aperiam!
      </p>
      <h5 className="article-author">Author : Tdn</h5>
      <Button varient='primary'>
        <Link className="text-white" to={`/blog`}>Read</Link>
      </Button>
    </div>
  );
}
