import React from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import "./ArticleBox.css";

export default function ArticleBox({id ,imgSrc, desc, title, author}) {
  return (
    <div className="Article">
      <img src={imgSrc} alt="" />
      <h4 className="article-title">{title}</h4>
      <p className="article-desc">
        {desc.slice(0,120)}...
      </p>
      <h5 className="article-author">Author : {author}</h5>
      <Button varient='primary'>
        <Link className="text-white" to={`/articleinfo/${id}`}>Read</Link>
      </Button>
    </div>
  );
}
