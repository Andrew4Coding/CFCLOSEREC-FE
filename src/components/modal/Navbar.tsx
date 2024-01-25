'use client'
import { MainButton } from "@/components/elements/Button"
import { Hamburger } from "@/components/icons/Hamburger"
import { Drawer } from "@/components/modal/Drawer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ProfileModal } from "./ProfileModal"

export const Navbar: React.FC = () => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

    return (
        <header className="py-7 px-10 flex justify-between bg-white fixed right-10 left-10 z-20 w-auto top-10 h-32 shadow-lg">
            <div className="flex flex-col  items-start justify-center md:items-center">
                <Link href={'https://recruitment.compfest.id/'} target="_blank">
                    <div className="w-14 xl:w-16 drop-shadow-[2px_2px_5px_rgba(125,119,173,1)]  duration-75 hover:scale-110 flex justify-center">
                        <Image src={'/compfest.png'} alt="" width={300} height={300} style={{
                            maxWidth: '100%'
                        }}/>
                    </div>
                </Link>
                <div className="flex flex-col gap-2">
                    {/* <h2 className="text-sm lg:text-xl">My Personal TODO List</h2> */}
                </div>

            </div>
            <div className="flex gap-5">
                <div className="hidden gap-5 md:flex">                    
                    <div className="flex items-center">
                        <button className="rounded-full bg-[#121212] w-16 h-16 flex items-center justify-center"
                        onClick={() => {
                            setIsProfileModalOpen(true)
                        }}
                        >
                            <Image src={'/compfest.png'} alt="" width={300} height={300} style={{
                                maxWidth: '50%'
                            }}/>
                        </button>
                    </div>
                    <MainButton buttonText="Sign In"/>
                    <MainButton buttonText="Sign Out"/>
                </div>
                <button className="flex md:hidden items-center" onClick={() => {
                    setDrawerOpen(!isDrawerOpen)
                }}>
                    <Hamburger size="w-10" fill="#121212"/>
                </button>
            </div>
            {
                isDrawerOpen && <Drawer />
            }
            {
                isProfileModalOpen && <ProfileModal setIsProfileModalOpen={setIsProfileModalOpen} />
            }
        </header>
    )
}