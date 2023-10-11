
'use client'
import React, { FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import {useSearchParams, useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

// components
import Button from '@/components/Button';

const Page = () => {
  redirect("/");

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const email = target.email.value;
    const password = target.password.value;

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      console.log('Result from signIn:', result);
      if(result?.error){
        console.log('Error:', result.error);
        alert('Credentials are not valid');
      }else if (result?.ok) {
        console.log('Authenticated:', result);
        router.replace('/'); 
        return;
      } else {
        console.log('Error:', result);
      }
    } catch (error) {
      console.error('Error while signing in:', error);
      alert('Authentication failed');
    }
  };

  return (
    <div className="mt-[-120px] h-screen w-full bg-herobg bg-bottom bg-no-repeat bg-cover flex items-center justify-center">
    <div className="w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/4 xl:w-1/4 bg-[#220734] p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30">

      <div className="mx-auto flex h-full w-full flex-col justify-center text-white">
        <div className=" h-full pb-[1rem] text-center ">
          <p className="font-face-title  capitalize bg-clip-text text-[50px]  text-2xl mt-10">Login</p> 
        </div>                                                          
        <div className="mt-10">
          <form onSubmit={onSubmit}>
            <div>
     {/*          <label className="mb-2.5 block font-extrabold" htmlFor="email">Email</label> */}
              <input type="email" id="email" className="inline-block w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30" placeholder="Email" />
            </div>
            <div className="mt-4">
             {/*  <label className="mb-2.5 block font-extrabold" htmlFor="password">Password</label> */}
              <input type="password" id="password" placeholder="Password" className="inline-block w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 placeholder-opacity-30 shadow" />
            </div>
            <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
              <div>
                <a href="/register" className="text-sm hover:text-gray-200">Create new account</a>
              </div>
              <div>
                <a href="#" className="text-sm hover:text-gray-200">Forgot password</a>
              </div>
            </div>
            <div className="my-10">
              <Button type='submit'  width="w-full" >Login</Button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
