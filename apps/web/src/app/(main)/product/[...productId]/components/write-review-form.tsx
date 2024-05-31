'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ReviewSchema } from '../schema';
import { feedback } from '../actions';

type Props = {
  productId: string;
};

function WriteReviewForm({ productId }: Props) {
  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
  });

  async function onSubmit(values: z.infer<typeof ReviewSchema>) {
    try {
      const { data } = await feedback(productId, values);
      if (!data) {
        throw new Error('Unknown error');
      }
      form.reset();
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (e) {
      console.error(e);
      toast({
        title: 'Oh oh! Something went wrong.',
        description: 'Failed to add product to cart.',
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="border rounded">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="border-b p-2 rounded">
            <h3 className="text-lg font-bold">Write a review</h3>
          </div>
          <div className="p-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Add a title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Details please! Your review helps other shoppers."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating star</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a rating star" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1 Star</SelectItem>
                      <SelectItem value="2">2 Star</SelectItem>
                      <SelectItem value="3">3 Star</SelectItem>
                      <SelectItem value="4">4 Star</SelectItem>
                      <SelectItem value="5">5 Star</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="border-t p-2 rounded">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default WriteReviewForm;
