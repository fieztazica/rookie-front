import React from 'react';
import { getAbout } from './query';
import parse from 'html-react-parser';

export const revalidate = 3600;

type Props = {};

async function AboutPage({}: Props) {
  const { data, error } = await getAbout();

  if (error) return <div>There is an error occurred</div>;
  if (!data) return <div>Loading...</div>;

  const content = data.config.value;

  return <div>{parse(content)}</div>;
}

export default AboutPage;
