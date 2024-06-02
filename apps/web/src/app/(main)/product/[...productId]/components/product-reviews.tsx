'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useGetFeedbacksByProductId } from '@/features/feedback/getFeedbacksByProductId';
import { useGetProductRating } from '@/features/feedback/getProductRating';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import PaginBox from './pagin-box';
import ReviewBox from './review';
import Starbucks from './starbucks';
import { AllowedFeedbacksSortBy } from '@/src/__generated__/graphql';

type Props = {
  productId: string;
};

function ProductReviews({ productId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const starParam = searchParams.get('star') || '5';
  const sortByParam = (searchParams.get('sortBy') ||
    'Onsale') as keyof typeof AllowedFeedbacksSortBy;
  const sortBy = AllowedFeedbacksSortBy[sortByParam];
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('perPage') || '10');
  const { data: getProductRatingData } = useGetProductRating(productId);
  const { data: getProductFeedbackData } = useGetFeedbacksByProductId(
    productId,
    {
      page,
      perPage,
    },
    {
      sortBy,
      star: parseInt(starParam),
    },
  );
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  if (!getProductRatingData || !getProductFeedbackData)
    return (
      <div className="border bg-accent p-4 rounded w-full flex items-center justify-center">
        <div className="text-lg font-medium">Empty data</div>
      </div>
    );

  const feedbacks =
    getProductFeedbackData?.paginatedFeedbacksByProductId?.data || [];
  const meta = getProductFeedbackData?.paginatedFeedbacksByProductId?.meta;

  const startIndex = (page - 1) * perPage + 1;
  const endIndex = Math.min(page * perPage, meta?.total);
  const showingStatement =
    feedbacks.length > 0
      ? `Showing ${startIndex}-${endIndex} of ${meta?.total} reviews`
      : `Showing 0 of ${meta?.total} reviews`;
  const averageStars =
    getProductRatingData?.calculateRatingByProductId?.averageRatings || 0;
  const totalFeedbacks =
    getProductRatingData?.calculateRatingByProductId?.totalRatings || 0;
  const stars = getProductRatingData?.calculateRatingByProductId?.ratings;

  return (
    <div className="border bg-accent p-4 rounded">
      <div className="mb-4">
        <span className="text-lg font-bold">Customer Reviews</span>{' '}
        <span className="text-primary/70 text-sm">{`(Filtered by ${starParam} star)`}</span>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold">{averageStars.toFixed(1)} Stars</p>
        <div className="flex space-x-4 text-xs">
          <span>{`(${totalFeedbacks})`}</span>
          <Starbucks
            stars={stars}
            pathname={pathname}
            createQueryString={createQueryString}
          />
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
                <SelectItem value="Onsale">Sort by on sale</SelectItem>
                <SelectItem value="Latest">
                  Sort by date: newest to oldest
                </SelectItem>
                <SelectItem value="Oldest">
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
            <Separator className="my-1" />
          </div>
        ))}
        {feedbacks.length > 0 && <PaginBox meta={meta} />}
      </div>
    </div>
  );
}

export default ProductReviews;
