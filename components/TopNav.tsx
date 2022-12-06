import Image from "next/image";
import { MenuAlt3Icon } from "@heroicons/react/solid"
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function TopNav() {
  const toggleMenu = () => {
    document.querySelector(".sidenav")?.classList.toggle("-translate-x-full")
  }
  return (
    <div className="flex flex-col w-full p-5 space-y-5 border-b-2 sm:flex-row border-b-purple sm:space-y-0 sm:space-x-5">
      <div className="flex space-x-2.5 w-full flex-1">
        <div className="relative w-full">
          <button className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </button>
          <input
            type="text"
            className="text-gray text-sm rounded-lg w-full lg:max-w-md pl-10 p-2.5 bg-lightPurple outline-none placeholder-gray border border-purple"
            placeholder="Search presenters, viewers, and podcasts across the globe"
            required
          />
        </div>
        <button className="text-white sm:hidden" onClick={toggleMenu}><MenuAlt3Icon  className="w-10 h-10" /></button>
      </div>
      <div className="flex items-center justify-between space-x-5 md:max-w-xs">
        <div className=" p-2.5 bg-blue w-10 h-10 rounded-full flex items-center hover:cursor-pointer">
            <Image src={"/bell.png"} width={25} height={25} />
        </div>
        <div className="p-0.5 rounded-md ring-2 ring-blue"><ConnectButton chainStatus="icon" accountStatus="avatar" /></div>
        <button className="hidden text-white sm:block md:hidden" onClick={toggleMenu}><MenuAlt3Icon  className="w-10 h-10" /></button>
      </div>
    </div>
  )
}

/** <button className="bg-blue px-5 py-2.5 rounded-lg text-white">Connect Wallet</button> */