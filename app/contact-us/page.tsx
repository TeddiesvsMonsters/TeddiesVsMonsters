"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/Button";
import {
	Sms,
	Location,
	CallCalling,
	Facebook,
	Instagram,
} from "iconsax-react";
import { sendEmail } from "@/services/sendEmail";
import MessageModal from "@/components/MessageModal";
import PageTitleBanner from "@/components/PageTitleBanner";

export type FormData = {
	fullName: string;
	email: string;
	phone: string;
	message: string;
};

const ContactSchema: z.ZodType<FormData> = z.object({
	fullName: z.string().min(1, { message: "Full name is required" }),
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid email address" }),
	phone: z
		.string()
		.min(1, { message: "Phone number is required" })
		.max(15, { message: "Must be 15 or fewer characters long" }),
	message: z.string().min(1, { message: "Message is required" }),
});

const Page = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(ContactSchema) });

	const [showModal, setShowModal] = useState(false);
	const [modalMessage, setModalMessage] = useState("");
	const [isError, setIsError] = useState(false);

	const onSubmit = (data: FormData) => {
		sendEmail(data)
			.then((response) => {
				setShowModal(true);
				setModalMessage(response.data.message);
				setIsError(false);
				reset();
			})
			.catch((error) => {
				setShowModal(true);
				setModalMessage("An error occurred.");
				setIsError(true);
			});
	};

	return (
		<>
			<div className=" bg-black">
				<div className="container bg-black mx-auto pb-12">
				<PageTitleBanner subtract={false} bgImg={false} line={true}>Contact us</PageTitleBanner>
					<p className="text-lg text-white opacity-50 text-center font-body my-10">
						Any question or remarks? &nbsp;
						<br className="sm:hidden" />
						Just write us a message!
					</p>

					{/* Gray box */}
					<div className=" bg-zinc-400 rounded-2xl flex text-white w-11/12 p-5 m-auto lg:w-3/4 flex-col lg:flex-row">
						{/* Contact Information */}
						<div className="bg-contactUs-pc bg-no-repeat rounded-2xl p-8 w-full bg-cover relative lg:1/2 xl:w-2/5 lg:h-[550px] md:p-10">
							<h2 className="text-2xl h-9 mb-2">Contact Information</h2>
							<p className="text-xl opacity-50 h-7.5">We are here for you!</p>

							{/* Information */}
							<ul className="text-base my-10 lg:my-24">
								<li className="flex mb-5 lg:mb-10">
									<CallCalling />
									<span className="ml-4">+1 778 123 456</span>
								</li>
								<li className="flex my-5 lg:my-10">
									<Sms />
									<span className="ml-4">teddies@monsters.com</span>
								</li>
								<li className="flex">
									<Location />
									<span className="ml-4 w-4/5">
										101 E 1st Avenue, Vancouver BC YVR321 Canada
									</span>
								</li>
							</ul>

							{/* SNS */}
							<div className="flex absolute bottom-4 left-8 lg:left-10 lg:bottom-10">
								<div className=" bg-white rounded-full w-10 h-10 text-center leading-8">
									<a
										href="https://www.facebook.com/teddiesvsmonsters"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Facebook
											size="24"
											color="#000000"
											className="m-2 text-center"
										/>
									</a>
								</div>

								<div className=" bg-btn rounded-full w-10 h-10 ml-6 text-center leading-8">
									<a
										href="https://www.instagram.com/teddies.vs.monsters/"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Instagram
											size="24"
											color="#000000"
											className="m-2 text-center"
										/>
									</a>
								</div>
							</div>
						</div>

						{/* Form */}
						<form className="w-full my-3 text-form lg:1/2 xl:w-2/3 lg:mx-6 lg:my-6">
							<div className="my-5">
								<label htmlFor="form-name" className="block text-form">
									Full Name
								</label>
								<input
									className="w-full h-8 p-4 opacity-50 rounded text-black"
									type="text"
									// name="fullName"
									id="form-name"
									placeholder="Enter your full name"
									{...register("fullName", { required: true })}
								/>
								{errors.fullName?.message && (
									<span className="text-red-500">
										{errors.fullName?.message}
									</span>
								)}
							</div>

							<div className="flex my-5 flex-col lg:flex-row">
								<div className="w-full mb-5 lg:mb-0 lg:w-1/3">
									<label htmlFor="form-email" className="block text-form">
										Email
									</label>
									<input
										className="w-full h-8 p-4 opacity-50 rounded text-black"
										type="email"
										// name="email"
										id="form-email"
										autoComplete="email"
										placeholder="Enter your email address"
										{...register("email", { required: true })}
									/>
									{errors.email?.message && (
										<span className="text-red-500">
											{errors.email?.message}
										</span>
									)}
								</div>

								<div className="w-full lg:w-2/3 lg:ml-5">
									<label htmlFor="form-phone" className="block text-form">
										Phone
									</label>
									<input
										className="w-full h-8 p-4 opacity-50 rounded text-black"
										type="text"
										// name="phone"
										id="form-phone"
										autoComplete="tel"
										placeholder="Enter your phone number"
										{...register("phone", { required: true })}
									/>
									{errors.phone?.message && (
										<span className="text-red-500">
											{errors.phone?.message}
										</span>
									)}
								</div>
							</div>

							<div className="my-5">
								<label htmlFor="form-message" className="block text-form">
									Message
								</label>
								<textarea
									className="w-full h-32 p-4 opacity-50 rounded-2xl lg:h-[201px] text-black"
									// name="massage"
									id="form-message"
									placeholder="Type your Message here..."
									{...register("message", { required: true })}
								/>
								{errors.message?.message && (
									<span className="text-red-500">
										{errors.message?.message}
									</span>
								)}
							</div>

							{isError && (
								<p className="text-red-500">
									Something is wrong. Please try again later!
								</p>
							)}

							<div className="text-center mt-6 lg:text-right">
								<Button onClick={handleSubmit(onSubmit)}>SEND Message</Button>
							</div>
						</form>
					</div>
				
				</div>
			</div>
			{/* Show success message on modal window */}
			{!isError && showModal && (
				<MessageModal
					message={modalMessage}
					onClose={() => setShowModal(false)}
				/>
			)}
		</>
	);
};

export default Page;
