import Image from "next/image";
import Link from "next/link";
import AddModal from "./AddModal";
import { modalState } from "../atoms/modalAtom"
import { useRecoilState } from "recoil"

interface Props {
    page: string
}

export default function SideNav({ page }: Props) {
    const [addPodcastModal, setAddPodcastModal] = useRecoilState(modalState)
  return (
    <div className="fixed left-0 transform transition duration-1000 ease-in-out sidenav -translate-x-full md:-translate-x-0
        h-screen 2-64 md:w-72 bg-black px-5 py-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#008BEE]">
        <div className="font-bold text-black uppercase h1"><span className="text-white">Un</span><span className="text-blue">oma</span></div>
        <div className="pt-5 space-y-2.5">
            <div>
                <Link href="/">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "home" && "bg-blue"} group px-5 rounded-lg space-x-2.5`}>
                        <Image src={"/grid.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "home" && "!text-white"}`}>Home</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/categories">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "categories" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/categories.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "categories" && "!text-white"}`}>Categories</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/trending">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "trending" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/trending.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "trending" && "!text-white"}`}>Trending</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/stream">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "stream" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/airplay.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "stream" && "!text-white"}`}>Live stream</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/playlist">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "playlist" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/play.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "playlist" && "!text-white"}`}>Playlist</h3>
                    </a>
                </Link>
            </div>
        </div>
        <p className="py-5 font-semibold p text-gray group-hover:text-white">Podcaster</p>
        <div className="space-y-2.5">
            <div>
                <Link href="/start">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "start" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/grid.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "start" && "!text-white"}`}>Start Podcast</h3>
                    </a>
                </Link>
            </div>
            <div className={`flex items-center h-10 hover:bg-blue ${page == "add" && "bg-blue"} px-5 rounded-lg group space-x-2.5 hover:cursor-pointer`}
                onClick={() => setAddPodcastModal(true)}>
                <Image src={"/add.png"} width={20} height={20} />
                <h3 className={`h3 text-gray group-hover:text-white ${page == "add" && "!text-white"}`}>Add Podcast</h3>
            </div>
            <div>
                <Link href="/featured">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "featured" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/feather.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "featured" && "!text-white"}`}>Get Featured</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/contact">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "contact" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/contact.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "contact" && "!text-white"}`}>Contact</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/playlist">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "playlist" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/play.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "playlist" && "!text-white"}`}>Playlist</h3>
                    </a>
                </Link>
            </div>
        </div>
        <p className="py-5 font-semibold p text-gray group-hover:text-white">Other</p>
        <div className="space-y-2.5">
            <div>
                <Link href="/community">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "community" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/grid.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "community" && "!text-white"}`}>Community</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/subscription">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "subscription" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/rss.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "subscription" && "!text-white"}`}>Subscription</h3>
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/setting">
                    <a className={`flex items-center h-10 hover:bg-blue ${page == "setting" && "bg-blue"} px-5 rounded-lg group space-x-2.5`}>
                        <Image src={"/settings.png"} width={20} height={20} />
                        <h3 className={`h3 text-gray group-hover:text-white ${page == "setting" && "!text-white"}`}>Settings</h3>
                    </a>
                </Link>
            </div>
        </div>
        <AddModal />
    </div>
  )
}