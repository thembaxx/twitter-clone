import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Follow from './Follow';

import { fakeUsers } from '../helpers';

function FollowList() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setData(fakeUsers);
  }, []);

  useEffect(() => {
    setItems(
      data.map((item) => (
        <Follow
          imgUrl={item.imgUrl}
          username={item.username}
          name={item.name}
        />
      ))
    );
  }, [data]);

  return <Card title="Who to follow" showSettings={false} items={items} />;
}

export default FollowList;
