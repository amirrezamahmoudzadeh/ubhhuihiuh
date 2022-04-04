import React from "react";
import Image from "next/image";
import LineGrey from "../../../components/icon/LineGrey";
import MLineGray from "../../../components/icon/MLineGray";
import QRcode from "../../../components/QR/QRcode";
import Link from "next/link";

function index() {
  return (
    <div>
      {/* header */}
      <div>
        <div className="overflow-hidden	 h-[640px] px-lp flex bg-light_green items-center sm:px-sp sm:h-auto sm:flex-col sm:py-pp tablet:px-sp tablet:h-auto tablet:pb-lm tablet:pt-xl tablet:pr-none xl:px-res">
          <div className="w-[50%] sm:hidden tablet:hidden">
            <Image
              src={"/assets/images/mobile-child.png"}
              alt="child"
              layout="fixed"
              width={480}
              height={450}
              objectFit="cover"
            />
          </div>
          <div className="hidden w-[50%] tablet:flex ">
            <Image
              src={"/assets/images/tablet-child.png"}
              alt="child"
              layout="fixed"
              width={373}
              height={323}
              objectFit="cover"
            />
          </div>
          <div className="w-[50%] sm:w-[100%] sm:flex sm:flex-col 	">
            <h2 className="text-4xl text-primary_color font-bold -mt-tiny sm:-mt-none sm:text-pgf sm:leading-leading_relaxed sm:max-w-[360px] sm:w-[100%] tablet-text-lg tablet:-mt-none">
              <p className="sm:hidden tablet:hidden">
                زمانی که فرزندان‌ مشغول بازی
              </p>
              <p className="sm:hidden tablet:hidden">
                هستند، برای آینده‌ آن‌ها
              </p>
              <p className="sm:hidden tablet:hidden">سرمایه‌گذاری کنید.</p>
              <p className="hidden sm:flex tablet:flex">
                زمانی که فرزندان‌ مشغول بازی هستند، برای آینده‌ آن‌ها
                سرمایه‌گذاری کنید.
              </p>
            </h2>
            <p className="text-ft text-dark_primary font-bold  mb-2xl mt-xl sm:text-med sm:mt-mm sm:max-w-[360px] sm:w-[100%] sm:mb-lm tablet:text-pgf tablet:leading-leading_relaxed tablet:mb-mm">
              بهترین زمان سرمایه‌گذاری برای آن‌ها از بدو تولد تا ۱۸ سالگی است.
            </p>
            <div className=" flex items-center sm:hidden justify-end tablet:justify-center">
              <p className="text-primary_color text-base my-tiny leading-leading_relaxed ml-xl tablet:text-med">
                <span className="block ">
                  برای دانلود اپلیکیشن،از طریق تلفن همراه
                </span>
                <span className="block ">خود، تصویر روبرو را اسکن کنید.</span>
              </p>
              <div className="w-[96px] h-[96px] relative tablet:w-[70px] tablet:h-[70px]">
                {/* <Image
                  src={"/assets/images/QR.png"}
                  alt="code"
                  layout="fill"
                  objectFit="cover"
                /> */}
                <QRcode />
              </div>
            </div>
          </div>
          <div className="hidden sm:flex justify-center	">
            <Image
              src={"/assets/images/mobile-rseChild.png"}
              alt="child"
              layout="fixed"
              width={330}
              height={260}
              objectFit="cover"
            />
          </div>
          <div className="hidden sm:flex ">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
      </div>
      {/* account */}
      <div className="overflow-hidden	flex px-lp mt-4xl mb-2xl  items-center	sm:px-sp sm:mt-xl sm:flex-col sm:mb-mm tablet:px-sp tablet:justify-between tablet:mt-xl tablet:mb-xl tablet:pl-none xl:px-res">
        <div className="w-[40%] sm:w-[100%] sm:flex sm:flex-col  sm:mb-xl ">
          <h2 className="text-ft text-primary_color font-bold mb-xl sm:max-w-[360px] sm:w-[100%] sm:text-base sm:mb-mm tablet:text-ft">
            حساب سرمایه‌گذاری فرزندان چیست؟
          </h2>
          <p className="text-base text-dark_primary leading-leading_relaxed sm:max-w-[360px] sm:w-[100%] sm:text-med sm:leading-xl_loss tablet:text-med">
            در این حساب برای شناخت بهتر، سوالاتی درباره بازه زمانی سرمایه‌گذاری
            و سطح ریسک‌پذیری از شما پرسیده می‌شود. براساس پاسخ‌های‌تان ترکیبی از
            صندوق‌های سهامی، طلا و درآمد ثابت پیشنهاد می‌شود تا با روشی اصولی
            برای آینده فرزندانتان سرمایه‌گذاری کنید.
          </p>
        </div>
        <div className="w-[50%] sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/mockups.png"}
            alt="mockups"
            width={631}
            height={450}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div className="hidden w-[55%] sm:hidden tablet:flex justify-end">
          <Image
            src={"/assets/images/tablet-mockups-adv.png"}
            alt="mockups"
            width={373}
            height={316}
            layout="fixed"
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:flex justify-center	">
          <Image
            src={"/assets/images/m-mockups.png"}
            alt="mockups"
            width={328}
            height={264}
            layout="fixed"
            objectFit="cover"
          />
        </div>
      </div>
      {/* description */}
      <div className="bg-gray px-lp py-2xl sm:px-sp tablet:px-sp xl:px-res">
        <h2 className="text-lg text-dark_gray font-bold mb-2xl sm:text-base sm:text-center tablet:text-pgf">
          مزایای سرمایه‌گذاری با حساب فرزندان
        </h2>
        <ul className="flex justify-between sm:flex-col sm:items-center">
          <li className="bg-white w-[32%] shadow-drop_shadow px-mp py-lm sm:max-w-[259px] sm:w-[100%] sm:mb-mm sm:py-sp">
            <div className="flex items-center mb-xl">
              <LineGrey className="sm:hidden tablet:hidden" />
              <MLineGray className="hidden sm:flex tablet:flex" />
              <h2 className="text-ft text-primary_color font-bold mr-lm sm:text-med tablet:text-pgf">
                سرمایه‌گذاری با مبالغ خرد
              </h2>
            </div>
            <p className="text-base text-dark_gray leading-leading_relaxed sm:text-med tablet:text-med">
              با حداقل ۱۰۰ هزار تومان می‌توانید سرمایه‌گذاری را شروع کنید.
            </p>
          </li>
          <li className="bg-white w-[32%] shadow-drop_shadow px-mp py-lm sm:max-w-[259px] sm:w-[100%] sm:mb-mm sm:py-sp">
            <div className="flex items-center mb-xl">
              <LineGrey className="sm:hidden tablet:hidden" />
              <MLineGray className="hidden sm:flex tablet:flex" />
              <h2 className="text-ft text-primary_color font-bold mr-lm sm:text-med tablet:text-pgf">
                سرمایه‌گذاری منظم و مداوم
              </h2>
            </div>
            <p className="text-base text-dark_gray leading-leading_relaxed sm:text-med tablet:text-med">
              می‌توانید هفتگی، ماهانه و یا سالانه به طور منظم برای فرزندتان
              مبالغی را کنار بگذارید.
            </p>
          </li>
          <li className="bg-white w-[32%] shadow-drop_shadow px-mp py-lm sm:max-w-[259px] sm:w-[100%] sm:py-sp">
            <div className="flex items-center mb-xl">
              <LineGrey className="sm:hidden tablet:hidden" />
              <MLineGray className="hidden sm:flex tablet:flex" />
              <h2 className="text-ft text-primary_color font-bold mr-lm sm:text-med tablet:text-pgf">
                افزایش سواد مالی کودکان
              </h2>
            </div>

            <p className="text-base text-dark_gray leading-leading_relaxed sm:text-med tablet:text-med">
              در حین سرمایه‌گذاری برای کودکان خود، برخی از مفاهیم مالی مثل
              پس‌انداز کردن را به آن‌ها بیاموزید. مثلا به آن‌‌ها بیاموزید تا
              بخشی از هدایا و پول توجیبی‌های خود را پس‌اندارز کنند.
            </p>
          </li>
        </ul>
      </div>
      {/* account child */}
      <div className="overflow-hidden	flex px-lp relative h-[644px] items-center sm:px-none	sm:h-auto sm:flex-col sm:mt-xl tablet:px-sp tablet:h-[450px] xl:px-res">
        <div className="absolute top-[10%] right-[17%] sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/m-children.png"}
            alt="mobileChild"
            layout="fixed"
            width={294}
            height={536}
            objectFit="cover"
          />
        </div>
        <div className="hidden absolute top-[5%] right-[10%] tablet:flex">
          <Image
            src={"/assets/images/tablet-children-m.png"}
            alt="mobileChild"
            layout="fixed"
            width={213}
            height={388}
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:flex -mb-[80px] -ml-tm">
          <Image
            src={"/assets/images/end-chid-mobile.png"}
            alt="mobileChild"
            layout="fixed"
            width={182}
            height={334}
            objectFit="cover"
          />
        </div>
        <div className="flex bg-primary_color my-3xl px-sp py-lm justify-between sm:my-none sm:flex-col sm:items-center tablet:my-xl sm:w-[100%]">
          <div className="w-[50%] sm:hidden"></div>
          <div className="w-[50%] sm:w-[100%] sm:flex sm:flex-col sm:items-center">
            <h2 className="text-xl text-white font-bold mb-xl sm:text-base sm:max-w-[360px] sm:w-[100%] tablet:text-ft tablet:mb-mm">
              حساب فرزندان
            </h2>
            <p className="text-pgf text-Gray leading-larg_loops sm:text-tiny sm:leading-leading_relaxed sm:max-w-[360px] sm:w-[100%] tablet:text-med tablet:leading-lg_loss">
              فرض کنید سرمایه‌گذاری برای فرزندتان را از ۵ سالگی شروع کرده‌ و
              تمایل دارید در ۲۰ سالگی این سرمایه را به او تحویل دهید. با
              اپلیکیشن داران می‌توانید مقدار پیش‌بینی شده از سرمایه اندوخته خود
              را مشاهده کنید.
            </p>
          </div>
        </div>
      </div>
      {/* Information */}
      <div className="flex px-lp py-lm bg-light_green items-center sm:px-sp tablet:px-sp xl:px-res">
        <div className="w-[65%] sm:w-[100%] sm:flex sm:flex-col sm:items-center tablet:w-[50%]">
          <h2 className="text-xl text-primary_color font-bold sm:text-base sm:max-w-[360px] sm:w-[100%] tablet:text-ft">
            کودکان بسیار زودتر از آن چیزی که فکرش می‌کنیم، بزرگ می‌شوند.
          </h2>
          <p className="text-pgf text-dark_primary font-bold mt-mm sm:text-med sm:max-w-[360px] sm:w-[100%] tablet:text-pgf">
            مبالغ کوچک که امروز برایشان کنار می‌گذاریم، فردا سرمایه بزرگی در
            اختیارشان قرار می‌دهد.
          </p>
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
