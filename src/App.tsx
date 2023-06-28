import SideBar from "@/components/sidebar";
import TopBar from "@/components/topBar";
import ProfileSection from "@/components/profileSection";
import BottomBar from "./components/bottomBar";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [item, setItem] = useState<string[]>([]);
  const [userNameMenu, setUserNameMenu] = useState(true);
  const handleChange = (event: any) => {
    setTextAreaValue(event.target.value);
  };
  const [requiredRed, setRequiredRed] = useState(false);
  const handleUserName = () => {
    if (textAreaValue === "") {
      setUserNameMenu(true);
      setRequiredRed(true);
    }
    if (textAreaValue !== "") {
      setItem([...item, textAreaValue]);
      setTextAreaValue("");
      setUserName(textAreaValue);
      setUserNameMenu(false);
    }
  };
  const handleUserNameMenuClick = () => {
    if (textAreaValue === "") {
      setUserNameMenu(true);
      setRequiredRed(true);
    }
  };
  const REDTEXTREQUIRED = requiredRed
    ? `text-red-500 transition duration-500`
    : ``;
  return (
    <>
      {userNameMenu && (
        <>
          <div
            onClick={handleUserNameMenuClick}
            className="fixed inset-0 z-30 bg-black/50"
          ></div>
          <div className="fixed left-[50%] top-[50%] z-40 h-[50%] min-h-[400px] w-[50%] min-w-[400px] translate-x-[-50%] translate-y-[-50%] transform rounded-xl bg-[#2c2b2b] drop-shadow-xl">
            <div className="fixed left-0 top-0 flex h-1/2 w-full flex-col items-center justify-center px-8 pt-8">
              <h1 className="text-2xl lg:text-4xl">INPUT YOUR USERNAME:</h1>
              <p className={REDTEXTREQUIRED}>&#40;REQUIRED&#41;</p>
            </div>
            <div className="fixed bottom-0 left-0 flex h-1/2 w-full flex-col items-center justify-center px-8 pb-8">
              <textarea
                value={textAreaValue}
                onChange={handleChange}
                className=" resize-none rounded-2xl border-2 border-black bg-[#2c2b2b] py-1 pl-2 pr-8 outline-black"
                name="username"
                id="username"
                placeholder="Username"
                cols={20}
                rows={1}
              >
                {textAreaValue}
              </textarea>
              <button
                onClick={handleUserName}
                className=" mt-4 rounded-xl bg-[#2c2b2b] px-8 py-2 transition duration-500 hover:bg-black"
              >
                GO!
              </button>
            </div>
          </div>
        </>
      )}

      <div className=" w-screen max-w-full overflow-x-hidden ">
        <TopBar />

        <div className="md:flex">
          <div className="  md:w-[70px] xl:w-[240px]">
            <SideBar />
          </div>
          <div className="flex-grow md:w-1/2">
            <ProfileSection userName={userName} />
          </div>
        </div>
        <BottomBar />
      </div>
    </>
  );
}

export default App;
