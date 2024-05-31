import { useGetCategories } from '@/features/category/getCategories';
import React from 'react';
import FilterScrollArea from './filter-scroll-area';

type Props = {};

function CategoryScrollArea({}: Props) {
  const { data } = useGetCategories();
  const categories = data?.categories || [];
  const mappedCategories = categories.map((o) => ({
    id: o.id,
    title: o.displayName || o.name,
  }));
  return <FilterScrollArea title={'Category'} items={mappedCategories} entity='category' />;
}

export default CategoryScrollArea;
