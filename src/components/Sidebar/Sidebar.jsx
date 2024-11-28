import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <h5 className='sidebar-title'>Last Articles</h5>
      <ul>
        <li>
          <img src="/images/airpodimg.webp" alt="" />
          <span>article title</span>
        </li>
        <li>
          <img src="/images/airpodimg.webp" alt="" />
          <span>article title</span>
        </li>
        <li>
          <img src="/images/airpodimg.webp" alt="" />
          <span>article title</span>
        </li>
        <li>
          <img src="/images/airpodimg.webp" alt="" />
          <span>article title</span>
        </li>
      </ul>
    </div>
  )
}
