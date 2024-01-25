import { useContext } from "react"
import { TaskSection } from "../ModuleElements/TaskSection"
import { dataContext } from ".."

export const Body: React.FC =  () => {
    return (
        <section className="m-20 flex flex-col gap-10 ">
            <div className="flex flex-col text-white">
                <h1 className="text-2xl">MY <s className="font-bold">NOT</s> PERSONAL TODO</h1>
                <div>
                    {
                        useContext(dataContext).data.email
                    }
                </div>
            </div>
            <div className="w-full h-full bg-[#313131] p-10 flex flex-col lg:flex-row gap-10 rounded-lg shadow-md">
                <TaskSection title="Todo" type="todo" />
                <TaskSection title="Ongoing" type="ongoing" />
                <TaskSection title="Done" type="done" />
            </div>
        </section>
    )
}