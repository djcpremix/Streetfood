'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { getRecommendations } from '@/app/recommendations/actions';
import { Badge } from '@/components/ui/badge';
import { Wand2, Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  productName: z.string().min(2, { message: 'Please enter a name with at least 2 characters.' }),
});

export function RecommendationTool() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    const result = await getRecommendations(values.productName);

    if (result.success) {
      setRecommendations(result.data || []);
      if (result.data?.length === 0) {
        setError("Couldn't generate ideas for this item. Try something else!");
      }
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Wand2 className="text-primary" />
          <span>Generate Name Ideas</span>
        </CardTitle>
        <CardDescription>
          Enter a basic name for your food item, and we'll suggest some catchy alternatives.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food Item Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Veggie Burger" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <Button type="submit" disabled={isLoading} size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Get Recommendations'
              )}
            </Button>
            
            {error && !isLoading && (
               <Alert variant="destructive">
                 <AlertCircle className="h-4 w-4" />
                 <AlertTitle>Error</AlertTitle>
                 <AlertDescription>{error}</AlertDescription>
               </Alert>
            )}

            {recommendations.length > 0 && (
              <div className="mt-4 w-full animate-in fade-in-50 duration-500">
                <h3 className="font-semibold mb-3">Here are some ideas:</h3>
                <div className="flex flex-wrap gap-2">
                  {recommendations.map((name, index) => (
                    <Badge key={index} variant="secondary" className="text-base px-4 py-1 border-primary/20">
                      {name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
