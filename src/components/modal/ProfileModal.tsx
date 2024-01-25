import Image from "next/image"
import { modalInterface } from "./interface"

export const ProfileModal: React.FC<modalInterface> = ({
    setOpenmodal
}) => {
    return <main className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/30"
    onClick={(event) => {
        if (event.target === event.currentTarget) {
            setOpenmodal(false)
        }
    }}>
        <section className="bg-white min-w-[20rem] p-10 flex flex-col items-center" >
            <button className="rounded-full bg-[#121212] w-16 h-16 flex items-center justify-center mb-10"
            >
                <Image src={'/compfest.png'} alt="" width={300} height={300} style={{
                    maxWidth: '50%'
                }}/>
            </button>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <p className="text-[#707070] text-xs">Email</p>
                    <h2>compfestandrew@gmail.com</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[#707070] text-xs">Account ID</p>
                    <h2>1234567891221819</h2>
                </div>
            </div>
            
        </section>
    </main>
}