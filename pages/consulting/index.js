import Image from "next/image";
import React from "react";
import Link from "next/link";

import QRcode from "../../components/QR/QRcode";
import Line from "../../components/icon/Line";
import LineGoldMobile from "../../components/icon/LineGoldMobile";
import Steps1 from "../../components/icon/Steps1";
import Steps2 from "../../components/icon/Steps2";
import Steps3 from "../../components/icon/Steps3";
import Activity from "../../components/icon/Activity";
import MActivity from "../../components/icon/MActivity";
import Boxs from "../../components/icon/Boxs";
import MBoxs from "../../components/icon/MBoxs";
import Customer from "../../components/icon/Customer";
import MCustomer from "../../components/icon/MCustomer";
import Rank from "../../components/icon/Rank";
import MRank from "../../components/icon/MRank";
import Power from "../../components/icon/Power";
import MPower from "../../components/icon/MPower";

function index() {
  return (
    <div>
      {/* header */}
      <div className="overflow-hidden relative h-[700px] sm:h-auto tablet:h-auto">
        <div className="xl:hidden overflow-hidden sm:hidden tablet:hidden absolute top-0 left-0">
          <Image
            src={"/assets/images/consulting.png"}
            alt="mobileChild"
            layout="fixed"
            width={1400}
            height={700}
            objectFit="cover"
          />
        </div>
        <div className="hidden xl:flex overflow-hidden sm:hidden  absolute top-0 left-0">
          <Image
            src={"/assets/images/consulting.png"}
            alt="mobileChild"
            layout="fixed"
            width={1260}
            height={700}
            objectFit="cover"
          />
        </div>
        <div className="hidden tablet:flex overflow-hidden  ">
          <Image
            src={"/assets/images/tablet-consulting.png"}
            alt="mobileChild"
            layout="fixed"
            width={1100}
            height={526}
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:flex overflow-hidden  ">
          <Image
            src={"/assets/images/mobile-consulting.png"}
            alt="mobileChild"
            layout="fixed"
            width={659}
            height={513}
            objectFit="cover"
          />
        </div>
        <div className=" w-[55%] flex flex-col sm:w-[100%] mt-5xl absolute top-[15%] right-0 px-lp sm:px-sp sm:w-[100%] sm:top-[60%] tablet:top-[8%] tablet:px-sp xl:px-res">
          <div className="sm:hidden">
            <h2 className="sm:hidden w-[100%] text-4xl text-primary_color font-bold leading-3xl sm:text-base tablet:text-lg">
              مشاوره سرمایه‌گذاری
            </h2>

            <p className="w-[100%]  sm:hidden text-ft text-dark_primary my-mm sm:text-med sm:leading-lg_loss sm:text-dark_primary xl:w-[80%] tablet:text-pgf">
              با دانلود اپلیکیشن داران با مشاوران حرفه‌ای سرمایه‌گذاری در ارتباط
              باشید.
            </p>
          </div>
          <div className=" flex items-center sm:hidden justify-end xl:ml-tm ">
            <p className="text-primary_color text-base my-tiny leading-leading_relaxed ml-xl tablet:text-med">
              <span className="block ">
                برای دانلود اپلیکیشن،از طریق تلفن همراه
              </span>
              <span className="block ">خود، تصویر روبرو را اسکن کنید.</span>
            </p>
            <div className="w-[96px] h-[96px] relative tablet:w-[70px] tablet:h-[70px]">
              <QRcode />
            </div>
          </div>
          <div className="hidden sm:flex justify-center	items-center mt-xl ">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
        {/* mobile-text */}
        <div className="hidden sm:flex flex-col absolute top-[5%] right-[3%]">
          <h2 className="text-pgf text-primary_color font-bold mb-xl">
            مشاوره سرمایه‌گذاری
          </h2>
          <p className="text-med text-dark_primary font-bold">
            با دانلود اپلیکیشن داران با مشاوران حرفه‌ای سرمایه‌گذاری در ارتباط
            باشید.
          </p>
        </div>
      </div>
      {/* consulting */}
      <div className="overflow-hidden flex justify-between px-lp items-center sm:px-none sm:flex-col sm:items-start tablet:px-none xl:px-res">
        <div className=" w-[40%] sm:w-[100%] sm:px-sp tablet:px-sp sm:max-w-[360px]">
          <h2 className="text-xl text-dark_primary font-bold mb-xl sm:text-base sm:mb-mm sm:mt-tiny tablet:text-ft">
            مشاوره سرمایه‌گذاری
          </h2>
          <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med tablet:text-med">
            <span className="block">
              فرض کنید ۱ میلیارد در بورس سرمایه گذاری کرده اید.در این صورت
              سرمایه شما می تواند روزانه تا ۵۰ میلیون تومان بالا برود یا ۵۰
              میلیون تومان به ارزش آن کاسته شود.
            </span>
            <span className="block">
              تیمی از بهترین مشاوران شرکت های سرمایه گذاری برای اولین بار آماده
              اند تا فرآیند سرمایه گذاری شما را تحت نظر بگیرند و شما را به یک
              سرمایه گذاری اصولی راهنمایی کنند.
            </span>
          </p>
        </div>
        <div className="sm:hidden tablet:hidden w-[50%] flex justify-center ">
          <div className=" w-[390px] h-[600px] relative ">
            <div className="z-50 relative">
              <Image
                src={"/assets/images/consulting-page.png"}
                alt="mobileChild"
                layout="fixed"
                width={390}
                height={600}
                objectFit="cover"
              />
            </div>

            <div className="absolute	top-[32%] right-[85%]">
              <Image
                src={"/assets/images/circle1.png"}
                alt="mobileChild"
                layout="fixed"
                width={100}
                height={200}
                objectFit="cover"
              />
            </div>
            <div className="absolute	top-0 left-[50%]">
              <Image
                src={"/assets/images/circle2.png"}
                alt="mobileChild"
                layout="fixed"
                width={100}
                height={120}
                objectFit="cover"
              />
            </div>
            <div className="absolute	bottom-[-8px] right-[69%]">
              <Image
                src={"/assets/images/circle3.png"}
                alt="mobileChild"
                layout="fixed"
                width={200}
                height={68}
                objectFit="cover"
              />
            </div>
            <div className="absolute	top-[60%] left-[70%]">
              <Image
                src={"/assets/images/circle4.png"}
                alt="mobileChild"
                layout="fixed"
                width={201}
                height={101}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        {/* mobile image */}
        <div className="overflow-hidden	hidden sm:flex w-[50%] flex justify-center sm:w-[100%] mt-tiny">
          <div className=" w-[326px] h-[512px] relative ">
            <div className="z-50 relative">
              <Image
                src={"/assets/images/consulting-human.png"}
                alt="mobileChild"
                layout="fixed"
                width={326}
                height={494}
                objectFit="cover"
              />
            </div>

            <div className="absolute	top-[32%] right-[85%]">
              <Image
                src={"/assets/images/mCircle1.png"}
                alt="mobileChild"
                layout="fixed"
                width={48}
                height={118}
                objectFit="cover"
              />
            </div>
            <div className="absolute	top-0 left-[50%]">
              <Image
                src={"/assets/images/mCircle2.png"}
                alt="mobileChild"
                layout="fixed"
                width={58}
                height={99}
                objectFit="cover"
              />
            </div>
            <div className="absolute	bottom-[-8px] right-[69%]">
              <Image
                src={"/assets/images/mCircle3.png"}
                alt="mobileChild"
                layout="fixed"
                width={130}
                height={59}
                objectFit="cover"
              />
            </div>
            <div className="absolute	top-[60%] left-[70%]">
              <Image
                src={"/assets/images/mCircle4.png"}
                alt="mobileChild"
                layout="fixed"
                width={117}
                height={59}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        {/* tablet image */}
        <div className="overflow-hidden	hidden tablet:flex w-[50%] flex justify-center sm:w-[100%] sm:mt-tiny">
          <div className=" w-[239px] h-[367px] relative ">
            <div className="z-50 relative">
              <Image
                src={"/assets/images/tablet-human.png"}
                alt="tablet-human"
                layout="fixed"
                width={239}
                height={367}
                objectFit="cover"
              />
            </div>

            <div className="absolute	top-[32%] right-[85%]">
              <Image
                src={"/assets/images/TCircle1.png"}
                alt="mobileChild"
                layout="fixed"
                width={52}
                height={104}
                objectFit="cover"
              />
            </div>
            <div className="absolute	top-[-5%] left-[50%]">
              <Image
                src={"/assets/images/TCircle2.png"}
                alt="mobileChild"
                layout="fixed"
                width={52}
                height={104}
                objectFit="cover"
              />
            </div>
            <div className="absolute	bottom-[-8px] right-[75%]">
              <Image
                src={"/assets/images/TCircle3.png"}
                alt="mobileChild"
                layout="fixed"
                width={104}
                height={49}
                objectFit="cover"
              />
            </div>
            <div className="absolute	top-[60%] left-[70%]">
              <Image
                src={"/assets/images/TCircle4.png"}
                alt="mobileChild"
                layout="fixed"
                width={104}
                height={49}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* advice items */}
      <div className="bg-gray px-lp py-2xl sm:px-sp sm:py-xl xl:px-res tablet:px-sp">
        <h2 className="text-center	text-dark_gray text-xl mb-im sm:text-base sm:mb-med tablet:text-pgf">
          موارد مشاوره
        </h2>
        <ul className="flex  w-[100%] justify-between gap-1 sm:flex-col">
          <li className="flex items-center flex-1 sm:mb-mm">
            <Steps1 />
            <h2 className="text-dark_primary text-ft font-bold mr-lm sm:text-med tablet:text-pgf">
              تعیین هدف و مدت زمان سرمایه‌گذاری با توجه به وضعیت دارایی
            </h2>
          </li>
          <li className="flex items-center  flex-1 sm:mb-mm">
            <Steps2 />
            <h2 className="text-dark_primary text-ft font-bold mr-lm sm:text-med tablet:text-pgf">
              مشخص شدن سطح ریسک پذیری شما در بازارهای سرمایه
            </h2>
          </li>
          <li className="flex items-center flex-1 sm:mb-mm">
            <Steps3 />
            <h2 className="text-dark_primary text-ft font-bold mr-lm sm:text-med tablet:text-pgf">
              بررسی و پیشنهاد ترکیب دارایی بهینه
            </h2>
          </li>
        </ul>
      </div>
      {/* meyar */}
      <div className="px-lp py-4xl sm:px-sp sm:py-xl tablet:px-sp xl:px-res">
        <div className="flex items-center mb-im">
          <div className="sm:hidden tablet:hidden">
            <Line />
          </div>
          <div className="hidden sm:flex tablet:flex">
            <LineGoldMobile />
          </div>
          <h2 className="mr-mm text-xl text-dark_primary font-bold sm:text-base tablet:text-pgf">
            شرکت مشاوره سرمایه گذاری معیار
          </h2>
        </div>
        <div className="flex justify-between sm:flex-col">
          <div className="w-[50%] sm:w-[100%]">
            <div className="sm:hidden tablet:hidden">
              <Image
                src={"/assets/images/meyar.png"}
                alt="meyar"
                layout="fixed"
                width={500}
                height={240}
                objectFit="cover"
              />
            </div>
            <div className="hidden tablet:flex">
              <Image
                src={"/assets/images/tablet-meyar.png"}
                alt="meyar"
                layout="fixed"
                width={373}
                height={199}
                objectFit="cover"
              />
            </div>
            <div className="hidden sm:flex justify-center	">
              <Image
                src={"/assets/images/mobile-meyar.png"}
                alt="mobile-meyar"
                layout="fixed"
                width={328}
                height={185}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-[47%] sm:w-[100%] sm:flex sm:justify-center sm:mt-xl mr-lm">
            <ul className="sm:w-[100%] sm:max-w-[360px] flex flex-wrap justify-between items-center">
              <li className="w-[48%]  flex items-center mb-xl">
                <div className="sm:hidden">
                  <Customer />
                </div>
                <div className="hidden sm:flex">
                  <MCustomer />
                </div>
                <h2 className="mr-mm sm:mr-sm">
                  <p className="text-lg text-dark_primary font-bold sm:text-med tablet:text-base">
                    ۲۱۸ مشتری
                  </p>
                  <p className="text-base text-dark_primary sm:text-med tablet:text-med">
                    فعال اقتصادی
                  </p>
                </h2>
              </li>
              <li className="w-[48%]  flex items-center mb-xl">
                <div className="sm:hidden">
                  <Activity />
                </div>
                <div className="hidden sm:flex">
                  <MActivity />
                </div>
                <h2 className="mr-mm sm:mr-sm">
                  <p className="text-lg text-dark_primary font-bold sm:text-med tablet:text-base">
                    ۱۱ سال
                  </p>
                  <p className="text-base text-dark_primary sm:text-med tablet:text-med">
                    فعالیت اقتصادی
                  </p>
                </h2>
              </li>
              <li className="w-[48%]  flex items-center mb-xl">
                <div className="sm:hidden">
                  <Power />
                </div>
                <div className="hidden sm:flex">
                  <MPower />
                </div>
                <h2 className="mr-mm sm:mr-sm">
                  <p className="text-lg text-dark_primary font-bold sm:text-med tablet:text-base">
                    ۴۳ نفر
                  </p>
                  <p className="text-base text-dark_primary sm:text-med tablet:text-med">
                    نیروی انسانی
                  </p>
                </h2>
              </li>
              <li className="w-[48%]  flex items-center mb-xl">
                <div className="sm:hidden">
                  <Rank />
                </div>
                <div className="hidden sm:flex">
                  <MRank />
                </div>
                <h2 className="mr-mm sm:mr-sm">
                  <p className="text-lg text-dark_primary font-bold sm:text-med tablet:text-base">
                    ۲ سال رتبه نخست
                  </p>
                  <p className="text-base text-dark_primary sm:text-med tablet:text-med">
                    سبد گردانی در کشور
                  </p>
                </h2>
              </li>
              <li className="w-[48%]  flex items-center ">
                <div className="sm:hidden">
                  <Boxs />
                </div>
                <div className="hidden sm:flex">
                  <MBoxs />
                </div>
                <h2 className="mr-mm sm:mr-[6px]">
                  <p className="text-lg text-dark_primary font-bold sm:text-med tablet:text-base">
                    +۱۸۰۰۰ نفر
                  </p>
                  <p className="text-base text-dark_primary sm:text-med tablet:text-med">
                    سرمایه گذار در صندوق ها
                  </p>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* information */}
      <div className="flex px-lp py-lm bg-light_green items-center sm:px-sp tablet:px-sp xl:px-res">
        <div className="w-[65%] sm:w-[100%] sm:flex sm:flex-col sm:items-center tablet:w-[50%]">
          <h2 className="text-xl text-primary_color font-bold sm:text-base sm:max-w-[360px] sm:w-[100%] tablet:text-ft sm:text-center	">
            با کمک داران،اصولی سرمایه‌گذاری کنید.
          </h2>
          <div className="hidden sm:flex mt-med">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
        <div className="w-[35%] sm:hidden tablet:w-[50%]">
          <div className=" flex items-center sm:hidden justify-end ">
            <p className="text-primary_color text-base my-tiny leading-leading_relaxed ml-xl tablet:text-med tablet:ml-mm tablet:w-[50%]">
              <span className="block tablet:hidden">
                برای دانلود اپلیکیشن،از طریق تلفن همراه
              </span>
              <span className="block tablet:hidden">
                خود، تصویر روبرو را اسکن کنید.
              </span>
              <span className="hidden tablet:flex">
                برای دانلود اپلیکیشن، از طریق تلفن همراه خود، تصویر روبرو را
                اسکن کنید.
              </span>
            </p>
            <div className="w-[96px] h-[96px] relative tablet:w-[60px] tablet:h-[60px]">
              <QRcode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
