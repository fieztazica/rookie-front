import React from 'react';
import FilterScrollArea from './filter-scroll-area';

type Props = {};

function RatingScrollArea({}: Props) {
  const items = Array.from({ length: 5 }, (_, index) => ({
    id: String(5 - index),
    title: `${5 - index} star${5 - index > 1 ? 's' : ''}`,
  }));
  return (
    <FilterScrollArea title={'Rating Review'} items={items} entity="rating" />
  );
}

export default RatingScrollArea;
