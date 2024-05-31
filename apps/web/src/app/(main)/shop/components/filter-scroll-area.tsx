'use client';

import React, { useCallback } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  title: string;
  items: { id: string; title: string }[];
  entity: 'author' | 'category' | 'rating';
};

function FilterScrollArea({ title, items, entity }: Props) {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-52 w-48 rounded-md border">
      <div className="sticky top-0 py-4 backdrop-blur px-4">
        <h4 className="text-sm font-medium leading-none">{title}</h4>
      </div>
      <div className="px-4">
        {items.map((item) => (
          <div
            key={`${title}-${item.id}`}
            className="text-sm cursor-pointer hover:underline"
          >
            <Link
              href={
                pathname +
                '?' +
                new URLSearchParams({
                  [entity]: item.id,
                }).toString()
              }
            >
              {item.title}
            </Link>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export default FilterScrollArea;
