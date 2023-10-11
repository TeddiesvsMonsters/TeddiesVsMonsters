"use client";

import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Disclosure } from "@headlessui/react";
import PageTitleBanner from '@/components/PageTitleBanner'

function page() {
  const defaultOpen = true;
  return (
    <div className="bg-black">
      <PageTitleBanner subtract={false} bgImg={false} line={true}>Faq</PageTitleBanner>
      <div className="container mx-auto py-10">
          {ccordionData.map(
            (accordionDatas, index: React.Key | null | undefined) => (
              <div key={index} className=" w-full py-5 px-10">
                <div className="mx-auto w-full rounded-md bg-white">
                  <Disclosure
                    as={"div"}
                    defaultOpen={index === 0 ? defaultOpen : false}
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between p-5 text-left text-xl text-black border-b rounded-md">
                          <span>{accordionDatas.title}</span>
                          <IoIosArrowUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black">
                          {accordionDatas.content}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            )
          )}
        </div>
      </div>
  );
}

export default page;

const ccordionData = [
  {
    title: "What is Teddies vs Monsters",
    content:
      "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
  },
  {
    title: "How to play Teddies vs Monsters game board",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi dolor natus earum exercitationem asperiores itaque perspiciatis tenetur repellendus odit ut nulla beatae nostrum architecto maxime magnam est, pariatur enim.",
  },
  {
    title: "Mobile app Teddies vs Monsters",
    content:
      "This is just a dummy text that has been inserted as a placeholder for future content. While it may seem insignificant at first glance, the use of dummy text is a common practice in the design and publishing industry, as it allows designers and developers to visualize the layout and overall aesthetic of a project without being distracted by the actual content.",
  },
  {
    title: "Where can I buy Teddies vs Monsters",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi dolor natus earum exercitationem asperiores itaque perspiciatis tenetur repellendus odit ut nulla beatae nostrum architecto maxime magnam est, pariatur enim.",
  },

  {
    title: "How does Teddies vs Monsters privacy policy works?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi dolor natus earum exercitationem asperiores itaque perspiciatis tenetur repellendus odit ut nulla beatae nostrum architecto maxime magnam est, pariatur enim.",
  },
];
