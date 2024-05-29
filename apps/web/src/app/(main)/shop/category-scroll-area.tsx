import React from 'react';
import { getClient } from '@/lib/apollo/apollo-client';
import { GET_ALL_CATEGORIES } from '../../../features/category/category.queries';
import FilterScrollArea from './filter-scroll-area';

type Props = {};

async function getCategories() {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_ALL_CATEGORIES,
  });
}

async function CategoryScrollArea({}: Props) {
  const { data } = await getCategories();
  const categories = data?.categories || [];
  const mappedCategories = categories.map(
    (a) => a.displayName || a.name,
  );
  return <FilterScrollArea title={'Category'} items={mappedCategories} />;
}

export default CategoryScrollArea;
