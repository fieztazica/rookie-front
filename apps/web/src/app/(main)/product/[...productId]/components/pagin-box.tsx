'use client';

import { GetFeedbackByProductIdQuery } from '@/src/__generated__/graphql';
import React, { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  meta: GetFeedbackByProductIdQuery['paginatedFeedbacksByProductId']['meta'];
};

function PaginBox({ meta }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex space-x-2 items-center">
      <Button variant="outline" asChild>
        <Link
          href={
            pathname +
            '?' +
            createQueryString(
              'page',
              (meta.prev ?? meta.currentPage).toString(),
            )
          }
        >
          Previous
        </Link>
      </Button>
      {meta.prev && (
        <Button variant="outline" className="aspect-square" asChild>
          <Link
            href={
              pathname + '?' + createQueryString('page', meta.prev.toString())
            }
          >
            {meta.prev}
          </Link>
        </Button>
      )}
      <Button className="aspect-square" asChild>
        <Link
          href={
            pathname +
            '?' +
            createQueryString('page', meta.currentPage.toString())
          }
        >
          {meta.currentPage}
        </Link>
      </Button>
      {meta.next && (
        <Button variant="outline" className="aspect-square" asChild>
          <Link
            href={
              pathname + '?' + createQueryString('page', meta.next.toString())
            }
          >
            {meta.next}
          </Link>
        </Button>
      )}
      <Button variant="outline" asChild>
        <Link
          href={
            pathname +
            '?' +
            createQueryString(
              'page',
              (meta.next ?? meta.currentPage).toString(),
            )
          }
        >
          Next
        </Link>
      </Button>
    </div>
  );
}

export default PaginBox;
