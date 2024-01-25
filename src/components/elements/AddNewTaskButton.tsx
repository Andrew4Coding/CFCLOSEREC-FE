'use client'
import React from 'react'
import { useState } from "react"
import { AddTaskModal } from "../modal/AddTaskModal";
import { addNewTaskInterface } from './interface';

export const AddNewTaskButton: React.FC<addNewTaskInterface> = ({
    type
}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    function handleClick() {
        setOpenModal(!openModal)
    }

    return (
        <div>
            <button className="text-[#D1D1D1] mt-3 w-full" onClick={handleClick}>
                <h3 className="text-sm">+ Add Task</h3>
            </button>
            {
                openModal && <AddTaskModal  setOpenmodal={setOpenModal} type={type}/>
            }
            
        </div>
    )
}