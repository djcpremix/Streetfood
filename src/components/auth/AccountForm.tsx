
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User, updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';

const profileSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email().optional(),
  companyName: z.string().optional(),
  profilePicture: z.any().optional(),
});

const passwordSchema = z.object({
    currentPassword: z.string().min(1, 'Current password is required.'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters.'),
    confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "New passwords don't match.",
    path: ['confirmPassword'],
});


export function AccountForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: 'StreetVendorConnect', // Placeholder
    },
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    }
  })

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
  
  const getBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

  async function onProfileSubmit(values: z.infer<typeof profileSchema>) {
    if (!user) return;
    setIsLoading(true);
    try {
      let photoURL = user.photoURL;
      if (values.profilePicture && values.profilePicture.length > 0) {
        const file = values.profilePicture[0];
        photoURL = await getBase64(file);
      }

      await updateProfile(user, {
        displayName: values.fullName,
        photoURL: photoURL,
      });

      // Here you would also update the company name in your database (e.g., Firestore)
      console.log("Updating company name to:", values.companyName);


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

  async function onPasswordSubmit(values: z.infer<typeof passwordSchema>) {
    if(!user || !user.email) return;
    setIsPasswordLoading(true);

    try {
        const credential = EmailAuthProvider.credential(user.email, values.currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, values.newPassword);

        toast({
            title: "Password Changed!",
            description: "Your password has been updated successfully.",
        });
        passwordForm.reset();

    } catch (error: any) {
        toast({
            variant: "destructive",
            title: "Password Change Failed",
            description: "Your current password was incorrect. Please try again.",
        });
    } finally {
        setIsPasswordLoading(false);
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
                    <CardTitle className="text-2xl font-headline">Profile Information</CardTitle>
                    <CardDescription>Update your personal details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <FormField
                        control={profileForm.control}
                        name="profilePicture"
                        render={({ field }) => (
                            <FormItem className="flex items-center gap-6">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`} alt={user.displayName || 'User'} />
                                    <AvatarFallback>{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
                                </Avatar>
                                <div className='flex-1 space-y-2'>
                                    <FormLabel>Profile Picture</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="image/*" onChange={e => field.onChange(e.target.files)} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                        />
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
             <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
                    <CardHeader>
                        <CardTitle className="text-2xl font-headline">Change Password</CardTitle>
                        <CardDescription>Enter your current password to set a new one.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={passwordForm.control}
                            name="currentPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Current Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={passwordForm.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={passwordForm.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm New Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="justify-end">
                        <Button type="submit" disabled={isPasswordLoading}>
                            {isPasswordLoading && <Loader2 className="mr-2 animate-spin" />}
                            Change Password
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    </div>
  );
}
