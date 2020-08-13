import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  console.log(props);
  return (
    <div className={"card"}>
      <div className={"job-info"}>
        <div className={"left"}>
          <h3 className={"title"}>
            {/* <Link to={`/job/${props.job.id}`}>{props.job.title}</Link> */}
            <Link
              to={{
                pathname: `/job/${props.job.id}`,
                state: {
                  description: props.job.description,
                  company_logo: props.job.company_logo,
                  company: props.job.company,
                  location: props.job.location,
                  type: props.job.type,
                  company_url: props.job.company_url,
                  how_to_apply: props.job.how_to_apply,
                },
              }}
            >
              {props.job.title}
            </Link>
          </h3>
          <span className={"company-name"}>{props.job.company}</span> 👉
          <span className={"job-type"}>{props.job.type}</span>
        </div>
        <div className={"right"}>
          <div className={"location"}>{props.job.location}</div>
          <div className={"date"}>{props.job.created_at}</div>
        </div>
      </div>
    </div>
  );
};
