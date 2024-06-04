import React from 'react';
import Link from 'next/link';
import { GetProductRatingQuery } from '@/src/__generated__/graphql';
import { Separator } from '@/components/ui/separator';

type Props = {
  pathname: string;
  createQueryString: (key: string, value: string) => string;
  stars: GetProductRatingQuery['calculateProductRatingByProductId']['ratings'];
};

function Starbucks({ stars, pathname, createQueryString }: Props) {
  return (
    <div className="flex space-x-1">
      <Link
        href={pathname + '?' + createQueryString('star', '5')}
      >
        <span className="hover:underline">{`5 star (${stars.five})`}</span>
      </Link>
      <Separator orientation="vertical" />
      <Link
        href={pathname + '?' + createQueryString('star', '4')}
      >
        <span className="hover:underline">{`4 star (${stars.four})`}</span>
      </Link>
      <Separator orientation="vertical" />
      <Link
        href={
          pathname + '?' + createQueryString('star', '3')
        }
      >
        <span className="hover:underline">{`3 star (${stars.three})`}</span>
      </Link>
      <Separator orientation="vertical" />
      <Link
        href={pathname + '?' + createQueryString('star', '2')}
      >
        <span className="hover:underline">{`2 star (${stars.two})`}</span>
      </Link>
      <Separator orientation="vertical" />
      <Link
        href={pathname + '?' + createQueryString('star', '1')}
      >
        <span className="hover:underline">{`1 star (${stars.one})`}</span>
      </Link>
    </div>
  );
}

export default Starbucks;
