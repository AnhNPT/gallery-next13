/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="bg-[#121214] h-full w-full">
            <div className="container flex mx-4 lg:flex-row flex-col pt-6 lg:pt-36 pb-8 sm:mx-auto">
                {/* Heading */}
                <div className="heading pb-8">
                    <span className="text-white mr-44 font-normal text-5xl block leading-[60px]">
                        The — <br /> Abstract <br /> Gallery
                    </span>
                    <img src="/image/ArrowDownRight.svg" alt=""></img>
                </div>
                {/* Img */}
                <div className="grid-container sm:gap-8 gap-4 w-full">
                    {/* Row 1 */}
                    <a href="/about" className={"layoutItem overflow-hidden relative"} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                        <img src="/image/img-here.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                        {<span className={isHovered == true ? "galleryNameHover absolute bottom-8 right-0 left-6 text-2xl leading-[30px] text-white" : "opacity-0 absolute bottom-8 right-0 left-6"}>Abstract Name</span>}
                    </a>
                    <a href="#" className={"layoutItem overflow-hidden relative"}>
                        <img src="/image/img-here-2.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </a>
                    <a href="#" className={"layoutItem overflow-hidden relative"}>
                        <img src="/image/img-here-3.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </a>
                    {/* Row 2 */}
                    <a href="#" className={"layoutItem overflow-hidden relative fullWidth"}>
                        <img src="/image/img-here-4.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </a>
                    {/* Row 3 */}
                    <a href="#" className={"layoutItem overflow-hidden relative"}>
                        <img src="/image/img-here-5.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </a>
                    <a href="#" className={"layoutItem overflow-hidden relative layout2"}>
                        <img src="/image/img-here-6.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </a>
                    <a href="#" className={"layoutItem overflow-hidden relative"}>
                        <img src="/image/img-here-7.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
