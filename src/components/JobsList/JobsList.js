import React, { useState } from "react";
import { JobForm } from "../JobForm/JobForm";
import { Card } from "./Card";
import { useFetch } from "./useFetch";

const LoaderJsx = () => {
  return (
    <div className={"loader-container"}>
      <div className={"loader"}></div>
    </div>
  );
};

const JobsListJsx = (props) => {
  if (props.data.length === 0) {
    return (
      <div className={"not-found-msg"}>
        <h1 className={"heading"}>😩 Nothing Found</h1>
        <button
          className={"not-found-prev-btn"}
          onClick={() => {
            if (props.pageNum === 1) {
              // Cannot go back if user is in first page
              return;
            }
            props.setUrl((currentState) => ({
              ...currentState,
              urlWithPageNum: `${currentState.currentBaseUrl}&page=${
                currentState.pageNum - 1
              }`,
              pageNum: currentState.pageNum - 1,
            }));
          }}
        >
          👈 Previous Page
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Page Number: {props.pageNum}</h2>

        {props.data.map((job) => (
          <Card job={job} key={job.id} />
        ))}

        <div className={"btn-grp"}>
          <button
            className={"prev-btn"}
            onClick={() => {
              if (props.pageNum === 1) {
                // Cannot go back if user is in first page
                return;
              }
              props.setUrl((currentState) => ({
                ...currentState,
                urlWithPageNum: `${currentState.currentBaseUrl}&page=${
                  currentState.pageNum - 1
                }`,
                pageNum: currentState.pageNum - 1,
              }));
            }}
          >
            👈 Previous Page
          </button>
          <button
            className={"next-btn"}
            onClick={() => {
              props.setUrl((currentState) => ({
                ...currentState,
                urlWithPageNum: `${currentState.currentBaseUrl}&page=${
                  currentState.pageNum + 1
                }`,
                pageNum: currentState.pageNum + 1,
              }));
            }}
          >
            Next Page 👉
          </button>
        </div>
      </div>
    );
  }
};

export const JobsList = () => {
  const baseUrl = "https://jobs.github.com/positions.json?";
  const [{ currentBaseUrl, urlWithPageNum, pageNum }, setUrl] = useState({
    currentBaseUrl: "https://jobs.github.com/positions.json?",
    urlWithPageNum: "https://jobs.github.com/positions.json?",
    pageNum: 1,
  });
  const { data, isLoading } = useFetch(urlWithPageNum);

  console.log(currentBaseUrl);
  console.log(urlWithPageNum);
  console.log("\n");

  return (
    <div>
      <JobForm baseUrl={baseUrl} setUrl={setUrl} />

      <hr style={{ width: "90%" }}></hr>

      <div className={"jobs-list"}>
        {isLoading ? (
          <LoaderJsx />
        ) : (
          <div>
            <h1>JobsList</h1>
            <JobsListJsx
              data={data}
              pageNum={pageNum}
              setUrl={setUrl}
              baseUrl={baseUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
};
