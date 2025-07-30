import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { RiGoogleFill, RiFacebookFill } from '@remixicon/react';
import { loginFormSchema } from '@/schemas/auth';
import type z from 'zod';

const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <Card className={cn('w-96 max-w-full')}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>Enter your email and password to log in</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1" aria-label="Login with Google">
              <RiGoogleFill
                className="dark:text-primary text-[#DB4437]"
                size={16}
                aria-hidden="true"
              />
            </Button>

            <Button variant="outline" className="flex-1" aria-label="Login with Facebook">
              <RiFacebookFill
                className="dark:text-primary text-[#1877F2]"
                size={16}
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={cn('mb-6')}>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@doe.com" type="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className={cn('mb-4')}>
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                      <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>

                    <FormControl>
                      <PasswordInput placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className={cn('mb-6 flex')}>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>Keep me logged in</FormLabel>
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full">
                Login
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/sign-up" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
