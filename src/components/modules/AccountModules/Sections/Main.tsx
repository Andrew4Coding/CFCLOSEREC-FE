'use client'

import { useSession, signIn } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"



export const Main: React.FC = () => {
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="shadow-md p-10 flex flex-col items-center gap-5">
                <Image src={'/compfest.png'} alt="" width={50} height={50} className="m-5"/>
                <h1 className="font-bold text-xl">Login</h1>
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm">Email</h2>
                    <input type="text" className="outline-none border-2 p-3" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-sm">Password</h2>
                    <input type="text" className="outline-none border-2 p-3" onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>
                <button className="bg-[#121212] w-full py-3 text-sm text-white duration-100 hover:scale-105" 
                onClick={() => {
                    console.log(email, password);
                    signIn('credentials', {email, password, redirect: false, callbackUrl: '/'})
                }}
                >
                    Login
                </button>
            </div>
        </main>
    )
}