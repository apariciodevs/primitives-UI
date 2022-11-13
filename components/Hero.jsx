import Image from "next/image";

const Hero = () => {
    return ( <>
            <div className="flex flex-col items-center justify-center h-screen w-full space-y-8">
            
                <div className="flex flex-col items-center">
                <Image
                src={"/Logo.png"}
                height={330}
                width={640}
                alt={"logo"}
                /> 
            <h1 className="sm:text-3xl text-2xl sm:mt-60 absolute -tracking-tight mt-48 font-semibold ">create. share. collect.</h1>
            </div>
            <div className="flex flex-col space-y-4">
                <button className="text-lg font-semibold text-white custombg w-80 py-2 rounded-3xl shadow-xl">register</button>
                <button className="text-lg font-bold">login</button>
            </div>
                
            </div>
        
    </> );
}
 
export default Hero;