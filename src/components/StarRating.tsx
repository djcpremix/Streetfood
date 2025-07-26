'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type StarRatingProps = {
  rating: number;
  totalStars?: number;
  className?: string;
  starClassName?: string;
  isEditable?: boolean;
  onRate?: (rating: number) => void;
};

export function StarRating({ rating, totalStars = 5, className, starClassName, isEditable = false, onRate }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number>(0);
  const starClasses = cn('w-5 h-5', starClassName, isEditable && 'cursor-pointer');

  const handleRate = (rate: number) => {
    if (isEditable && onRate) {
      onRate(rate);
    }
  }

  const displayRating = hoverRating > 0 ? hoverRating : rating;

  return (
    <div 
      className={cn('flex items-center', className)} 
      aria-label={`Rating: ${rating} out of ${totalStars} stars`}
      onMouseLeave={() => setHoverRating(0)}
    >
      {[...Array(totalStars)].map((_, i) => {
        const starValue = i + 1;
        const isFull = starValue <= Math.floor(displayRating);
        const isPartial = !isFull && starValue === Math.ceil(displayRating);
        const partialFill = displayRating % 1;

        return (
          <div 
            key={`star-${i}`} 
            className="relative"
            onClick={() => handleRate(starValue)}
            onMouseEnter={() => isEditable && setHoverRating(starValue)}
          >
            <Star
              className={cn(starClasses, 'text-muted-foreground/30')}
            />
            {isFull ? (
               <Star key={`full-${i}`} className={cn(starClasses, 'text-accent fill-accent absolute top-0 left-0')} />
            ) : isPartial ? (
              <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${partialFill * 100}%` }}>
                <Star key="partial-full" className={cn(starClasses, 'text-accent fill-accent')} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
