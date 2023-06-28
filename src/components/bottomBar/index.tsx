import Links from "../sidebar/Links";
import useMediaQuery from "@/hooks/useMediaQuery";
import home from "@/assets/home.png";
import explore from "@/assets/explore.png";
import reels from "@/assets/reels.png";
import messages from "@/assets/messages.png";
import create from "@/assets/create.png";
import profile from "@/assets/igclone-3rdpost-1st-photo.jpeg";

const BottomBar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1263px)");
  const isAboveSmallScreens = useMediaQuery("(min-width:767px)");

  return (
    <>
      <div>
        {!isAboveMediumScreens && !isAboveSmallScreens && (
          <div className=" fixed inset-x-0 bottom-0  z-30 flex h-[50px] items-center justify-between border-t-[0.01px] border-white border-opacity-20  bg-black  ">
            <Links children="" image={home} />
            <Links children="" image={explore} />
            <Links children="" image={reels} />
            <Links children="" image={create} />
            <Links children="" image={messages} />
            <Links forProfile="profile" children="" image={profile} />
          </div>
        )}
      </div>
    </>
  );
};
export default BottomBar;
