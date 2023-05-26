/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#121214] h-full w-full">
            <div className="container flex mx-auto pt-36">
                {/* Heading */}
                <span className="text-white mr-44 font-normal text-5xl block leading-[60px]">
                    The — <br /> Abstract <br /> Gallery
                </span>
                {/* Img */}
                <div className="flex flex-wrap gap-8">
                    {/* Row */}
                    <div class="grid-container gap-8 w-full">
                        <div class="column-1">
                            <img src="/image/img-here.jpg" alt="Image 1" className="h-full"></img>
                        </div>
                        <div class="column-2 grid gap-8">
                            <img src="/image/img-here-1.jpg" alt="Image 2"></img>
                            <img src="/image/img-here-2.jpg" alt="Image 3"></img>
                        </div>
                    </div>
                    {/* Row */}
                    <img src="/image/img-here.jpg" alt="Image 2" className="w-full h-[400px] object-cover"></img>
                    {/* Row */}
                    <div class="grid-container gap-8 w-full">
                        <div class="column-1">
                            <img src="/image/img-here-3.jpg" alt="Image 1" className="h-full"></img>
                        </div>
                        <div class="column-2 grid gap-8">
                            <img src="/image/img-here-4.jpg" alt="Image 2"></img>
                            <img src="/image/img-here-5.jpg" alt="Image 3"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
