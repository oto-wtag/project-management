import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RiGoogleFill, RiFacebookFill } from '@remixicon/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput } from '@/components/ui/password-input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import type z from 'zod';
import { registerNewUserForm } from '@/schemas/auth';

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(registerNewUserForm),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registerNewUserForm>) {
    console.log(values);
  }

  return (
    <Card className={cn('w-md max-w-full')}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Create an Account!</CardTitle>
        <CardDescription>Join us to find your next partner!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className={cn('col-span-2 md:col-span-1')}>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="" {...field} placeholder="First Name" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className={cn('col-span-2 md:col-span-1')}>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="" {...field} placeholder="Last Name" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={cn('col-span-2')}>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" type="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className={cn('col-span-2')}>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className={cn('col-span-2')}>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Confirm Password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className={cn('col-span-2 w-full')}>
                Create a new account
              </Button>
            </form>
          </Form>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1" aria-label="Signup with Google">
              <RiGoogleFill
                className="dark:text-primary text-[#DB4437]"
                size={16}
                aria-hidden="true"
              />
            </Button>

            <Button variant="outline" className="flex-1" aria-label="Signup with Facebook">
              <RiFacebookFill
                className="dark:text-primary text-[#1877F2]"
                size={16}
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUp;
