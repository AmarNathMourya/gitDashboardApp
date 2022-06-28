import React, { useState, useEffect } from 'react';
import './index.css';

const RepoDashboard = () => {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    fetch(
      "https://api.github.com/orgs/godaddy/repos")
      .then((res) => res.json())
      .then((json) => {
        setRepo(json)
      })
      .catch((error) => {
        console.log('Error While Fetching Data', error)
      })
  }, [])

  return (
    <>
      <div className='title'>
        <h1>Welcome Public Repo Dashboard</h1>
      </div>
      <div className="Table">
        <div className="Table-row Table-header">
          <div className="Table-row-item-title">Title</div>
          <div className="Table-row-item-desc">Description</div>
          <div className="Table-row-item-link">Link</div>
          <div className="Table-row-item-lang">Language</div>
          <div className="Table-row-item-comm">Fork</div>
          <div className="Table-row-item-comm">Open Issues</div>
          <div className="Table-row-item-comm">Watchers</div>
        </div>
        {repo && repo.length && repo.map((val) => {
          return (
            <div className="Table-row">
              <div className="Table-row-item-title" data-header="Header1">{val.name}</div>
              <div className="Table-row-item-desc" data-header="Header2">{val.description}</div>
              <div className="Table-row-item-link" data-header="Header3">
                <a href={val.html_url} target="_blank" rel="noreferrer">{val.html_url}</a>
                </div>
              <div className="Table-row-item-lang" data-header="Header4">{val.language}</div>
              <div className="Table-row-item-comm" data-header="Header5">{val.forks}</div>
              <div className="Table-row-item-comm" data-header="Header6">{val.open_issues}</div>
              <div className="Table-row-item-comm" data-header="Header7">{val.watchers}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RepoDashboard