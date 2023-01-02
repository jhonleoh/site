import { useRouter } from "next/router";
import Link from 'next/link';

// Navigation: Main nav header & link wrapper present on every page
const Navigation: React.FC = () => {
    const router = useRouter();

    const generateDynamicLink = (linkName?: string) => {
        const target = linkName 
        return (
            <Link href={`/${target === undefined ? "" : target}`}>
                <span className={`hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent 
                hover:cursor-pointer ${router.pathname == target ? "bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent" : "text-[#909498]"}`}>{target == undefined ? "home" : `${target}`}</span>
            </Link>
        )
    }

    return (
        <div className="flex flex-col w-full mt-12 sm:px-5 justify-center text-center sm:text-left sm:justify-start">

            {/* Logo Stuff */}
            <Link href="/">
                <div className="flex items-center justify-center sm:justify-start space-x-2 hover:opacity-50 hover:cursor-pointer duration-200 transition-all ease-in-out">
                    <img src="/icons/logo.svg" className="w-12 -mt-2" />
                    <div>
                        <span className="font-semibold text-4xl drop-shadow-xl">./ryan</span>
                        <span className="font-thin text-4xl drop-shadow-xl">schachte</span>
                    </div>
                </div>
            </Link>
            <span className="font-fira sm:pl-3 mt-5 text-xs text-[#B3B4B4]">{"$ sh echo “blah blah blah” > /dev/null"}</span>

            {/* Links and Nav */}
            <div className="flex uppercase space-x-7 sm:pl-3 font-semibold border-y border-slate-600 py-6 mt-6">
                <div className="flex justify-center sm:justify-between w-full">
                    <div className="flex space-x-3 sm:space-x-7 justify-center sm:justify-start items-center">
                        {generateDynamicLink()}
                        {generateDynamicLink("youtube")}
                        {generateDynamicLink("contact")}
                        {/* <div className="block sm:hidden">
                            {generateDynamicLink("RSS")}
                        </div> */}
                    </div>
                    <span className="hidden sm:block pr-5">
                        <img
                            src="/icons/rss_feed.svg"
                            className="w-6 hover:opacity-50 hover:cursor-pointer"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;