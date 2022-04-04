import Image from "next/image";
import Link from "next/link";
import React from "react";
import Line from "../../../components/icon/Line";
import LineGoldMobile from "../../../components/icon/LineGoldMobile";
import Dashed from "../../../components/icon/Dashed";
import LineVertical from "../../../components/icon/LineVertical";
import Download from "../../../components/icon/Download";
import MobileDownload from "../../../components/icon/MobileDownload";
import Connection from "../../../components/icon/Connection";
import MobileConnection from "../../../components/icon/MobileConnection";
import Create from "../../../components/icon/Create";
import MobileCreate from "../../../components/icon/MobileCreate";
import Shop from "../../../components/icon/Shop";
import MobileShop from "../../../components/icon/MobileShop";
import RectangleGold from "../../../components/icon/RectangleGold";
import QRcode from "../../../components/QR/QRcode";

function index() {
  return (
    <div>
      {/* header */}
      <div className="overflow-hidden	h-[571px] flex bg-oldlace px-lp items-center	sm:h-auto sm:px-none sm:flex-col tablet:px-sp tablet:h-auto xl:px-res">
        <div className="w-[40%] sm:w-[100%] sm:px-sp sm:mt-xl tablet:w-[50%]">
          <h2 className="text-4xl text-primary_color font-bold sm:text-pgf tablet:text-xxl">
            حساب پس‌انداز
          </h2>
          <p className="text-ft text-dark_primary font-bold mt-xl mb-2xl sm:text-med sm:mt-mm tablet:text-pgf">
            پس‌انداز منظم و مطمئن، با سود ۲۱ درصدی
          </p>
          <div className=" flex items-center sm:hidden ">
            <p className="text-primary_color text-base my-tiny leading-leading_relaxed ml-xl tablet:text-med">
              <span className="block">
                برای دانلود اپلیکیشن،از طریق تلفن همراه
              </span>
              <span className="block">خود، تصویر روبرو را اسکن کنید.</span>
            </p>
            <div className="w-[96px] h-[96px] relative tablet:w-[60px] tablet:h-[60px]">
              <QRcode />
            </div>
          </div>
        </div>
        <div className="w-[60%] sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/table.png"}
            alt="code"
            layout="fixed"
            width={640}
            height={547}
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:flex justify-center">
          <Image
            src={"/assets/images/m-saving-table.png"}
            alt="savingTable"
            layout="fixed"
            width={360}
            height={268}
            objectFit="cover"
          />
        </div>
        <div className="hidden tablet:flex justify-center  tablet:w-[50%]">
          <Image
            src={"/assets/images/tablet-table.png"}
            alt="savingTable"
            layout="fixed"
            width={405}
            height={354}
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:flex justify-center mb-xl">
          <Link href="/landing">
            <button className="mBtn-download text-center">
              دانلود اپلیکیشن
            </button>
          </Link>
        </div>
      </div>
      {/* account */}
      <div className="overflow-hidden flex px-lp justify-between my-tm items-center sm:px-sp sm:my-xl sm:flex-col tablet:px-sp   tablet:items-start xl:px-res">
        <div className="w-[60%] sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/m-account-saving.png"}
            alt="saving"
            layout="fixed"
            width={580}
            height={425}
            objectFit="cover"
          />
        </div>
        <div className="hidden w-[60%]  tablet:flex">
          <Image
            src={"/assets/images/tablet-mockt.png"}
            alt="saving"
            layout="fixed"
            width={373}
            height={265}
            objectFit="cover"
          />
        </div>
        <div className="w-[38%]  sm:w-[100%] sm:flex sm:flex-col  tablet:w-[40%]">
          <div className="flex items-center mb-2xl sm:mb-mm sm:max-w-[360px] sm:w-[100%] tablet:mb-med">
            <Line className="sm:hidden tablet:hidden" />
            <LineGoldMobile className="hidden sm:flex tablet:flex" />
            <h2 className="text-xl text-Gray900 font-bold mr-lm sm:text-base tablet:text-pgf">
              حساب پس‌انداز چیست؟
            </h2>
          </div>

          <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med sm:max-w-[360px] sm:[w-100%] tablet:text-base leading-normal_loos">
            می‌توانید ماهانه قسمتی از درآمد خود را به این حساب منتقل کنید. پشت
            این حساب، صندوق درآمد ثابت امین آشنا ایرانیان قرار دارد و بیش از ۶
            هزار میلیارد تومان را مدیریت می‌کند. سود این حساب در حال حاضر ۲۱
            درصد است.
          </p>
        </div>
        <div className="hidden sm:flex justify-center mt-tiny">
          <Image
            src={"/assets/images/mobile-mockt.png"}
            alt="saving"
            layout="fixed"
            width={328}
            height={231.47}
            objectFit="cover"
          />
        </div>
      </div>
      {/* Create account */}
      <div className="bg-gray px-lp py-2xl sm:px-sp sm:py-pp tablet:px-sp xl:px-res">
        <h2 className="text-center text-primary_color text-xl font-bold sm:text-base">
          مراحل ساخت حساب پس‌انداز
        </h2>
        <ul className="flex justify-between mt-im sm:mt-med sm:flex-col sm:items-center ">
          <li className="w-[24%] sm:max-w-[360px] sm:w-[100%] sm:text-center">
            <div className="flex items-center sm:justify-center	">
              <Download className="sm:hidden" />
              <MobileDownload className="hidden sm:flex" />
              <Dashed className="mr-mm w-[60%] sm:hidden tmd:w-[50%] md:w-[40%]" />
            </div>
            <h2 className="text-ft text-dark_primary font-bold mt-mm mb-lm sm:text-med tablet:text-base">
              دانلود اپلیکیشن
            </h2>
            <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med tablet:text-med">
              اپلیکیشن داران را دانلود کنید.
            </p>
            <div className="hidden sm:flex justify-center">
              <LineVertical />
            </div>
          </li>
          <li className="w-[24%] sm:max-w-[360px] sm:w-[100%] sm:text-center">
            <div className="flex items-center sm:justify-center">
              <Connection className="sm:hidden" />
              <MobileConnection className="hidden sm:flex" />
              <Dashed className="mr-mm w-[60%] sm:hidden tmd:w-[50%] md:w-[40%]" />
            </div>
            <h2 className="text-ft text-dark_primary font-bold mt-mm mb-lm sm:text-med tablet:text-base">
              اتصال به سجام
            </h2>
            <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med tablet:text-med">
              سجام را به حساب داران خود متصل کنید.
            </p>
            <div className="hidden sm:flex justify-center">
              <LineVertical />
            </div>
          </li>
          <li className="w-[24%] sm:max-w-[360px] sm:w-[100%] sm:text-center">
            <div className="flex items-center sm:justify-center">
              <Create className="sm:hidden" />
              <MobileCreate className="hidden sm:flex" />
              <Dashed className="mr-mm w-[60%] sm:hidden tmd:w-[50%] md:w-[40%]" />
            </div>
            <h2 className="text-ft text-dark_primary font-bold mt-mm mb-lm sm:text-med tablet:text-base">
              ساخت حساب پس انداز
            </h2>
            <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med tablet:text-med">
              پس از اتصال به سجام، حساب شما ساخته خواهد شد.
            </p>
            <div className="hidden sm:flex justify-center">
              <LineVertical />
            </div>
          </li>
          <li className="w-[24%] sm:max-w-[360px] sm:w-[100%] sm:text-center">
            <div className="flex items-center sm:justify-center">
              <Shop className="sm:hidden" />
              <MobileShop className="hidden sm:flex" />
            </div>
            <h2 className="text-ft text-dark_primary font-bold mt-mm mb-lm sm:text-med tablet:text-base">
              خرید واحد‌های صندوق درآمد ثابت
            </h2>
            <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med tablet:text-med">
              واحدها را از صندوق درآمد ثابت امین آشنا خریداری کنید.
            </p>
          </li>
        </ul>
      </div>
      {/* advantages */}
      <div className="overflow-hidden flex justify-between px-lp pt-4xl sm:px-sp sm:flex sm:flex-col sm:items-center sm:pt-xl sm:mb-med tablet:px-sp xl:px-res">
        <div className="w-[40%] flex flex-col justify-center sm:w-[100%] tablet:w-[50%]">
          <h2 className="text-xl text-primary_color font-bold mb-2xl sm:text-base tablet:text-ft">
            مزايا حساب پس‌انداز
          </h2>
          <ul className="sm:max-w-[360px] sm:w-[100%] sm:mb-xl">
            <li className="mb-tiny sm:mb-xl">
              <div className="flex items-center">
                <RectangleGold />
                <h2 className="text-ft text-dark_primary font-bold mr-lm mb-sm  sm:text-med tablet:text-ft">
                  سود روز شمار ۲۱ درصدی
                </h2>
              </div>
              <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med sm:leading-xl_loss tablet:text-med tablet:leading-xl_loss">
                با پس‌انداز پول خود حتی به مدت یک هفته، از سود روز‌شمار ۲۱ درصدی
                بهره‌مند خواهید شد.
              </p>
            </li>
            <li className="mb-tiny sm:mb-xl ">
              <div className="flex items-center">
                <RectangleGold />
                <h2 className="text-ft text-dark_primary font-bold mr-lm mb-sm sm:text-med tablet:text-ft">
                  امکان برداشت آنی
                </h2>
              </div>
              <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med sm:leading-xl_loss tablet:text-med tablet:leading-xl_loss">
                پس از گذشت ۲۴ ساعت کاری از ثبت درخواست، مبلغ مورد نظر به حساب
                سجامی شما واریز خواهد شد.
              </p>
            </li>
            <li className="mb-tiny sm:mb-xl">
              <div className="flex items-center">
                <RectangleGold />
                <h2 className="text-ft text-dark_primary font-bold mr-lm mb-sm sm:text-med tablet:text-ft tablet:mb-none">
                  سود روز شمار ۲۱ درصدی
                </h2>
              </div>
              <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med sm:leading-xl_loss tablet:text-med tablet:leading-xl_loss">
                در قسمت دارایی حساب پس‌انداز، می‌توانید نمودار دارایی خود را به
                صورت لحظه‌ای مشاهده کنید.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-end	sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/PhoneMockup.png"}
            alt="PhoneMockup"
            layout="fixed"
            width={440}
            height={484}
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:flex justify-center px-sp">
          <Image
            src={"/assets/images/mobile-Phone Mockup.png"}
            alt="Phone"
            layout="fixed"
            width={300}
            height={332}
            objectFit="cover"
          />
        </div>
        <div className=" w-[50%] hidden justify-end tablet:flex pl-none ">
          <div className="overflow-hidden flex ">
            <Image
              src={"/assets/images/tablet-phone-mockup.png"}
              alt="Phone"
              layout="fixed"
              width={374}
              height={420}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* Information */}
      <div className="flex justify-between px-lp py-lm bg-oldlace items-center sm:px-sp tablet:px-sp tablet:py-mp xl:px-res">
        <div className="w-[60%] sm:w-[100%] sm:flex sm:flex-col sm:items-center tablet:w-[50%]">
          <h2 className="text-xl text-primary_color font-bold sm:text-base sm:max-w-[360px] sm:w-[100%] tablet:text-ft">
            راحت تر از همیشه پس‌انداز کنید و همزمان پول خود را در برابر تورم حفظ
            کنید.
          </h2>
          <div className="hidden sm:flex mt-med">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
        <div className="w-[35%] sm:hidden tablet:w-[45%]">
          <div className=" flex items-center sm:hidden justify-end tablet:justify-center  ">
            <p className="text-primary_color text-base my-tiny leading-leading_relaxed ml-xl tablet:text-med tablet:ml-mm tablet:w-[50%] ">
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
            <div className="w-[96px] h-[96px] relative tablet:w-[60px] tablet:h-[60px] tablet:-mt-xl">
              <QRcode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
