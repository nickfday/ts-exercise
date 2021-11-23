import React from 'react';
import { IApp } from '../App';

interface IFilters {
  data: IApp['data'];
  spendFilter: number;
  minSpend: number;
  maxSpend: number;
  setSpendFilter: React.Dispatch<React.SetStateAction<number>>;
}

const Filters = ({
  data,
  spendFilter,
  setSpendFilter,
  minSpend,
  maxSpend,
}: IFilters) => {
  return (
    <div id="filters">
      <h2>Filters</h2>
      <h3>Spending</h3>
      <input
        type="range"
        min={minSpend}
        max={maxSpend}
        className="slider"
        onChange={(event) => setSpendFilter(parseInt(event.target.value))}
        value={spendFilter}
      />

      <div className="spend-labels">
        <div>${minSpend}</div>
        <div>${maxSpend}</div>
      </div>
    </div>
  );
};

export default Filters;
