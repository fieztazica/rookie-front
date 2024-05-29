import React from 'react';
import FilterScrollArea from './filter-scroll-area';

type Props = {};

async function RatingScrollArea({}: Props) {
  const items = ['5 star', '4 star', '3 star', '2 star', '1 star'];
  return <FilterScrollArea title={'Rating Review'} items={items} />;
}

export default RatingScrollArea;
