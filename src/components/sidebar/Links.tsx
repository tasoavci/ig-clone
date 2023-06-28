import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  children?: React.ReactNode;
  image: string;
  forProfile?: string;
};

const Links = ({ forProfile, children, image }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1263px)");
  const isAboveSmallScreens = useMediaQuery("(min-width:767px)");
  const isAboveSmallScreensClasses =
    !isAboveMediumScreens && isAboveSmallScreens ? `justify-center` : ``;
  const isProfile =
    forProfile === "profile"
      ? (forProfile = "rounded-full h-7 w-7 border-white border-2 ")
      : (forProfile = "h-7");

  return (
    <div
      className={`${isAboveSmallScreensClasses} my-1 flex items-center p-3 transition  duration-300 hover:rounded-md hover:bg-[rgb(27,26,26)] `}
    >
      <img className={isProfile} src={image} alt={`${image}`} />
      {isAboveMediumScreens && (
        <div>
          <span className="ml-3">{`${children}`}</span>
        </div>
      )}
    </div>
  );
};

export default Links;
