import { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className='App'>
      <header className='bg-teal-500'>
        <img src='./images/bg-header-desktop.svg' alt='bg-img' />
      </header>
      <div>
        {filters.length > 0 && filters.map((filter) => <span>{filter}</span>)}
      </div>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoardComponent
            job={job}
            key={job.id}
            handleTagClick={handleTagClick}
          />
        ))
      )}
      {/* {filterByTags.map((job) => (
        <JobBoardComponent item={job} key={job.id} />
      ))} */}
    </div>
  );
}

export default App;
