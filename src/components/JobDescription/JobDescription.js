import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";

export const JobDescription = (props) => {
  return (
    <div>
      <Header />

      <div className={"description"}>
        <h3 className={"go-back"}>
          <Link to={"/"}>👈 Go Back</Link>
        </h3>

        <h3 className={"job-info"}>
          {props.location.state.type} / {props.location.state.location}
        </h3>

        <h1 className={"heading"}>Job Description</h1>

        <div className={"img-container"}>
          <div className={"company-name"}>{props.location.state.company}</div>

          <hr></hr>

          <img
            className={"img"}
            src={props.location.state.company_logo}
            alt={props.location.state.company}
          ></img>

          <hr></hr>

          <div style={{ overflowWrap: "break-word" }}>
            <a
              href={`${props.location.state.company_url}`}
              className={"company-url"}
            >
              {props.location.state.company_url}
            </a>
          </div>
        </div>

        <div className={"how-to-apply"}>
          <h2>How To Apply</h2>

          <div
            className={"link"}
            dangerouslySetInnerHTML={{
              __html: props.location.state.how_to_apply,
            }}
          ></div>
        </div>

        <div
          className={"content"}
          dangerouslySetInnerHTML={{ __html: props.location.state.description }}
        ></div>
      </div>
    </div>
  );
};
