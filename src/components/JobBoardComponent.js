import React from 'react';

function JobBoardComponent({
  job: {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) {
  const tags = [role, level];

  if (tools) {
    tags.push(...tools);
  }

  if (languages) {
    tags.push(...languages);
  }

  return (
    <>
      <div
        className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded md:flex-row ${
          featured && 'border-solid border-teal-500 border-l-4'
        }`}
      >
        <div>
          <img
            className='-mt-16 mb-4 w-20 h-20 md:w-24 md:h-24 md:mt-0 md:mb-0'
            src={logo}
            alt={company}
          />
        </div>
        <div className='flex flex-col justify-between ml-2 border-b-2 md:border-b-0 md:ml-4'>
          <h3 className='font-medium text-teal-500'>
            {company}
            {isNew && (
              <span className='font-normal text-xs ml-3 text-teal-100 bg-teal-500 rounded-full py-1 px-2'>
                NEW!
              </span>
            )}
            {featured && (
              <span className='font-normal text-xs ml-2 text-teal-100 bg-gray-700 rounded-full py-1 px-2'>
                FEATURED
              </span>
            )}
          </h3>
          <h2 className='mt-3 font-bold text-xl md:mt-0'>{position}</h2>
          <p className='mt-3 text-gray-500 text-md font-medium mb-3 md:mt-0 md:mb-0'>
            {postedAt} · {contract} · {location}
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-start md:justify-end md:ml-auto'>
          {tags
            ? tags.map((tag) => (
                <span
                  onClick={() => handleTagClick(tag)}
                  className='mt-3 text-teal-500 bg-teal-100 rounded mx-2 px-2 cursor-pointer md:mt-0'
                >
                  {tag}
                </span>
              ))
            : ''}
        </div>
      </div>
    </>
  );
}

export default JobBoardComponent;
