import Image from "next/image";
import Link from "next/link";
import mizuImage from './mizu.png';
export default function NavBar() {
  return (
    <div>
      
        <div className="text-black inline-flex  bg-ryzen-950  w-full h-20 place-content-end rounded-3xl mt-5 mb-5">
          <div className="w-full h- inline-flex items-center  pl-10 " >  <Image src={mizuImage} alt="Description of Mizu" className="object-cover h-20 w-12 rounded-3xl" /></div>
          <div className="text-black inline-flex gap-5 items-center pr-10 ">
          <Link href={"/"}> home </Link>
          <br />
          <Link href={"about"}> about</Link>
          <br />
          <Link href={"info"}>info</Link>
          <br />
          <Link href={"doc"}>doc</Link>
          <br />
          <Link href={"contact"}>contact</Link>
        </div>
      </div>
      </div>
  );
}
