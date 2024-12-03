import React from "react";
import "./Sidebar.css";
import { useQuery } from "react-query";
import api from "../../Axios/Config";

export default function Sidebar() {
  const { data } = useQuery(["Articles"], () => {
    return api.get("/articles").then((res) => {
      return res.data;
    });
  });

  return (
    <div className="Sidebar">
      <div className="sidebar-item">
        <h5 className="sidebar-title ps-4">Last Articles</h5>
        <ul>
          {data?.map((article) => {
            return (
              <>
                <li>
                  <img src={article.imgSrc} alt="" />
                  <span>{article.title}</span>
                </li>
                <div className="divider"></div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-item">
        <h5 className="sidebar-title ps-4">Last Articles</h5>
        <ul>
          <li>
            <img src="/images/airpodimg.webp" alt="" />
            <span>article title</span>
          </li>
          <div className="divider"></div>
          <li>
            <img src="/images/airpodimg.webp" alt="" />
            <span>article title</span>
          </li>
          <div className="divider"></div>
          <li>
            <img src="/images/airpodimg.webp" alt="" />
            <span>article title</span>
          </li>
          <div className="divider"></div>
          <li>
            <img src="/images/airpodimg.webp" alt="" />
            <span>article title</span>
          </li>
          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
}
