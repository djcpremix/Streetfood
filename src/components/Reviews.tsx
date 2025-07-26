'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from './StarRating';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Review } from '@/lib/placeholder-data';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useState } from 'react';

const reviewSchema = z.object({
  comment: z.string().min(10, "Review must be at least 10 characters.").max(500, "Review cannot exceed 500 characters."),
  rating: z.number().min(1, "Please select a rating.").max(5, "Rating cannot be more than 5."),
})

type ReviewsProps = {
  reviews: Review[];
};

export function Reviews({ reviews: initialReviews }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      comment: "",
      rating: 0,
    }
  })
  
  const onSubmit = (data: z.infer<typeof reviewSchema>) => {
    console.log(data);
    const newReview: Review = {
      id: `r${reviews.length + 1}`,
      author: "New User", // In a real app, this would come from the logged-in user
      rating: data.rating,
      comment: data.comment,
      date: "Just now",
    };
    setReviews([newReview, ...reviews]);
    form.reset();
  };
  
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold font-headline mb-6">What people are saying</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={review.id}>
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${review.author}`} alt={review.author} />
                  <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} className="my-1" />
                  <p className="text-sm text-foreground/90">{review.comment}</p>
                </div>
              </div>
              {index < reviews.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="font-headline">Leave a Review</CardTitle>
            <CardDescription>Share your experience with others.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Rating</FormLabel>
                      <FormControl>
                        <StarRating 
                          rating={field.value}
                          onRate={(rating) => field.onChange(rating)}
                          className="mt-1" 
                          isEditable
                        />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Review</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your experience..." {...field} rows={4} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Submit Review</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
