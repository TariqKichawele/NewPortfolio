import React from 'react'

interface MagicButtonProps {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses
}: MagicButtonProps) => {

  return (
    <button
    className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none border border-purple"
    onClick={handleClick}
  >

    {/* remove px-3 py-1, add px-5 gap-2 */}
    <span
      className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
           bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 border-purple ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </span>
  </button>
  )
}

export default MagicButton