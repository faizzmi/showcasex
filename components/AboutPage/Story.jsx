import { awardsLists, educationsLists, experiencesLists, story } from '@/models/about';
import React from 'react';
import moment from 'moment';
import CardList from './CardList';

const Story = () => {
  const formatDate = (dateString) => {
    if (dateString === "PRESENT" || dateString === "NOW") {
      return "PRESENT";
    }
    const parsedDate = moment(dateString, moment.ISO_8601, true);
    return parsedDate.isValid() ? parsedDate.format('MMM, YYYY').toUpperCase() : "INVALID DATE";
  };

  const calculateDuration = (startDate, endDate) => {
    const adjustedEndDate = 
      endDate === "PRESENT" || endDate === "NOW"
        ? moment()
        : moment(endDate, moment.ISO_8601, true);

    const duration = adjustedEndDate.diff(moment(startDate, moment.ISO_8601, true), 'months') / 12;

    return `${duration.toFixed(1)} ${duration < 1 ? "YEAR" : "YEARS"}`;
  };

  const renderExperience = (item) => (
    <>
      <p>{item.location}</p>
      <p>
        {formatDate(item.startDate)} TO {' '}
        {item.endDate === "NOW" ? "PRESENT" : formatDate(item.endDate)}
        {'  '}({calculateDuration(item.startDate, item.endDate)})
      </p>
      <p>{item.position}</p>
    </>
  );

  const renderAward = (item) => <p>{item.title}</p>;

  const renderEducation = (item) => (
    <>
      <p>{item.location}</p>
      <p>
        {formatDate(item.startDate)} TO {' '}
        {item.endDate === "NOW" ? "PRESENT" : formatDate(item.endDate)}
        {'  '}({calculateDuration(item.startDate, item.endDate)})
      </p>
      <p>{item.course}</p>
    </>
  );

  return (
    <div className="section mt-20 flex flex-col md:flex-row gap-6 px-4 md:px-10 border-b-2 border-black">
      <div className="m-5 flex flex-col md:flex-row w-full gap-6">
        <div className="md:w-2/3 w-full p-6">
          <p className="text-gray-800 text-[30px] leading-relaxed whitespace-pre-line">
            {story}
          </p>
        </div>

        <div className="md:w-1/3 w-full p-6 flex justify-center">
          <div>
              <CardList title="experiences" list={experiencesLists} renderItem={renderExperience} />
              <CardList title="awards & recognition" list={awardsLists} renderItem={renderAward} />
              <CardList title="formal educations" list={educationsLists} renderItem={renderEducation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
