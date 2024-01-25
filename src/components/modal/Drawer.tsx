export const Drawer: React.FC = () => {
    return <>
        <section className="fixed w-full bg-white left-0 top-24 p-10 flex flex-col gap-10">
            <button className="bg-[#F1F1F1] px-10 py-5 rounded-lg text-black w-full flex duration-100 hover:bg-[#121212] hover:text-white">
                Profile
            </button>
            <button className="bg-[#F1F1F1] px-10 py-5 rounded-lg text-black w-full flex duration-100 hover:bg-[#121212] hover:text-white">
                Sign In
            </button>
            <button className="bg-[#F1F1F1] px-10 py-5 rounded-lg text-black w-full flex duration-100 hover:bg-[#121212] hover:text-white">
                Sign Out
            </button>
        </section>
    </>
}