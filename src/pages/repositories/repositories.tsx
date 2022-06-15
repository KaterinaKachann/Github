import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GitService from "../../service/githib";

import { ReposData, Owner } from "../../api/types";

import "./repositories.scss";
import Loading from "../../component/loading/loading";

function Repos() {
  const [repos, setRepos] = useState<ReposData[]>([]);
  const [owner, setOwner] = useState<Owner[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchRequest = e.target.value;
    setSearch(searchRequest);
  };

  const data: number = repos.length;
  const dataLimit: number = 5;
  const pageLimit: number = Math.ceil(data / dataLimit);

  const [currentPage, setCurrentPage] = useState(1);

  function changePage(event: React.ChangeEvent<HTMLButtonElement>) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  function goToStartPage() {
    setCurrentPage((page) => (page = 1));
  }

  function goToEndPage() {
    setCurrentPage((page) => (page = pageLimit));
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
    setIsLoading(true);
    let url = "https://api.github.com/user/repos?visibility=internal";
    GitService.get(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((json) => {
        localStorage.setItem("userName", json[0].owner.login);
        setOwner(json[0].owner);
        setRepos(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div className="wrapper-repos">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="InfoUser">
            <img className="InfoUserImg" src={owner.avatar_url}></img>
            <h3 className="InfoUserName">{owner.login}</h3>
          </div>

          <div className="ListWrap">
            <div className="search-wrapper">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
                onChange={inputHandler}
              />
            </div>
            <ul className="CardContainer">
              {getPaginatedData()
                .filter((value) => {
                  if (search === "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().startsWith(search.toLowerCase())
                  ){
                    return value;
                  }else if( value.name.toLowerCase()!.startsWith(search.toLowerCase())){
                    return <><li className="CardWrap">Not Found</li></>
                  }
                })
                .map((item, key) => (
                  <li className="CardWrap" key={key}>
                    <div>
                      <Link
                        to={`${item.name}?default_branch=${item.default_branch}`}
                      >
                        <h3 className="InfoRepo">{item.name}</h3>
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
                &#171; Start
              </button>
              <button
                onClick={goToPreviousPage}
                className={`prev ${currentPage === 1 ? "disabled" : ""}`}
              >
                &#8249; Previous
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
                className={`next ${
                  currentPage === pageLimit ? "disabled" : ""
                }`}
              >
                Next &#8250;
              </button>
              <button
                onClick={goToEndPage}
                className={`next ${
                  currentPage === pageLimit ? "disabled" : ""
                }`}
              >
                End &#187;
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Repos;
