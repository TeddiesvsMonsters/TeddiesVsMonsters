import React from "react";
import Image from "next/image";
import Button from "./Button";
import monster_img from "@/assets/images/Character_Monster3.png";

const MessageModal = ({ message, onClose }: any) => {
	return (
		<div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center lg:block lg:p-0">
				<div className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 bg-gray-900 opacity-50"></div>
				</div>
				{/* to adjust for a modalwindow place} */}
				<span className="hidden sm:inline-block lg:align-middle lg:h-screen"></span>{" "}
				&#8203;
				<div className="inline-block align-bottom bg-modal-icon bg-right-bottom bg-zinc-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all h-56 lg:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="px-4 py-10 text-center lg:p-6 lg:pb-4">
						<div className="text-center">
							<Image src={monster_img} alt="" className="w-16 mx-auto my-0"/>
						</div>
						<h3 className="mb-3 font-title text-2xl leading-6 font-medium">
							Thank you!
						</h3>
						<p className="mb-3 font-body text-lg leading-5">
							success your {message}!
						</p>
						<div className="mb-5">
							<Button onClick={onClose}>Close</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageModal;
