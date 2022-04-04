import React from "react";
import { Tabs, TabPanels, Tab, TabPanel, TabList } from "@chakra-ui/react";
import line from "../../public/assets/icon/Line-grey.svg";
import lineMobile from "../../public/assets/icon/m-Line-gray.svg";
import Line from "../../components/icon/LineGrey";
import MLineGray from "../../components/icon/MLineGray";

function index() {
  return (
    <div className="bg-gray px-lp py-4xl sm:px-sp sm:py-sp tablet:px-sp xl:px-res">
      <h2 className="text-center text-xl text-primary_color font-bold mb-xl sm:text-base">
        سوالات متداول
      </h2>
      <Tabs size="lg" variant={"unstyled"}>
        <div className="relative ">
          <div className=" flex mb-2xl justify-center sm:justify-between sm:mb-sm ">
            <Tab
              p={0}
              _selected={{
                borderBottomWidth: "2px",
                borderColor: "#ceb88a",
              }}
            >
              <p className="text-base text-dark_primary mb-lm sm:text-med">
                افتتاح حساب
              </p>
            </Tab>
            <Tab
              mx={"30px"}
              p={0}
              _selected={{
                borderBottomWidth: "2px",
                borderColor: "#ceb88a",
              }}
            >
              <p className="text-base text-dark_primary mb-lm  sm:text-med">
                امنیت سرمایه
              </p>
            </Tab>
            <Tab
              p={0}
              _selected={{
                borderBottomWidth: "2px",
                borderColor: "#ceb88a",
              }}
            >
              <p className="text-base text-dark_primary mb-lm  sm:text-med">
                سود دهی
              </p>
            </Tab>
          </div>
          <div className="hidden sm:flex border-b-2 -mt-[6px] "></div>
        </div>
        <TabPanels>
          {/* acount */}
          <TabPanel px={0}>
            <div className="flex justify-between flex-wrap">
              <div className="flex justify-between flex-wrap">
                <div className="w-[48%] sm:w-[100%]">
                  <div className=" h-[243px]  tablet:h-auto bg-white shadow-drop_shadow flex flex-col justify-center sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                    <div className="flex items-center">
                      <div className="sm:hidden">
                        <Line />
                      </div>
                      <div className="hidden sm:flex">
                        <MLineGray />
                      </div>
                      <h2 className="mr-lm text-pgf font-bold text-primary_color sm:text-med tablet:text-pgf">
                        حساب کاربری داران چه ویژگی هایی دارد و چطور ساخته می
                        شود؟
                      </h2>
                    </div>
                    <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                      داران یک پلتفرم امن برای سرمایه گذاری مستقیم،در سبد های
                      دارایی با سود دهی های مختلف است.برای ساخت حساب کاربری در
                      سایت داران،بر روی شروع سرمایه گذاری کلیک کنید و پس از پاسخ
                      به چند سوال،وارد حساب کاربری شخصی خود شوید.این حساب
                      کاربری،امکان سرمایه گذاری حرفه ای و استفاده از انواع
                      مشاوره ای مالی را در اختیارتان قرار می دهد.
                    </p>
                  </div>
                  <div className=" h-[243px] tablet:h-auto bg-white shadow-drop_shadow flex flex-col justify-center  sm:-mt-none sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp mt-mm tablet:py-pp">
                    <div className="flex items-center">
                      <div className="sm:hidden">
                        <Line />
                      </div>
                      <div className="hidden sm:flex">
                        <MLineGray />
                      </div>
                      <h2 className="mr-lm text-pgf font-bold text-primary_color sm:text-med tablet:text-pgf">
                        حداقل سرمایه برای شروع فعالیت چقدر است؟
                      </h2>
                    </div>
                    <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                      یکی از فلسفه های تیم سرمایه گذاری داران،فراهم آوری امکان
                      سرمایه گذاری برای همه ی افراد،با هر میزان درآمد وسرمایه ای
                      است.از این بابت،هیچ حداقلی برای سرمایه گذاری در
                      داران،استفاده از مشاوره های مالی و برخورداری از مزایای
                      بازار سرمایه برای شما عزیزان وجود ندارد.در واقع تعیین
                      مدت،میزان پیش پرداخت و مبلغ سرمایه گذاری ماهانه،کاملا در
                      اختیار شماست.
                    </p>
                  </div>
                </div>
                <div className="w-[48%] sm:w-[100%]">
                  <div className=" h-[358px]  tablet:h-auto bg-white shadow-drop_shadow flex flex-col justify-center sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                    <div className="flex items-center">
                      <div className="sm:hidden">
                        <Line />
                      </div>
                      <div className="hidden sm:flex">
                        <MLineGray />
                      </div>
                      <h2 className="mr-lm text-pgf font-bold text-primary_color ml-med sm:text-med sm:ml-none tablet:text-pgf">
                        آیا انتخاب ترکیب دارای و انجام سرمایه گذاری در صندوق های
                        درآمد ثابت،طلاوسهام به عهده من است؟
                      </h2>
                    </div>
                    <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                      استراتژی تیم سرمایه گذاری شرکت داران ، فراهم بیشتر سود
                      برای شما و در عین حال جلوگیری از آسیب به اصل سرمایه تان
                      است.از این بابت،پس از آن که میزان ریسک پذیری تان را
                      سنجیدیم، سرمایه شما را حداقل تا سه ماه در صندوق های درآمد
                      ثابت (با سود روز شمار،ثابت و صد در صد تضمینی ۲۴ در
                      صدی)سرمایه گذاری می کنیم.این عمل باعث می شود حاشیه سود
                      امنی برای سرمایه گذاری شما ایجاد شود و سرمایه گذاری های
                      ریسکی تر در صندوق های طلا وسهام،از سود سرمایه شما در صندوق
                      درآمد ثابت انجام شود.در نتیجه نوسانات بازار سرمایه،هیچ گاه
                      به اصل پول شما آسیبی وارد نمی کند
                    </p>
                  </div>
                  <div className=" h-[159px] tablet:h-auto bg-white shadow-drop_shadow flex flex-col justify-center mt-mm sm:mt-none sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                    <div className="flex items-center">
                      <div className="sm:hidden">
                        <Line />
                      </div>
                      <div className="hidden sm:flex">
                        <MLineGray />
                      </div>
                      <h2 className="mr-lm text-pgf font-bold text-primary_color sm:text-med tablet:text-pgf">
                        آیا افتتاح حساب داران برای من هزینه ای دارد؟
                      </h2>
                    </div>
                    <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                      خیر،افتتاح حساب و استفاده از تمامی خدمات داران به صورت
                      کاملا رایگان برای شما امکان پذیر است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* security */}
          <TabPanel px={0}>
            <div className="flex justify-between flex-wrap ">
              <div className="w-[48%] sm:w-[100%]">
                <div className="h-[187px] tablet:h-auto bg-white shadow-drop_shadow flex flex-col justify-center sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                  <div className="flex items-center">
                    <div className="sm:hidden">
                      <Line />
                    </div>
                    <div className="hidden sm:flex">
                      <MLineGray />
                    </div>
                    <h2 className="mr-lm text-pgf font-bold text-primary_color ml-med sm:text-med sm:ml-none tablet:text-pgf">
                      آیا سرمایه من در حساب شرکت داران نگهداری می شود؟
                    </h2>
                  </div>
                  <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                    خیر،سرمایه شما مستقیما در صندوق های مختلف،سرمایه گذاری می
                    گردد.با این حال،هر زمان که بخواهید،می توانید اصل و سود
                    سرمایه تان را از این صندوق ها استعلام کرده و از طریق
                    اپلیکیشن داران آن را وصول کنید.
                  </p>
                </div>
                <div className="h-[184px] tablet:h-auto my-tiny sm:my-none bg-white shadow-drop_shadow flex flex-col justify-center sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                  <div className="flex items-center">
                    <div className="sm:hidden">
                      <Line />
                    </div>
                    <div className="hidden sm:flex">
                      <MLineGray />
                    </div>
                    <h2 className="mr-lm text-pgf font-bold text-primary_color ml-med sm:text-med sm:ml-none tablet:text-pgf">
                      آیا محدودیتی برای جابجایی اصل سود سرمایه من وجود دارد؟
                    </h2>
                  </div>
                  <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                    خیر،هیچ محدودیتی برای جابجایی اصل و سود پول شما وجود
                    ندارد.در نتیجه هر زمان که اراده کنید،می توانید از طریق دکمه
                    برداشت،تمام یا بخشی از سرمایه خود را جابجا کنید.
                  </p>
                </div>
                <div className="h-[232px] tablet:h-auto bg-white shadow-drop_shadow flex flex-col justify-center sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                  <div className="flex items-center">
                    <div className="sm:hidden">
                      <Line />
                    </div>
                    <div className="hidden sm:flex">
                      <MLineGray />
                    </div>
                    <h2 className="mr-lm text-pgf font-bold text-primary_color ml-med sm:text-med sm:ml-none tablet:text-pgf">
                      اگر یک یا چند ماه مبلغ را واریز نکنم،روند سرمایه گذاری ام
                      مختل می شود؟
                    </h2>
                  </div>
                  <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                    خیر با ایجاد وقفه در واریز وجوه ماهانه،سوددهی سرمایه ی موجود
                    شما ادامه پیدا خواهد کرد،اما در صورت عدم سرمایه گذاری
                    ماهانه،زمان تحقق هدف مالی شما برای سرمایه گذاری به تأخیر
                    خواهد افتاد.
                  </p>
                </div>
              </div>
              <div className="w-[48%] sm:w-[100%]">
                <div className="h-[386px] tablet:h-auto mb-mm bg-white shadow-drop_shadow flex flex-col justify-center pl-lm sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                  <div className="flex items-center">
                    <div className="sm:hidden">
                      <Line />
                    </div>
                    <div className="hidden sm:flex">
                      <MLineGray />
                    </div>
                    <h2 className="mr-lm text-pgf font-bold text-primary_color sm:text-med sm:ml-none tablet:text-pgf">
                      چرا به جای سرمایه گذاری مستقیم در صندوق های سرمایه
                      گذاری،از طریق داران سرمایه گذاری کنم؟
                    </h2>
                  </div>
                  <p className="text-base text-dark_primary leading-leading_relaxed mr-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                    سرمایه گذاری در پلتفرم دارن،بر اساس میزان ریسک پذیری شخص شما
                    انجام شده و به سرمایه گذاری بهینه و شخصی سازی شده در صندوق
                    های موجود می انجامد.علاوه بر این ،داران از هدر رفتن وقت شما
                    برای صدور و ابطال مالکیت دارایی های مختلف هم جلوگیری می
                    کند.همچنین با استفادهاز داران،برخلافاکثر صندوق های سرمایه
                    گذاری،امکان مشاهده ومقایسه سود دارایی هایتان را به تفکیک در
                    اختیار خواهد داشت.در واقع شما با استفاده از پلتفرم داران
                    هم،مستقیما در حال سرمایه گذاری در این صندوق هاهستید؛با این
                    تفاوت کهدیگر از حضور فیزیکی ودرگیری با مناسبات پیچیده ی
                    بازار سرمایه خبری نخواهد بود و روند سرمایه گذاری شما به
                    سادگی هر چه تمام تر انجام خواهد شد
                  </p>
                </div>
                <div className="h-[274px] tablet:h-auto bg-white shadow-drop_shadow flex flex-col justify-center pl-lm sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-none sm:pb-pp tablet:py-pp">
                  <div className="flex items-center">
                    <div className="sm:hidden">
                      <Line />
                    </div>
                    <div className="hidden sm:flex">
                      <MLineGray />
                    </div>
                    <h2 className="mr-lm text-pgf font-bold text-primary_color sm:text-med sm:ml-none tablet:text-pgf">
                      چه تضمینی برای امنیت سرمایه من واعتماد به شرکت داران وجود
                      دارد؟
                    </h2>
                  </div>
                  <p className="text-base text-dark_primary leading-leading_relaxed mr-2xl mt-mm sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                    صندوق های همکار با شرکت داران، همگی تحت نظارت بانک مرکزی و
                    سازمان بورس و اوراق بهادار هستند.صندوق هایی که از اعتبار
                    بالایی در بازار سرمایه برخوردارند و تاکنون حدود ۱۷۰ هزار
                    میلیارد تومان دارایی را تحت مدیریت خو داشته اند.سرمایه شما
                    نیز مستقیما در این صندوق سرمایه گذاری می گردد.از این بابت،می
                    توانید در رابطه با امنیت سرمایه خود کاملاً مطمئن بوده و
                    سرمایه خود را از طریق داران رشد دهید.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* profit */}
          <TabPanel px={0}>
            <div className="flex justify-between flex-wrap ">
              <div className="w-[48%] sm:w-[100%]">
                <div className="h-[215px] tablet:h-auto bg-white shadow-drop_shadow py-pp sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-mm sm:pb-pp tablet:py-pp">
                  <div className="flex items-center">
                    <div className="sm:hidden">
                      <Line />
                    </div>
                    <div className="hidden sm:flex">
                      <MLineGray />
                    </div>
                    <h2 className="mr-lm text-pgf font-bold text-primary_color ml-med sm:text-med sm:ml-none tablet:text-pgf">
                      سود سرمایه گذاری در پلن های سرمایه گذاری داران چقدر است؟
                    </h2>
                  </div>
                  <p className="text-base text-dark_primary leading-leading_relaxed mx-2xl mt-med sm:text-med sm:ml-none sm:mx-none sm:mr-med tablet:text-med">
                    سود سالانه دارایی های مالی شما،به درجه ریسک پذیری تان می
                    تواند بین ۲۴ تا ۴۰ در صد محاسبه گردد.در واقع انتخاب هر کدام
                    از دارایی های مالی پر ریسک تر (باسود متغیر)ودارایی های مالی
                    بی خطر(باسود ثابت)،آورده ی متفاوتی را متوجه سرمایه تان خواهد
                    کرد.
                  </p>
                </div>
              </div>
              <div className="w-[48%] sm:w-[100%]">
                <div className="h-[215px] tablet:h-auto bg-white shadow-drop_shadow py-pp pl-lm sm:w-[100%] sm:h-auto sm:pl-mp sm:pt-sp sm:mb-none sm:pb-pp sm:h-auto tablet:py-pp">
                  <div className="flex items-center">
                    <div className="sm:hidden">
                      <Line />
                    </div>
                    <div className="hidden sm:flex">
                      <MLineGray />
                    </div>
                    <h2 className="mr-lm text-pgf font-bold text-primary_color sm:text-med tablet:text-pgf">
                      آیا به اصل و سود سرمایه من مالیات تعلق می گیرد؟
                    </h2>
                  </div>
                  <p className="text-base text-dark_primary leading-leading_relaxed mr-2xl mt-mm sm:text-med sm:mx-none sm:mr-med tablet:text-med">
                    خیر، سرمایه گذاری در «داران» معاف از مالیات بوده و طی این
                    سرمایه گذاری ،هیچ گونه مالیاتی به اصل و سود شما تعلق نمی
                    گیرد.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default index;
