'use client'
import { awardsLists, educationsLists, experiencesLists, story } from '../../models/about';
import React from 'react';
import moment from 'moment';
import CardList from './CardList';
import { motion } from 'motion/react';

const Story = () => {
  const formatDate = (dateString) => {
    if (dateString === 'PRESENT' || dateString === 'NOW') {
      return 'PRESENT';
    }
    const parsedDate = moment(dateString, moment.ISO_8601, true);
    return parsedDate.isValid() ? parsedDate.format('MMM, YYYY').toUpperCase() : 'INVALID DATE';
  };

  const calculateDuration = (startDate, endDate) => {
    const adjustedEndDate =
      endDate === 'PRESENT' || endDate === 'NOW'
        ? moment()
        : moment(endDate, moment.ISO_8601, true);

    const startMoment = moment(startDate, moment.ISO_8601, true);
    const totalMonths = adjustedEndDate.diff(startMoment, 'months') + 1;
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    if (years === 1 && remainingMonths === 0) {
      return '1 YEAR';
    } else if (years >= 1) {
      return `${years} YEARS`;
    } else {
      return `${totalMonths} MONTH${totalMonths > 1 ? 'S' : ''}`;
    }
  };

  const renderExperience = (item) => (
    <div className="text-body">
      <p>{item.location}</p>
      <p>
        {formatDate(item.startDate)} TO {item.endDate === 'NOW' ? 'PRESENT' : formatDate(item.endDate)} (
        {calculateDuration(item.startDate, item.endDate)})
      </p>
      <p>{item.position}</p>
    </div>
  );

  const renderAward = (item) => <p className="text-body">{item.title}</p>;

  const renderEducation = (item) => (
    <div className="text-body">
      <p>{item.location}</p>
      <p>
        {formatDate(item.startDate)} TO {item.endDate === 'NOW' ? 'PRESENT' : formatDate(item.endDate)} (
        {calculateDuration(item.startDate, item.endDate)})
      </p>
      <p>{item.course}</p>
    </div>
  );

  return (
    <div className="section max-h-auto card-container w-full bg-light">
      <div className="flex flex-col md:flex-row my-20 px-6 gap-6">
        <div className="md:w-2/3">
          <motion.p
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-800 text-2xl font-semibold leading-relaxed text-justify whitespace-pre-line">
            {story}
          </motion.p>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <CardList title="experiences" list={experiencesLists} renderItem={renderExperience} />
            <CardList title="awards & recognition" list={awardsLists} renderItem={renderAward} />
            <CardList title="formal educations" list={educationsLists} renderItem={renderEducation} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Story;
