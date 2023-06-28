import settings from "@/assets/settings.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import addUser from "@/assets/add_user.png";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import profilePhoto from "@/assets/igclone-3rdpost-1st-photo.jpeg";
import check from "@/assets/check.png";

const TopBar = () => {
  const [isToggledTasoavciButton, setIsToggledTasoavciButton] = useState(false);

  return (
    <>
      <div className=" fixed left-0 right-0 top-0 z-50  flex h-[50px]  w-full items-center justify-between border-b-[0.01px] border-white border-opacity-20 bg-black px-5  osman:hidden">
        <div>
          {/* SETTINGS */}
          <img className="h-7" src={settings} alt="settings" />
        </div>
        {/* tasoavci35 */}
        <div className="flex items-center justify-center">
          <span className="text-xl">tasoavci35</span>

          <button
            onClick={() => {
              setIsToggledTasoavciButton(!isToggledTasoavciButton);
            }}
            className="ml-2"
          >
            <ChevronDownIcon className="h-5 text-white" />
          </button>
        </div>
        <div>
          {/* ADD USER */}
          <img className="h-7" src={addUser} alt="addUser" />
        </div>
      </div>

      <div>
        {isToggledTasoavciButton && (
          <>
            <div
              onClick={() => setIsToggledTasoavciButton(false)}
              className="fixed inset-0 bg-black/50"
            ></div>

            <div className="transfom fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className=" z-40 h-[250px] w-[400px] transform  rounded-xl bg-[rgb(27,26,26)] ">
                <div className="flex  border-b-[0.1px] border-white border-opacity-10 p-2">
                  <div className=" flex w-full items-center">
                    <h1 className="ml-[37%]">Switch accounts</h1>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() =>
                        setIsToggledTasoavciButton(!isToggledTasoavciButton)
                      }
                    >
                      <XMarkIcon className="h-8" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <img
                    className="h-[56px] rounded-full"
                    src={profilePhoto}
                    alt="profile-photo"
                  />
                  <div className="w-[264px]">
                    <span>tasoavci35</span>
                  </div>
                  <img className="h-[23px] w-[23px]" src={check} alt="check" />
                </div>
                <div className="flex h-[45%] items-end justify-center">
                  <span className="text-sm text-[#0095F6]">
                    Log into an Existing Account
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TopBar;
