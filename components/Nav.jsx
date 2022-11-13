import Link from "next/link";
import Image from "next/image"

// icons

import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'


const Nav = () => {
    return ( <>
        <div className="bg-black h-60 flex flex-col rounded-2xl p-12 space-y-6">
            <div className="flex justify-between">
            <nav className="flex flex-col space-y-2">
            <h1 className="text-3xl text-white">Primitives</h1>
            <p className="text-slate-300">Made with <span>
                <Image
                src={"/smile.png"}
                width={10}
                height={10}
                >

                </Image>
                </span> in jkdsndesf</p>
            </nav>

            <div className="flex space-x-6 ">
            <div className="flex flex-col w-7 h-7 bg-white rounded-full items-center justify-center cursor-pointer"><AiOutlineTwitter/></div>
            <div className="flex flex-col w-7 h-7 bg-white rounded-full items-center justify-center cursor-pointer"><AiOutlineInstagram/></div>
            <div className="flex flex-col w-7 h-7 bg-white rounded-full items-center justify-center cursor-pointer"><FaTiktok/></div>
            </div>
            </div>
            <nav className="text-neutral-500 space-x-4 flex  items-center justify-center">
                <Link href=""><a>careers</a></Link>
                <Link href=""><a>community guidelines</a></Link>
                <Link href=""><a>faq</a></Link>
                <Link href=""><a>blog</a></Link>
                <Link href=""><a>privacy policy</a></Link>
                <Link href=""><a>terms of service</a></Link>
            </nav>
        </div>
    </>  );
}
 
export default Nav; <>
    <div>

    </div>
</>