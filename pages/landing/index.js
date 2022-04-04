import React from "react";
import LanSib from "../../components/icon/LanSib";
// import BBBazar from "../../components/icon/BBBazar";
import GGoogle from "../../components/icon/GGoogle";
import Link from "next/link";
import Image from "next/image";
function index() {
  return (
    <div className="overflow-hidden h-screen bg-primary_color relative ">
      <h2 className="text-center text-xl text-white font-bold absolute top-[15%] left-[50%] z-40	translate-x-[-50%] sm:top-[10%] dap:text-ft">
        دانلود اپلیکیشن داران
      </h2>
      <div className="overflow-hidden absolute top-0 left-0">
        <Image
          src={"/assets/images/D.png"}
          alt="savingTable"
          layout="fixed"
          width={760}
          height={630}
          objectFit="cover"
        />
      </div>
      <div className="h-[100%] flex">
        <div className="w-[732px] h-[255px] bg-light_black absolute absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-3xl px-4xl sm:w-auto">
          <p className="text-white text-base mb-med dap:text-med">
            برای دانلود و نصب اپلیکیشن داران، به لینک‌های زیر مراجعه کنید.
          </p>
          <div className="flex justify-around mbm:flex-col	">
            <Link href="https://sibapp.com/applications/Daran">
              <a target="_blank" className="mb-mm">
                <LanSib />
              </a>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.daraninvest.daran.b2c&hl=fa&referrer=utm_source%3Dorganic%26utm_medium%3Dlanding">
              <a target="_blank">
                <GGoogle />
              </a>
            </Link>
            {/* <BBBazar /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
