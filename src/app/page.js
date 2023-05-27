/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#121214] h-full w-full">
            <div className="container flex mx-auto pt-36 pb-8">
                {/* Heading */}
                <span className="text-white mr-44 font-normal text-5xl block leading-[60px]">
                    The — <br /> Abstract <br /> Gallery
                </span>
                {/* Img */}
                <div className="grid-container gap-8 w-full">
                    {/* Row 1 */}
                    <div className="layoutItem">
                        <img src="/image/img-here.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="layoutItem">
                        <img src="/image/img-here-2.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="layoutItem">
                        <img src="/image/img-here-3.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </div>
                    {/* Row 2 */}
                    <div className="layoutItem fullWidth">
                        <img src="/image/img-here-4.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </div>
                    {/* Row 3 */}
                    <div className="layoutItem">
                        <img src="/image/img-here-5.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="layoutItem layout2">
                        <img src="/image/img-here-6.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="layoutItem">
                        <img src="/image/img-here-7.jpg" alt="Image 2" className="w-full h-full object-cover"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
