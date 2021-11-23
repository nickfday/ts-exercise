import React from 'react';
import { IApp } from '../App';

interface INavigation {
  data: IApp['data'];
  setHierarchyFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation = ({ data, setHierarchyFilter }: INavigation) => {
  const group = data.reduce((r, a) => {
    // @ts-ignore
    r[a.BCAP1] = [...(r[a.BCAP1] || []), a];
    return r;
  }, []);

  return (
    <div id="navigation">
      <h2>Navigation</h2>
      {Object.keys(group)
        .sort()
        .map((item) => (
          <li key={item} onClick={() => setHierarchyFilter(item)}>
            {item}
          </li>
        ))}
    </div>
  );
};

export default Navigation;
