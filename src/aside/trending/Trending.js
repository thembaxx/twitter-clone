import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Trend from './Trend';

import { trendingData } from '../helpers';

function Trending() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setData(trendingData);
  }, []);

  useEffect(() => {
    setItems(
      data.map((trend) => (
        <Trend
          source={trend.source}
          title={trend.title}
          tweets={trend.tweets}
        />
      ))
    );
  }, [data]);

  return <Card title="Trends for you" showSettings={true} items={items} />;
}

export default Trending;
