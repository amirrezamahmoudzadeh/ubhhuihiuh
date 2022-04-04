import Image from "next/image";
import React from "react";
import ChartS from "../../components/icon/ChartS";
import TabChart from "../../components/icon/TabChart";
import MobileChart from "../../components/icon/MobileChart";
import GoalS from "../../components/icon/GoalS";
import TabGoal from "../../components/icon/TabGoal";
import MobileGoal from "../../components/icon/MobileGoal";
import CombinationS from "../../components/icon/CombinationS";
import TabCombination from "../../components/icon/TabCombination";
import MobileCombination from "../../components/icon/MobileCombination";
import ConditionS from "../../components/icon/ConditionS";
import TabCondition from "../../components/icon/TabCondition";
import MobileCondition from "../../components/icon/MobileCondition";
import Steps1 from "../../components/icon/Steps1";
import Steps2 from "../../components/icon/Steps2";
import Steps3 from "../../components/icon/Steps3";
import LineIndicator from "../../components/icon/LineIndicator";
import Linestrategy from "../../components/icon/Linestrategy";
import GoldBox from "../../components/icon/GoldBox";
import FixedBox from "../../components/icon/FixedBox";
import StockBox from "../../components/icon/StockBox";
import QRcode from "../../components/QR/QRcode";
import Link from "next/link";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
// import { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
const data = {
  groupsOne: [
    { name: "Group A", value: 7 },
    { name: "Group B", value: 5 },
    { name: "Group C", value: 88 },
  ],
  groupsTwo: [
    { name: "Group A", value: 19 },
    { name: "Group B", value: 11 },
    { name: "Group C", value: 70 },
  ],
  groupsThree: [
    { name: "Group A", value: 36 },
    { name: "Group B", value: 14 },
    { name: "Group C", value: 50 },
  ],
  groupsFour: [
    { name: "Group A", value: 58 },
    { name: "Group B", value: 17 },
    { name: "Group C", value: 25 },
  ],
  groupsFive: [
    { name: "Group A", value: 75 },
    { name: "Group B", value: 20 },
    { name: "Group C", value: 5 },
  ],
};

const COLORS = ["#62815A", "#C8AE7A", "#00492F"];

function index() {
  const [sliderValue, setSliderValue] = useState(20);

  return (
    <div>
      {/* header */}
      <div className="overflow-hidden flex px-lp bg-gray items-center py-3xl sm:px-sp sm:flex-col sm:py-none sm:pb-xl xl:px-res tablet:px-sp">
        <div className="hidden w-[50%] sm:hidden tablet:flex">
          <Image
            src={"/assets/images/tabletNobel.png"}
            alt="mobileChild"
            layout="fixed"
            width={302}
            height={323}
            objectFit="cover"
          />
        </div>
        <div className="w-[50%] sm:hidden tablet:hidden">
          <Image
            src={"/assets/images/Nobel.png"}
            alt="mobileChild"
            layout="fixed"
            width={446}
            height={430}
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:flex justify-center	">
          <Image
            src={"/assets/images/mobileNobel.png"}
            alt="mobileChild"
            layout="fixed"
            width={266}
            height={285}
            objectFit="cover"
          />
        </div>
        <div className=" w-[50%] flex flex-col sm:w-[100%]">
          <div>
            <h2 className="sm:hidden w-[90%] text-4xl text-primary_color font-bold leading-3xl tablet:text-xl tablet:leading-2xl">
              با روشی سرمایه‌گذاری کنید که در دنیا موفق عمل کرده است.
            </h2>
            <h2 className="hidden sm:flex text-primary_color text-pgf font-bold">
              سرمایه گذاری ساده وموق با داران
            </h2>
            <p className="sm:hidden text-ft text-dark_gray my-mm sm:text-med sm:leading-lg_loss sm:text-dark_primary tablet:text-base">
              استفاده همزمان از متخصصین سرمایه‌گذاری و الگوریتم‌های هوشمند مالی
            </p>
            <p className="hidden sm:flex my-mm text-med leading-lg_loss text-dark_primary font-bold tablet:text-base">
              حساب خود را در داران بسازید و در بهترین ترکیب از سهام، طلا و اوراق
              مشارکت سرمایه‌گذاری کنید.
            </p>
          </div>
          <div className=" flex items-center sm:hidden justify-end ">
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
      {/* Direction */}
      <div className="overflow-hidden	px-lp my-4xl sm:px-sp sm:my-im xl:px-res tablet:px-none">
        <h2 className="text-primary_color text-xl font-bold mb-2xl sm:text-base tablet:text-ft tablet:px-sp">
          مسیر درست سرمایه گذاری
        </h2>
        <div className="flex justify-between relative sm:flex-col">
          <ul className="w-[47%] relative z-50 sm:w-[100%] tablet:px-sp">
            <li className="mb-med ">
              <div className="flex items-center ">
                <div className="sm:hidden tablet:hidden ">
                  <GoalS />
                </div>
                <div className="hidden sm:flex ">
                  <MobileGoal />
                </div>
                <div className="hidden tablet:flex ">
                  <TabGoal />
                </div>
                <h2 className="mr-xl text-dark_primary text-ft font-bold sm:text-med sm:mr-lm tablet:text-pgf">
                  هدف سرمایه گذاری
                </h2>
              </div>
              <p className="mr-4xl text-base text-Gray900 leading-leading_relaxed sm:text-med sm:mr-im sm:max-w-[360px] tablet:text-med">
                اگر سرمایه گذاری را مانند یک سفر در نظر بگیریم انتخاب هدف نیز
                مقصد شماست.انتخاب مقصد این سفر با شما و برنامه ریزی برای داشتن
                سفر لذت بخش و پر سود با ما.
              </p>
            </li>
            <li className="mb-med">
              <div className="flex items-center">
                <div className="sm:hidden tablet:hidden">
                  <ConditionS />
                </div>
                <div className="hidden sm:flex">
                  <MobileCondition />
                </div>
                <div className="hidden tablet:flex">
                  <TabCondition />
                </div>
                <h2 className="mr-xl text-dark_primary text-ft font-bold sm:text-med sm:mr-lm tablet:text-pgf">
                  چند سوال برای شناختن بهتر وضعیت
                </h2>
              </div>
              <p className="mr-4xl text-base text-Gray900 leading-leading_relaxed sm:text-med sm:mr-im sm:max-w-[360px] tablet:text-med">
                در بازار سرمایه نمی توان یک روش را برای همه افراد بکار گرفت؛از
                این رو،برای شناختن بهتر شرایط و روحیاتتان در سرمایه گذاری،با
                پرسیدن چند سوال از شما،مناسب ترین سرمایه گذاری را در اختیارتان
                قرار خواهیم داد.
              </p>
            </li>
            <li className="mb-med">
              <div className="flex items-center">
                <div className="sm:hidden tablet:hidden">
                  <CombinationS />
                </div>
                <div className="hidden sm:flex">
                  <MobileCombination />
                </div>
                <div className="hidden tablet:flex">
                  <TabCombination />
                </div>
                <h2 className="mr-xl text-dark_primary text-ft font-bold sm:text-med sm:mr-lm tablet:text-pgf">
                  ترکیب دارایی
                </h2>
              </div>
              <p className="mr-4xl text-base text-Gray900 leading-leading_relaxed sm:text-med sm:mr-im sm:max-w-[360px] tablet:text-med">
                ما بر اساس هدف سرمایه گذاری و میزان ریسک شما،برنامه ترکیبی مشخصی
                برای سرمایه گذاری به صورت سهام،صندوق های درآمد ثابت و صندوق طلا
                را برای شما در نظر می گیریم.
              </p>
            </li>
            <li>
              <div className="flex items-center">
                <div className="sm:hidden tablet:hidden">
                  <ChartS />
                </div>
                <div className="hidden sm:flex">
                  <MobileChart />
                </div>
                <div className="hidden tablet:flex">
                  <TabChart />
                </div>
                <h2 className="mr-xl text-dark_primary text-ft font-bold sm:text-med sm:mr-lm tablet:text-pgf">
                  مشاهده رشد سرمایه و خالص دارایی ها
                </h2>
              </div>
              <p className="mr-4xl text-base text-Gray900 leading-leading_relaxed sm:text-med sm:mr-im sm:max-w-[360px] tablet:text-med">
                داران،بصورت روزانه اطلاعات مربوط به دارایی هایتان را به روزرسانی
                می کند.این موضوع ،کمک می کند تا خالص دارایی ها و رشد سرمایه
                شما،هر زمان که اراده کنید در دسترستان باشد.
              </p>
            </li>
          </ul>
          <div className="w-[50%] absolute left-[18%] sm:hidden tablet:hidden">
            <Image
              src={"/assets/images/mobile-strategy.png"}
              alt="mobileChild"
              layout="fixed"
              width={750}
              height={655}
              objectFit="cover"
            />
          </div>
          <div className=" hidden w-[50%] absolute top-[1%] left-0 tablet:flex ">
            <Image
              src={"/assets/images/t-mobile-stra.png"}
              alt="t-mobile-stra"
              layout="fixed"
              width={657}
              height={580}
              objectFit="cover"
            />
          </div>
          <div className="hidden sm:flex justify-center	mt-xl">
            <Image
              src={"/assets/images/mobile-stra3.png"}
              alt="mobile-stra3"
              layout="fixed"
              width={328}
              height={417}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* boxs */}
      <div className="bg-gray px-lp py-2xl sm:px-sp tablet:px-sp xl:px-res">
        <h2 className="text-dark_gray text-lg font-bold mb-med sm:text-center sm:text-base">
          انواع صندوق ها
        </h2>
        <ul className=" flex justify-between	sm:flex-col sm:items-center		">
          <li className="w-[32%] sm:w-[100%] sm:max-w-[360px] sm:items-center sm:text-center sm:mb-mm">
            <div className="flex items-center sm:justify-center	">
              <Steps1 />
              <div className="sm:hidden overflow-hidden	 mr-mm w-[90%] ">
                <LineIndicator />
              </div>
            </div>
            <h2 className="text-primary_color text-ft font-bold my-lm sm:text-med tablet:text-pgf">
              صندوق سهام
            </h2>
            <p className="text-Gray900 text-base leading-leading_relaxed sm:text-med tablet:text-med">
              این صندوق متشکل از سهام و اوراق بهادار بوده و هر سودی که از بابت
              دارایی این صندوق حاصل شود به نسبت سهام هر سرمایه گذار تقسیم می
              شود.
            </p>
            <div className="hidden sm:flex  sm:justify-center mt-lm">
              <Linestrategy />
            </div>
          </li>
          <li className="w-[32%] sm:w-[100%] sm:max-w-[360px] sm:items-center sm:text-center sm:mb-mm">
            <div className="flex items-center sm:justify-center	">
              <Steps2 />
              <div className="sm:hidden overflow-hidden	 mr-mm w-[90%] ">
                <LineIndicator />
              </div>
            </div>
            <h2 className="text-primary_color text-ft font-bold my-lm sm:text-med tablet:text-pgf">
              صندوق درآمد ثابت
            </h2>
            <p className="text-Gray900 text-base leading-leading_relaxed sm:text-med tablet:text-med">
              این صندوق شامل اوراق مشارکتی است که سود ثابت(بین ۲۲ تا ۲۴ درصد در
              سال)را برای سرمایه گذار بدون ریسک یا سرمایه گذار ریسک گریز بسیار
              مناسب است.
            </p>
            <div className="hidden sm:flex sm:justify-center mt-lm	">
              <Linestrategy />
            </div>
          </li>
          <li className="w-[32%] sm:w-[100%] sm:max-w-[360px] sm:items-center sm:text-center">
            <div className="flex items-center sm:justify-center	">
              <Steps3 />
            </div>
            <h2 className="text-primary_color text-ft font-bold my-lm sm:text-med tablet:text-pgf">
              صندوق طلا
            </h2>
            <p className="text-Gray900 text-base leading-leading_relaxed sm:text-med tablet:text-med">
              این صندوق شامل« گواهی سکه طلا » بوده و رفتار قیمتی مشابهی با سکه
              طلا دارد.در خرید صندوق طلا بجای طلای فیزیکی ،علاوه برآنکه محدودیتی
              در مقدار خرید وجود ندارد،خطرات ناشی از سرقت و یا حفاظت فیزیکی طلا
              در زمان خرید و فوش طلا نیز به صفر می رسد.
            </p>
          </li>
        </ul>
      </div>
      {/* Combination */}
      <div className="overflow-hidden flex sm:flex-col px-lp pb-3xl sm:px-sp sm:flex-col sm:pb-xl sm:pt-lm tablet:px-sp xl:px-res">
        <div className="w-[50%] sm:w-[100%] sm:max-w-[360px]  flex flex-col justify-center z-50">
          <h3 className="text-ft text-gold font-bold sm:text-med tablet:text-pgf">
            ترکیب دارایی
          </h3>
          <h2 className="text-ft text-primary_color font-bold leading-leading_relaxed mt-xl mb-med sm:text-base sm:mb-mm sm:mt-lm tablet:text-ft tablet:mb-mm">
            <span className="block">
              متنوع سازی دارایی ها در دنیای امروز کار
            </span>
            <span className="block">می کند؟</span>
          </h2>
          <p className="text-base text-Gray900 leading-leading_relaxed sm:text-med tablet:text-med">
            <span className="block">
              هنوز هم متنوع سازی دارایی ها کاری است که می توانیم انجام دهیم تا
              ریسک سرمایه گذاری هایمان را مدیریت کنیم.
            </span>
            <span className="block">
              در نمودار پیش رویتان می توانید تصویری از پرتفویی شامل سهام،طلا و
              اوراق درآمد ثابت بر اساس سطوح ریسک مختلف،بدست آورید.
            </span>
          </p>
        </div>
        <div className="w-[50%] sm:w-[100%]  flex flex-col items-center	sm:-mt-4xl tablet:-mt-3xl tablet ">
          <PieChart width={220} height={300}>
            {sliderValue >= 0 && sliderValue <= 20 && (
              <Pie
                data={data.groupsOne}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.groupsOne.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            )}

            {sliderValue >= 21 && sliderValue <= 40 && (
              <Pie
                data={data.groupsTwo}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.groupsTwo.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            )}
            {sliderValue >= 41 && sliderValue <= 60 && (
              <Pie
                data={data.groupsThree}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.groupsThree.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            )}
            {sliderValue >= 61 && sliderValue <= 80 && (
              <Pie
                data={data.groupsFour}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.groupsFour.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            )}
            {sliderValue >= 81 && sliderValue <= 100 && (
              <Pie
                data={data.groupsFive}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.groupsFive.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            )}
          </PieChart>
          <div className="flex  items-center justify-center mb-tiny mt-xl -mr-med">
            <ul className="flex flex-col ">
              <li className="flex items-center mb-lm">
                <FixedBox />
                <h2 className="text-base text-dark_primary">
                  صندوق درآمد ثابت
                </h2>
              </li>
              <li className="flex items-center mb-lm">
                <GoldBox />
                <h2 className="text-base text-dark_primary">صندوق طلا</h2>
              </li>
              <li className="flex items-center">
                <StockBox />
                <h2 className="text-base text-dark_primary">صندوق سهام</h2>
              </li>
            </ul>
          </div>
          <div className="flex justify-center  w-[100%]">
            <div className="flex flex-col justify-center  w-[55%] dap:w-[90%]  px-mp pt-lm pb-mp shadow-drop_shadow  tablet:w-[300px]">
              <div className="flex justify-between">
                <h2 className="text-primary_color text-tiny font-bold sm:text-med">
                  میزان ریسک پذیری
                </h2>
                <h2 className="text-primary_color text-tiny font-bold sm:text-med">
                  {sliderValue >= 0 && sliderValue <= 50
                    ? "ریسک گریز"
                    : "پر ریسک"}
                </h2>
              </div>
              <Slider
                isReversed
                onChange={(val) => setSliderValue(val)}
                value={sliderValue}
                min={0}
                max={100}
              >
                <SliderTrack>
                  <SliderFilledTrack bgGradient="linear(to-r,teal10,teal20,teal30,teal40,teal50)" />
                </SliderTrack>
                <SliderThumb border="2px" borderColor="lightGray" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* Information */}
      <div className="flex px-lp py-lm bg-primary_color justify-between	 items-center sm:px-sp tablet:px-sp xl:px-res ">
        <div className="w-[55%] sm:w-[100%] sm:flex sm:flex-col sm:items-center tablet:w-[50%]">
          <h2 className="sm:hidden text-xl text-white font-bold sm:text-base sm:max-w-[360px] sm:w-[100%] tablet:text-ft">
            همزمان در صندوق های سهامی،طلا و درآمد ثابت سرمایه گذاری کنید.
          </h2>
          <h2 className="hidden sm:flex flex-col text-white sm:max-w-[360px] sm:w-[100%] text-center">
            <p>همزمان در صندوق های سهامی،طلا و درآمد ثابت</p>
            <p>سرمایه گذاری کنید.</p>
          </h2>
          <div className="hidden sm:flex mt-med">
            <Link href="/landing">
              <button className="mBtn-download">دانلود اپلیکیشن</button>
            </Link>
          </div>
        </div>
        <div className="w-[35%] sm:hidden tablet:w-[45%]">
          <div className=" flex items-center sm:hidden justify-end ">
            <p className="text-white text-base my-tiny leading-leading_relaxed ml-xl tablet:text-med tablet:ml-mm tablet:w-[50%]">
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
