import React from "react";
// import Bazar from "../../components/icon/Bazar";
import Telegram from "../../components/icon/Telegram";
import Instagram from "../../components/icon/Instagram";
import Twitter from "../../components/icon/Twitter";
import Linkedin from "../../components/icon/Linkedin";
import Link from "next/link";
import FooterGoogle from "../../components/icon/FooterGoogle";
import FooterSibApp from "../../components/icon/FooterSibApp";
import FooterSibche from "../../components/icon/FooterSibche";

function Footer() {
  return (
    <footer className="bg-dark_primary text-white px-lp py-lm sm:px-sp tablet:px-sp xl:px-res">
      <div className="text-left text-med text-light_gray my-xl sm:hidden">
        DARAN | investment Solution
      </div>
      <div className="flex justify-between sm:flex-col">
        <div className="w-[60%] right-side flex justify-between sm:w-[100%] sm:order-2 sm:justify-around  tablet:w-[70%] ">
          <ul>
            <Link href="/FAQ">
              <li className="text-tiny mb-lm text-white leading-normal_loos cursor-fancy text-med font-normal tablet:text-sm">
                سوالات متداول
              </li>
            </Link>
            <Link href="/rules">
              <li className="text-tiny mb-sm text-white leading-normal_loos sm:text-med cursor-fancy tablet:text-sm">
                قوانین و مقررات
              </li>
            </Link>
            {/* <li className="text-tiny leading-normal_loos sm:text-med tablet:text-sm text-white">
              حریم خصوصی
            </li> */}
            <Link href={"/education"}>
              <li className="text-tiny leading-normal_loos sm:text-med cursor-fancy tablet:text-sm text-white">
                آموزش
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hidden sm:flex text-tiny leading-normal_loos sm:text-med tablet:text-sm text-white">
                تماس با ما
              </li>
            </Link>
          </ul>
          <ul>
            <li className="text-tiny mb-lm leading-normal_loos sm:text-med sm:text-white sm:font-normal tablet:text-sm text-white">
              محصولات
            </li>
            <Link href="/account/saving">
              <li className="text-sm text-light_gray mb-sm leading-small_loos sm:text-med sm:leading-normal_loos cursor-fancy tablet:text-sm">
                حساب پس انداز
              </li>
            </Link>
            <li className="text-sm text-light_gray mb-sm leading-small_loos sm:text-med sm:leading-normal_loos  tablet:text-sm">
              حساب سفر
            </li>
            <Link href="/account/child">
              <li className="text-sm text-light_gray mb-sm leading-small_loos sm:text-med sm:leading-normal_loos cursor-fancy tablet:text-sm">
                حساب فرزندان
              </li>
            </Link>
            <Link href="/account/retirement">
              <li className="text-sm text-light_gray mb-sm leading-small_loos sm:text-med sm:leading-normal_loos cursor-fancy tablet:text-sm">
                حساب بازنشستگی
              </li>
            </Link>

            <li className="text-sm text-light_gray leading-small_loos sm:text-med sm:leading-normal_loos tablet:text-sm">
              مشاوره سرمایه گذاری
            </li>
          </ul>
          <ul className="sm:hidden">
            <Link href={"/contact"}>
              <li className="text-tiny mb-lm leading-normal_loos cursor-fancy tablet:text-sm text-white">
                تماس با ما
              </li>
            </Link>
            <li className="text-sm leading-small_loos text-light_gray mb-sm">
              <p className="tablet:hidden ">
                میدان آرژانتین،خیابان الوند،خیابان سی و پنجم،پلاک ۲۲،طبقه دوم
              </p>
              <p className="hidden tablet:flex ">
                میدان آرژانتین،خیابان الوند،خیابان سی و پنجم،
              </p>
              <p className="hidden tablet:flex mb-sm">۲۲،طبقه دوم</p>
            </li>
            <li className="text-sm leading-small_loos text-light_gray mb-sm">
              ۰۲۱۸۶۰۸۶۹۹۱
            </li>
            <li className="text-sm leading-small_loos text-light_gray mb-sm">
              info@daraninvest.com
            </li>
          </ul>
        </div>
        <div className="w-[30%] left-side sm:w-[100%] sm:order-1 sm:mb-xl	tablet: tablet:w-[25%]">
          <ul className="sm:flex sm:justify-around">
            <div className="mb-xl">
              <li className="text-med text-light_gray leading-med_loos mb-lm sm:text-white sm:text-med sm:mb-[10px] tablet:text-sm">
                دریافت نسخه اندروید از
              </li>
              <li className=" text-sm leading-small_loos flex justify-between sm:flex-col tablet:flex-col ">
                <div className="w-[69%]   flex justify-between sm:w-[90%] sm:order-2 tablet:flex-col sm:flex-col">
                  {/* <Bazar /> */}
                  <Link href="https://play.google.com/store/apps/details?id=com.daraninvest.daran.b2c&hl=fa&referrer=utm_source%3Dorganic%26utm_medium%3Dlanding">
                    <a target="_blank" className=" sm:order-1">
                      <FooterGoogle />
                    </a>
                  </Link>
                </div>
              </li>
            </div>
            <div>
              <li className="text-sm text-light_gray leading-small_loos sm:mb-[7px] my-sm sm:my-none sm:mt-[2px] sm:text-med sm:text-white tablet:text-sm">
                دریافت نسخه IOS از
              </li>
              <div className="w-[60%] flex justify-between tablet:flex-col sm:flex-col">
                <li className="text-sm leading-small_loos inline-block tablet:order-2 sm:order-2 tablet:-mr-[5px] sm:-mr-[5px]">
                  <Link href="https://sibche.com/applications/daran">
                    <a target="_blank">
                      <FooterSibche />
                    </a>
                  </Link>
                </li>
                <li className="text-sm leading-small_loos inline-block tablet:order-1 sm:order-1">
                  <Link href="https://sibapp.com/applications/Daran">
                    <a target="_blank">
                      <FooterSibApp />
                    </a>
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-center my-med">
          <Link href={"https://www.linkedin.com/company/70911212/admin/"}>
            <a target="_blank" className="mx-xl sm:mx-mm tablet:mx-mm">
              <Linkedin />
            </a>
          </Link>
          <Link href={"https://twitter.com/daraninvest"}>
            <a target="_blank" className="mx-xl sm:mx-mm tablet:mx-mm">
              <Twitter />
            </a>
          </Link>
          <Link href={"https://www.instagram.com/daraninvest/"}>
            <a target="_blank" className="mx-xl sm:mx-mm tablet:mx-mm">
              <Instagram />
            </a>
          </Link>
          <Link href={"https://t.me/daraninvest"}>
            <a target="_blank" className="mx-xl sm:mx-mm tablet:mx-mm">
              <Telegram />
            </a>
          </Link>
        </div>
        <h3 className="text-center text-sm text-secondary sm:text-sm">
          کپی رایت ۱۴۰۰.کلیه حقوق این سایت متعلق به شرکت داران سرمایه دوران است.
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
