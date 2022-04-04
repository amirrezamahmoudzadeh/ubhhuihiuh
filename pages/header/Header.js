import Link from "next/link";
import Image from "next/image";
import Daran from "../../components/icon/Daran";
import DaranRectangle from "../../components/icon/DaranRectangle";
import MlineGold from "../../components/icon/MlineGold";
import ChevronLeft from "../../components/icon/ChevronLeft";
import ChevronGreen from "../../components/icon/ChevronGreen";
import ChevronGold from "../../components/icon/ChevronGold";
import LineGoldMobile from "../../components/icon/LineGoldMobile";
import TabletDaran from "../../components/icon/TabletDaran";
import MobileMenu from "../../components/menu/MobileMenu";

import { useRef } from "react";
import { useState, useEffect } from "react";

function Header(props) {
  const [showDiv, setShowDiv] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDiv(false);
          setShowAbout(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const box = useRef();
  const account = useRef();

  const color = useRef();
  const colorAbouut = useRef();

  const onMouseMoveColor = () => {
    color.current.style.color = "#CBAF78";
  };
  const onMouseMoveOver = () => {
    color.current.style.color = "#00492F";
  };
  const onMouseMoveColorAbout = () => {
    colorAbouut.current.style.color = "#CBAF78";
  };
  const onMouseMoveOverAbout = () => {
    colorAbouut.current.style.color = "#00492F";
  };
  const handleOnClick = () => {
    box.current.style.display = "none";
  };
  const handleOnClickAccount = () => {
    account.current.style.display = "none";
  };

  const handleOnMouseEnter = () => {
    box.current.style.display = "flex";
  };
  const handleOnMouseEnterAcount = () => {
    account.current.style.display = "flex";
  };
  const handleOnMouseLeave = () => {
    box.current.style.display = "none";
  };
  const handleOnMouseAccount = () => {
    account.current.style.display = "none";
  };
  const handleOnClickDisplay = () => {
    setShowDiv(!showDiv);
    setShowAbout(false);
  };
  const handleOnClickDisplayAbout = () => {
    setShowAbout(!showAbout);
    setShowDiv(false);
  };
  const handleOnClickLink = () => {
    setShowDiv(false);
    setShowAbout(false);
  };

  return (
    <div ref={wrapperRef}>
      {props.children}
      <header className="header shadow-xl px-lp mb-sm sm:px-sp tablet:px-sp py-cp xl:px-res">
        <nav className="flex  justify-between sm:justify-center items-start	 py-none sm:items-center">
          {/* items-center */}
          <div className="hidden sm:flex absolute right-[10px] ">
            {/* <Menu /> */}
            {/* <DrawerExample /> */}
            <MobileMenu />
          </div>
          <div className=" flex  items-start	">
            <div className="logo flex items-center">
              <Link href="/">
                <div className="sm:hidden tablet:hidden cursor-fancy">
                  <DaranRectangle />
                </div>
              </Link>
              <div
                className="hidden tablet:flex"
                onClick={(e) => handleOnClickLink(e)}
              >
                <LineGoldMobile />
              </div>
              <div className="hidden sm:flex">
                <MlineGold />
              </div>
              <Link href="/">
                <div className="pr-bPy tablet:hidden cursor-fancy">
                  <Daran />
                </div>
              </Link>
              <Link href="/">
                <div
                  className="hidden tablet:flex pr-bPy cursor-fancy"
                  onClick={(e) => handleOnClickLink(e)}
                >
                  <TabletDaran />
                </div>
              </Link>
            </div>
            <ul className="menu flex sm:hidden mr-xl tablet:mr-lm relative items-start mt-[10px]">
              <Link href="/strategy">
                <li
                  className="text-base mx-mm text-primary_color md:text-sm md:mx-sm cursor-fancy tmd:text-med tmd:mx-lm hover:text-gold"
                  onClick={(e) => handleOnClickLink(e)}
                >
                  استراتژی سرمایه گذاری
                </li>
              </Link>
              <li
                className="account w-[145px]   flex text-base mx-mm text-primary_color  md:text-sm md:mx-sm tmd:text-med tmd:mx-lm  flex-col   items-center justify-center tablet:hidden"
                onMouseEnter={(e) => handleOnMouseEnterAcount(e)}
                onMouseLeave={(e) => handleOnMouseAccount(e)}
                ref={color}
              >
                <div className=" box flex pl-mp md:pl-tp  cursor-fancy hover:text-gold relative ">
                  <span>حساب سرمایه گذاری</span>
                  <ChevronGreen className=" mr-[8px] mt-[10px] icon" />
                  <ChevronGold className="hidden mr-[8px] mt-[8px] iconGold" />
                </div>
                <ul
                  className="hidden w-[900px]  under-menu  pt-[80px] px-[20px] mr-[150px] flex justify-between items-center "
                  ref={account}
                  onMouseMove={(e) => onMouseMoveColor(e)}
                  onMouseLeave={(e) => onMouseMoveOver(e)}
                >
                  <Link href="/account/saving">
                    <li
                      className="cursor-fancy hover:border-b-4 hover:border-gold pb-[10px] flex flex-col items-center "
                      onClick={(e) => handleOnClickAccount(e)}
                    >
                      <Image
                        src={"/assets/images/menu-saving.png"}
                        alt="saving"
                        layout="fixed"
                        width={200}
                        height={126}
                        objectFit="cover"
                      />
                      <h2 className="text-tiny text-primary_color font-bold my-lm">
                        حساب پس انداز
                      </h2>
                      <p className="text-tiny text-dark_gray">
                        سرمایه‌گذاری در صندوق درآمد ثابت
                      </p>
                    </li>
                  </Link>
                  <Link href="/account/travel">
                    <li
                      className="cursor-fancy hover:border-b-4 hover:border-gold pb-[10px] flex flex-col items-center "
                      onClick={(e) => handleOnClickAccount(e)}
                    >
                      <Image
                        src={"/assets/images/menu-trip.png"}
                        alt="saving"
                        layout="fixed"
                        width={200}
                        height={126}
                        objectFit="cover"
                      />
                      <h2 className="text-tiny text-primary_color font-bold my-lm">
                        حساب سفر
                      </h2>
                      <p className="text-tiny text-dark_gray">
                        سرمایه گذاری برای رفتن به سفر
                      </p>
                    </li>
                  </Link>
                  <Link href="/account/child">
                    <li
                      className="cursor-fancy hover:border-b-4 hover:border-gold pb-[10px] flex flex-col items-center"
                      onClick={(e) => handleOnClickAccount(e)}
                    >
                      <Image
                        src={"/assets/images/menu-child.png"}
                        alt="saving"
                        layout="fixed"
                        width={200}
                        height={126}
                        objectFit="cover"
                      />
                      <h2 className="text-tiny text-primary_color font-bold my-lm">
                        حساب فرزندان
                      </h2>
                      <p className="text-tiny text-dark_gray">
                        سرمایه گذاری برای ساختن آینده فرزندان
                      </p>
                    </li>
                  </Link>
                  <Link href="/account/retirement">
                    <li
                      className="cursor-fancy hover:border-b-4 hover:border-gold pb-[10px] flex flex-col items-center"
                      onClick={(e) => handleOnClickAccount(e)}
                    >
                      <Image
                        src={"/assets/images/menu-retirement.png"}
                        alt="saving"
                        layout="fixed"
                        width={200}
                        height={126}
                        objectFit="cover"
                      />
                      <h2 className="text-tiny text-primary_color font-bold my-lm">
                        حساب بازنشستگی
                      </h2>
                      <p className="text-tiny text-dark_gray">
                        سرمایه گذاری برای دوران بازنشستگی
                      </p>
                    </li>
                  </Link>
                </ul>
              </li>
              {/* tablet-under-menu */}
              <li className="hidden w-[150px] tmd:w-[130px] md:w-[115px] tmd:ml-none md:ml-none about  flex text-base mx-mm   md:text-sm md:mx-sm tmd:text-med tmd:mx-lm  flex-col   items-center justify-center tablet:flex">
                <div
                  className=" flex pl-mp md:pl-tp  cursor-fancy hover:text-gold relative"
                  onClick={(e) => handleOnClickDisplay(e)}
                >
                  <span
                    className={`${
                      showDiv ? "text-gold" : "text-primary_color"
                    }`}
                  >
                    حساب سرمایه گذاری
                  </span>

                  {showDiv ? (
                    <ChevronGold className="mr-[8px] mt-[5px]" />
                  ) : (
                    <ChevronGreen className="mr-[8px] mt-[7px]" />
                  )}
                </div>
                {showDiv && (
                  <ul
                    className="hidden   w-[750px]  under-menu  pt-[50px] px-[20px] mr-[250px] flex justify-between items-center mtab:mr-[160px]  md:w-[600px] md:mr-[60px]"
                    ref={account}
                  >
                    <Link href="/account/saving">
                      <li
                        className=" cursor-fancy  pb-[10px] flex flex-col items-center  md:w-[20%]"
                        onClick={(e) => handleOnClickDisplay(e)}
                      >
                        <Image
                          src={"/assets/images/menu-saving.png"}
                          alt="saving"
                          layout="fixed"
                          width={120}
                          height={126}
                          objectFit="cover"
                        />
                        <h2 className="text-tiny text-primary_color font-bold my-lm">
                          حساب پس انداز
                        </h2>
                        <p className="text-sm text-dark_gray">
                          سرمایه‌گذاری در صندوق درآمد ثابت
                        </p>
                      </li>
                    </Link>
                    <Link href="/account/travel">
                      <li
                        className="cursor-fancy  pb-[10px] flex flex-col items-center w-[24%] md:w-[20%]"
                        onClick={(e) => handleOnClickDisplay(e)}
                      >
                        <Image
                          src={"/assets/images/menu-trip.png"}
                          alt="saving"
                          layout="fixed"
                          width={120}
                          height={126}
                          objectFit="cover"
                        />
                        <h2 className="text-sm text-primary_color font-bold my-lm">
                          حساب سفر
                        </h2>
                        <p className="text-sm text-dark_gray">
                          سرمایه گذاری برای رفتن به سفر
                        </p>
                      </li>
                    </Link>
                    <Link href="/account/child">
                      <li
                        className="cursor-fancy  pb-[10px] flex flex-col items-center w-[24%] md:w-[20%]"
                        onClick={(e) => handleOnClickDisplay(e)}
                      >
                        <Image
                          src={"/assets/images/menu-child.png"}
                          alt="saving"
                          layout="fixed"
                          width={120}
                          height={126}
                          objectFit="cover"
                        />
                        <h2 className="text-tiny text-primary_color font-bold my-lm">
                          حساب فرزندان
                        </h2>
                        <p className="text-sm text-dark_gray">
                          سرمایه گذاری برای ساختن آینده فرزندان
                        </p>
                      </li>
                    </Link>
                    <Link href="/account/retirement">
                      <li
                        className="cursor-fancy  pb-[10px] flex flex-col items-center w-[24%] md:w-[20%]"
                        onClick={(e) => handleOnClickDisplay(e)}
                      >
                        <Image
                          src={"/assets/images/menu-retirement.png"}
                          alt="saving"
                          layout="fixed"
                          width={120}
                          height={126}
                          objectFit="cover"
                        />
                        <h2 className="text-tiny text-primary_color font-bold my-lm">
                          حساب بازنشستگی
                        </h2>
                        <p className="text-sm text-dark_gray">
                          سرمایه گذاری برای دوران بازنشستگی
                        </p>
                      </li>
                    </Link>
                  </ul>
                )}
              </li>
              <Link href="/consulting">
                <li
                  className="text-base ml-mm text-primary_color md:text-sm md:mx-sm tmd:text-med tmd:mx-lm hover:text-gold cursor-fancy"
                  onClick={(e) => handleOnClickLink(e)}
                >
                  مشاوره
                </li>
              </Link>
              <Link href="/education">
                <li
                  className=" text-base mx-mm text-primary_color cursor-fancy md:text-sm  md:mx-sm tmd:text-med tmd:mx-lm hover:text-gold"
                  onClick={(e) => handleOnClickLink(e)}
                >
                  آموزش
                </li>
              </Link>
              <li
                className=" w-[80px] about  flex text-base mx-mm text-primary_color  md:text-sm md:mx-sm tmd:text-med tmd:mx-lm  flex-col   items-center justify-center tablet:hidden"
                onMouseEnter={(e) => handleOnMouseEnter(e)}
                onMouseLeave={(e) => handleOnMouseLeave(e)}
                ref={colorAbouut}
              >
                <div className="about flex pl-mp md:pl-tp  cursor-fancy hover:text-gold relative ">
                  <span>درباره ما</span>
                  <ChevronGreen className=" mr-[8px] mt-[10px] icon" />
                  <ChevronGold className="hidden mr-[8px] mt-[8px] iconGold" />
                </div>
                <ul
                  className="hidden w-[200px]  under-menu  pt-2xl px-cp ml-[170px] flex justify-between items-center"
                  ref={box}
                  onMouseMove={(e) => onMouseMoveColorAbout(e)}
                  onMouseLeave={(e) => onMouseMoveOverAbout(e)}
                >
                  <Link href="/about">
                    <li
                      className="text-primary_color cursor-fancy hover:border-b-4 hover:border-gold pb-[10px] 	"
                      onClick={(e) => handleOnClick(e)}
                    >
                      درباره ما
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li
                      className="text-primary_color cursor-fancy hover:border-b-4 hover:border-gold pb-[10px]"
                      onClick={(e) => handleOnClick(e)}
                    >
                      تماس با ما
                    </li>
                  </Link>
                  {/* <li
                    className="text-primary_color cursor-fancy hover:border-b-4 hover:border-gold pb-[10px] "
                    onClick={(e) => handleOnClick(e)}
                  >
                    فرصت های شغلی
                  </li> */}
                </ul>
              </li>
              {/* tablet-under-menu */}
              <li className=" hidden w-[80px] md:w-[60px] about  flex text-base mx-mm   md:text-sm md:mx-sm tmd:text-med tmd:mx-lm  flex-col   items-center justify-center tablet:flex ">
                <div
                  className=" flex pl-mp md:pl-tp  cursor-fancy hover:text-gold relative "
                  onClick={(e) => handleOnClickDisplayAbout(e)}
                >
                  <span
                    className={`${
                      showAbout ? "text-gold" : "text-primary_color"
                    }`}
                  >
                    درباره ما
                  </span>
                  {showAbout ? (
                    <ChevronGold className="mr-[8px] mt-[5px]" />
                  ) : (
                    <ChevronGreen className="mr-[8px] mt-[7px]" />
                  )}
                </div>
                {showAbout && (
                  <ul
                    className="hidden w-[300px]  under-menu  pt-xl px-cp ml-[250px] flex justify-between items-center"
                    ref={account}
                  >
                    <Link href="/about">
                      <li
                        className=" cursor-fancy  pb-[10px] "
                        onClick={(e) => handleOnClickDisplayAbout(e)}
                      >
                        <h2 className="text-primary_color text-sm text-primary_color  my-lm">
                          در باره ما
                        </h2>
                      </li>
                    </Link>
                    <Link href="/contact">
                      <li
                        className="cursor-fancy  pb-[10px] "
                        onClick={(e) => handleOnClickDisplayAbout(e)}
                      >
                        <h2 className="text-primary_color text-sm text-primary_color  my-lm">
                          تماس با ما
                        </h2>
                      </li>
                    </Link>
                    {/* <Link href="/">
                      <li
                        className="cursor-fancy  pb-[10px] "
                        onClick={(e) => handleOnClickDisplayAbout(e)}
                      >
                        <h2 className="text-primary_color text-sm text-primary_color  my-lm">
                          فرصت های شغلی
                        </h2>
                      </li>
                    </Link> */}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <Link href="/landing">
            <button
              className="btn-app sm:hidden md:hidden tmd:flex 	items-start"
              onClick={(e) => handleOnClickLink(e)}
            >
              <span className="md:text-med">دانلود اپلیکیشن</span>
            </button>
          </Link>
          <Link href="/landing">
            <button
              className="hidden btn-app-tablet sm:hidden md:flex tmd:hidden "
              onClick={(e) => handleOnClickLink(e)}
            >
              <span className="md:text-sm">دانلود اپلیکیشن</span>
            </button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
