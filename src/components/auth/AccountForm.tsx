
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Utensils } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Textarea } from '../ui/textarea';
import Link from 'next/link';

const profileSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email().optional(),
  companyName: z.string().optional(),
  companyDescription: z.string().optional(),
});

export function AccountForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: 'StreetVendorConnect', // Placeholder
      companyDescription: '',
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        profileForm.setValue('fullName', currentUser.displayName || '');
        profileForm.setValue('email', currentUser.email || '');
      } else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router, profileForm]);
  
  async function onProfileSubmit(values: z.infer<typeof profileSchema>) {
    if (!user) return;
    setIsLoading(true);
    try {
      await updateProfile(user, {
        displayName: values.fullName,
      });

      // In a real app, you would save these to a database (e.g., Firestore)
      console.log("Updating company name to:", values.companyName);
      console.log("Updating company description to:", values.companyDescription);

      toast({
        title: 'Profile Updated',
        description: 'Your profile has been successfully updated.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Update Failed',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  if (!user) {
    return (
        <div className="flex justify-center items-center h-full">
            <Loader2 className="animate-spin" />
        </div>
    );
  }

  return (
    <div className="w-full max-w-2xl space-y-8">
        <Card className="shadow-lg">
            <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Account Details</CardTitle>
                    <CardDescription>Update your personal and business details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`} alt={user.displayName || 'User'} />
                            <AvatarFallback>{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
                        </Avatar>
                         <p className="text-sm text-muted-foreground">Profile pictures are managed via the social provider you used to sign in. To change it, update your profile picture on that platform.</p>
                    </div>
                    <FormField
                    control={profileForm.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" {...field} readOnly disabled />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                      control={profileForm.control}
                      name="companyName"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                              <Input placeholder="e.g., My Awesome Company" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                      <FormField
                      control={profileForm.control}
                      name="companyDescription"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel>Company Description</FormLabel>
                          <FormControl>
                              <Textarea placeholder="Describe your business, your products, and what makes you special." {...field} rows={4} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                </CardContent>
                <CardFooter className="justify-end">
                    <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 animate-spin" />}
                    Save Changes
                    </Button>
                </CardFooter>
                </form>
            </Form>
        </Card>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-headline flex items-center gap-3"><Utensils /> Manage Your Products</CardTitle>
                <CardDescription>Add, edit, or remove items from your menu. This is what customers will see when they browse your profile.</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
}
