import React from "react";
import axios from "axios";
import Link from "next/link";
import Clock from "../../../components/icon/Clock";
import ChevronRight from "../../../components/icon/ChevronRight";
import LineGrey from "../../../components/icon/LineGrey";
import MLineGray from "../../../components/icon/MLineGray";
import Chevron from "../../../components/icon/Chevron";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../../data";

function index() {
  const router = useRouter();
  const pId = router.query.id;
  const posts = data.Stories?.filter((stoty) => stoty.id == pId);
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-gray px-lp py-4xl sm:px-none sm:py-pp tablet:px-sp xl:px-res"
        >
          <div className="flex flex-col bg-white py-xl px-sp">
            <div className="flex sm:flex-col">
              <div className="overflow-hidden w-[45%] sm:w-[100%]">
                <h2 className="text-xl text-primary_color font-bold mb-tm sm:text-base sm:mb-mm tablet:text-lg">
                  سرمایه گذاری
                </h2>
                <Clock />
                <div className="overflow-hidden	my-mm w-[320px] iam:w-[320px] imo:w-[240px] sm:w-[320px]  h-[200px] sm:w-auto sm:h-[190px] relative">
                  <Image
                    src={post.image}
                    alt="post"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-[55%] sm:w-[100%]">
                <div>
                  <div className="flex items-center mb-med sm:mb-mm">
                    <div className="sm:hidden">
                      <LineGrey />
                    </div>
                    <div className="hidden sm:block">
                      <MLineGray />
                    </div>
                    <h2 className="text-ft text-primary_color font-bold mr-lm sm:text-med">
                      {post.title}
                    </h2>
                  </div>
                  <h2 className="text-tiny leading-leading_relaxed text-dark_primary sm:text-med tablet:text-pgf">
                    {post.information}
                  </h2>
                  {post.informations?.map((information, index) => (
                    <p
                      key={index}
                      className="text-tiny leading-leading_relaxed text-dark_primary sm:text-med tablet:text-tiny"
                    >
                      {information.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-xl">
              <Link href={`http://localhost:3000/education`}>
                <button className="flex">
                  <ChevronRight />
                  <span className="text-base text-primary_color mr-lm sm:text-med sm:mr-sm">
                    بازگشت به آموزش
                  </span>
                </button>
              </Link>
              <Link href={`http://localhost:3000/education/tale/` + post.ID}>
                <button className="btn-cart flex sm:hidden">
                  <span className="ml-mm sm:text-med sm:ml-lm">
                    {post.text}
                  </span>
                  <Chevron />
                </button>
              </Link>
              <Link href={`http://localhost:3000/education/tale/` + post.ID}>
                <button className="btn-cart hidden sm:flex">
                  <span className="ml-mm sm:text-med sm:ml-lm">
                    {post.text}
                  </span>
                  <Chevron />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default index;
