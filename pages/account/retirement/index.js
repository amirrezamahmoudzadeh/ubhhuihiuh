import React from "react";
import Image from "next/image";
import Link from "next/link";
import QRcode from "../../../components/QR/QRcode";

function index() {
  return (
    <div>
      {/* header */}
      <div className="overflow-hidden h-[626px] flex px-lp bg-gray relative sm:px-sp sm:h-auto sm:flex-col  tablet:px-sp tablet:h-auto xl:px-res">
        <div className="w-[50%] flex flex-col justify-center mt-4xl sm:w-[100%]  sm:mt-mm  tablet:-mt-lm ">
          <h2 className="text-4xl text-primary_color font-bold leading-3xl sm:leading-leading_relaxed sm:max-w-[360px]  sm:w-[100%] tablet:text-xl ">
            <p className="sm:hidden tablet:hidden">
              با سرمایه گذاری درست، مسیر
            </p>
            <p className="sm:hidden tablet:hidden">
              بازنشستگی خود را کوتاه کنید.
            </p>
            <p className="hidden sm:flex text-pgf tablet:flex tablet:text-xl tablet:leading-2xl">
              با سرمایه‌گذاری درست، مسیر بازنشستگی خود را کوتاه کنید.
            </p>
          </h2>
          <p className="text-pgf text-dark_primary font-bold leading-larg_loops mt-xl mb-im sm:mt-mm sm:mb-tiny sm:max-w-[360px]  sm:w-[100%]">
            <span className="block sm:hidden tablet:hidden">
              حساب‌های بازنشستگی شخصی بیش از ۳۰ برابر نسبت به دیگر برنامه‌های
            </span>
            <span className="block sm:hidden tablet:hidden">
              بازنشستگی بازدهی دارند.
            </span>
            <span className="hidden sm:flex text-med font-bold leading-med_loss tablet:flex tablet:text-pgf leading-leading_relaxed">
              حساب‌های بازنشستگی شخصی بیش از ۳۰ برابر نسبت به دیگر برنامه‌های
              بازنشستگی بازدهی دارند.
            </span>
          </p>
          <div className=" flex items-center sm:hidden tablet:w-[100%]">
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
        <div className="w-[50%]  absolute bottom-0 left-0 -mb-lm sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/retirement-chair.png"}
            alt="code"
            layout="fixed"
            width={529}
            height={559}
            objectFit="chair"
          />
        </div>
        <div className="hidden w-[50%] tablet:flex">
          <Image
            src={"/assets/images/tablet-chair.png"}
            alt="code"
            layout="fixed"
            width={357}
            height={459}
            objectFit="chair"
          />
        </div>
        <div className="hidden sm:flex justify-center -ml-tm">
          <Image
            src={"/assets/images/mobile-chair.png"}
            alt="code"
            layout="fixed"
            width={189}
            height={230}
            objectFit="chair"
          />
        </div>
        <div className="flex justify-center mb-tiny">
          <Link href="/landing">
            <button className="mBtn-download hidden sm:flex justify-center	">
              دانلود اپلیکیشن
            </button>
          </Link>
        </div>
      </div>
      {/* account */}
      <div className=" px-lp flex py-4xl sm:px-sp sm:flex-col sm:py-pp tablet:px-sp tablet:py-mp xl:px-res">
        <div className="w-[50%] sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/mobile-retirement.png"}
            alt="code"
            layout="fixed"
            width={490.13}
            height={300.5}
            objectFit="chair"
          />
        </div>
        <div className="hidden w-[50%] sm:hidden tablet:flex">
          <Image
            src={"/assets/images/tablet-iphon.png"}
            alt="code"
            layout="fixed"
            width={373.13}
            height={225}
            objectFit="chair"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center sm:w-[100%] 	">
          <h2 className="text-primary_color text-xl font-bold mb-xl sm:text-base sm:max-w-[360px] sm:w-[100%] sm:mb-mm tablet:text-ft">
            حساب بازنشستگی
          </h2>
          <p className="text-base text-dark_primary leading-leading_relaxed sm:max-w-[360px] sm:w-[100%] sm:text-med sm:leading-xl_loss sm:mb-tiny tablet:text-med tablet:leading-xl_loss">
            <span className="block">
              طبق استانداردهای جهانی برای آسوده سپری کردن دوران بازنشستگی باید
              ۱۰ تا ۲۵ درصد درآمدتان را برای آن زمان کنار بگذارید.
            </span>
            <span className="block">
              داران به شما پیشنهاد می‌کند در ترکیبی از صندوق‌های سهامی، طلا و
              درآمد ثابت سرمایه‌گذاری کنید. ماهانه به طور منظم به پس‌انداز در
              حساب بازنشستگی ادامه دهید و رشد سرمایه‌ خود را رصد کنید.
            </span>
          </p>
        </div>
        <div className="hidden sm:flex justify-center ">
          <Image
            src={"/assets/images/m-iphone.png"}
            alt="code"
            layout="fixed"
            width={295}
            height={178.08}
            objectFit="chair"
          />
        </div>
      </div>
      {/* Difference */}
      <div className="mt-tm mb-5xl sm:mt-mm sm:mb-im ">
        <h2 className="w-[90%] bg-primary_color px-lp text-white py-lm text-lg text-bold sm:w-[100%] sm:px-sp sm:text-base sm:py-sp tablet:px-sp tablet:w-[98%] tablet:text-ft tablet:py-pp xl:px-res xl:w-[95%]">
          تفاوت سرمایه گذاری سنتی و پیشنهادی
        </h2>
        <div className="flex sm:flex-col ">
          <div className="w-[55%] sm:w-[100%] tablet:w-[50%]">
            <div className="px-lp sm:px-sp sm:flex sm:flex-col  sm:mb-tiny tablet:px-sp xl:px-res">
              <h2 className="text-ft text-dark_primary font-bold leading-larg_loops mb-mm mt-tiny sm:px-none sm:max-w-[360px] sm:w-[100%] sm:text-med sm:leading-med_loss tablet:text-pgf">
                در نمودار زیر می‌بینیم که فاصله مالی چگونه می‌تواند شما را از
                رسیدن به هدف‌هایتان در بازنشستگی بازدارد.
              </h2>
              <p className="text-base text-dark_primary leading-leading_relaxed sm:px-none sm:max-w-[360px] sm:w-[100%] sm:text-med sm:leading-xl_loss tablet:text-med">
                نتیجه سرمایه‌گذاری سنتی و سرمایه‌گذاری با داران در بازه زمانی ۲۰
                ساله بسیار متفاوت است. با فرض اینکه سرمایه‌گذاری خود را با ۱۵
                میلیون تومان شروع کرده باشید، تفاوت این دو نوع سرمایه‌گذاری را
                در نمودار زیر می‌توانید مشاهده کنید.
              </p>
            </div>
            {/* chart */}
            <div className="xl:overflow-hidden	pr-3xl mt-tm sm:hidden tablet:hidden xl:pr-none">
              <Image
                src={"/assets/images/retirement-chart.png"}
                alt="code"
                layout="fixed"
                width={677}
                height={357.32}
                objectFit="chair"
              />
            </div>
            <div className="hidden  mt-tm tablet:flex px-sp">
              <Image
                src={"/assets/images/tablet-chart.png"}
                alt="tabletChart"
                layout="fixed"
                width={373}
                height={272}
                objectFit="chair"
              />
            </div>
            <div className="hidden sm:flex justify-center px-sp">
              <Image
                src={"/assets/images/mobile-chart.png"}
                alt="chart"
                layout="fixed"
                width={323.4}
                height={236.3}
                objectFit="chair"
              />
            </div>
          </div>
          <ul className="overflow-auto w-[30%] mr-tiny -mt-3xl  sm:w-[100%] sm:-mt-none sm:mr-none sm:flex sm:justify-between sm:pr-sp sm:mt-im tablet:w-[45%] tablet:mr-mm tablet:-mt-tiny xl:mr-4xl">
            <li className="bg-gray py-lm px-sp  mb-mm shadow-drop_shadow sm:min-w-[70%] sm:p-mp sm:ml-mm sm:h-[236px] mbm:min-h-[360px] mb:h-[260px] tablet:py-cp">
              <h2 className="text-ft text-primary_color font-bold text-center mb-med sm:text-med sm:mb-mm	tablet:text-pgf">
                پس انداز سنتی
              </h2>
              <p className="text-base text-dark_gray leading-leading_relaxed sm:text-med tablet:text-med">
                اگر با برنامه‌های سنتی برای بازنشستگی خود پس‌انداز کنید، احتمالا
                در موعد بازنشستگی (با توجه به تورم و سایر هزینه‌های پیش بینی
                نشده)، به بخشی از اهداف خود نمی‌رسید.
              </p>
            </li>
            <li className="bg-gray py-lm px-sp  mb-mm shadow-drop_shadow sm:min-w-[70%] sm:p-mp sm:ml-mm sm:h-[236px] mbm:min-h-[360px] mb:h-[260px] tablet:py-cp">
              <h2 className="text-ft text-primary_color font-bold text-center mb-med sm:text-med sm:mb-mm	tablet:text-pgf">
                نرخ صعودیِ فاصله‌ی مالی سرمایه‌گذاری سنتی با سرمایه‌گذاری اصولی
              </h2>
              <p className="text-base text-dark_gray leading-leading_relaxed sm:text-med tablet:text-med">
                هر چه دیرتر تغییر برنامه خود را شروع کنید، فاصله مالی بین
                سرمایه‌گذاری سنتی و سرمایه‌گذاری که باید داشته باشید، بیشتر شده
                و مدیریت آن مشکل‌تر خواهد شد.
              </p>
            </li>
            <li className="bg-gray py-lm px-sp   shadow-drop_shadow sm:min-w-[70%] sm:p-mp  mbm:min-h-[360px] sm:h-[236px] tablet:py-cp">
              <h2 className="text-ft text-primary_color font-bold text-center mb-med sm:text-med sm:mb-mm	tablet:text-pgf">
                سرمایه‌گذاری پیشنهادی داران
              </h2>
              <p className="text-base text-dark_gray leading-leading_relaxed sm:text-med tablet:text-med">
                با توجه به قرارگیری دارایی‌های شما در بازارهای مختلف، رشد خالص
                این دارایی‌ها نسبت به پس‌انداز سنتی، مقدار بیشتری خواهد بود. این
                نوع سرمایه‌گذاری، به شما کمک می‌کند تا طبق استانداردهای موجود،
                به گونه‌ای سرمایه‌گذاری کنید که در زمان بازنشستگی، به سرمایه ده
                برابری حقوق سالانه خود برسید.
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* advice */}
      <div className="bg-gray flex px-lp flex items-center py-xl sm:px-sp sm:py-lm tablet:px-sp tablet:py-pp xl:px-res">
        <div className="w-[60%] sm:flex sm:items-center	sm:flex-col	sm:w-[100%] tablet:w-[50%]">
          <h2 className="text-xl text-primary_color font-bold sm:text-base sm:max-w-[360px]  sm:w-[100%] sm:leading-lg_loss tablet:text-ft">
            برای دوران بازنشستگی خود، از همین امروز پس‌انداز و سرمایه‌گذاری
            کنید.
          </h2>
          <div className="hidden sm:flex mt-med items-center">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
        <div className="w-[40%] sm:hidden tablet:w-[45%]">
          <div className=" flex items-center sm:hidden justify-end">
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
