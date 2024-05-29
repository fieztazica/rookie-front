import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

type Props = {
  title: string;
  items: string[];
};

function FilterScrollArea({ title, items }: Props) {
  return (
    <ScrollArea className="h-52 w-48 rounded-md border">
      <div className="sticky top-0 py-4 backdrop-blur px-4">
        <h4 className="text-sm font-medium leading-none">{title}</h4>
      </div>
      <div className="px-4">
        {items.map((item) => (
          <div key={item} className="text-sm">
            {item}
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export default FilterScrollArea;
