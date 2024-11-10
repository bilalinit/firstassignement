import Image from "next/image";
import niceimage from "./download9.jpeg"
export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-5">
      <div className="bg-ryzen-850 rounded-full inline-flex items-center p-5 col-span-2 row-span-1 text-white font-bold">Home page
        
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex flex-col font-serif gap-3 leading-[70px] p-5 col-span-4 row-span-6 text-[80px] ">
        Bilal Saeed
        <div className=" w-[100%] h-[2px] bg-black "></div>
        <div className=" text-base mt-[10%]">Hello! I'm Bilal, a versatile creative with a passion for bringing ideas to life through graphic design, video editing, and 3D artistry. With a keen eye for detail and a dedication to high-quality work, I specialize in crafting visually compelling graphics, cinematic videos, and immersive 3D animations.</div>
      </div>
      
      <div className="bg-ryzen-850 rounded-2xl text-white inline-flex items-center p-5 col-span-4 row-span-3">
      My goal is to help brands and individuals tell their unique stories in innovative ways, blending technical skill with artistic vision to create standout content. Let's collaborate to make something memorable!
      </div>
      <div className="bg-ryzen-900 rounded-2xl inline-flex items-center  col-span-2 row-span-3">
      <Image src={niceimage} alt="Description of Mizu" className="object-cover  rounded-3xl" />
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex pt-[100px] flex-col gap-[10%] p-5 col-span-2 row-span-5 font-bold">
        <div className="font-bold"> Video Editor</div>
        <div> Motion Mesign Artist</div>
        <div> 3d Artist</div>
        <div> Web Designer</div>
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex items-center p-5 col-span-4 row-span-3">
        6
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex items-center p-5 col-span-2 row-span-7">
        7
      </div>
      <div className="bg-ryzen-850 rounded-2xl row-start-7 row-end-11 col-start-1 col-end-11"></div>
    </div>
  );
}
