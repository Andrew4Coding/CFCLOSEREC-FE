'use client'
import { useContext } from "react"
import { taskSectionInterface } from "./interface"
import { Card } from "./Card"
import { dataContext } from ".."
import {AddNewTaskButton} from "@/components/elements/AddNewTaskButton"
import { ClearTaskButton } from "@/components/elements/ClearTaskButton"


export const TaskSection: React.FC<taskSectionInterface> = ({
    type,
    title,
}) => {

    const taskData = useContext(dataContext)

    return (
        <div className="flex-grow flex flex-col gap-2 text-white">
            <div className="w-full flex gap-5">
                <h1 className="text-base">{title}</h1>
                <ClearTaskButton type={type}/>
            </div>
            <section className="w-full h-full flex flex-col gap-3">
                {
                    taskData.data[type].map((item, index) => {
                        return (
                            <Card title={item.title} description={item.description} key={index} type={type} index={index}/>
                        );
                    })
                }
                <AddNewTaskButton type={type}/>
            </section>
        </div>
    )
}