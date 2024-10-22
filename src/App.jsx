import "./App.css";
import { jobs } from "./jobs";
import { useState } from "react";
import IndividualJobs from "./Components/IndividualJobs/IndividualJobs";
import Header from "./Components/Header/Header";

function App() {
  const [allJobs, setAllJobs] = useState(jobs);
  const [filterJobs, setFilterJobs] = useState(jobs);

  const [searchValue, setSearchValue] = useState("");
  const [searchKeys, setSearchKeys] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearchKeys(searchValue.split(" "));

    //Delete Below

    // setFilterJobs(
    //   allJobs.filter((job) =>
    //     [...job.languages, ...job.tools].some(
    //       (language) => language.toLowerCase() == searchValue
    //     )
    //   )
    // );

    setFilterJobs(
      allJobs.filter((job) =>
        [...job.languages, ...job.tools, job.role].some(
          (language) => language.toLowerCase() == searchValue
        )
      )
    );

    //Only delete within the comment

    setSearchKeys(() => {
      return searchValue.split(" ");
    });
  };

  return (
    <>
      <Header
        handleChange={handleChange}
        searchValue={searchValue}
        handleSubmit={handleSubmit}
      ></Header>
      <div className="overall">
        {filterJobs.map((job) => {
          return <IndividualJobs key={job.id} {...job}></IndividualJobs>;
        })}
      </div>
    </>
  );
}

export default App;
