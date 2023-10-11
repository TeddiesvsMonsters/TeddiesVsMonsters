"use client";
import React, { FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { register } from "@/services/auth";
import { useState } from "react";

import { redirect } from "next/navigation";
// components
import Button from "@/components/Button";

const Page = () => {
  redirect("/");

  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }

    const target = e.target as HTMLFormElement;
    const data = {
      slug: `user${Math.floor(Math.random() * (179900 - 6 + 1)) + 6}`,
      name: (target.querySelector("#name") as HTMLInputElement).value,
      email: target.email.value,
      password: password, 
      lastname: target.lastname.value,
      address: target.address.value,
    };
    try {
      console.log("Credentials:", { data });

      const result = await register( {data} );
      console.log("Result:", result);
       if (result.status == 200) {
        console.log("Authenticated:", result);
        router.replace("/login");
        return;
      } else {
        console.log("Error:", result);
        alert("Credentials are not valid");
      }
    } catch (error) {
      console.error("Error while registering user:", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="mt-[-120px] h-screen w-full overflow-x-hidden bg-herobg bg-scroll bg-bottom sm:pl-0 pl-10">
      <div className="flex flex-col sm:flex-row items-space-center justify-evenly min-h-screen py-2 mt-20">
        <div className="w-11/12 sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-2/4 bg-[#220734] h-3/4 p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30  overflow-y-auto">
          <div className="mx-auto flex h-full w-full flex-col justify-center text-white">
          <div className=" h-full pb-[1rem] text-center ">
          <p className="font-face-title  capitalize bg-clip-text text-[50px]  text-2xl mt-10">Register</p> 
        </div> 
            <div className="mt-6 w-full col-span-2 p-8 justify-center justify-self-center mx-auto text-white text-center text-lg">
              <form onSubmit={onSubmit}>
                <div className="flex justify-between">
                  <div className="flex flex-col items-start w-full mr-2">
                    <label
                      className="mb-2.5 flex justify-start font-light uppercase"
                      htmlFor="name"
                    >
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <path
                          id="Vector"
                          d="M4.67704 0.927247C3.7868 0.927284 2.91782 1.1993 2.18646 1.70686C1.45509 2.21443 0.896245 2.93332 0.58475 3.76728C0.273255 4.60124 0.223979 5.51047 0.443518 6.37321C0.663058 7.23595 1.14093 8.01103 1.81316 8.59467C1.32933 9.91503 1.17133 11.3327 1.3526 12.7271C1.53387 14.1216 2.04904 15.4518 2.85436 16.6045C3.65967 17.7573 4.73134 18.6987 5.97831 19.3487C7.22529 19.9987 8.61073 20.3381 10.017 20.3381C11.4232 20.3381 12.8086 19.9987 14.0556 19.3487C15.3026 18.6987 16.3742 17.7573 17.1795 16.6045C17.9849 15.4518 18.5 14.1216 18.6813 12.7271C18.8626 11.3327 18.7046 9.91503 18.2207 8.59467C18.6965 8.18145 19.0772 7.67021 19.3368 7.09602C19.5963 6.52183 19.7286 5.89829 19.7245 5.26817C19.7204 4.63805 19.5801 4.01627 19.3131 3.44549C19.0461 2.87471 18.6588 2.36845 18.1778 1.96143C17.6967 1.55442 17.1333 1.25629 16.5262 1.0875C15.9191 0.918706 15.2827 0.883249 14.6606 0.983559C14.0385 1.08387 13.4454 1.31757 12.9221 1.66863C12.3989 2.01969 11.9577 2.4798 11.629 3.01739C10.5635 2.81838 9.4704 2.81838 8.40493 3.01739C8.01489 2.37861 7.46715 1.85085 6.81431 1.48482C6.16147 1.11879 5.42548 0.926787 4.67704 0.927247ZM2.25002 5.29587C2.2492 4.72429 2.45013 4.17077 2.81742 3.73282C3.1847 3.29486 3.69477 3.00059 4.25776 2.90185C4.82074 2.80311 5.40051 2.90623 5.89491 3.19305C6.38932 3.47987 6.76663 3.93198 6.96037 4.46972L7.26909 5.32208L8.14087 5.07258C8.75078 4.89815 9.3821 4.80992 10.0165 4.81047C10.6688 4.81047 11.2979 4.90172 11.8921 5.07258L12.7638 5.32208L13.0726 4.46972C13.2059 4.10156 13.4262 3.77111 13.7148 3.50653C14.0035 3.24196 14.3518 3.05111 14.7301 2.95026C15.1084 2.84941 15.5056 2.84155 15.8876 2.92735C16.2696 3.01316 16.6252 3.19008 16.9241 3.44303C17.2229 3.69597 17.4562 4.01745 17.604 4.38004C17.7517 4.74263 17.8096 5.13557 17.7727 5.52537C17.7357 5.91516 17.6051 6.29024 17.3918 6.61862C17.1786 6.947 16.8891 7.21894 16.548 7.41125L15.7578 7.85783L16.15 8.67524C16.6444 9.71111 16.8683 10.8553 16.8009 12.0011C16.7335 13.1469 16.3769 14.257 15.7646 15.2277C15.1522 16.1985 14.3039 16.9984 13.2989 17.5527C12.2938 18.107 11.1647 18.3977 10.017 18.3977C8.86917 18.3977 7.74009 18.107 6.73504 17.5527C5.72999 16.9984 4.88171 16.1985 4.26933 15.2277C3.65696 14.257 3.30044 13.1469 3.23304 12.0011C3.16564 10.8553 3.38955 9.71111 3.88389 8.67524L4.27512 7.85685L3.48489 7.41028C3.11004 7.19902 2.79813 6.89186 2.58113 6.5203C2.36413 6.14874 2.24986 5.72615 2.25002 5.29587Z"
                          fill="white"
                        />
                      </svg>
                      name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label
                      className="mb-2.5 block font-light uppercase"
                      htmlFor="lastname"
                    >
                      lastname
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start w-full">
                  <label
                    className="mb-2.5 font-light flex justify-start uppercase"
                    htmlFor="email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 pr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <label
                    className="mb-2.5 font-light flex justify-start uppercase"
                    htmlFor="password"
                  >
                    password
                  </label>
                  <input
                    required
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                  />
                </div>

                <div className="flex flex-col items-start w-full">
                  <label
                    className="mb-2.5 font-light flex justify-start uppercase"
                    htmlFor="password"
                  >
                    repeat password
                  </label>
                  <input
                    required
                    type="password"
                    id="password2"
                    value={passwordConfirmation}
                    onChange={handlePasswordConfirmationChange}
                    className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                  />
                </div>

                <div className="flex flex-col items-start w-full">
                  <label
                    className="mb-2.5 font-light flex justify-start uppercase"
                    htmlFor="address1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 r-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    address <span className="capitalize"></span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                  />
                </div>
                <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <a href="/login" className="text-sm hover:text-gray-200">
                      Already have an account?
                    </a>
                  </div>
                </div>
                <div className="my-10">
                  <Button type="submit">Register</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
