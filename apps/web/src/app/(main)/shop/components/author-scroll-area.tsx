import React from 'react';
import FilterScrollArea from './filter-scroll-area';
import { getAuthors } from '@/features/author/getAuthors';

type Props = {};

async function AuthorScrollArea({}: Props) {
  const { data } = await getAuthors();
  const authors = data?.authors || [];
  const mappedAuthors = authors.map(
    (a) => a.displayName || `${a.firstName} ${a.lastName}`,
  );
  return <FilterScrollArea title={'Author'} items={mappedAuthors} />;
}

export default AuthorScrollArea;
