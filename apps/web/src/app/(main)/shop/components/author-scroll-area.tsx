'use client';

import React from 'react';
import FilterScrollArea from './filter-scroll-area';
import { useGetAuthors } from '@/features/author/getAuthors';

type Props = {};

function AuthorScrollArea({}: Props) {
  const { data } = useGetAuthors();
  const authors = data?.authors || [];
  const mappedAuthors = authors.map((o) => ({
    id: o.id,
    title: o.displayName || `${o.firstName} ${o.lastName}`,
  }));
  return <FilterScrollArea title={'Author'} items={mappedAuthors} entity='author'/>;
}

export default AuthorScrollArea;
