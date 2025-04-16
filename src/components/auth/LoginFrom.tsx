/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './loginValidation';
import { useRouter, useSearchParams } from 'next/navigation';

import toast from 'react-hot-toast';
import { loginUser } from '@/services/AuthServices';
import { useUser } from '@/context/UserContext';
import { PiStudentBold } from 'react-icons/pi';
import { GiTeacher } from 'react-icons/gi';

const LoginFrom = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { setIsLoading } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirectPath');
  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;
  const demoLogin = async (role: 'tutor' | 'student') => {
    console.log(role);
    const demoCredentials = {
      tutor: { email: 'john@example.com', password: 'Abcd1234' },
      student: { email: 'y@gmail.com', password: 'Abcd1234' },
    };

    const data = demoCredentials[role];

    try {
      const res = await loginUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      } else {
        toast.error(res?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="  border-[#066ccb] border rounded-lg  lg:w-[400px] w-[350px] p-12 shadow-xl">
      <p className="text-4xl text-[#066ccb] font-semibold border-b pb-6">
        Login
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" pt-6 space-y-7"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-lg text-gray-200">Email</FormLabel>
                <FormControl>
                  <Input
                    className="p-5 border-[#066ccb]"
                    placeholder="email"
                    required
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-lg text-gray-200">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="p-5 border-[#066ccb]"
                    type="password"
                    placeholder="password"
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex justify-center">
            <Button
              className="bg-[#066ccb] w-full hover:bg-[#066ccb]/40 hover:text-[#066ccb] text-lg hover:border-[#066ccb] "
              type="submit"
            >
              {isSubmitting ? 'Logging....' : 'Login'}
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex items-center justify-center my-4">
        <div className="flex-grow h-px bg-gray-400"></div>
        <span className="px-4 text-gray-300 text-sm font-medium tracking-wide">
          QUICK DEMO ACCESS
        </span>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>
      {/* Demo login buttons */}
      <div className="mt-4 space-x-4 flex flex-col gap-4 ">
        <Button
          variant="outline"
          className="bg-[#066ccb] w-full text-gray-100 hover:bg-gray-100 py-5 hover:text-[#066ccb] border-[#066ccb] flex items-center gap-2 "
          onClick={() => demoLogin('tutor')}
        >
          {' '}
          <GiTeacher size={'2rem'} />
          Demo Login as Tutor
        </Button>
        <Button
          variant="outline"
          className="bg-[#066ccb] text-gray-100 hover:bg-gray-100  py-5  hover:text-[#066ccb] border-[#066ccb] flex items-center gap-2 "
          onClick={() => demoLogin('student')}
        >
          <PiStudentBold size={'2rem'} /> Demo Login as Student
        </Button>
      </div>
      <p className=" text-sm pt-4 text-gray-300">
        Dont have account?{' '}
        <Link
          href="/register"
          className=" text-base font-semibold text-[#066ccb] hover:underline "
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginFrom;
