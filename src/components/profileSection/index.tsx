import profilePhoto from "@/assets/igclone-3rdpost-1st-photo.jpeg";
import settings from "@/assets/settings.png";
import posts from "@/assets/posts.png";
import saved from "@/assets/saved.png";
import timeline from "@/assets/timeline.png";
import follower from "@/assets/follower.png";
import comments from "@/assets/chat.png";
import post1 from "@/assets/igclone-1stpost-1st-photo.jpeg";
import post2 from "@/assets/igclone-1stpost-2nd-photo.jpeg";
import post3 from "@/assets/igclone-1stpost-3rd-photo.jpeg";
import post4 from "@/assets/igclone-2ndpost-1st-photo.jpeg";
import post5 from "@/assets/igclone-2ndpost-2nd-photo.jpeg";
import post6 from "@/assets/igclone-2ndpost-3rd-photo.jpeg";
import post7 from "@/assets/igclone-3rdpost-1st-photo.jpeg";
import post8 from "@/assets/igclone-3rdpost-2nd-photo.jpeg";
import post9 from "@/assets/igclone-3rdpost-3rd-photo.jpeg";
import post10 from "@/assets/igclone-4thpost-1st-photo.jpeg";
import post11 from "@/assets/igclone-4thpost-2nd-photo.jpeg";
import post12 from "@/assets/igclone-4thpost-3rd-photo.jpeg";
import { useState } from "react";

import {
  ChevronDownIcon,
  HeartIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import EllipsisHorizontonalIcon from "./EllipsisHorizontonalIcon";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  userName: string;
};

const ProfileSection = ({ userName }: Props) => {
  const posts1 = [post1, post2, post3];
  const posts2 = [post4, post5, post6];
  const posts3 = [post7, post8, post9];
  const posts4 = [post10, post11, post12];
  const [currentIndex, setCurrentIndex] = useState(0);
  const rightIconHidden = currentIndex === 2 ? `hidden` : ``;
  const leftIconHidden = currentIndex === 0 ? `hidden` : ``;
  const isAboveEKRAN836Screens = useMediaQuery("(min-width:836px)");
  const goToNextPost = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % posts1.length);
  };

  const goToPreviousPost = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? posts1.length - 1 : prevIndex - 1
    );
  };
  const goToNextPost2 = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % posts2.length);
  };
  const goToPreviousPost2 = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? posts2.length - 1 : prevIndex - 1
    );
  };
  const goToNextPost3 = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % posts3.length);
  };
  const goToPreviousPost3 = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? posts3.length - 1 : prevIndex - 1
    );
  };
  const goToNextPost4 = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % posts4.length);
  };
  const goToPreviousPost4 = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? posts4.length - 1 : prevIndex - 1
    );
  };
  const currentPost4 = posts4[currentIndex];
  const currentPost3 = posts3[currentIndex];
  const currentPost2 = posts2[currentIndex];
  const currentPost = posts1[currentIndex];
  const [likeCount4, setLikeCount4] = useState(176);
  const [likeCount3, setLikeCount3] = useState(188);
  const [likeCount2, setLikeCount2] = useState(175);
  const [likeCount, setLikeCount] = useState(136);
  const [isheartTapped, setIsHeartTapped] = useState(false);
  const [isheartTapped2, setIsHeartTapped2] = useState(false);
  const [isheartTapped3, setIsHeartTapped3] = useState(false);
  const [isheartTapped4, setIsHeartTapped4] = useState(false);

  const handleLike4 = () => {
    setIsHeartTapped4(!isheartTapped4);
    if (!isheartTapped4) {
      setLikeCount4(likeCount4 + 1);
    }
    if (isheartTapped4) {
      setLikeCount4(likeCount4 - 1);
    }
  };

  const handleLike3 = () => {
    setIsHeartTapped3(!isheartTapped3);
    if (!isheartTapped3) {
      setLikeCount3(likeCount3 + 1);
    }
    if (isheartTapped3) {
      setLikeCount3(likeCount3 - 1);
    }
  };
  const handleLike2 = () => {
    setIsHeartTapped2(!isheartTapped2);
    if (!isheartTapped2) {
      setLikeCount2(likeCount2 + 1);
    }
    if (isheartTapped2) {
      setLikeCount2(likeCount2 - 1);
    }
  };
  const handleLike = () => {
    setIsHeartTapped(!isheartTapped);
    if (!isheartTapped) {
      setLikeCount(likeCount + 1);
    }
    if (isheartTapped) {
      setLikeCount(likeCount - 1);
    }
  };
  const [commentCount4, setCommentCount4] = useState(0);
  const [item4, setItems4] = useState<string[]>([]);
  const [textAreaValue4, setTextAreaValue4] = useState("");

  const [commentCount3, setCommentCount3] = useState(0);
  const [item3, setItems3] = useState<string[]>([]);
  const [textAreaValue3, setTextAreaValue3] = useState("");

  const [commentCount2, setCommentCount2] = useState(0);
  const [item2, setItems2] = useState<string[]>([]);
  const [textAreaValue2, setTextAreaValue2] = useState("");

  const [commentCount, setCommentCount] = useState(4);
  const [item, setItems] = useState<string[]>([]);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleAddItem4 = () => {
    if (textAreaValue4 !== "") {
      setCommentCount4(commentCount4 + 1);
      setItems4([...item4, textAreaValue4]);
      setTextAreaValue4("");
    }
  };
  const handleChange4 = (event: any) => {
    setTextAreaValue4(event.target.value);
  };

  const handleAddItem3 = () => {
    if (textAreaValue3 !== "") {
      setCommentCount3(commentCount3 + 1);
      setItems3([...item3, textAreaValue3]);
      setTextAreaValue3("");
    }
  };
  const handleChange3 = (event: any) => {
    setTextAreaValue3(event.target.value);
  };

  const handleAddItem2 = () => {
    if (textAreaValue2 !== "") {
      setCommentCount2(commentCount2 + 1);
      setItems2([...item2, textAreaValue2]);
      setTextAreaValue2("");
    }
  };
  const handleChange2 = (event: any) => {
    setTextAreaValue2(event.target.value);
  };
  const handleAddItem = () => {
    if (textAreaValue !== "") {
      setCommentCount(commentCount + 1);
      setItems([...item, textAreaValue]);
      setTextAreaValue("");
    }
  };
  const handleChange = (event: any) => {
    setTextAreaValue(event.target.value);
  };
  const handlePost1Toggle = () => {
    setIsToggledPost1(false);
    setCurrentIndex(0);
  };
  const handlePost2Toggle = () => {
    setIsToggledPost2(false);
    setCurrentIndex(0);
  };
  const handlePost3Toggle = () => {
    setIsToggledPost3(false);
    setCurrentIndex(0);
  };
  const handlePost4Toggle = () => {
    setIsToggledPost4(false);
    setCurrentIndex(0);
  };

  const [isHeartRed, setIsHeartRed] = useState(false);
  const [isHeartRed2, setIsHeartRed2] = useState(false);
  const [isHeartRed3, setIsHeartRed3] = useState(false);
  const [isHeartRed4, setIsHeartRed4] = useState(false);
  const [isHeartRed5, setIsHeartRed5] = useState(false);
  const [isHeartRed6, setIsHeartRed6] = useState(false);
  const [isHeartRed7, setIsHeartRed7] = useState(false);
  const [isHeartRed8, setIsHeartRed8] = useState(false);
  const [isToggledComments, setIsToggledComments] = useState(false);
  const [isToggledComments2, setIsToggledComments2] = useState(false);
  const [isToggledComments3, setIsToggledComments3] = useState(false);
  const [isToggledComments4, setIsToggledComments4] = useState(false);
  const [isToggledPost1, setIsToggledPost1] = useState(false);
  const [isToggledPost2, setIsToggledPost2] = useState(false);
  const [isToggledPost3, setIsToggledPost3] = useState(false);
  const [isToggledPost4, setIsToggledPost4] = useState(false);

  const handleRightButtonForPost1 = () => {
    setIsToggledPost2(true);
    setIsToggledPost1(false);
    setCurrentIndex(0);
  };

  const handleLeftButtonForPost2 = () => {
    setIsToggledPost1(true);
    setIsToggledPost2(false);
    setCurrentIndex(0);
  };

  const handleRightButtonForPost2 = () => {
    setIsToggledPost3(true);
    setIsToggledPost2(false);
    setCurrentIndex(0);
  };

  const handleLeftButtonForPost3 = () => {
    setIsToggledPost2(true);
    setIsToggledPost3(false);
    setCurrentIndex(0);
  };

  const handleRightButtonForPost3 = () => {
    setIsToggledPost4(true);
    setIsToggledPost3(false);
    setCurrentIndex(0);
  };
  const handleLeftButtonForPost4 = () => {
    setIsToggledPost3(true);
    setIsToggledPost4(false);
    setCurrentIndex(0);
  };

  const comment4 = isToggledComments4
    ? `Hide comments`
    : `View all ${commentCount4} comments`;
  const comment3 = isToggledComments3
    ? `Hide comments`
    : `View all ${commentCount3} comments`;
  const comment2 = isToggledComments2
    ? `Hide comments`
    : `View all ${commentCount2} comments`;
  const comment = isToggledComments
    ? `Hide comments`
    : `View all ${commentCount} comments`;
  const heart = isHeartRed
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const heart2 = isHeartRed2
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const heart3 = isHeartRed3
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const heart4 = isHeartRed4
    ? `text-red-500 transition duration-500 `
    : `transition duration-500`;
  const heart5 = isHeartRed5
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const heart5Hidden = item.length === 0 ? `hidden` : ``;

  const heart6 = isHeartRed6
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const heart7Hidden = item3.length === 0 ? `hidden` : ``;
  const heart7 = isHeartRed7
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const heart8Hidden = item4.length === 0 ? `hidden` : ``;
  const heart8 = isHeartRed8
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const heart6Hidden = item2.length === 0 ? `hidden` : ``;

  const PostHeart4 = isheartTapped4
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const PostHeart3 = isheartTapped3
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const PostHeart2 = isheartTapped2
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  const PostHeart = isheartTapped
    ? `text-red-500 transition duration-500`
    : `transition duration-500`;
  return (
    <section id="profile">
      <div className="h-full   pt-[30px]">
        <div className="  mx-4 mb-[30px] mt-[50px] flex w-screen justify-start kucuk:mx-0 kucuk:justify-center xl:ml-[30%] xl:justify-start   ">
          {/* PROFILE PHOTO AND BIO */}
          <div className="mr-[40px] flex  items-center justify-center  ">
            {/* PHOTO */}
            <div className="h-[80px] w-[80px] kucuk:h-[150px] kucuk:w-[150px]">
              <img
                className="  flex-grow justify-center rounded-full  "
                src={profilePhoto}
                alt="profile-photo"
              />
            </div>
            <div className="ml-[30px] flex flex-col  kucuk:hidden ">
              <h2 className=" mb-[10px] mr-3 text-xl font-bold ">tasoavci35</h2>
              <button className="rounded-lg bg-white px-20 py-1 text-black">
                Edit profile
              </button>
            </div>
          </div>
          <div>
            {/* BIO */}
            <div className=" hidden min-w-0 flex-col kucuk:flex ">
              <div className=" flex items-center justify-start ">
                {/* tasoavci35 */}
                <h2 className="mr-3 text-xl font-bold">tasoavci35</h2>
                <button className="mx-4 rounded-lg bg-white px-2 py-1 text-black">
                  Edit profile
                </button>
                <img
                  className="ml-3 hidden h-7 kucuk:block "
                  src={settings}
                  alt="settings"
                />
              </div>
              <div className="mb-3 mt-5 flex">
                {/* FOLLOWERS */}
                <span className="mr-2">
                  {" "}
                  <span className="text-lg font-bold">4</span> posts
                </span>
                <span className="mx-2">
                  <span className="text-lg font-bold">433</span> followers
                </span>
                <span className="ml-2">
                  <span className="text-lg font-bold">420</span> following
                </span>
              </div>
              <div className="flex flex-col leading-none">
                {/* CBU tasoavci.com */}
                <span>Tahsin Avci</span>
                <span>Izmir</span>
                <span>CBU</span>
                <a className="hover:text-[#0095F6]" href="www.tasoavci.com">
                  www.tasoavci.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col px-[20px] pb-[10px] text-sm leading-5 kucuk:hidden">
          {/* CBU tasoavci.com */}
          <span>Tahsin Avci</span>
          <span>Izmir</span>
          <span>CBU</span>
          <a
            className="font-bold hover:text-[#0095F6] hover:underline"
            href="www.tasoavci.com"
          >
            www.tasoavci.com
          </a>
        </div>

        <div className=" flex justify-start kucuk:justify-center xl:ml-[30%] xl:justify-start">
          <div className="flex flex-col leading-none">
            <button className="m-4 h-[60px] w-[60px]     rounded-full border-[0.2px]    border-white border-opacity-50 bg-black kucuk:h-20 kucuk:w-20"></button>
            <span className="flex items-center justify-center">✌️</span>
          </div>
          <div className="flex flex-col leading-none">
            <button className="m-4 h-[60px] w-[60px]     rounded-full border-[0.2px]    border-white border-opacity-50 bg-black kucuk:h-20 kucuk:w-20"></button>
            <span className="flex items-center justify-center">🎸🥁</span>
          </div>
          <div className="flex flex-col leading-none">
            <button className="m-4 flex  h-[60px] w-[60px]    items-center justify-center    rounded-full border-[0.2px] border-white border-opacity-50 bg-[#121212] kucuk:h-20 kucuk:w-20">
              <PlusIcon className="h-10 w-10  text-white" />
            </button>
            <span className="flex items-center justify-center text-sm">
              New
            </span>
          </div>
        </div>
        <div className=" mt-6  border-y-[1px] border-white border-opacity-20 py-2 kucuk:hidden">
          {/* FOLLOWERS FOR SM */}
          <ul className="mx-auto flex w-5/6 items-center justify-between">
            <li className="flex flex-col items-center justify-center text-sm">
              <span className="font-bold">4</span> posts
            </li>
            <li className="flex flex-col items-center justify-center text-sm">
              <span className="font-bold">433</span> followers
            </li>
            <li className="flex flex-col items-center justify-center text-sm">
              <span className="font-bold">420</span> following
            </li>
          </ul>
        </div>
        {/* POST SAVED ... */}

        <div className=" my-2 flex justify-between px-8 pb-2 pt-4 kucuk:border-t-[1px] kucuk:border-white kucuk:border-opacity-20 md:mx-8 md:mt-10 md:justify-center md:gap-16 md:px-16">
          <div className="items-center justify-center kucuk:flex ">
            <img
              className="h-6 w-6 kucuk:h-4 kucuk:w-4"
              src={posts}
              alt="posts"
            />
            <span className="ml-1 hidden  text-sm text-opacity-20 kucuk:block">
              POSTS
            </span>
          </div>
          <div className="items-center justify-center kucuk:flex ">
            <img
              className="h-6 w-6 kucuk:h-4 kucuk:w-4"
              src={timeline}
              alt="timeline"
            />
            <span className="ml-1 hidden  text-sm text-opacity-20 kucuk:block">
              FEED
            </span>
          </div>
          <div className="items-center justify-center kucuk:flex">
            <img
              className="h-6 w-6 kucuk:h-4 kucuk:w-4"
              src={saved}
              alt="saved"
            />
            <span className="ml-1 hidden  text-sm text-opacity-20 kucuk:block">
              SAVED
            </span>
          </div>
          <div className="items-center justify-center kucuk:flex ">
            <img
              className="h-6 w-6 kucuk:h-4 kucuk:w-4"
              src={follower}
              alt="follower"
            />
            <span className="ml-1 hidden  text-sm text-opacity-20 kucuk:block">
              TAGGED
            </span>
          </div>
        </div>

        {/* POSTS */}

        <div className="mx-auto mt-4 flex  w-full max-w-[1000px] justify-center">
          <div
            onClick={() => setIsToggledPost1(true)}
            className="flex w-1/3  cursor-pointer items-center  justify-center active:opacity-70 kucuk:mx-auto kucuk:w-[30%] kucuk:justify-between "
          >
            <img className="  kucuk:mx-2" src={post1} alt="post1" />
          </div>
          <div
            onClick={() => setIsToggledPost2(true)}
            className="flex w-1/3  cursor-pointer items-center justify-center active:opacity-70 kucuk:mx-auto kucuk:w-[30%] kucuk:justify-between "
          >
            <img className=" kucuk:mx-2" src={post4} alt="post4" />
          </div>
          <div
            onClick={() => setIsToggledPost3(true)}
            className="flex w-1/3 cursor-pointer items-center justify-center active:opacity-70 kucuk:mx-auto kucuk:w-[30%] kucuk:justify-between "
          >
            <img className="  kucuk:mx-2" src={post7} alt="post7" />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1000px] justify-center kucuk:mt-8">
          <div
            onClick={() => setIsToggledPost4(true)}
            className=" flex w-1/3 cursor-pointer items-center  justify-center active:opacity-70 kucuk:mx-auto kucuk:w-[30%] kucuk:justify-between"
          >
            <img className="kucuk:mx-2" src={post10} alt="post10" />
          </div>
          <div className="flex w-1/3 items-center justify-center kucuk:mx-auto kucuk:w-[30%] kucuk:justify-between "></div>
          <div className="flex w-1/3 items-center justify-center kucuk:mx-auto kucuk:w-[30%] kucuk:justify-between "></div>
        </div>
        {isToggledPost1 && (
          <>
            <div
              onClick={handlePost1Toggle}
              className="fixed inset-0 bg-black/70 "
            ></div>
            <button
              onClick={handlePost1Toggle}
              className=" fixed right-0 top-0 z-40 m-2 h-9 w-9 text-white"
            >
              <XMarkIcon className="text-white" />
            </button>
            <button className="fixed right-0 top-[50%] mr-1 h-8 w-8 translate-y-[-50%] transform ekran836:mr-4 ">
              <ChevronRightIcon
                onClick={handleRightButtonForPost1}
                className="rounded-full bg-white text-gray-400"
              />
            </button>

            <div className=" fixed  left-[50%] top-[50%] h-[70%] w-[80%] translate-x-[-50%]  translate-y-[-50%] transform bg-black ekran836:flex  lg:h-[95%] lg:w-[91%] ">
              {/* PHOTO */}

              <div className="relative inset-0 top-0 z-0 h-[60%] w-full ekran836:h-full ekran836:w-[65%]">
                <img
                  className="fixed inset-0 z-0  h-[60%] w-full object-cover ekran836:h-full ekran836:w-[65%] "
                  key={currentIndex}
                  src={currentPost}
                  alt={`post-${currentIndex}`}
                />

                <button
                  onClick={goToNextPost}
                  className={`${rightIconHidden} absolute right-5 top-[48%] z-40`}
                >
                  <ChevronRightIcon className="z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400" />
                </button>
                <button
                  onClick={goToPreviousPost}
                  className="absolute left-5 top-[48%] z-40 "
                >
                  <ChevronLeftIcon
                    className={`${leftIconHidden} z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400`}
                  />
                </button>
              </div>
              <div className="fixed h-[40%] w-full p-4 ekran836:right-0 ekran836:top-0  ekran836:h-full ekran836:w-[35%]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="hidden ekran836:block">
                      <EllipsisHorizontonalIcon />
                    </div>

                    <div className="w-full">
                      {/* COMMENTS */}
                      <div className="mt-1 flex border-b-[1px] border-white/20 pb-3 ekran836:border-none">
                        <span className="text-sm font-bold">tasoavci35</span>{" "}
                        <span className="ml-2 text-sm">nasi ya</span>
                      </div>
                      <button
                        className="mt-2 text-gray-400"
                        onClick={() => setIsToggledComments(!isToggledComments)}
                      >
                        {comment}
                      </button>
                      {isToggledComments && !isAboveEKRAN836Screens && (
                        <>
                          <div
                            onClick={() => setIsToggledComments(false)}
                            className="fixed inset-0 bg-black/50"
                          >
                            <XMarkIcon
                              onClick={() => setIsToggledComments(false)}
                              className="fixed right-0 top-0 m-3 h-7 w-7"
                            />
                          </div>
                          <div className="fixed left-[50%] top-[50%] z-40  h-[80%] w-[90%] translate-x-[-50%] translate-y-[-50%] transform  rounded-2xl bg-[#2c2b2b] p-8">
                            <div className="flex flex-col ">
                              <h1 className="mb-3 flex w-full items-center justify-center text-2xl text-gray-400">
                                Comments
                              </h1>
                              <div className="mmt-2 flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className="flex items-center">
                                  <span className="text-sm font-bold">
                                    burcuuekiiz
                                  </span>
                                  <span className="ml-2 text-sm">
                                    neler diyosunn
                                  </span>
                                </div>
                                <button
                                  onClick={() => setIsHeartRed(!isHeartRed)}
                                >
                                  <HeartIcon className={`${heart} h-4 w-4`} />
                                </button>
                              </div>
                              <div className="mt-2 flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className="flex items-center">
                                  <span className="text-sm font-bold">
                                    yigittrkmnnn
                                  </span>
                                  <span className="ml-2 text-sm">
                                    Ateş etmek için tabanca olmaya gerek yokmuş
                                    canım arkadaşım
                                  </span>
                                </div>
                                <button
                                  onClick={() => setIsHeartRed2(!isHeartRed2)}
                                >
                                  <HeartIcon className={`${heart2} h-4 w-4`} />
                                </button>
                              </div>
                              <div className="mt-2 flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className="flex items-center">
                                  <span className="text-sm font-bold">
                                    bircanavci1971
                                  </span>
                                  <span className="ml-2 text-sm">Vay taso</span>
                                </div>
                                <button
                                  onClick={() => setIsHeartRed3(!isHeartRed3)}
                                >
                                  <HeartIcon className={`${heart3} h-4 w-4`} />
                                </button>
                              </div>
                              <div className="mt-2  flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className="flex items-center">
                                  <span className="text-sm font-bold">
                                    yasin_akbudak
                                  </span>
                                  <span className="ml-2 text-sm">
                                    Ddostum bu tarz halis mi 🧐
                                  </span>
                                </div>
                                <button
                                  onClick={() => setIsHeartRed4(!isHeartRed4)}
                                >
                                  <HeartIcon className={`${heart4} h-4 w-4`} />
                                </button>
                              </div>
                              <div className="mt-2  flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className=" flex flex-col items-start justify-start ">
                                  {item.map((item, index) => (
                                    <>
                                      <div className="flex items-center justify-center">
                                        <span className="text-sm font-bold">
                                          {userName}
                                        </span>
                                        <p className=" ml-2" key={index}>
                                          {item}
                                        </p>
                                      </div>
                                    </>
                                  ))}
                                </div>
                                <button
                                  onClick={() => setIsHeartRed5(!isHeartRed5)}
                                >
                                  <HeartIcon
                                    className={`${heart5} ${heart5Hidden} h-4 w-4`}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {isToggledComments && isAboveEKRAN836Screens && (
                        <div className="mt-1 flex flex-col">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm font-bold">
                                burcuuekiiz
                              </span>
                              <span className="ml-2 text-sm">
                                neler diyosunn
                              </span>
                            </div>
                            <button onClick={() => setIsHeartRed(!isHeartRed)}>
                              <HeartIcon className={`${heart} h-4 w-4`} />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm font-bold">
                                yigittrkmnnn
                              </span>
                              <span className="ml-2 text-sm">
                                Ateş etmek için tabanca olmaya gerek yokmuş
                                canım arkadaşım
                              </span>
                            </div>
                            <button
                              onClick={() => setIsHeartRed2(!isHeartRed2)}
                            >
                              <HeartIcon className={`${heart2} h-4 w-4`} />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm font-bold">
                                bircanavci1971
                              </span>
                              <span className="ml-2 text-sm">Vay taso</span>
                            </div>
                            <button
                              onClick={() => setIsHeartRed3(!isHeartRed3)}
                            >
                              <HeartIcon className={`${heart3} h-4 w-4`} />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-sm font-bold">
                                yasin_akbudak
                              </span>
                              <span className="ml-2 text-sm">
                                Ddostum bu tarz halis mi 🧐
                              </span>
                            </div>
                            <button
                              onClick={() => setIsHeartRed4(!isHeartRed4)}
                            >
                              <HeartIcon className={`${heart4} h-4 w-4`} />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className=" flex flex-col items-start justify-start ">
                              {item.map((item, index) => (
                                <>
                                  <div className="flex items-center justify-center">
                                    <span className="text-sm font-bold">
                                      {userName}
                                    </span>
                                    <p className=" ml-2" key={index}>
                                      {item}
                                    </p>
                                  </div>
                                </>
                              ))}
                            </div>
                            <button
                              onClick={() => setIsHeartRed5(!isHeartRed5)}
                            >
                              <HeartIcon
                                className={`${heart5} ${heart5Hidden} h-4 w-4`}
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className=" flex flex-col border-t-[1px] border-white border-opacity-20 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center">
                        <button onClick={handleLike}>
                          <HeartIcon className={`${PostHeart} h-7 w-7`} />
                        </button>
                        <img
                          className="ml-2 h-7 w-7"
                          src={comments}
                          alt="comments"
                        />
                      </div>
                      <div>
                        <img className="h-7 w-7" src={saved} alt="saved" />
                      </div>
                    </div>
                    <div className="my-2">
                      <p className="text-sm">
                        Liked by{" "}
                        <span className="font-bold">fatmaavci_48_35</span> and{" "}
                        {""}
                        {likeCount} others
                      </p>
                      <p className=" text-xs text-gray-400 text-opacity-70">
                        MAY 10
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t-[1px] border-white border-opacity-20 pt-2">
                      <textarea
                        value={textAreaValue}
                        onChange={handleChange}
                        className="resize-none border-none bg-black outline-none focus:border-none "
                        placeholder="Add a comment..."
                        name="comment"
                        id=""
                        cols={40}
                        rows={1}
                      >
                        <p>{textAreaValue}</p>
                      </textarea>
                      <button onClick={handleAddItem}>
                        <p>Post</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {isToggledPost2 && (
          <>
            <div
              onClick={handlePost2Toggle}
              className="fixed inset-0 bg-black/70 "
            ></div>
            <button
              onClick={handlePost2Toggle}
              className=" fixed right-0 top-0 z-40 m-2 h-9 w-9 text-white"
            >
              <XMarkIcon className="text-white" />
            </button>
            <button className="fixed right-0 top-[50%] mr-1 h-8 w-8 translate-y-[-50%] transform ekran836:mr-4 ">
              <ChevronRightIcon
                onClick={handleRightButtonForPost2}
                className="rounded-full bg-white text-gray-400"
              />
            </button>
            <button className="fixed left-0 top-[50%] ml-1 h-8 w-8 translate-y-[-50%] transform ekran836:ml-4">
              <ChevronLeftIcon
                onClick={handleLeftButtonForPost2}
                className="rounded-full bg-white text-gray-400"
              />
            </button>

            <div className=" fixed  left-[50%] top-[50%] h-[70%] w-[80%] translate-x-[-50%]  translate-y-[-50%] transform bg-black ekran836:flex  lg:h-[95%] lg:w-[91%] ">
              {/* PHOTO */}

              <div className="relative inset-0 top-0 z-0 h-[60%] w-full ekran836:h-full ekran836:w-[65%]">
                <img
                  className="fixed inset-0 z-0  h-[60%] w-full object-cover ekran836:h-full ekran836:w-[65%] "
                  key={currentIndex}
                  src={currentPost2}
                  alt={`post-${currentIndex}`}
                />

                <button
                  onClick={goToNextPost2}
                  className={`${rightIconHidden} absolute right-5 top-[48%] z-40`}
                >
                  <ChevronRightIcon className="z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400" />
                </button>
                <button
                  onClick={goToPreviousPost2}
                  className="absolute left-5 top-[48%] z-40 "
                >
                  <ChevronLeftIcon
                    className={`${leftIconHidden} z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400`}
                  />
                </button>
              </div>
              <div className="fixed h-[40%] w-full p-4 ekran836:right-0 ekran836:top-0  ekran836:h-full ekran836:w-[35%]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="hidden ekran836:block">
                      <EllipsisHorizontonalIcon />
                    </div>

                    <div className="w-full">
                      {/* COMMENTS */}
                      <div className="mt-1 flex border-b-[1px] border-white/20 pb-3 ekran836:border-none">
                        <span className="text-sm font-bold">tasoavci35</span>{" "}
                        <span className="ml-2 text-sm">kiyici bakis</span>
                      </div>
                      <button
                        className="mt-2 text-gray-400 ekran836:mt-0"
                        onClick={() =>
                          setIsToggledComments2(!isToggledComments2)
                        }
                      >
                        {comment2}
                      </button>
                      {isToggledComments2 && !isAboveEKRAN836Screens && (
                        <>
                          <div
                            onClick={() => setIsToggledComments2(false)}
                            className="fixed inset-0 bg-black/50"
                          >
                            <XMarkIcon
                              onClick={() => setIsToggledComments2(false)}
                              className="fixed right-0 top-0 m-3 h-7 w-7"
                            />
                          </div>
                          <div className="fixed left-[50%] top-[50%] z-40  h-[80%] w-[90%] translate-x-[-50%] translate-y-[-50%] transform  rounded-2xl bg-[#2c2b2b] p-8">
                            <div className="flex flex-col ">
                              <h1 className="mb-3 flex w-full items-center justify-center text-2xl text-gray-400">
                                Comments
                              </h1>

                              <div className="mt-2  flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className=" flex flex-col items-start justify-start ">
                                  {item2.map((item2, index) => (
                                    <>
                                      <div className="flex items-center justify-center">
                                        <span className="text-sm font-bold">
                                          {userName}
                                        </span>
                                        <p className=" ml-2" key={index}>
                                          {item2}
                                        </p>
                                      </div>
                                    </>
                                  ))}
                                </div>
                                <button
                                  onClick={() => setIsHeartRed6(!isHeartRed6)}
                                >
                                  <HeartIcon
                                    className={`${heart6} ${heart6Hidden} h-4 w-4`}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {isToggledComments2 && isAboveEKRAN836Screens && (
                        <div className="mt-1 flex flex-col">
                          <div className="mt-2 flex items-center justify-between">
                            <div className=" flex flex-col items-start justify-start ">
                              {item2.map((item2, index) => (
                                <>
                                  <div className="flex items-center justify-center">
                                    <span className="text-sm font-bold">
                                      {userName}
                                    </span>
                                    <p className=" ml-2" key={index}>
                                      {item2}
                                    </p>
                                  </div>
                                </>
                              ))}
                            </div>
                            <button
                              onClick={() => setIsHeartRed6(!isHeartRed6)}
                            >
                              <HeartIcon
                                className={`${heart6} ${heart6Hidden} h-4 w-4`}
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className=" flex flex-col border-t-[1px] border-white border-opacity-20 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center">
                        <button onClick={handleLike2}>
                          <HeartIcon className={`${PostHeart2} h-7 w-7`} />
                        </button>
                        <img
                          className="ml-2 h-7 w-7"
                          src={comments}
                          alt="comments"
                        />
                      </div>
                      <div>
                        <img className="h-7 w-7" src={saved} alt="saved" />
                      </div>
                    </div>
                    <div className="my-2">
                      <p className="text-sm">
                        Liked by{" "}
                        <span className="font-bold">fatmaavci_48_35</span> and{" "}
                        {""}
                        {likeCount2} others
                      </p>
                      <p className=" text-xs text-gray-400 text-opacity-70">
                        MAY 10
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t-[1px] border-white border-opacity-20 pt-2">
                      <textarea
                        value={textAreaValue2}
                        onChange={handleChange2}
                        className="resize-none border-none bg-black outline-none focus:border-none "
                        placeholder="Add a comment..."
                        name="comment"
                        id=""
                        cols={40}
                        rows={1}
                      >
                        <p>{textAreaValue2}</p>
                      </textarea>
                      <button onClick={handleAddItem2}>
                        <p>Post</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {isToggledPost3 && (
          <>
            <div
              onClick={handlePost3Toggle}
              className="fixed inset-0 bg-black/70 "
            ></div>
            <button
              onClick={handlePost3Toggle}
              className=" fixed right-0 top-0 z-40 m-2 h-9 w-9 text-white"
            >
              <XMarkIcon className="text-white" />
            </button>
            <button
              onClick={handleRightButtonForPost3}
              className="fixed right-0 top-[50%] mr-1 h-8 w-8 translate-y-[-50%] transform ekran836:mr-4 "
            >
              <ChevronRightIcon className="rounded-full bg-white text-gray-400" />
            </button>
            <button className="fixed left-0 top-[50%] ml-1 h-8 w-8 translate-y-[-50%] transform ekran836:ml-4">
              <ChevronLeftIcon
                onClick={handleLeftButtonForPost3}
                className="rounded-full bg-white text-gray-400"
              />
            </button>

            <div className=" fixed  left-[50%] top-[50%] h-[70%] w-[80%] translate-x-[-50%]  translate-y-[-50%] transform bg-black ekran836:flex  lg:h-[95%] lg:w-[91%] ">
              {/* PHOTO */}

              <div className="relative inset-0 top-0 z-0 h-[60%] w-full ekran836:h-full ekran836:w-[65%]">
                <img
                  className="fixed inset-0 z-0  h-[60%] w-full object-cover ekran836:h-full ekran836:w-[65%] "
                  key={currentIndex}
                  src={currentPost3}
                  alt={`post-${currentIndex}`}
                />

                <button
                  onClick={goToNextPost3}
                  className={`${rightIconHidden} absolute right-5 top-[48%] z-40`}
                >
                  <ChevronRightIcon className="z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400" />
                </button>
                <button
                  onClick={goToPreviousPost3}
                  className="absolute left-5 top-[48%] z-40 "
                >
                  <ChevronLeftIcon
                    className={`${leftIconHidden} z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400`}
                  />
                </button>
              </div>
              <div className="fixed h-[40%] w-full p-4 ekran836:right-0 ekran836:top-0  ekran836:h-full ekran836:w-[35%]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="hidden ekran836:block">
                      <EllipsisHorizontonalIcon />
                    </div>

                    <div className="w-full">
                      {/* COMMENTS */}
                      <div className="mt-1 flex border-b-[1px] border-white/20 pb-3 ekran836:border-none">
                        <span className="text-sm font-bold">tasoavci35</span>{" "}
                        <span className="ml-2 text-sm">kiyici bakis</span>
                      </div>
                      <button
                        className="mt-2 text-gray-400 ekran836:mt-0"
                        onClick={() =>
                          setIsToggledComments3(!isToggledComments3)
                        }
                      >
                        {comment3}
                      </button>
                      {isToggledComments3 && !isAboveEKRAN836Screens && (
                        <>
                          <div
                            onClick={() => setIsToggledComments3(false)}
                            className="fixed inset-0 bg-black/50"
                          >
                            <XMarkIcon
                              onClick={() => setIsToggledComments3(false)}
                              className="fixed right-0 top-0 m-3 h-7 w-7"
                            />
                          </div>
                          <div className="fixed left-[50%] top-[50%] z-40  h-[80%] w-[90%] translate-x-[-50%] translate-y-[-50%] transform  rounded-2xl bg-[#2c2b2b] p-8">
                            <div className="flex flex-col ">
                              <h1 className="mb-3 flex w-full items-center justify-center text-2xl text-gray-400">
                                Comments
                              </h1>

                              <div className="mt-2  flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className=" flex flex-col items-start justify-start ">
                                  {item3.map((item3, index) => (
                                    <>
                                      <div className="flex items-center justify-center">
                                        <span className="text-sm font-bold">
                                          {userName}
                                        </span>
                                        <p className=" ml-2" key={index}>
                                          {item3}
                                        </p>
                                      </div>
                                    </>
                                  ))}
                                </div>
                                <button
                                  onClick={() => setIsHeartRed7(!isHeartRed7)}
                                >
                                  <HeartIcon
                                    className={`${heart7} ${heart7Hidden} h-4 w-4`}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {isToggledComments3 && isAboveEKRAN836Screens && (
                        <div className="mt-1 flex flex-col">
                          <div className="mt-2 flex items-center justify-between">
                            <div className=" flex flex-col items-start justify-start ">
                              {item3.map((item3, index) => (
                                <>
                                  <div className="flex items-center justify-center">
                                    <span className="text-sm font-bold">
                                      {userName}
                                    </span>
                                    <p className=" ml-2" key={index}>
                                      {item3}
                                    </p>
                                  </div>
                                </>
                              ))}
                            </div>
                            <button
                              onClick={() => setIsHeartRed7(!isHeartRed7)}
                            >
                              <HeartIcon
                                className={`${heart7} ${heart7Hidden} h-4 w-4`}
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className=" flex flex-col border-t-[1px] border-white border-opacity-20 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center">
                        <button onClick={handleLike3}>
                          <HeartIcon className={`${PostHeart3} h-7 w-7`} />
                        </button>
                        <img
                          className="ml-2 h-7 w-7"
                          src={comments}
                          alt="comments"
                        />
                      </div>
                      <div>
                        <img className="h-7 w-7" src={saved} alt="saved" />
                      </div>
                    </div>
                    <div className="my-2">
                      <p className="text-sm">
                        Liked by{" "}
                        <span className="font-bold">fatmaavci_48_35</span> and{" "}
                        {""}
                        {likeCount3} others
                      </p>
                      <p className=" text-xs text-gray-400 text-opacity-70">
                        MAY 10
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t-[1px] border-white border-opacity-20 pt-2">
                      <textarea
                        value={textAreaValue3}
                        onChange={handleChange3}
                        className="resize-none border-none bg-black outline-none focus:border-none "
                        placeholder="Add a comment..."
                        name="comment"
                        id=""
                        cols={40}
                        rows={1}
                      >
                        <p>{textAreaValue3}</p>
                      </textarea>
                      <button onClick={handleAddItem3}>
                        <p>Post</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {isToggledPost4 && (
          <>
            <div
              onClick={handlePost4Toggle}
              className="fixed inset-0 bg-black/70 "
            ></div>
            <button
              onClick={handlePost4Toggle}
              className=" fixed right-0 top-0 z-40 m-2 h-9 w-9 text-white"
            >
              <XMarkIcon className="text-white" />
            </button>
            <button className="fixed left-0 top-[50%] ml-1 h-8 w-8 translate-y-[-50%] transform ekran836:ml-4">
              <ChevronLeftIcon
                onClick={handleLeftButtonForPost4}
                className="rounded-full bg-white text-gray-400"
              />
            </button>

            <div className=" fixed  left-[50%] top-[50%] h-[70%] w-[80%] translate-x-[-50%]  translate-y-[-50%] transform bg-black ekran836:flex  lg:h-[95%] lg:w-[91%] ">
              {/* PHOTO */}

              <div className="relative inset-0 top-0 z-0 h-[60%] w-full ekran836:h-full ekran836:w-[65%]">
                <img
                  className="fixed inset-0 z-0  h-[60%] w-full object-cover ekran836:h-full ekran836:w-[65%] "
                  key={currentIndex}
                  src={currentPost4}
                  alt={`post-${currentIndex}`}
                />

                <button
                  onClick={goToNextPost4}
                  className={`${rightIconHidden} absolute right-5 top-[48%] z-40`}
                >
                  <ChevronRightIcon className="z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400" />
                </button>
                <button
                  onClick={goToPreviousPost4}
                  className="absolute left-5 top-[48%] z-40 "
                >
                  <ChevronLeftIcon
                    className={`${leftIconHidden} z-40 h-7 w-7 rounded-full bg-white bg-opacity-80  text-gray-400`}
                  />
                </button>
              </div>
              <div className="fixed h-[40%] w-full p-4 ekran836:right-0 ekran836:top-0  ekran836:h-full ekran836:w-[35%]">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="hidden ekran836:block">
                      <EllipsisHorizontonalIcon />
                    </div>

                    <div className="w-full">
                      {/* COMMENTS */}
                      <div className="mt-1 flex border-b-[1px] border-white/20 pb-3 ekran836:border-none">
                        <span className="text-sm font-bold">tasoavci35</span>{" "}
                        <span className="ml-2 text-sm">kiyici bakis</span>
                      </div>
                      <button
                        className="mt-2 text-gray-400 ekran836:mt-0"
                        onClick={() =>
                          setIsToggledComments4(!isToggledComments4)
                        }
                      >
                        {comment4}
                      </button>
                      {isToggledComments4 && !isAboveEKRAN836Screens && (
                        <>
                          <div
                            onClick={() => setIsToggledComments4(false)}
                            className="fixed inset-0 bg-black/50"
                          >
                            <XMarkIcon
                              onClick={() => setIsToggledComments4(false)}
                              className="fixed right-0 top-0 m-3 h-7 w-7"
                            />
                          </div>
                          <div className="fixed left-[50%] top-[50%] z-40  h-[80%] w-[90%] translate-x-[-50%] translate-y-[-50%] transform  rounded-2xl bg-[#2c2b2b] p-8">
                            <div className="flex flex-col ">
                              <h1 className="mb-3 flex w-full items-center justify-center text-2xl text-gray-400">
                                Comments
                              </h1>

                              <div className="mt-2  flex items-center justify-between border-b-[1px] border-white/20 py-2">
                                <div className=" flex flex-col items-start justify-start ">
                                  {item4.map((item4, index) => (
                                    <>
                                      <div className="flex items-center justify-center">
                                        <span className="text-sm font-bold">
                                          {userName}
                                        </span>
                                        <p className=" ml-2" key={index}>
                                          {item4}
                                        </p>
                                      </div>
                                    </>
                                  ))}
                                </div>
                                <button
                                  onClick={() => setIsHeartRed8(!isHeartRed8)}
                                >
                                  <HeartIcon
                                    className={`${heart8} ${heart8Hidden} h-4 w-4`}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {isToggledComments4 && isAboveEKRAN836Screens && (
                        <div className="mt-1 flex flex-col">
                          <div className="mt-2 flex items-center justify-between">
                            <div className=" flex flex-col items-start justify-start ">
                              {item4.map((item4, index) => (
                                <>
                                  <div className="flex items-center justify-center">
                                    <span className="text-sm font-bold">
                                      {userName}
                                    </span>
                                    <p className=" ml-2" key={index}>
                                      {item4}
                                    </p>
                                  </div>
                                </>
                              ))}
                            </div>
                            <button
                              onClick={() => setIsHeartRed8(!isHeartRed8)}
                            >
                              <HeartIcon
                                className={`${heart8} ${heart8Hidden} h-4 w-4`}
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className=" flex flex-col border-t-[1px] border-white border-opacity-20 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center">
                        <button onClick={handleLike4}>
                          <HeartIcon className={`${PostHeart4} h-7 w-7`} />
                        </button>
                        <img
                          className="ml-2 h-7 w-7"
                          src={comments}
                          alt="comments"
                        />
                      </div>
                      <div>
                        <img className="h-7 w-7" src={saved} alt="saved" />
                      </div>
                    </div>
                    <div className="my-2">
                      <p className="text-sm">
                        Liked by{" "}
                        <span className="font-bold">fatmaavci_48_35</span> and{" "}
                        {""}
                        {likeCount4} others
                      </p>
                      <p className=" text-xs text-gray-400 text-opacity-70">
                        MAY 10
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t-[1px] border-white border-opacity-20 pt-2">
                      <textarea
                        value={textAreaValue4}
                        onChange={handleChange4}
                        className="resize-none border-none bg-black outline-none focus:border-none "
                        placeholder="Add a comment..."
                        name="comment"
                        id=""
                        cols={40}
                        rows={1}
                      >
                        <p>{textAreaValue4}</p>
                      </textarea>
                      <button onClick={handleAddItem4}>
                        <p>Post</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="mb-20 w-full ekran836:hidden"></div>
        <div className="hidden items-center justify-center gap-4 px-8 pb-5 pt-8 text-xs text-gray-400 lg:flex">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Top Accounts</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
        </div>
        <div className="mb-10 hidden items-center justify-center gap-4 px-4 pb-4 text-xs text-gray-400 lg:flex ">
          <div className="flex items-center justify-center">
            <span>English</span>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
          <span>© 2023 Instagram from Meta</span>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
