'use client'
import { useContext, useEffect, useState } from "react"
import { contextDataInterface, taskSectionInterface } from "./interface"
import { Card } from "./Card"
import { dataContext } from ".."
import {AddNewTaskButton} from "@/components/elements/AddNewTaskButton"

export const TaskSection: React.FC<taskSectionInterface> = ({
    type,
    title,
}) => {

    const taskData = useContext(dataContext)

    return (
        <div className="flex-grow flex flex-col gap-2 text-white">
            <h1 className="text-base">{title}</h1>
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