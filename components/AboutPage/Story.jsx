'use client'
import { awardsLists, educationsLists, experiencesLists, story } from '@/models/about';
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

    const duration = adjustedEndDate.diff(moment(startDate, moment.ISO_8601, true), 'months') / 12;

    return `${duration.toFixed(1)} ${duration < 1 ? 'YEAR' : 'YEARS'}`;
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
    <div className="section max-h-auto mt-20 car
    d-container w-full">
      <div className="flex flex-col md:flex-row px-6 gap-6">
        <div className="md:w-2/3">
          <motion.p
            initial={{ y: -20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-800 text-2xl font-semibold leading-relaxed whitespace-pre-line">
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
