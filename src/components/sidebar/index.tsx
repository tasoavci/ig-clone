import logo from "@/assets/instagram-logo.png";
import home from "@/assets/home.png";
import search from "@/assets/search.png";
import explore from "@/assets/explore.png";
import reels from "@/assets/reels.png";
import messages from "@/assets/messages.png";
import notifications from "@/assets/notifications.png";
import create from "@/assets/create.png";
import profile from "@/assets/igclone-3rdpost-1st-photo.jpeg";
import settings from "@/assets/settings.png";
import yourActivity from "@/assets/your_activity.png";
import saved from "@/assets/saved.png";
import switchAppearance from "@/assets/switch_appearance.png";
import reportProblem from "@/assets/report_a_problem.png";
import cameraLogo from "@/assets/instagram-camera-logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Links from "./Links";
import { useState } from "react";
import LinksToggle from "./LinksToggle";
import useMediaQuery from "@/hooks/useMediaQuery";

const SideBar = () => {
  const [isToggledMore, setIsToggledMore] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1263px)");
  const isAboveSmallScreens = useMediaQuery("(min-width:767px)");
  //   const { data, isLoading, isError } = useQuery("osman", () => axios.get('https://osman.com/comments/'));

  return (
    <section className="w-[240px]" id="sidebar  ">
      {isAboveMediumScreens && (
        <div className=" fixed flex h-screen w-[240px] flex-col justify-between border-r-[0.01px]  border-white  border-opacity-20 bg-black p-3 ">
          <div>
            <div className="mb-4">
              {/* LOGO */}
              <img className="w-[123px] px-4 pb-4 pt-6" src={logo} alt="logo" />
            </div>
            <div className="">
              {/* home,search,explore... */}
              <Links children="Home" image={home} />
              <Links children="Search" image={search} />
              <Links children="Explore" image={explore} />
              <Links children="Reels" image={reels} />
              <Links children="Messages" image={messages} />
              <Links children="Notifications" image={notifications} />
              <Links children="Create" image={create} />
              <Links forProfile="profile" children="Profile" image={profile} />
            </div>
          </div>
          {isToggledMore && (
            <>
              <div
                className="fixed inset-0"
                onClick={() => setIsToggledMore(false)}
              ></div>
              <div className=" fixed bottom-[80px] left-[13px] z-40 h-[400px] w-[260px] rounded-2xl bg-[rgb(27,26,26)]">
                <LinksToggle
                  customize="mt-2"
                  children="Settings"
                  image={settings}
                />
                <LinksToggle children="Your Activity" image={yourActivity} />
                <LinksToggle children="Saved" image={saved} />
                <LinksToggle
                  children="Switch appearance"
                  image={switchAppearance}
                />
                <LinksToggle
                  children="Report a problem"
                  image={reportProblem}
                />
                <div className="my-2 border-[3px] border-[rgb(38,38,38)]"></div>
                <div className="mx-2 flex items-center rounded-lg px-4 py-4  transition duration-300  hover:bg-[rgb(77,74,74)]">
                  <span className="text-sm">Switch accounts</span>
                </div>
                <div className="my-2 border-[0.1px] border-[rgb(38,38,38)] "></div>
                <div className="mx-2 flex items-center rounded-lg px-4 py-4  transition duration-300  hover:bg-[rgb(77,74,74)]">
                  <span className="text-sm">Log out</span>
                </div>
              </div>
            </>
          )}

          <button
            className="mb-2 flex items-center p-3 transition duration-500 hover:rounded-md hover:bg-[rgb(27,26,26)]"
            onClick={() => setIsToggledMore(!isToggledMore)}
          >
            {/* MORE */}

            <div className="flex">
              <Bars3Icon className="h-7 text-white" />
              <div>
                <span className="ml-3">More</span>
              </div>
            </div>
          </button>
        </div>
      )}
      {isAboveSmallScreens && !isAboveMediumScreens && (
        <div className=" fixed  flex h-full w-[75px] flex-col justify-between border-r-[0.01px] border-white  border-opacity-20 bg-black p-3 ">
          <div>
            <div className="mb-4 flex items-center justify-center">
              {/* LOGO */}
              <img
                className="ml-[2px]  w-[45px]  px-2 pb-4 pt-6"
                src={cameraLogo}
                alt="camera-logo"
              />
            </div>
            <div className="">
              {/* home,search,explore... */}
              <Links children="" image={home} />
              <Links children="" image={search} />
              <Links children="" image={explore} />
              <Links children="" image={reels} />
              <Links children="" image={messages} />
              <Links children="" image={notifications} />
              <Links children="" image={create} />
              <Links children="" forProfile="profile" image={profile} />
            </div>
          </div>
          {isToggledMore && (
            <>
              <div
                className="fixed inset-0 "
                onClick={() => setIsToggledMore(false)}
              />
              <div className=" bottom-[0px] left-[65px] z-40 h-[400px] w-[260px] rounded-2xl bg-[rgb(27,26,26)]">
                <LinksToggle
                  customize="mt-2"
                  children="Settings"
                  image={settings}
                />
                <LinksToggle children="Your Activity" image={yourActivity} />
                <LinksToggle children="Saved" image={saved} />
                <LinksToggle
                  children="Switch appearance"
                  image={switchAppearance}
                />
                <LinksToggle
                  children="Report a problem"
                  image={reportProblem}
                />
                <div className="my-2 border-[3px] border-[rgb(38,38,38)]"></div>
                <div className="mx-2 flex items-center rounded-lg px-4 py-4  transition duration-300  hover:bg-[rgb(77,74,74)]">
                  <span className="text-sm">Switch accounts</span>
                </div>
                <div className="my-2 border-[0.1px] border-[rgb(38,38,38)] "></div>
                <div className="mx-2 flex items-center rounded-lg px-4 py-4  transition duration-300  hover:bg-[rgb(77,74,74)]">
                  <span className="text-sm">Log out</span>
                </div>
              </div>
            </>
          )}

          <div className="mb-2 flex items-center justify-center p-3 transition duration-500 hover:rounded-md hover:bg-[rgb(27,26,26)]">
            {/* MORE */}

            <button
              onClick={() => setIsToggledMore(!isToggledMore)}
              className="flex"
            >
              <Bars3Icon className="h-7 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SideBar;
