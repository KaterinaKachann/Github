import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GitService from "../../service/githib";

import { ReposData, Owner } from '../../api/types' ;

import "./Repos.css";

function Repos() {
  const [repos, setRepos] = useState<ReposData[]>([]);
  const [owner, setOwner] = useState<Owner[]>([]);
  const [error, setError] = useState("");

  const data: number = repos.length;
  const dataLimit: number = 5;
  const pageLimit: number = Math.ceil(data / dataLimit);

  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  function changePage(event: React.ChangeEvent<HTMLInputElement>) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  function goToStartPage() {
    setCurrentPage((page) => page = 1);
  }

  function goToEndPage() {
    setCurrentPage((page) => page = pageLimit);
  }

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return repos.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    let url = "https://api.github.com/user/repos?page=1";
    GitService.get(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((json) => {
        localStorage.setItem("userName", json[0].owner.login);
        setOwner(json[0].owner);
        setRepos(json);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div className="wrap">
      <div className="InfoUser">
        <img className="InfoUserImg" src={owner.avatar_url}></img>
        <h3 className="InfoUserName">{owner.login}</h3>
      </div>
      <div className="ListWrap">
        <ul className="CardContainer">
          {getPaginatedData().map((item, key) => (
            <li className="CardWrap" key={key}>
              <div>
                <Link to={`${item.name}?default_branch=${item.default_branch}`}>
                  <h3>{item.name}</h3>
                </Link>
                <p className="InfoLang">{item.language}</p>
              </div>
              <div className="CardInfo">
                <p className="InfoVisabel">{item.visibility}</p>
                <p className="InfoBranch">{item.default_branch}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="dataContainer">
        <button
            onClick={goToStartPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            Start
          </button>
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pageLimit ? "disabled" : ""}`}
          >
            next
          </button>
          <button
            onClick={goToEndPage}
            className={`prev ${currentPage === pageLimit ? "disabled" : ""}`}
          >
            End
          </button>
        </div>
      </div>
    </div>
  );
}
export default Repos;
