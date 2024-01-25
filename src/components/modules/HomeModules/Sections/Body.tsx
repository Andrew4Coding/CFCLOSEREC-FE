import { TaskSection } from "../ModuleElements/TaskSection"

export const Body: React.FC =  () => {
    return (
        <section className="m-10 flex flex-col gap-10 ">
            <h1 className="text-white text-2xl">MY PERSONAL TODO</h1>
            <div className="w-full h-full bg-[#313131] p-10 flex flex-col lg:flex-row gap-10 rounded-lg shadow-md">
                <TaskSection title="Todo" type="todo" />
                <TaskSection title="Ongoing" type="ongoing" />
                <TaskSection title="Done" type="done" />
            </div>
        </section>
    )
}