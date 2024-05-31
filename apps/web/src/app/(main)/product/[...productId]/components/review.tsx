import { Separator } from '@/components/ui/separator';
import React from 'react';
import { formatDistance } from 'date-fns';

type Props = {
  title: string;
  stars: number;
  feedback: string;
  timestamp: string;
};

function ReviewBox({ title, stars, feedback, timestamp }: Props) {
  const createdAt = formatDistance(new Date(timestamp), new Date(), {
    addSuffix: true,
  });
  return (
    <div>
      <div className="flex space-x-1 items-center">
        <div className="text-lg font-semibold">{title}</div>
        <Separator orientation="vertical" className="h-4" />
        <div className="text-sm">{`${stars} ${stars > 1 ? 'stars' : 'star'}`}</div>
      </div>
      <p className="mb-1">{feedback}</p>
      <p className="text-xs">{createdAt}</p>
    </div>
  );
}

export default ReviewBox;
