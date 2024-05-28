import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import ReviewBox from './review';

type Props = {};

function ProductReviews({}: Props) {
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
          <div className="text-xs">Showing 1-12 of 3134 reviews</div>
          <div className="flex space-x-2">
            <Select>
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
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">Show 10</SelectItem>
                <SelectItem value="20">Show 20</SelectItem>
                <SelectItem value="50">Show 50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {new Array(10).fill(0).map((_, i) => (
          <>
            <div key={`review_${i}`}>
              <ReviewBox
                title={'Review title'}
                stars={5}
                feedback={`lorem ipsum lorem ipsum lorem ipsum`}
                timestamp={`${i}`}
              />
            </div>
            <Separator />
          </>
        ))}
      </div>
    </div>
  );
}

export default ProductReviews;
