import Button from "@/components/Button";
import PageTitleBanner from '@/components/PageTitleBanner'
import Line from "@/components/Line";

const Page = () => {
	return (
		<div className="bg-black">
			<PageTitleBanner subtract={false} bgImg={false} line={true}>Track order</PageTitleBanner>
			<div className="container mx-auto pb-[3rem] pt-[3rem]">
				<div className="bg-zinc-400 rounded-2xl text-white w-11/12 md:w-3/4 h-[275px] p-5 mx-auto mb-20">
					<div className="bg-trackOrder-pc bg-no-repeat rounded-2xl py-6 w-full h-36 bg-cover text-center">
						<div className="flex flex-row justify-center items-center gap-3 mb-2">
							<h2 className="text-base font-semibold leading-9 sm:text-2xl h-9">
								Type your tracking code
							</h2>
							<div className="w-[24px] h-[24px] rounded-3xl bg-white bg-opacity-50 relative">
								<div className="absolute	top-1 right-1	border border-white rounded-2xl w-[16px] h-[16px] text-white">
									<div className="text-xs absolute top-0 right-0 left-0 bottom-0 border-white">
										?
									</div>
								</div>
							</div>
						</div>
						<input
							type="text"
							placeholder="Insert Tracking Code Here..."
							className="placeholder:text-base opacity-75 text-xl text-black rounded px-2 py-4 h-9"
						/>
					</div>

					<div className="mt-6 flex justify-center w-full gap-3">
						<div>
							<button className="border border-white p-2 rounded uppercase font-btn text-center text-base md:text-2xl md:px-3 md:py-2">
								LOG IN
							</button>
						</div>
						<Button>TRACK ORDER</Button>
					</div>
				</div>
				<Line />
			</div>
		</div>
	);
};

export default Page;
