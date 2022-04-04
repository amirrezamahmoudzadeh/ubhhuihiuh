import ChevronBottom from "../components/icon/ChevronBottom";
import Line from "../components/icon/Line";
import LineGoldMobile from "../components/icon/LineGoldMobile";
import ChevronLeft from "../components/icon/Chevron";
import Finger from "../components/icon/Finger";
import MFinger from "../components/icon/MFinger";
import Partners from "../components/icon/Partners";
import MPartners from "../components/icon/MPartners";
import License from "../components/icon/License";
import MLicense from "../components/icon/MLicense";
import Investor from "../components/icon/Investor";
import MInvestor from "../components/icon/MInvestor";
import Item from "../components/icon/Item";
import MItem from "../components/icon/MItem";
import Link from "next/link";
import Image from "next/image";
import QRcode from "../components/QR/QRcode";

export default function Home() {
  return (
    <div>
      {/* investment */}
      <div className="flex flex-wrap h-[685px] px-lp  bg-snow relative sm:flex-col sm:px-none sm:h-auto tablet:pr-sp tablet:pl-none tablet:h-[430px] xl:px-res xl:overflow-hidden	">
        <div className="w-[50%] flex flex-col	justify-center sm:w-[100%] sm:px-sp tablet:w-[50%] ">
          <h2 className="text-4xl font-bold text-primary_color mb-2xl sm:hidden tablet:hidden">
            <span className="block">سرمایه گذاری ساده و موفق با </span>
            <span className="block">داران</span>
          </h2>
          <p className="hidden font-bold sm:flex text-pgf text-primary_color mb-mm mt-xl tablet:flex tablet:text-xl">
            سرمایه‌گذاری ساده و موفق با داران
          </p>
          <p className="font-bold text-dark_primary text-ft my-tiny leading-larg_loops sm:text-med sm:hidden tablet:hidden">
            <span className="block">
              حساب خود را در داران بسازید و در بهترین ترکیب از سهام،طلا و
            </span>
            <span className="block ">اوراق مشارکت سرمایه گذاری کنید.</span>
          </p>
          <p className="hidden sm:flex text-dark_primary text-med font-bold leading-med_loss tablet:flex tablet:text-pgf leading-leading_relaxed tablet:w-[80%]">
            حساب خود را در داران بسازید و در بهترین ترکیب از سهام، طلا و اوراق
            مشارکت سرمایه‌گذاری کنید.
          </p>

          <div className="w-[85%] flex justify-between	items-center sm:hidden tablet:justify-start tablet:w-[100%]">
            <p className="text-base text-primary_color my-tiny leading-leading_relaxed tablet:text-med tmd:ml-xl md:ml-lm">
              <span className="block">
                برای دانلود اپلیکیشن،از طریق تلفن همراه خود،تصویر
              </span>
              <span className="block">رو به رو را اسکن کنید.</span>
            </p>
            <div className="w-[96px] h-[96px] relative tablet:w-[70px] tablet:h-[70px]">
              <QRcode />
            </div>
          </div>
          <div className="justify-center hidden sm:flex">
            <Link href="/landing">
              <button className="mBtn-download my-med">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
        <div className="w-[50%] absolute left-[20%] sm:hidden tablet:hidden">
          <div className="w-[802px] h-[680px] relative ">
            <Image
              src={"/assets/images/mobile1.png"}
              alt="code"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="overflow-hidden	hidden w-[50%]  relative tablet:flex ">
          <div className=" w-[100%]  absolute left-0  -mr-[500px] ">
            <Image
              src={"/assets/images/tablet-saving.png"}
              alt="code"
              layout="fixed"
              width={400}
              height={434}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="overflow-hidden	 w-[100%] hidden sm:flex  order-first max-w-[500px] justify-center 	  ">
          <Image
            src={"/assets/images/m-Mobile1.png"}
            alt="code"
            layout="fixed"
            width={360}
            height={385}
            objectFit="cover"
          />
        </div>
        <div className="absolute left-[50%] bottom-[0] mb-tiny sm:hidden tablet:hidden">
          <ChevronBottom />
        </div>
      </div>
      {/* account */}
      <div className="relative px-lp sm:px-sp tablet:px-sp xl:px-res ">
        <div className="flex flex-wrap py-xl sm:flex-col tablet:py-lm tablet:pb-none tablet:mb-tiny">
          <div className="w-[50%] sm:hidden tablet:hidden">
            <div className="w-[386px] h-[386px] relative ">
              <Image
                src={"/assets/images/boat.png"}
                alt="boat"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="justify-center hidden  sm:flex mb-mm">
            <Image
              src={"/assets/images/m-boat.png"}
              alt="boat"
              layout="fixed"
              width={166}
              height={182}
              objectFit="cover"
            />
          </div>
          <div className="hidden tablet:flex w-[50%] justify-center">
            <Image
              src={"/assets/images/tablet-boat.png"}
              alt="boat"
              layout="fixed"
              width={207}
              height={224}
              objectFit="cover"
            />
          </div>
          <div className="w-[45%] flex flex-col justify-center sm:w-[100%] sm:max-w-[328px] ">
            <div className="flex items-center ">
              <Line className="sm:hidden tablet:hidden" />
              <LineGoldMobile className="hidden sm:flex tablet:flex" />
              <h2 className="text-lg font-bold mr-lm text-dark_primary sm:text-base tablet:text-pgf">
                چرا سرمایه گذاری با داران؟
              </h2>
            </div>
            <p className="text-tiny my-tiny sm:hidden tablet:hidden ">
              <span className="block leading-leading_relaxed">
                دنیای سرمایه گذاری پیچیده و بی نظم است،ما به آن سادگی ونظم اظافا
                می کنیم.کافی ست به ما بگویید برای چه هدفی قصد شرمایه گذاری
                دارید؛باقی امور از ریسک سنجی تا پیشنهاد سبد سرمایه گذاری
                اتوماتیک انجام می شوند.
              </span>
              <span className="block leading-leading_relaxed">
                در داران می توانید در هر لحظه از شبانه روز با آسودگی خاطر در
                صندوق های سهامی،طلا و درآمد ثابت سرمایه گذاری کنید.
              </span>
            </p>
            <p className="hidden sm:flex text-med my-tiny leading-xl_loss text-Gray900 sm:my-med tablet:flex tablet:text-med tablet:my-xl tablet:mb-none">
              دنیای سرمایه‌گذاری پیچیده و بی نظم است، ما به آن سادگی و نظم اضافه
              می‌کنیم. کافی‌ست به ما بگویید برای چه هدفی قصد سرمایه‌‌گذاری
              دارید؛ باقی امور از ریسک‌سنجی تا پیشنهاد سبد سرمایه‌گذاری اتوماتیک
              انجام می‌شوند. در داران می‌توانید در هر لحظه از شبانه روز با
              آسودگی خاطر در صندوق‌های سهامی، طلا و درآمدثابت سرمایه‌گذاری کنید.
            </p>

            <div className="flex items-center justify-end tablet:mt-xl">
              <span className="ml-mm text-tiny text-primary_color sm:text-med ">
                بیشتر
              </span>
              <ChevronLeft />
            </div>
          </div>
        </div>
        {/*savings account*/}
        <div className="saving ">
          <h2 className="text-lg font-bold text-center text-dark_gray my-tiny tablet:hidden ">
            حساب های سرمایه گذاری
          </h2>
          <div className="relative overflow-hidden rounded-sm sm:hidden ">
            <div className="w-[1150px] h-[358px] relative px-lp left-[8%] xl:w-[1250px]">
              <Image
                src={"/assets/images/saving.png"}
                alt="Savings account"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="absolute top-[15%] right-[5%] ">
              <h2 className="text-xl font-bold text-primary_color mb-med text-ft tablet:text-ft">
                حساب پس انداز
              </h2>
              <p className="w-[60%]  text-tiny leading-leading_relaxed text-dark_primary text-med tablet:text-med">
                ساخت حساب پس انداز به نظم مالی شما کمک می کند.می توانید به صورت
                منظم روزانه،هفتگی،یا ماهانه به حساب خود پول واریز کنید و سود روز
                شمار حدودا ۲۱ درصدی دریافت کنید.
              </p>
              <div className="w-[60%] mt-mm flex items-center justify-end">
                <Link href="/account/saving">
                  <div className="flex items-center cursor-fancy">
                    <span className="ml-mm text-tiny text-primary_color ">
                      بیشتر
                    </span>
                    <ChevronLeft />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex justify-center sm:-mb-[18px]">
          <div className="relative w-auto overflow-hidden ">
            <div className="tablet:hidden">
              <Image
                src={"/assets/images/m-saving.png"}
                alt="Savings account"
                layout="fixed"
                width={328}
                height={429.31}
                objectFit="cover"
                className="relative z-10"
              />
            </div>
            <div className="hidden tablet:flex">
              <Image
                src={"/assets/images/tablet-table2.png"}
                alt="Savings account"
                layout="fixed"
                width={200}
                height={246}
                objectFit="cover"
                className="relative z-10"
              />
            </div>

            <div className="absolute top-[5%] right-[5%] z-30 ">
              <h2 className="text-base font-bold text-primary_color mb-mm">
                حساب پس انداز
              </h2>
              <p className="w-[90%]  text-med leading-leading_relaxed text-dark_primary ">
                طبق استانداردهای جهانی برای آسوده سپری کردن دوران بازنشستگی باید
                ۱۰ تا ۲۵ درصد درآمدتان را برای آن زمان سرمايه‌گذاری کنید.
              </p>
              <div className="w-[92%] mt-mm flex items-center justify-start	">
                <Link href="/account/saving">
                  <div className="flex items-center cursor-fancy ">
                    <span className="ml-mm text-tiny text-primary_color">
                      بیشتر
                    </span>
                    <ChevronLeft />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* other account */}
        <div className="flex justify-between mt-xl mb-im sm:flex-col sm:mb-mm ">
          <div className="overflow-hidden  w-[68%] sm:w-[100%]  tablet:w-[72%]  ">
            {/* trip*/}
            <div className="overflow-hidden	w-[100%] h-[300px] bg-lavender relative sm:hidden tablet:h-[220px] tablet:w-[770px]">
              <div className="pr-sp pt-pp">
                <h2 className="text-xl font-bold text-primary_color mb-xl tablet:text-ft">
                  حساب سفر
                </h2>
                <p className="w-[70%]  text-tiny leading-leading_relaxed text-dark_primary tablet:text-med mtm:w-[50%]">
                  خیلی وقت ها چون در حسابمان پول کافی نداریم،فرصت سفر کردن را از
                  دست می دهیم.در این حساب می توانید برای سفرهای پیش رویتان
                  برنامه ریزی کنید.
                </p>
                <div className="w-[70%] mt-mm flex items-center justify-end	mtm:w-[50%]">
                  <Link href="/">
                    <div className="flex items-center cursor-fancy">
                      <span className="ml-mm text-tiny text-primary_color">
                        بیشتر
                      </span>
                      <ChevronLeft />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 left-0 tablet:hidden">
                <Image
                  src={"/assets/images/balloon.png"}
                  alt="Savings account"
                  layout="fixed"
                  width={230}
                  height={280}
                  objectFit="cover"
                />
              </div>
              <div className="hidden tablet:flex absolute top-0 left-[2%] ">
                <Image
                  src={"/assets/images/tablet-balloon.png"}
                  alt="Savings account"
                  layout="fixed"
                  width={177}
                  height={213}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="justify-center hidden sm:flex sm:mb-lm">
              <div className="relative w-auto overflow-hidden ">
                <Image
                  src={"/assets/images/m-ballon.png"}
                  alt="Savings account"
                  layout="fixed"
                  width={328}
                  height={429.31}
                  objectFit="cover"
                  className="relative z-10"
                />
                <div className="absolute top-[5%] right-[5%] z-30 ">
                  <h2 className="text-base font-bold text-primary_color mb-mm">
                    حساب سفر
                  </h2>
                  <p className="w-[90%]  text-med leading-leading_relaxed text-dark_primary">
                    خیلی وقت‌ها چون در حسابمان پول کافی نداریم، فرصت سفر کردن را
                    از دست می‌دهیم. در این حساب می‌توانید برای سفر‌های پیش
                    رویتان برنامه‌ریزی کنید.
                  </p>
                  <div className="w-[92%] mt-mm flex items-center justify-start	">
                    <Link href="/">
                      <div className="flex items-center cursor-fancy">
                        <span className="ml-mm text-tiny text-primary_color">
                          بیشتر
                        </span>
                        <ChevronLeft />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* child */}
            <div className="overflow-hidden w-[100%] mt-xl 	sm:hidden tablet:hidden  ">
              <div className="relative ">
                <div className="xl:hidden">
                  <Image
                    src={"/assets/images/kiddo.png"}
                    alt="child"
                    layout="fixed"
                    width={732}
                    height={562}
                    objectFit="cover"
                  />
                </div>
                <div className="hidden xl:flex">
                  <Image
                    src={"/assets/images/kiddo.png"}
                    alt="child"
                    layout="fixed"
                    width={792}
                    height={562}
                    objectFit="cover"
                  />
                </div>

                <div className="absolute top-0 right-0 pr-sp pt-pp ">
                  <h2 className="text-xl font-bold text-primary_color mb-xl">
                    حساب فرزندان
                  </h2>
                  <p className="w-[88%]  text-tiny leading-leading_relaxed text-dark_primary">
                    فرزندان بسیار زودتر از آن چیزی که فکر می کنید بزرگ می
                    شوند.بهترین سرمایه گذاری برای آن ها از بدو تولد تا ۱۸ سالگی
                    است.مبالغ کوچکی که امروز برای فرزندان کنار می گذارید،در
                    آینده به سرمایه مناسبی برای شروع زندگی مستقل آن ها تبدیل می
                    شود.
                  </p>
                  <div className="w-[87%] mt-mm flex items-center justify-end	">
                    <Link href="/account/child">
                      <div className="flex items-center cursor-fancy">
                        <span className="ml-mm text-tiny text-primary_color">
                          بیشتر
                        </span>
                        <ChevronLeft />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden sm:flex tablet:flex justify-center sm:mb-lm tablet:w-[770px] tablet:bg-[#f4f2e9] tablet:h-[420px] tablet:justify-start tablet:mt-mm">
              <div className="relative w-auto overflow-hidden">
                <div className="tablet:hidden">
                  <Image
                    src={"/assets/images/m-child.png"}
                    alt="Savings account"
                    layout="fixed"
                    width={328}
                    height={345.31}
                    objectFit="cover"
                    className="relative z-10"
                  />
                </div>
                <div className="hidden tablet:flex mt-[50px]">
                  <Image
                    src={"/assets/images/tablet-kiddo.png"}
                    alt="Savings account"
                    layout="fixed"
                    width={508}
                    height={370}
                    objectFit="cover"
                    className="relative z-10"
                  />
                </div>

                <div className="absolute top-[5%] right-[5%] z-30 ">
                  <h2 className="text-base font-bold text-primary_color mb-mm tablet:text-ft">
                    حساب فرزندان
                  </h2>
                  <p className="sm:w-[90%]  text-med leading-leading_relaxed text-dark_primary mtm:w-[75%]">
                    فرزندان بسیار زودتر از آن چیزی که فکرش را می‌کنیم بزرگ
                    می‌شوند. بهترین زمان سرمایه‌گذاری برای آن‌ها از بدو تولد تا
                    ۱۸ سالگی است. مبالغ کوچکی که امروز برای فرزندانتان کنار
                    می‌گذارید، در آینده به سرمایه مناسبی برای شروع زندگی مستقل
                    آن‌ها تبدیل می‌شود.
                  </p>
                  <div className="w-[92%] mt-mm flex items-center justify-start	tablet:justify-end mtm:w-[75%]">
                    <Link href="/account/child">
                      <div className="flex items-center cursor-fancy">
                        <span className="ml-mm text-tiny text-primary_color ">
                          بیشتر
                        </span>
                        <ChevronLeft />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* retirement */}
          <div className="overflow-hidden	w-[30%] h-[886px] bg-gainsboro relative sm:hidden tablet:hidden">
            <div className="absolute	left-0 bottom-0 -mb-[10px]">
              <Image
                src={"/assets/images/chair.png"}
                alt="Savings account"
                layout="fixed"
                width={330}
                height={591}
                objectFit="cover"
              />
            </div>
            <div className="absolute top-0 right-0 pr-sp pt-pp ">
              <h2 className="text-xl font-bold text-primary_color mb-xl">
                حساب بازنشستگی
              </h2>
              <p className="w-[90%]  text-tiny leading-leading_relaxed text-dark_primary">
                طبق استانداردهای جهانی برای آسوده سپری کردن دوران بازنشستگی باید
                ۱۰ تا ۲۵ درصد درآمدتان را برای آن زمان سرمايه‌گذاری کنید.
              </p>
              <div className="w-[92%] mt-mm flex items-center justify-end	">
                <Link href="/account/retirement">
                  <div className="flex items-center cursor-fancy">
                    <span className="ml-mm text-tiny text-primary_color">
                      بیشتر
                    </span>
                    <ChevronLeft />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="tablet:w-[25%]	hidden sm:flex justify-center tablet:flex tablet:h-[656px] tablet:bg-gainsboro ">
            <div className="relative w-auto overflow-hidden ">
              <div className="tablet:hidden">
                <Image
                  src={"/assets/images/m-chair.png"}
                  alt="Savings account"
                  layout="fixed"
                  width={328}
                  height={345.31}
                  objectFit="cover"
                  className="relative z-10"
                />
              </div>
              <div className=" hidden tablet:flex mt-[300px]">
                <Image
                  src={"/assets/images/tablet-chair-1.png"}
                  alt="Savings account"
                  layout="fixed"
                  width={205}
                  height={367}
                  objectFit="cover"
                  className="relative z-10"
                />
              </div>
              <div className="absolute top-[5%] right-[5%] z-30 ">
                <h2 className="text-base font-bold text-primary_color mb-mm tablet:text-ft">
                  حساب بازنشستگی
                </h2>
                <p className="w-[90%]  text-med leading-leading_relaxed text-dark_primary">
                  طبق استانداردهای جهانی برای آسوده سپری کردن دوران بازنشستگی
                  باید ۱۰ تا ۲۵ درصد درآمدتان را برای آن زمان سرمايه‌گذاری کنید.
                </p>
                <div className="w-[92%] mt-mm flex items-center justify-start	">
                  <Link href="/account/retirement">
                    <div className="flex items-center cursor-fancy">
                      <span className="ml-mm text-tiny text-primary_color">
                        بیشتر
                      </span>
                      <ChevronLeft />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Information */}
      <div className="bg-gray ">
        <ul className="flex flex-wrap justify-between px-lp py-2xl sm:px-sp sm:flex-col sm:items-center py-lm tablet:px-sp xl:px-res ">
          <li className="w-[49%] bg-white mb-mm py-pp px-sp shadow-drop_shadow  sm:max-w-[328px] sm:w-[100%] sm:mb-mm sm:order-2 ">
            <div className="flex items-center mb-xl ">
              <Finger className="sm:hidden" />
              <MFinger className="hidden sm:flex" />
              <span className="font-bold mr-mm text-ft text-dark_primary sm:text-med tablet:text-pgf">
                احراز هویت با سجام
              </span>
            </div>
            <p className="text-base text-dark_primary leading-leading_relaxed sm:text-med leading:xl_loss tablet:text-med">
              احراز هویت سرمایه‌گذاران، تحت پروتکل‌های امن به وسیله سرویس‌های
              سجام انجام می‌شود.
            </p>
          </li>
          <li className="w-[49%] bg-white mb-mm py-pp px-sp shadow-drop_shadow sm:w-[100%] sm:max-w-[328px] sm:mb-mm sm:order-1 ">
            <div className="flex items-center mb-xl ">
              <Partners className="sm:hidden" />
              <MPartners className="hidden sm:flex" />
              <span className="font-bold mr-mm text-ft text-dark_primary sm:text-med tablet:text-pgf">
                همکاران تجاری داران
              </span>
            </div>
            <div className="flex items-center">
              <Item className="sm:hidden" />
              <MItem className="hidden sm:flex" />
              <p className="text-base text-dark_primary leading-leading_relaxed mr-lm sm:text-med sm:leading-xl_loss tablet:text-med">
                شرکت مشاور سرمایه‌گذاری معیار
              </p>
            </div>
            <div className="flex items-center">
              <Item className="sm:hidden" />
              <MItem className="hidden sm:flex" />
              <p className="text-base text-dark_primary leading-leading_relaxed mr-lm sm:text-med sm:leading-xl_loss tablet:text-med">
                شرکت سبدگردان سهم آشنا
              </p>
            </div>
          </li>
          <li className="w-[49%] bg-white py-pp px-sp shadow-drop_shadow sm:w-[100%] sm:max-w-[328px] sm:mb-mm sm:order-4 ">
            <div className="flex items-center mb-xl ">
              <License className="sm:hidden" />
              <MLicense className="hidden sm:flex" />
              <span className="font-bold mr-mm text-ft text-dark_primary sm:text-med tablet:text-pgf">
                تحت مجوز سازمان بورس
              </span>
            </div>
            <p className="text-base text-dark_primary sm:text-med sm:leading-xl_loss tablet:text-med">
              تمامی فعالیت های شرکت داران تحت نظارت سازمان بورس و اوراق بهادار
              قرار دارد.
            </p>
          </li>
          <li className="w-[49%] bg-white py-pp px-sp shadow-drop_shadow sm:w-[100%] sm:max-w-[328px] sm:mb-mm sm:order-3">
            <div className="flex items-center mb-xl ">
              <Investor className="sm:hidden" />
              <MInvestor className="hidden sm:flex" />
              <span className="font-bold mr-mm text-ft text-dark_primary sm:text-med tablet:text-pgf">
                ۱۰،۰۰۰+ سرمایه‌گذار
              </span>
            </div>
            <p className="text-base text-dark_primary sm:text-med sm:leading-xl_loss tablet:text-med">
              تاکنون به داران اعتماد کرده‌اند و برای خود حساب سرمایه‌گذاری
              ساخته‌اند.
            </p>
          </li>
        </ul>
      </div>
      {/* property */}
      <div className="flex px-lp py-2xl sm:px-sp sm:flex-col tablet:px-sp xl:px-res">
        <div className=" w-[45%] flex flex-col justify-center  sm:max-w-[328px] sm:w-[100%]">
          <div className="flex items-center ">
            <Line className="sm:hidden tablet:hidden" />
            <LineGoldMobile className="hidden sm:flex tablet:flex" />
            <h2 className="text-lg font-bold mr-lm text-dark_primary sm:text-base tablet:text-pgf">
              متنوع سازی دارایی
            </h2>
          </div>
          <p className="text-tiny my-tiny sm:my-xl tablet:my-xl">
            <span className="block leading-leading_relaxed sm:text-med tablet:text-med">
              داشتن ترکیبی از دارایی‌ها، یکی از اصول مهم سرمایه‌گذاری است. داران
              از سه كلاس دارایی سهام، طلا و اوراق مشارکت در سرمايه‌گذاری‌های خود
              استفاده کرده و با بررسی و آنالیز داده‌های سه ساله صندوق‌های سهامی،
              طلا و درآمد ثابت، عملکرد دقيق آن‌ها را در اختیار کاربران خود قرار
              می‌دهد.
            </span>
          </p>
        </div>
        <div className="w-[50%] flex justify-center mr-2xl sm:hidden	tablet:hidden">
          <Image
            src={"/assets/images/chart.png"}
            alt="boat"
            layout="fixed"
            objectFit="cover"
            width={343}
            height={320}
          />
        </div>
        <div className="hidden w-[50%] flex justify-center mr-2xl tablet:flex	">
          <Image
            src={"/assets/images/chart.png"}
            alt="boat"
            layout="fixed"
            objectFit="cover"
            width={342.86}
            height={320}
          />
        </div>
        <div className="w-[50%]  flex justify-center mr-2xl hidden sm:flex order-first w-[100%] mr-none mb-med tablet:hidden">
          <Image
            src={"/assets/images/m-chart.png"}
            alt="boat"
            layout="fixed"
            objectFit="cover"
            width={190}
            height={176.47}
          />
        </div>
      </div>
      {/* account daran */}
      <div className="bg-gray ">
        <div className="h-[500px] flex justify-between px-lp sm:px-none sm:flex-col sm:h-auto tablet:px-sp xl:px-res tablet:h-[450px]">
          <div className="w-[54%] flex overflow-hidden py-lm relative sm:hidden tablet:hidden">
            <div className="absolute bottom-[-20px] tablet:hidden">
              <Image
                src={"/assets/images/mobileBottom1.png"}
                alt="mobile1"
                layout="fixed"
                objectFit="cover"
                width={270.67}
                height={400}
              />
            </div>
            <div className="absolute top-0 left-0 tablet:hidden">
              <Image
                src={"/assets/images/mobileBottom2.png"}
                alt="mobile2"
                layout="fixed"
                objectFit="cover"
                width={270.62}
                height={430}
              />
            </div>
          </div>
          {/* tablet */}
          <div className="overflow-hidden hidden w-[55%] flex  py-lm relative tablet:flex ">
            <div className="absolute bottom-[-10px] ">
              <Image
                src={"/assets/images/tablet-home11.png"}
                alt="mobile1"
                layout="fixed"
                objectFit="cover"
                width={215}
                height={318}
              />
            </div>
            <div className=" absolute top-[-10px] left-[5%]">
              <Image
                src={"/assets/images/tablet-home2.png"}
                alt="mobile2"
                layout="fixed"
                objectFit="cover"
                width={205}
                height={318}
              />
            </div>
          </div>
          {/* mobile */}
          <div className="overflow-hidden hidden sm:flex sm:w-[100%]  bg-snow sm:justify-center sm:mb-xl">
            <div>
              <Image
                src={"/assets/images/mBottom1.png"}
                alt="mobile1"
                layout="fixed"
                objectFit="cover"
                width={165.62}
                height={298}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/mBottom2.png"}
                alt="mobile2"
                layout="fixed"
                objectFit="cover"
                width={165.62}
                height={260}
              />
            </div>
          </div>
          {/* text */}
          <div className="w-[45%] flex flex-col	justify-center pr-xl sm:w-[100%] sm:pr-sp sm:pl-sp sm:items-center tablet:pr-none ">
            <h2 className="text-xl font-bold text-dark_primary sm:text-base sm:hidden tablet:hidden">
              <p className="block leading-2xl">در کنار حساب بانکی، حساب</p>
              <p className="block leading-2xl">
                سرمايه‌گذاری خود را هم بسازید.
              </p>
            </h2>
            <h2 className="hidden text-base font-bold sm:flex text-dark_primary tablet:flex tablet:text-lg">
              در کنار حساب بانکی، حساب سرمايه‌گذاری خود راهم بسازید.
            </h2>
            <p className="text-base font-bold text-primary_color my-xl sm:text-sm">
              در کمتر از سه دقيقه به صورت آنلاین در داران ثبت نام کنید.
            </p>
            <div className="flex items-center  sm:hidden sm:justify-center">
              <p className="text-primary_color text-base my-tiny leading-leading_relaxed tablet:text-med mtm:w-[60%]">
                <span className="block ">
                  برای دانلود اپلیکیشن،از طریق تلفن همراه خود،تصویر
                </span>
                <span className="block ">رو به رو را اسکن کنید.</span>
              </p>
              <div className="w-[96px] h-[96px] relative mr-xl tablet:w-[70px] tablet:h-[70px] tablet:mr-mm">
                <QRcode />
              </div>
            </div>
            <Link href="/landing">
              <button className="items-center justify-center hidden sm:flex mBtn-download mb-tiny">
                دانلود اپلیکیشن
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
