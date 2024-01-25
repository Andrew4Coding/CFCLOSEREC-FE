'use client'
import { cardInterface } from "../interface"
import { useState } from "react"
import { EditTaskModal } from "@/components/modal/EditTaskModal"

export const Card: React.FC<cardInterface> = ({
    title,
    description,
    type,
    index
}) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="w-full">
            <button className="bg-[#121212] w-full text-white p-5 rounded-md shadow-md duration-100 hover:scale-105 text-left text-sm"
            onClick={() => {
                setOpenModal(!openModal)
            }}>
                {
                    title
                }
            </button>
            {
                openModal && <EditTaskModal setOpenmodal={setOpenModal} title={title} desciption={description} type={type} index={index}/>
            }
        </div>
    )
}