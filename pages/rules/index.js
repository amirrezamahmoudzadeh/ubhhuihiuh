import React from "react";
import LineGrey from "../../components/icon/LineGrey";
import MLineGray from "../../components/icon/MLineGray";

function index() {
  return (
    <div className="rules">
      <div className="bg-gray px-lp py-pp sm:sm:px-sp tablet:px-sp xl:px-res ">
        <h2 className="text-xl font-bold text-primary_color mb-mm sm:text-base tablet:text-lg">
          قوانین و مقررات
        </h2>
        <p className="text-ft font-bold text-dark_gray sm:text-med tablet:text-pgf">
          شرایط و قوانین استفاده از اپلیکیشن و خدمات داران
        </p>
      </div>
      <div className="flex flex-wrap justify-between px-lp py-xl sm:sm:px-sp tablet:px-sp xl:px-res">
        <ul className="w-[30%] sm:w-[100%] tablet:w-[35%]">
          <li>
            <div className=" flex items-center	">
              <LineGrey className="sm:hidden" />
              <MLineGray className="hidden sm:flex" />
              <h2 className="text-ft font-bold text-primary_color mr-lm sm:text-med tablet:text-pgf">
                ماده ۱-تعاریف و اصطلاحات
              </h2>
            </div>
            <p className="text-base my-im mr-2xl leading-leading_relaxed sm:text-med sm:my-xl sm:mr-med tablet:text-tiny">
              اصطلاحاتی که در این شرایط و قوانین به کار رفته است دارای معانی
              مشروح ذیل است:
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:mb-lm sm:text-med tablet:text-tiny">
              ۱-۱-شرکت
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              منظور از شرکت داران سرمایه دوران است.
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۲-۱-داران
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              خدمات نرم افزاری و غیر نرم افزاری که توسط شرکت به کاربران ارائه می
              شود.
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۳-۱-کاربر
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              شخصی حقیقی یا حقوقی که از خدمات داران استفاده می کند.
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۴-۱-قوانین جمهوری اسلامی ایران
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              قانون اساسی،قوانین عادی،آیین نامه های اجرایی،بخشنامه ها وکلیه
              ضوابط قانونی حاکم بر موضوع قرارداد.
            </p>
          </li>
        </ul>
        <ul className="w-[60%] sm:w-[100%]">
          <li>
            <div className="flex items-center mb-im sm:mb-med sm:mt-med">
              <LineGrey className="sm:hidden" />
              <MLineGray className="hidden sm:flex" />
              <h2 className="text-ft font-bold text-primary_color mr-lm sm:text-med tablet:text-pgf">
                ماده ۲-شرایط استفاده
              </h2>
            </div>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۱-۲-در صورت بروز ایراد در احراز هویت و دزدی هویت حساب مسدود خواهد
              شد.
            </h2>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۲-۲-مسئولیت نگهداری و امنیت نام کاربری و رمز انتخابی با کاربر است.
            </h2>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۳-۲-مالکیت فکری
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              داده هایی مثل ویدئو،عکس،نرم افزار،متون،تصاویر،گراف ها و نمودارها و
              فایل های صوتی یا موارد دیگر که متعلق به "داران" است."محتوا" حق
              استفاده،فروش و ... در اختیار داران است.
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۴-۲-عدم وجود پیشنهاد یا مشاوره مالی
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              تمام داده های در اختیار مهمان ها صرفا نمایش اطلاعات و هیچ گونه
              پیشنهاد یا مشاوره مالی نیست.برای کاربران اطلاعات نمایشی پیشنهاد
              نیست و در صورت استفاده از بعضی خدمات می تواند مشاوره محسوب شود.هیچ
              یک از اطلاعات دعوت به خرید یا پیشنهاد و هیچ گونه اوراق
              بهادار(صندوق،سهام و...)نیست.
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۵-۲-عدم وجود تضمین،عدم استفاده از اطلاعات نهانی
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med">
              اطلاعات نمایش داده شده صرفا اطلاعات در دسترس عموم هست.هیچ گونه
              تضمینی در سودآوری نیست و مسئولیت های ضررهای احتمالی با "داران"
              نیست.جملات آینده نگرانه پیش بینی هایی از تحلیلگران هستند و امکان
              اشتباه بودن آنها هست.و هیچ مسئولیتی با "داران" نیست.به دلیل
              تغییرات ثانیه ای شرایط بازار هر قسمتی از تحلیل ها و اطلاعات فقط در
              همان لحظه اعتبار دارند.مسئولیت استفاده نابجا با "داران" نیست.
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۶-۲-خدمات رتبه بندی
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              خدمات رتبه بندی دیگر شرکت ها صرفا توسط "داران" محاسبه می شود و
              ممکن است با روابطی که با دیگران برای رتبه بندی استفاده می کنند
              متفاوت باشد.
            </p>
          </li>
          <li className="mb-2xl mr-2xl sm:mb-xl sm:mr-med">
            <h2 className="text-ft font-bold text-dark_primary mb-lm sm:text-med sm:mb-lm tablet:text-tiny">
              ۷-۲-عدم وجود اطمینان در صحت تمامی اطلاعات
            </h2>
            <p className="leading-leading_relaxed text-base sm:text-med tablet:text-tiny">
              "داران" صحت تمامی اطلاعات را تایید می کند و مسئولیت تصمیم بر اساس
              اشتباهات احتمالی در داده ها با کاربر است.لینک های ورود به سایت های
              دیگر صرفا برای دسترسی است و "داران" خدمات آنها را تایید یا رد نمی
              کند.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default index;
