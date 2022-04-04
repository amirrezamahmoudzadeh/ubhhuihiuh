import axios from "axios";
import Image from "next/image";
import Line from "../../components/icon/Line";
import LineGoldMobile from "../../components/icon/LineGoldMobile";
import MLine from "../../components/icon/MLineGray";
import data from "../../data";
function index() {
  return (
    <div className="overflow-hidden about ">
      {/* bg-gray */}
      <div className="px-lp py-4xl tablet:px-sp sm:px-none sm:py-pp xl:px-res tablet:py-2xl">
        <div className="pic bg-light_gray p-sp rounded-sm mb-4xl sm:p-[5px] sm:mb-tiny ">
          <div className="h-[200px] relative sm:hidden">
            <Image
              src={"/assets/images/daran.png"}
              alt="team"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full h-[127px] hidden sm:flex relative">
            <Image
              src={"/assets/images/m-team.png"}
              alt="team"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="sm:px-sp sm:mt-mm">
          <div className="flex items-center">
            <div className="flex items-center sm:hidden tablet:hidden">
              <Line className="flex items-center " />
            </div>
            <div>
              <MLine className="hidden sm:flex " />
            </div>
            <div className="hidden  tablet:flex">
              <LineGoldMobile />
            </div>
            <h2 className="pr-bPy text-lg text-dark_primary font-bold sm:text-med sm:text-primary_color tablet:text-pgf">
              درباره داران
            </h2>
          </div>
          <p className="text-pgf font-bold text-dark_primary my-2xl sm:text-tiny sm:font-normal sm:my-mm sm:leading:lg_loss tablet:text-tiny">
            ماموریت ما این است که آسودگی واطمینان را به سرمایه گذاری همه مردم
            اظافه ودسترسی انها به بازار های مالی را دموکراتیک کنیم
          </p>
        </div>
        {/* information */}
        <ul className="flex justify-between flex-wrap sm:px-sp">
          {data.posts.map((post) => (
            <li key={post.id} className="w-[48%]  my-lm sm:w-[100%]">
              <div className="title flex items-center	">
                <div className="w-[20px] h-[26px] relative">
                  <Image
                    src={post.icon}
                    layout="fill"
                    objectFit="cover"
                    alt={post.title}
                  />
                </div>
                <h2 className="text-pgf text-primary_color m-lm text-ft font-bold sm:text-med tablet:text-pgf">
                  {post.title}
                </h2>
              </div>
              <p className="text-base text-Gray900 leading-leading_relaxed  mr-med sm:text-med sm:leading-xl_loss tablet:leading-xl_loss tablet:text-med">
                {post.dec}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-lp my-4xl sm:hidden tablet:px-[5px] xl:px-res tablet:mt-2xl tablet:mb-mm">
        <h2 className="text-center font-bold text-primary_color text-xxl mb-4xl tablet:text-lg">
          تیم ما
        </h2>
        <ul className="flex flex-wrap justify-between px-4xl tmd:px-[80px] md:px-[30px]">
          {data.teams.map((team) => (
            <li
              key={team.id}
              className=" w-[24%] flex flex-col items-center mb-3xl tablet:w-[20%] "
            >
              <div className="tablet:hidden">
                <Image
                  src={team.image}
                  layout="fixed"
                  objectFit="cover"
                  width={165}
                  height={420}
                  alt={team.name}
                />
              </div>

              <div className="hidden w-[120px] h-[200px] relative tablet:flex ">
                <Image
                  src={team.t_image}
                  layout="fill"
                  objectFit="cover"
                  alt={team.name}
                />
              </div>
              <p className="text-primary_color font-bold my-lm tablet:text-base">
                {team.name}
              </p>
              <p className="text-sm text-dark_primary tablet:text-med">
                {team.job}
              </p>
            </li>
          ))}
        </ul>
        {/* developers */}
        <ul className="flex flex-wrap justify-between timg:py-none">
          {data.developers.map((developer) => (
            <li
              key={developer.id}
              className="w-[19%] flex flex-col items-center mb-3xl"
            >
              <div className="tablet:hidden">
                <Image
                  src={developer.image}
                  layout="fixed"
                  objectFit="cover"
                  width={165}
                  height={420}
                  alt={developer.name}
                />
              </div>
              <div className="hidden w-[120px] h-[200px] relative tablet:flex ">
                <Image
                  src={developer.t_image}
                  layout="fill"
                  objectFit="cover"
                  alt={developer.name}
                />
              </div>
              <p className="text-primary_color font-bold my-lm tablet:text-base">
                {developer.name}
              </p>
              <p className="text-sm text-dark_primary tablet:text-med">
                {developer.job}
              </p>
            </li>
          ))}
        </ul>
        {/* products */}
        <ul className="flex justify-between px-4xl  tmd:px-[80px] md:px-[30px]">
          {data.products.map((product) => (
            <li
              key={product.id}
              className=" w-[24%] flex flex-col items-center mb-3xl tablet:w-[20%]"
            >
              <div className="tablet:hidden">
                <Image
                  src={product.image}
                  layout="fixed"
                  objectFit="cover"
                  width={165}
                  height={420}
                  alt={product.name}
                />
              </div>

              <div className="hidden w-[120px] h-[200px] relative tablet:flex ">
                <Image
                  src={product.t_image}
                  layout="fill"
                  objectFit="cover"
                  alt={product.name}
                />
              </div>
              <p className="text-primary_color font-bold my-lm  tablet:text-base">
                {product.name}
              </p>
              <p className="text-sm text-dark_primary tablet:text-med ">
                {product.job}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="hidden sm:flex flex-col	 px-none py-pp">
        <h2 className="text-center text-pgf font-normal mb-mm">تیم ما</h2>
        <ul className="flex flex-wrap justify-between px-none ">
          {data.mobiles.map((team) => (
            <li
              key={team.id}
              className="flex flex-col items-center w-[50%] mb-mm "
            >
              <div className="w-[154px] h-[154px]  mb-lm relative">
                <Image
                  src={team.m_image}
                  layout="fill"
                  objectFit="cover"
                  alt={team.name}
                />
              </div>
              <p className="text-med text-primary_color font-bold">
                {team.name}
              </p>
              <p className="text-dark_primary text-med">{team.job}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default index;
