import { getCategories } from '@/features/category/getCategories';
import React from 'react';
import FilterScrollArea from './filter-scroll-area';

type Props = {};

async function CategoryScrollArea({}: Props) {
  const { data } = await getCategories();
  const categories = data?.categories || [];
  const mappedCategories = categories.map(
    (a) => a.displayName || a.name,
  );
  return <FilterScrollArea title={'Category'} items={mappedCategories} />;
}

export default CategoryScrollArea;
