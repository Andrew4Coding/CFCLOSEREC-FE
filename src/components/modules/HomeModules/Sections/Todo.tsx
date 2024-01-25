export const TodoSection: React.FC = () => {
    return (
        <div className="flex-grow min-w-[20rem] flex flex-col gap-2">
            <h1 className="font-bold">Todo</h1>
            <section className="w-full h-full flex flex-col gap-2">
                <div className="bg-white p-5 rounded-md shadow-md">
                    <h2>🍕 Make Pizza</h2>
                </div>
                <div className="bg-white p-5 rounded-md shadow-md">
                    <h2>🍕 Make Pizza</h2>
                </div>
            </section>
        </div>
    )
}