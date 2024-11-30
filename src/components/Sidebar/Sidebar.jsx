import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="Sidebar">
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
