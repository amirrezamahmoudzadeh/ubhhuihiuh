import axios from "axios";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Line from "../../components/icon/Line";
import LineGoldMobile from "../../components/icon/LineGoldMobile";
import data from "../../data";
function index() {
  
  return (
    <div className="edu px-lp sm:px-none tablet:px-sp xl:px-res">
      <div className="overflow-hidden	flex justify-between bg-light_green my-4xl sm:flex-col sm:my-none sm:-mt-sm tablet:my-tiny">
        <div className="w-[60%] flex flex-col justify-center my-lm pr-lm sm:order-2 sm:w-[100%] sm:justify-start sm:px-sp sm:py-sp">
          <div>
            <h2 className="text-xl font-bold text-primary_color sm:text-base sm:mb-mm tablet:text-lg">
              آموزش سرمایه گذاری
            </h2>
            <p className="text-ft font-bold text-dark_primary my-med leading-larg_loops sm:leading-med_loss sm:my-none ">
              <span className="block sm:inline sm:text-med tablet:text-med">
                در دنیای سرمایه گذاری مطالب زیادی وجود دارد که دانستن آن ها به
              </span>
              <span className="block sm:inline sm:text-med tablet:text-med">
                موفقیت شما کمک می کند.
              </span>
            </p>
          </div>
          <div className="flex items-center sm:hidden">
            <p className="text-base text-primary_color ml-med">
              <span className="block tablet:text-med">
                برای دانلود اپلیکیشن و مطالعه مطالب
              </span>
              <span className="block tablet:text-med">
                بیشتر،از طریق تلفن همراه خود تصویر
              </span>
              <span className="block tablet:text-med">
                رو به رو را اسکن کنید.
              </span>
            </p>
            <div className="w-[96px] h-[96px] relative ">
              <Image
                src={"/assets/images/QR.png"}
                alt="code"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="hidden sm:flex justify-center	mt-mm">
            <button className="btn-send">دانلود</button>
          </div>
        </div>
        <div className="xl:overflow-hidden w-[30%] sm:order-1 sm:w-[100%]">
          <div className="w-[312px] h-[300px] relative sm:hidden tablet:hidden mr-[5px] xl:mr-tiny ">
            <Image
              src={"/assets/images/man.png"}
              alt="street"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden sm:flex h-[136px]  relative">
            <Image
              src={"/assets/images/man-mobile.png"}
              alt="street"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden  w-[274px] h-[284px]  relative tablet:flex mr-[20px]">
            <Image
              src={"/assets/images/tablet-man.png"}
              alt="street"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* investment */}
      <div className="investment mb-4xl sm:mb-2xl">
        <div className="flex items-center mb-med sm:px-sp sm:my-med">
          <div className="sm:hidden tablet:hidden">
            <Line />
          </div>
          <div className="hidden sm:flex tablet:flex">
            <LineGoldMobile />
          </div>
          <h2 className="pr-bPy font-bold text-lg sm:text-base tablet:text-pgf">
            سرمایه گذاری
          </h2>
        </div>
        <ul className="flex justify-between overflow-auto	sm:pr-sp ">
          {data.investments?.map((investment) => (
            <Link
              key={investment.id}
              href={`/education/investment/${investment.id}`}
            >
              <li className="w-[24%] bg-light_green rounded-lm flex flex-col items-center shadow-drop_shadow cursor-fancy sm:min-w-[70%] sm:ml-mm">
                <div className="w-[100%] h-[180px] z-10 relative">
                  <Image
                    src={investment.image}
                    alt={investment.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-sp w-[100%]">
                  <div className="h-[198px] mo:h-[300px] am:h-[210px]  bg-white p-sp -mt-tm z-50 relative mb-mm flex flex-col items-center sm:-mt-im msm:h-[300px]">
                    <h2 className="text-base text-dark_primary mb-mm sm:text-med tablet:text-med">
                      {investment.title}
                    </h2>
                    <p className="text-tiny text-dark_gray leading-leading_relaxed sm:text-med tablet:text-sm">
                      {investment.dec}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* bourse */}
      <div className="bourse mb-4xl sm:mb-2xl">
        <div className="flex items-center mb-med sm:px-sp sm:my-med">
          <div className="sm:hidden tablet:hidden">
            <Line />
          </div>
          <div className="hidden sm:flex tablet:flex">
            <LineGoldMobile />
          </div>
          <h2 className="pr-bPy font-bold text-lg sm:text-base">بورس</h2>
        </div>
        <ul className="flex justify-between overflow-auto	sm:pr-sp">
          {data.bourses?.map((bourse) => (
            <Link key={bourse.id} href={`/education/bourse/${bourse.id}`}>
              <li className="w-[24%] bg-light_green rounded-lm flex flex-col items-center shadow-drop_shadow cursor-fancy sm:min-w-[70%] sm:ml-mm">
                <div className="w-[100%] h-[180px] z-10 relative">
                  <Image
                    src={bourse.image}
                    alt={bourse.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-sp">
                  <div className="h-[198px] mo:h-[300px] am:h-[210px] bg-white p-sp  -mt-tm z-50 relative mb-mm flex flex-col items-center msm:h-[300px]">
                    <h2 className="text-base text-dark_primary mb-mm sm:text-med tablet:text-med">
                      {bourse.title}
                    </h2>
                    <p className="text-tiny text-dark_gray leading-leading_relaxed sm:text-med tablet:text-sm">
                      {bourse.dec}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* box */}
      <div className="box mb-4xl sm:mb-2xl">
        <div className="flex items-center mb-med sm:px-sp sm:my-med">
          <div className="sm:hidden tablet:hidden">
            <Line />
          </div>
          <div className="hidden sm:flex tablet:flex">
            <LineGoldMobile />
          </div>
          <h2 className="pr-bPy font-bold text-lg sm:text-base">صندوق</h2>
        </div>
        <ul className="flex justify-between overflow-auto	sm:pr-sp">
          {data.boxes.map((box) => (
            <Link key={box.id} href={`/education/box/${box.id}`}>
              <li className="w-[24%] bg-light_green rounded-lm flex flex-col items-center shadow-drop_shadow cursor-fancy sm:min-w-[70%] sm:ml-mm">
                <div className="w-[100%] h-[180px] z-10 relative">
                  <Image
                    src={box.image}
                    alt={box.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="p-sp">
                  <div className="h-[198px] mo:h-[310px] am:h-[210px] bg-white p-sp  -mt-tm z-50 relative mb-mm flex flex-col items-center sm:-mt-im msm:h-[300px]">
                    <h2 className="text-base text-dark_primary mb-mm sm:text-med tablet:text-med">
                      {box.title}
                    </h2>

                    <p className="text-tiny text-dark_gray leading-leading_relaxed sm:text-med tablet:text-sm">
                      {box.dec}
                      {box.types?.map((type, index) => (
                        <span className="block" key={index}>
                          {type.name}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* story */}
      <div className="story">
        <div className="flex items-center mb-med sm:px-sp sm:my-med">
          <div className="sm:hidden tablet:hidden">
            <Line />
          </div>
          <div className="hidden sm:flex tablet:flex">
            <LineGoldMobile />
          </div>
          <h2 className="pr-bPy font-bold text-lg sm:text-base">داستان</h2>
        </div>
        <ul className="flex justify-between overflow-auto	sm:pr-sp">
          {data.Stories.map((story) => (
            <Link key={story.id} href={`/education/tale/${story.id}`}>
              <li className="w-[24%] bg-light_green rounded-lm flex flex-col items-center shadow-drop_shadow cursor-fancy sm:min-w-[70%] sm:ml-mm">
                <div className="w-[100%] h-[180px] z-10 relative">
                  <Image
                    src={story.image}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-sp">
                  <div className="h-[198px] mo:h-[330px] am:h-[250px] bg-white p-sp  -mt-tm z-50 relative mb-mm flex flex-col items-center sm:-mt-im msm:h-[300px]">
                    <h2 className="text-base text-dark_primary mb-mm text-center leading-normal_loos sm:text-med tablet:text-med">
                      {story.title}
                    </h2>

                    <p className="text-tiny text-dark_gray leading-leading_relaxed sm:text-med xl:text-med tablet:text-sm">
                      {story.dec}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex bg-light_green mt-4xl mb-5xl px-4xl py-lm rounded-sm sm:px-sp sm:my-med sm:flex-col sm:bg-light_green tablet:mt-xl tablet:mb-xl tablet:px-sp">
        <div className="w-[50%] sm:w-[100%] tablet:w-[70%]">
          <h2 className="text-primary_color  text-lg font-bold mb-med sm:text-primary_color sm:text-base sm:mb-mm tablet:text-ft">
            مطالب بیشتر در اپلیکیشن
          </h2>
          <div className=" sm:hidden">
            <div className=" flex items-center">
              <h2 className="text-tiny text-dark_primary leading-normal_loos pl-lm tablet:w-[55%]">
                <p className="none tablet:hidden">
                  برای دانلود اپلیکیشن ، از طریق تلفن همراه
                </p>
                <p className="none tablet:hidden">
                  خود، تصویر رو به رو را اسکن کنید.
                </p>
                <span className="hidden tablet:flex tablet:w-[100%]">
                  برای دانلود اپلیکیشن، از طریق تلفن همراه خود، تصویر روبرو را
                  اسکن کنید.
                </span>
              </h2>
              <div className=" w-[96px] h-[96px]  relative sm:hidden tablet:w-[60px] tablet:h-[60px] ">
                <Image
                  src={"/assets/images/QR.png"}
                  alt="code"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[50%] flex flex-col justify-center mt-2xl sm:w-[100%] sm:mt-none tablet:w-[45%]">
          <h2 className="text-tiny text-light_gray leading-normal_loos ">
            <p className="sm:text-dark_primary sm:text-med">
              آیا به نوشتن مطالب سرمایه گذاری علاقه دارید؟
            </p>
            <p className="sm:text-dark_primary sm:text-med">
              در صورت تمایل نشانی الکترونیکی خود را برای ما ارسال کنید.
            </p>
          </h2>
          <div className="mt-tiny sm:flex sm:justify-center	">
            <input
              type="email"
              placeholder="نشانی الکترونیکی"
              className="w-[240px] text-sm text-light_gray px-sp py-bPy rounded-sm sm:w-[150px]"
            />
            <button className="btn-send mr-lm sm:hidden">ارسال</button>
            <button className="mBtn-send mr-lm hidden sm:block">ارسال</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default index;
