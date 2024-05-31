'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import ReviewBox from './review';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useGetFeedbacksByProductId } from '@/features/feedback/getFeedbacksByProductId';
import { useDebounceValue } from 'usehooks-ts';
import PaginBox from './pagin-box';

type Props = {
  productId: string;
};

function ProductReviews({ productId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'recent';
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('perPage') || '10');
  const { data } = useGetFeedbacksByProductId(productId, {
    page,
    perPage,
  });

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

  if (!data) return null;
  const feedbacks = data?.paginatedFeedbacksByProductId?.data || [];
  const meta = data?.paginatedFeedbacksByProductId?.meta;

  const startIndex = (page - 1) * perPage + 1;
  const endIndex = Math.min(page * perPage, meta?.total);
  const showingStatement =
    feedbacks.length > 0
      ? `Showing ${startIndex}-${endIndex} of ${meta?.total} reviews`
      : `Showing 0 of ${meta?.total} reviews`;

  return (
    <div className="border bg-accent p-4 rounded">
      <div className="mb-4">
        <span className="text-lg font-bold">Customer Reviews</span>{' '}
        <span className="text-primary/70 text-sm">{`(Filtered by 5 star)`}</span>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold">4.6 Stars</p>
        <div className="flex space-x-4 text-xs">
          <span>{`(3,134)`}</span>
          <div className="flex space-x-1">
            <span>{`5 star (200)`}</span>
            <Separator orientation="vertical" />
            <span>{`4 star (100)`}</span>
            <Separator orientation="vertical" />
            <span>{`3 star (20)`}</span>
            <Separator orientation="vertical" />
            <span>{`2 star (5)`}</span>
            <Separator orientation="vertical" />
            <span>{`1 star (0)`}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs">{showingStatement}</div>
          <div className="flex space-x-2">
            <Select
              onValueChange={(e) => {
                router.push(pathname + '?' + createQueryString('sortBy', e), {
                  scroll: false,
                });
              }}
            >
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="on_sale">Sort by on sale</SelectItem>
                <SelectItem value="newest">
                  Sort by date: newest to oldest
                </SelectItem>
                <SelectItem value="oldest">
                  Sort by date: oldest to newest
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              defaultValue={perPage.toString()}
              onValueChange={(e) => {
                router.push(pathname + '?' + createQueryString('perPage', e), {
                  scroll: false,
                });
              }}
            >
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">Show 5</SelectItem>
                <SelectItem value="10">Show 10</SelectItem>
                <SelectItem value="20">Show 20</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {feedbacks.map((feedback) => (
          <div key={`review_${feedback.id}`}>
            <ReviewBox
              title={feedback.title}
              stars={feedback.rating}
              feedback={feedback.message}
              timestamp={feedback?.createdAt || ''}
            />
            <Separator />
          </div>
        ))}
        {feedbacks.length > 0 && <PaginBox meta={meta} />}
      </div>
    </div>
  );
}

export default ProductReviews;
