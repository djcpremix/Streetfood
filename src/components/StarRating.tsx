import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type StarRatingProps = {
  rating: number;
  totalStars?: number;
  className?: string;
  starClassName?: string;
};

export function StarRating({ rating, totalStars = 5, className, starClassName }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = totalStars - Math.ceil(rating);
  const starClasses = cn('w-4 h-4', starClassName);

  return (
    <div className={cn('flex items-center', className)} aria-label={`Rating: ${rating} out of ${totalStars} stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn(starClasses, 'text-accent fill-accent')} />
      ))}
      {partialStar > 0.1 && (
        <div className="relative">
          <Star key="partial-empty" className={cn(starClasses, 'text-accent')} />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${partialStar * 100}%` }}>
            <Star key="partial-full" className={cn(starClasses, 'text-accent fill-accent')} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={cn(starClasses, 'text-muted-foreground/30')} />
      ))}
    </div>
  );
}
