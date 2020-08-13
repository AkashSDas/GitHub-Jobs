import React from "react";
import { useForm } from "./useForm";

export const JobForm = (props) => {
  const [formValues, handleFormChange] = useForm({
    jobDescription: "",
    location: "",
    fullTimeOnly: false,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let fullTimeStatus = formValues.fullTimeOnly ? "on" : "off";
    props.setUrl(() => ({
      currentBaseUrl: `${props.baseUrl}&description=${formValues.jobDescription}&location=${formValues.location}&full_time=${fullTimeStatus}`,
      urlWithPageNum: `${props.baseUrl}&description=${formValues.jobDescription}&location=${formValues.location}&full_time=${fullTimeStatus}`,
      pageNum: 1,
    }));
  };

  return (
    <section className={"job-form"}>
      <div className={"site-info"}>
        <h1>Find The Jobs</h1>
        <h3>That Fits Your Life</h3>
        <div>
          <p>
            Millions of people are searching for jobs (Full Time & Remote) in
            hundreds of different locations depending on the their technical
            skills.
          </p>
          <p>So what are you waiting for, go ahead & give this a try.</p>
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className={"form"}>
        <label>Job Description</label>
        <input
          type="text"
          name="jobDescription"
          value={formValues.jobDescription}
          onChange={handleFormChange}
          placeholder="Filter by title, benefits, companies, experties"
        ></input>

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formValues.location}
          onChange={handleFormChange}
          placeholder="Filter by city, state, zip code or country"
        ></input>

        <label className={"checkbox-label"}>
          <input
            type="checkbox"
            name="fullTimeOnly"
            value={formValues.fullTimeOnly}
            onChange={handleFormChange}
          ></input>
          <span>Full Time Only</span>
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
