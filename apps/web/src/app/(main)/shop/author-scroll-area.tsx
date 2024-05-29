import React from 'react';
import { getClient } from '@/lib/apollo/apollo-client';
import { GET_ALL_AUTHORS } from '../../../features/author/author.queries';
import FilterScrollArea from './filter-scroll-area';

type Props = {};

async function getAuthors() {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_ALL_AUTHORS,
  });
}

async function AuthorScrollArea({}: Props) {
  const { data } = await getAuthors();
  const authors = data?.authors || [];
  const mappedAuthors = authors.map(
    (a) => a.displayName || `${a.firstName} ${a.lastName}`,
  );
  return <FilterScrollArea title={'Author'} items={mappedAuthors} />;
}

export default AuthorScrollArea;
