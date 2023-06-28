import React from "react";

type Props = {
  children: React.ReactNode;
  image: string;
  customize?: string;
};

const LinksToggle = ({ customize, children, image }: Props) => {
  const divClasses = `mx-2 flex items-center rounded-lg px-4 py-3  transition duration-300  hover:bg-[rgb(77,74,74)]`;
  return (
    <div className={`${customize} ${divClasses}`}>
      <img className="h-5" src={image} alt={`${image}`} />
      <div>
        <span className="ml-3 text-sm">{children}</span>
      </div>
    </div>
  );
};

export default LinksToggle;
