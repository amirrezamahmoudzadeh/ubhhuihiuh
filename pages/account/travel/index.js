import Image from "next/image";
import Link from "next/link";
import React from "react";
import QRcode from "../../../components/QR/QRcode";
import Line from "../../../components/icon/Line";
import LineGoldMobile from "../../../components/icon/LineGoldMobile";
import Exclusive from "../../../components/icon/Exclusive";
import MExclusive from "../../../components/icon/MExclusive";
import Regular from "../../../components/icon/Regular";
import MRegular from "../../../components/icon/MRegular";

function index() {
  return (
    <div>
      {/* header */}
      <div className="flex px-lp bg-gradient-to-b from-dark_blue to-white pt-xl pb-[100px] justify-center items-center sm:px-sp sm:flex-col sm:pb-xl tablet:px-sp tablet:pt-none tablet:pb-4xl xl:px-res">
        <div className=" w-[50%] sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/balloon-travel.png"}
            alt="mobileChild"
            layout="fixed"
            width={477}
            height={511}
            objectFit="cover"
          />
        </div>
        <div className="hidden w-[100%] sm:flex ml-xl ">
          <Image
            src={"/assets/images/mobile-travel-ballon.png"}
            alt="mobile-travel-ballon"
            layout="fixed"
            width={158}
            height={193}
            objectFit="cover"
          />
        </div>
        <div className=" w-[40%] hidden  tablet:flex ml-xl ">
          <Image
            src={"/assets/images/TBallon.png"}
            alt="TBallon"
            layout="fixed"
            width={243}
            height={295}
            objectFit="cover"
          />
        </div>
        <div className=" w-[50%] flex flex-col sm:w-[100%] mt-5xl sm:mt-xl tablet:w-[50%]">
          <div>
            <h2 className=" w-[100%] text-4xl text-primary_color font-bold leading-3xl sm:leading-med_loss sm:text-pgf tablet:text-xl">
              سفر رفتن به پس انداز نیاز دارد.
            </h2>

            <p className=" text-ft text-dark_gray my-mm sm:text-med sm:leading-lg_loss sm:text-dark_primary sm:text-med tablet:text-base">
              به صورت اختصاصی برای مسافرت‌هایتان پس‌انداز کنید.
            </p>
          </div>
          <div className=" flex items-center sm:hidden justify-end tablet:ml-2xl">
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
          <div className="hidden sm:flex justify-center	items-center mt-xl">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
      </div>
      {/* work */}
      <div className="overflow-hidden	 flex px-lp  justify-between items-center pt-4xl pb-2xl sm:px-sp sm:flex-col sm:items-start sm:pt-xl sm:pb-lm xl:px-res tablet:px-sp tablet:pt-none">
        <div className="w-[40%] sm:w-[100%] sm:max-w-[360px]">
          <h2 className="text-lg text-dark_primary font-bold mb-xl ">
            <p className="sm:hidden tablet:hidden">
              حساب سرمایه‌گذاری برای سفر چگونه
            </p>
            <p className="sm:hidden tablet:hidden">کار می‌کند؟</p>
            <p className="sm:flex text-base text-dark_primary font-bold tablet:text-ft">
              حساب سرمایه گذاری برای سفر چگونه کار می کند؟
            </p>
          </h2>
          <p className="text-tiny text-dark_primary leading-leading_relaxed sm:text-med sm:leading-xl_loss tablet:text-med">
            مقصد سفر خود را مشخص کنید و به ما بگویید تمایل دارید برای آن‌ ماهانه
            چه مقدار پس‌انداز کنید. ما بر اساس سلایقتان به شما می‌گوییم چگونه
            سرمایه‌گذاری کنید تا بتوانید سریع‌تر به مسافرت مورد نظرتان بروید.
          </p>
        </div>
        <div className="w-[50%]  sm:hidden tablet:hidden">
          <div>
            <Image
              src={"/assets/images/mobile-travel.png"}
              alt="mobileChild"
              layout="fixed"
              width={636}
              height={413}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="hidden tablet:flex justify-center mt-xl">
          <Image
            src={"/assets/images/tablet-travel.png"}
            alt="mobileChild"
            layout="fixed"
            width={373}
            height={242}
            objectFit="cover"
          />
        </div>
        <div className="hidden  justify-center w-[100%] hidden sm:flex mt-xl">
          <Image
            src={"/assets/images/m-travel2.png"}
            alt="mobileChild"
            layout="fixed"
            width={360}
            height={234}
            objectFit="cover"
          />
        </div>
      </div>
      {/* new word */}
      <div className="overflow-hidden flex px-lp justify-between items-center mt-tiny sm:flex-col sm:items-start sm:px-sp xl:px-res tablet:px-sp">
        <div className="w-[520px] tablet:w-[330px] sm:w-[100%]  flex flex-col sm:items-center sm:order-2 sm:mt-tiny">
          <div className="sm:w-[500px] sm:max-w-[292px] flex justify-between items-end">
            <div className="sm:hidden overflow-hidden	rounded-sm tablet:hidden">
              <Image
                src={"/assets/images/travel2.png"}
                alt="mobileChild"
                layout="fixed"
                width={243}
                height={270}
                objectFit="cover"
              />
            </div>
            <div className="sm:hidden tablet:hidden">
              <Image
                src={"/assets/images/travel1.png"}
                alt="mobileChild"
                layout="fixed"
                width={250}
                height={334}
                objectFit="cover"
              />
            </div>
            {/* mobile */}
            <div className="hidden sm:flex overflow-hidden	rounded-sm 	">
              <Image
                src={"/assets/images/mTravel1.png"}
                alt="mobileChild"
                layout="fixed"
                width={122}
                height={142}
                objectFit="cover"
              />
            </div>
            <div className="hidden sm:flex">
              <Image
                src={"/assets/images/mTravel2.png"}
                alt="mobileChild"
                layout="fixed"
                width={154}
                height={201}
                objectFit="cover"
              />
            </div>
            {/* tablet */}
            <div className="hidden tablet:flex overflow-hidden	rounded-sm 	">
              <Image
                src={"/assets/images/tab11.png"}
                alt="mobileChild"
                layout="fixed"
                width={137}
                height={222}
                objectFit="cover"
              />
            </div>
            <div className="hidden tablet:flex">
              <Image
                src={"/assets/images/tab22.png"}
                alt="mobileChild"
                layout="fixed"
                width={176}
                height={272}
                objectFit="cover"
              />
            </div>
          </div>
          <div className=" w-[100%] sm:w-[500px] sm:max-w-[292px] flex justify-between items-start mt-mm">
            <div className="sm:hidden overflow-hidden	rounded-sm tablet:hidden">
              <Image
                src={"/assets/images/travel4.png"}
                alt="mobileChild"
                layout="fixed"
                width={300}
                height={356}
                objectFit="cover"
              />
            </div>
            <div className="sm:hidden tablet:hidden">
              <Image
                src={"/assets/images/travel3.png"}
                alt="mobileChild"
                layout="fixed"
                width={193}
                height={285}
                objectFit="cover"
              />
            </div>
            {/* mobile */}
            <div className="hidden sm:flex overflow-hidden	rounded-sm 	">
              <Image
                src={"/assets/images/mTravel3.png"}
                alt="mobileChild"
                layout="fixed"
                width={166}
                height={211}
                objectFit="cover"
              />
            </div>
            <div className="hidden sm:flex">
              <Image
                src={"/assets/images/mTravel4.png"}
                alt="mobileChild"
                layout="fixed"
                width={110}
                height={182}
                objectFit="cover"
              />
            </div>
            {/* tablet */}
            <div className="hidden tablet:flex overflow-hidden	rounded-sm 	">
              <Image
                src={"/assets/images/tab33.png"}
                alt="mobileChild"
                layout="fixed"
                width={203}
                height={254}
                objectFit="cover"
              />
            </div>
            <div className="hidden tablet:flex">
              <Image
                src={"/assets/images/tab44.png"}
                alt="mobileChild"
                layout="fixed"
                width={110}
                height={200}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] sm:w-[100%] sm:max-w-[360px] sm:order-1">
          <div className="flex items-center mb-med">
            <div className="sm:hidden tablet:hidden">
              <Line />
            </div>
            <div className="hidden sm:flex tablet:flex">
              <LineGoldMobile />
            </div>
            <h2 className="text-lg text-dark_primary font-bold mr-mm sm:text-base tablet:text-pgf">
              حساب سفر،حسابی جدید در دنیا
            </h2>
          </div>
          <p className="text-base text-Gray900 leading-leading_relaxed sm:text-med tablet:text-med tablet:leading-xl_loss">
            یکی از جدیدترین حساب‌های سرمایه‌گذاری در سطح دنیا‌، حساب سفر است. در
            این حساب امکانات زیر در اختیار سرمایه‌گذار قرار می‌گیرد:
          </p>
          <ul>
            <li className="mb-xl mt-tiny">
              <div className="flex items-center">
                <div className="sm:hidden">
                  <Exclusive />
                </div>
                <div className="hidden sm:flex">
                  <MExclusive />
                </div>
                <h2 className="mr-mm text-ft text-Gray900 font-bold sm:text-med tablet:text-pgf">
                  ترکیب دارایی اختصاصی
                </h2>
              </div>
              <p className="mr-4xl text-base text-Gray900 leading-leading_relaxed sm:text-med sm:mr-2xl tablet:text-med tablet:leading-xl_loss">
                ترکیبی از صندوق‌های سهامی، طلا و درآمد ثابت در دسترس شماست تا
                راحت‌تر سرمایه خود را رشد دهید.
              </p>
            </li>
            <li>
              <div className="flex items-center">
                <div className="sm:hidden">
                  <Regular />
                </div>
                <div className="hidden sm:flex">
                  <MRegular />
                </div>
                <h2 className="mr-mm text-ft text-Gray900 font-bold sm:text-med tablet:text-pgf">
                  پس‌انداز منظم
                </h2>
              </div>
              <p className="mr-4xl text-base text-Gray900 leading-leading_relaxed sm:text-med sm:mr-2xl tablet:text-med tablet:leading-xl_loss">
                به صورت منظم و ماهانه می‌توانید به پس‌انداز خود برای مسافرت‌های
                پیش رو بیفزایید.
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* planning */}
      <div className="overflow-hidden flex px-lp items-center justify-between	mt-[150px] mb-tm sm:px-sp sm:flex-col sm:items-start sm:mt-3xl sm:mb-im xl:px-res tablet:px-sp">
        <div className="w-[40%] sm:w-[100%] sm:max-w-[360px]">
          <h2 className="sm:hidden text-xl text-dark_primary font-bold mb-tiny tablet:hidden">
            شروع برنامه‌ریزی
          </h2>
          <h2 className="hidden sm:flex text-base text-dark_primary font-bold mb-tiny sm:mb-xl tablet:flex tablet:text-ft">
            بررسی یک داستان واقعی
          </h2>
          <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med tablet:text-med">
            <span className="block">
              فرض کنید سفر به ایتالیا ۵۰ میلیون تومان هزینه دارد.
            </span>
            <span className="block">
              اگر از امروز ماهانه ۳ میلیون تومان پس‌انداز کنید و در ترکیب‌دارایی
              اختصاصی خودتان سرمایه‌گذاری کنید، یکسال بعد به ایتالیا سفر
              کرده‌اید.
            </span>
          </p>
        </div>
        <div className="overflow-hidden w-[50%] sm:w-[100%] sm:flex sm:justify-center sm:mt-xl">
          <div className="sm:hidden tablet:hidden">
            <Image
              src={"/assets/images/planning.png"}
              alt="planning"
              layout="fixed"
              width={530}
              height={460}
              objectFit="cover"
            />
          </div>
          <div className="hidden sm:flex">
            <Image
              src={"/assets/images/m-travel3.png"}
              alt="m-travel3"
              layout="fixed"
              width={328}
              height={270}
              objectFit="cover"
            />
          </div>
          <div className="hidden tablet:flex">
            <Image
              src={"/assets/images/travel-story.png"}
              alt="m-travel3"
              layout="fixed"
              width={328}
              height={270}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* information */}
      <div className="flex px-lp py-lm bg-gray items-center sm:px-sp tablet:px-sp tablet:py-none xl:px-res">
        <div className="w-[65%] sm:w-[100%] sm:flex sm:flex-col sm:items-center tablet:w-[50%]">
          <h2 className="text-xl text-primary_color font-bold sm:text-base sm:max-w-[360px] sm:w-[100%] tablet:text-ft">
            برای ماجراجویی‌های تازه سرمایه‌گذاری کنید.
          </h2>
          <div className="hidden sm:flex mt-med">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
        <div className="w-[35%] sm:hidden tablet:w-[45%]">
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
