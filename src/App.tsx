import React, { useState, useEffect } from 'react';
import ApplicationsList from './components/ApplicationsList';
import Navigation from './components/Navigation';
import Filters from './components/Filters';
import axios from 'axios';
import './app.css';

export interface IApp {
  data: {
    id: string;
    name: string;
    spend: number;
    BCAP1: string;
    BCAP2: string;
    BCAP3: string;
  }[];
}

const App = () => {
  const [data, setData] = useState<IApp['data']>([]);
  const minSpend = Math.min(...data?.map((item) => item.spend));
  const maxSpend = Math.max(...data?.map((item) => item.spend));
  const [spendFilter, setSpendFilter] = useState(maxSpend | 89991);
  const [hierarchyFilter, setHierarchyFilter] = useState(
    'Business Capability 2',
  );

  useEffect(() => {
    async function fetchData() {
      const response = await axios('http://localhost:8080/data');
      setData(response.data);
    }
    fetchData();
  }, []);

  const filteredApplications = data
    .filter((item) => item.spend <= spendFilter)
    .filter((item) => item.BCAP1 === hierarchyFilter);

  return (
    <div id="app">
      <section className="aside">
        <Navigation data={data} setHierarchyFilter={setHierarchyFilter} />
        <Filters
          data={data}
          setSpendFilter={setSpendFilter}
          spendFilter={spendFilter}
          minSpend={minSpend}
          maxSpend={maxSpend}
        />
      </section>
      <section className="main">
        <ApplicationsList data={filteredApplications} />
      </section>
    </div>
  );
};

export default App;
