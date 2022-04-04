import React from "react";
import GPS from "../../components/icon/GPS";
import Phone from "../../components/icon/Phone";
import Time from "../../components/icon/Time";
import Line from "../../components/icon/Line";
import LineGoldMobile from "../../components/icon/LineGoldMobile";
import WTelegram from "../../components/icon/WTelegram";
import WInsta from "../../components/icon/WInsta";
import WTweeter from "../../components/icon/WTweeter";
import WLinkedin from "../../components/icon/WLinkedin";
import Link from "next/link";
import Image from "next/image";

function index() {
  return (
    <div>
      <div className="h-[400px] bg-Light_beige relative -mt-sm sm:h-auto tablet:h-[250px] ">
        <div className="flex justify-between items-center w-full pr-lp bg-Light_beige absolute bottom-0 sm:hidden tablet:pr-sp tablet:text-lg">
          <h2 className="text-xl font-bold text-primary_color mt-[80px]">
            با ما در تماس باشید
          </h2>
          <div className="w-[730px] h-[334px] relative tablet:hidden">
            <Image
              src={"/assets/images/post-man.png"}
              alt="man"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden relative tablet:flex">
            <Image
              src={"/assets/images/tablet-post-man.png"}
              alt="man"
              layout="fixed"
              width={375}
              height={200}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="hidden sm:flex">
          <div className="w-[730px] h-[155px] relative">
            <h2 className="absolute right-[7%] top-[10%] text-base text-primary_color font-bold z-50">
              با ما در تماس باشید
            </h2>
            <Image
              src={"/assets/images/postManMobile.png"}
              alt="contact"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-gray px-lp py-4xl sm:flex-col	sm:px-none sm:py-none tablet:px-sp">
        <div className="w-[38%] flex flex-col justify-center	sm:w-[100%] sm:p-sp ">
          <ul className="flex flex-col justify-center">
            <li>
              <div className="flex items-center">
                <GPS />
                <span className="mr-xl text-base text-dark_primary sm:med sm:mr-mm">
                  آدرس
                </span>
              </div>
              <p className="text-pgf text-dark_primary font-bold mr-im mt-mm sm:hidden">
                میدان آرژانتین،خیابان الوند،خیابان سی و پنجم، <br />
                پلاک ۲۲،طبقه دوم
              </p>
              <p className="hidden sm:flex text-tiny text-dark_primary font-bold mt-lm mr-tiny font-normal">
                میدان آرژانتین،خیابان الوند،خیابان سی و پنجم، پلاک ۲۲،طبقه دوم
              </p>
            </li>
            <li className="my-2xl">
              <div className="flex items-center">
                <Phone />
                <span className="mr-xl text-base text-dark_primary sm:med sm:mr-mm">
                  شماره تماس
                </span>
              </div>
              <p className="text-pgf text-dark_primary font-bold mr-im mt-mm sm:mt-lm sm:text-tiny sm:mt-lm sm:mr-tiny sm:font-normal">
                ۰۲۱۸۶۰۸۶۹۹۱
              </p>
            </li>
            <li>
              <div className="flex items-center">
                <Time />
                <h2 className="mr-xl text-base text-dark_primary sm:med sm:mr-mm">
                  ساعت کاری:
                </h2>
              </div>
              <p className="text-pgf text-dark_primary font-bold mr-im mt-mm sm:mt-lm sm:text-tiny sm:mt-lm sm:mr-tiny sm:font-normal">
                شنبه تا چهارشنبه ساعت ۹ صبح تا ۶ عصر
              </p>
            </li>
            <li className="flex mt-2xl mr-im sm:justify-center sm:mr-none">
              <Link href={"https://www.linkedin.com/company/70911212/admin/"}>
                <a target="_blank">
                  <WLinkedin />
                </a>
              </Link>
              <Link href={"https://twitter.com/daraninvest"}>
                <a target="_blank" className="mr-lm ">
                  <WTweeter />
                </a>
              </Link>
              <Link href={"https://www.instagram.com/daraninvest/"}>
                <a target="_blank" className="mx-lm ">
                  <WInsta />
                </a>
              </Link>
              <Link href={"https://t.me/daraninvest"}>
                <a target="_blank">
                  <WTelegram />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="w-[48%] sm:w-[100%]">
          <div className="bg-white pt-lm pb-sp sm:px-sp">
            <div className="flex items-center">
              <div className="sm:hidden">
                <Line />
              </div>
              <div className="hidden sm:flex">
                <LineGoldMobile />
              </div>

              <h2 className="text-lg font-bold text-dark_primary mr-lm sm:text-med">
                ارسال پیام
              </h2>
            </div>
            <div className="pr-4xl mt-xl sm:pr-xl sm:pr-mp w-[80%] sm:w-[95%] sm:text-med">
              <form>
                <div className="omrs-input-group ">
                  <label className="omrs-input-underlined ">
                    <input required />
                    <span className="omrs-input-label sm:text-sm">
                      نام و نام خانوادگی
                    </span>
                  </label>
                </div>
                <div className="omrs-input-group">
                  <label className="omrs-input-underlined">
                    <input required />
                    <span className="omrs-input-label sm:text-sm">
                      آدرس الکترونیکی
                    </span>
                  </label>
                </div>
                <div className="omrs-input-group">
                  <label className="omrs-input-underlined">
                    <input required />
                    <span className="omrs-input-label sm:text-sm">
                      موضوع پیام
                    </span>
                  </label>
                </div>
                <div className="omrs-input-group">
                  <label className="omrs-input-underlined-message">
                    <textarea required className="sm:text-sm" />
                    <span className="omrs-input-label sm:text-sm">پیام</span>
                  </label>
                </div>
                <div className="omrs-input-group">
                  <button className="btn-form">ارسال</button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default index;
