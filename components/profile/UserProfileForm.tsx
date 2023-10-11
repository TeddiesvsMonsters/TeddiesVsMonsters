"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { updateUser } from "@/services/auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import profileImage from "@/assets/images/profile_image.png";
import { redirect } from "next/navigation";

interface CustomUser {
  id: number;
  name?: string | null;
  username?: string | null;
  email: string | null;
  phone?: string | null;
  password?: string | null;
  address?: string | null;
  address_2?: string | null;
  lastname?: string | null;
}

const UserProfileForm = () => {
  /* const { data: session, status, update } = useSession();
  const [isEditing, setIsEditing] = useState(false);
 
  const [userProfile, setUserProfile] = useState<CustomUser>({
    id: 0,
    name: "Name",
    username: "Username",
    email: "Email",
    phone: "Phone",
    address: "Address",
    address_2: "",
    lastname: "Lastname",
  });

  useEffect(() => {
    if (session) {
      const user: CustomUser = session.user as CustomUser;

      if (user?.id) {
        setUserProfile({
          id: user.id,
          name: user.name || "Name",
          username: user.username || "Username",
          email: user.email || "Email",
          phone: user.phone || "Phone",
          address: user.address || "Address",
          address_2: user.address_2 || "Addres (2)",
          lastname: user.lastname || "Lastname",
        });
      }
    }else{
      redirect("/")
    }
  }, [session]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const updatedUser = await updateUser({ data: userProfile });
      setIsEditing(false)
    } catch (error) {
      alert("Update failed: " + error);
      console.error("Update failed:", error);
    }
  };


  const handleEddit = () => {
    setIsEditing(true);
  }

  return (
    <div className="md:grid md:grid-cols-3 gap-1 p-2 justify-center flex flex-wrap">
      
      <div className="flex flex-col w-2/2  mt-8">
        <div className="rounded-full bg-white flex justify-center mx-auto">
          <Image
            className="ml-2 mt-2 mb-0"
            src={profileImage}
            alt="profile-image"
            width={200}
            height={290}
          />
        </div>

        <div className="py-4">
          <p className="flex items-center justify-center uppercase text-amber-500 font-bold">
              {userProfile.name  || "Name"} {userProfile.lastname  || "Lastname"}
          </p>
        </div>

        <div className="flex justify-center">
          {session && <button
            className="bg-black inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              signOut({redirect: false});
              }
            }
          >
            <span className="px-2">Sign out</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        }
        </div>
      </div>

      <div className="mt-6 w-full col-span-2 p-8 justify-center justify-self-center mx-auto text-white text-center text-lg">
        <form onSubmit={onSubmit}>

          {isEditing &&
          <>
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
                value={userProfile.name || "Name"}
                onChange={handleChange}
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
                value={userProfile.lastname || "Lastname"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <label
              className="mb-2.5 font-light flex justify-start uppercase"
              htmlFor="phone"
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              phone
            </label>
            <input
              type="phone"
              id="phone"
              className="imb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
              value={userProfile.phone || "Phone"}
              onChange={handleChange}
            />
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
              value={userProfile.email || "Email"}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex md:flex-row justify-between">
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
                address 1<span className="capitalize"></span>
              </label>
              <input
                type="text"
                id="address"
                className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                value={userProfile.address || "Address"}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-start w-full ml-2">
              <label
                className="mb-2.5 font-light flex justify-start uppercase"
                htmlFor="address2"
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
                address 2 (optional)
              </label>
              <input
                type="text"
                id="address_2"
                className="mb-2.5 w-full rounded-md bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder-opacity-30"
                value={userProfile.address_2 || "Address"}
                onChange={handleChange}
              />
            </div>
          </div>
          </>}
          
          {!isEditing && 
          <>
           <div className="flex flex-col md:flex-row justify-between mb-4">
            <div className="flex flex-row items-start w-full mr-2 ">
              <label className="mb-2.5 flex justify-start font-light uppercase" htmlFor="name">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="mr-2">
                  <path id="Vector"
                    d="M4.67704 0.927247C3.7868 0.927284 2.91782 1.1993 2.18646 1.70686C1.45509 2.21443 0.896245 2.93332 0.58475 3.76728C0.273255 4.60124 0.223979 5.51047 0.443518 6.37321C0.663058 7.23595 1.14093 8.01103 1.81316 8.59467C1.32933 9.91503 1.17133 11.3327 1.3526 12.7271C1.53387 14.1216 2.04904 15.4518 2.85436 16.6045C3.65967 17.7573 4.73134 18.6987 5.97831 19.3487C7.22529 19.9987 8.61073 20.3381 10.017 20.3381C11.4232 20.3381 12.8086 19.9987 14.0556 19.3487C15.3026 18.6987 16.3742 17.7573 17.1795 16.6045C17.9849 15.4518 18.5 14.1216 18.6813 12.7271C18.8626 11.3327 18.7046 9.91503 18.2207 8.59467C18.6965 8.18145 19.0772 7.67021 19.3368 7.09602C19.5963 6.52183 19.7286 5.89829 19.7245 5.26817C19.7204 4.63805 19.5801 4.01627 19.3131 3.44549C19.0461 2.87471 18.6588 2.36845 18.1778 1.96143C17.6967 1.55442 17.1333 1.25629 16.5262 1.0875C15.9191 0.918706 15.2827 0.883249 14.6606 0.983559C14.0385 1.08387 13.4454 1.31757 12.9221 1.66863C12.3989 2.01969 11.9577 2.4798 11.629 3.01739C10.5635 2.81838 9.4704 2.81838 8.40493 3.01739C8.01489 2.37861 7.46715 1.85085 6.81431 1.48482C6.16147 1.11879 5.42548 0.926787 4.67704 0.927247ZM2.25002 5.29587C2.2492 4.72429 2.45013 4.17077 2.81742 3.73282C3.1847 3.29486 3.69477 3.00059 4.25776 2.90185C4.82074 2.80311 5.40051 2.90623 5.89491 3.19305C6.38932 3.47987 6.76663 3.93198 6.96037 4.46972L7.26909 5.32208L8.14087 5.07258C8.75078 4.89815 9.3821 4.80992 10.0165 4.81047C10.6688 4.81047 11.2979 4.90172 11.8921 5.07258L12.7638 5.32208L13.0726 4.46972C13.2059 4.10156 13.4262 3.77111 13.7148 3.50653C14.0035 3.24196 14.3518 3.05111 14.7301 2.95026C15.1084 2.84941 15.5056 2.84155 15.8876 2.92735C16.2696 3.01316 16.6252 3.19008 16.9241 3.44303C17.2229 3.69597 17.4562 4.01745 17.604 4.38004C17.7517 4.74263 17.8096 5.13557 17.7727 5.52537C17.7357 5.91516 17.6051 6.29024 17.3918 6.61862C17.1786 6.947 16.8891 7.21894 16.548 7.41125L15.7578 7.85783L16.15 8.67524C16.6444 9.71111 16.8683 10.8553 16.8009 12.0011C16.7335 13.1469 16.3769 14.257 15.7646 15.2277C15.1522 16.1985 14.3039 16.9984 13.2989 17.5527C12.2938 18.107 11.1647 18.3977 10.017 18.3977C8.86917 18.3977 7.74009 18.107 6.73504 17.5527C5.72999 16.9984 4.88171 16.1985 4.26933 15.2277C3.65696 14.257 3.30044 13.1469 3.23304 12.0011C3.16564 10.8553 3.38955 9.71111 3.88389 8.67524L4.27512 7.85685L3.48489 7.41028C3.11004 7.19902 2.79813 6.89186 2.58113 6.5203C2.36413 6.14874 2.24986 5.72615 2.25002 5.29587Z"
                    fill="white" />
                </svg>
                name
              </label>
                <h3
                  id="name"
                  className="mb-2.5 ml-9 w-full flex justify-start leading-none text-amber-400"
                >
                  {userProfile.name || "Name"}
                </h3>
            </div>

            <div className="flex flex-row items-start w-full">
              <label className="mb-2.5 block font-light uppercase" htmlFor="lastname">
                lastname
              </label>
              <h3
              id="lastname"
              className="mb-2.5 ml-9 w-full flex justify-start leading-none text-amber-400"
              >
                {userProfile.lastname || "Lastname" }
              </h3>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div className="flex flex-row items-start w-full">
              <label className="mb-2.5 font-light flex justify-start uppercase" htmlFor="phone">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="w-6 h-6 pr-2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                phone
              </label>
              <h3
              id="phone"
              className="mb-2.5 ml-9  flex justify-start leading-none text-amber-400"
              >
                {userProfile.phone || "Phone" }
                </h3>
            </div>
            <div className="flex flex-row items-start w-full">
              <label className="mb-2.5 font-light flex justify-start uppercase" htmlFor="email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="w-6 h-6 pr-2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
                </label>
                <h3
                id="email"
                className="mb-2.5 ml-9 w-full flex justify-start leading-none text-amber-400"
                >
                  {userProfile.email || "Email" }
                </h3>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <div className="flex flex-row items-start w-full">
              <label className="mb-2.5 font-light flex justify-start uppercase  w-1/3" htmlFor="address1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="w-6 h-6 r-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                address
              </label>
              <div className="mb-2.5 md:ml-9 ml-9 w-2/3 flex md:justify-start justify-start items-start leading-none ">
              <h3
                id="address" 
                className="text-amber-400 text-justify"
              >
                {userProfile.address || "Address" } 
              </h3>
              </div>
             
            </div>
            <div className="flex flex-row items-start w-full">
                <label className="mb-2.5 font-light flex justify-start uppercase   w-1/3" htmlFor="address2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-6 h-6 r-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  address_2
                </label>
                <h3
                  id="address_2"
                  className="mb-2.5 ml-9 w-2/3 flex justify-start leading-none text-amber-400"
                >
                  {userProfile.address_2 || "Address" } 
                </h3>
                </div>
            </div>
    
          </>}

          <div className="flex justify-end">
          {isEditing && 
            <input
              type="submit"
              value={"Save changes"}
              className="bg-fuchsia-950 text-white  p-2 rounded uppercase font-btn text-center text-base md:text-2xl md:px-3 md:py-2"
            />
          }
            { session && !isEditing && 
            <button
              onClick={handleEddit}
              className="bg-fuchsia-950 text-white  p-2 rounded uppercase font-btn text-center text-base md:text-2xl md:px-3 md:py-2"
            >Edit Information</button>
            }
          </div>
        </form>
      </div>
    </div>
  ); */
};

export default UserProfileForm;