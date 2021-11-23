import React from 'react';
import { IApp } from '../App';

const ApplicationsList = ({ data }: IApp) => {
  if (data.length === 0) {
    return <div>No Applications Found. Please adjust Filters.</div>;
  }

  return (
    <div className="applications-list">
      {data.map(({ name, spend, id }) => (
        <div className="application-item" key={id}>
          <h2>{name}</h2>
          <p>Total Spend: ${spend}</p>
        </div>
      ))}
    </div>
  );
};

export default ApplicationsList;
