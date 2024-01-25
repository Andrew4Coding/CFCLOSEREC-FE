import Image from "next/image"
import { addModal, modalInterface} from "./interface"
import { KeyboardEvent, useContext, useEffect, useState } from "react";
import { dataContext } from "../modules/HomeModules";
import { dataInterface } from "../modules/HomeModules/ModuleElements/interface";

export const AddTaskModal: React.FC<addModal> = ({
    setOpenmodal,
    type
}) => {

    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('')

    const {data, setData} = useContext(dataContext)

    function handleSubmit () {
        setData({
            ... data,
            [type]: [...data[type], {
                title: cardTitle,
                description: cardDescription,
            }]
        })

        fetch('https://cfcloserec-be.vercel.app/patch/ba@gmail.com', {
            cache: 'no-store',
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(
                {                    
                    ... data,
                    [type]: [...data[type], {
                    title: cardTitle,
                    description: cardDescription,
                    }]
                }
            )
        }).then(res => {
            return res.json()
        }).then(data => {

        }).catch(e => {
            console.log(e)
        })    
        
    }

    function handleKeyDown(event: KeyboardEvent) {
        console.log(event.key)
    }

    return <main className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/30"
    onClick={(event) => {
        if (event.target === event.currentTarget) {
            setOpenmodal(false)
        }
    }}>
        <section className="bg-white min-w-[20rem] p-10 flex flex-col items-center" >
            <h1 className="text-black text-left font-bold mb-3 text-xl">Add Task</h1>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <p className="text-[#707070] text-xs">Title</p>
                    <input type="text" className="outline-none bg-[#F1F1F1] p-3 font-bold text-black" value={cardTitle} 
                    onChange={(e) => {
                        setCardTitle(e.target.value)
                    }}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[#707070] text-xs">Description</p>
                    <textarea className="outline-none bg-[#F1F1F1] p-3 text-black" value={cardDescription} 
                    onChange={(e) => {
                        setCardDescription(e.target.value)
                    }}
                    />
                </div>
                <button className="bg-black text-white py-2 text-sm duration-75 hover:scale-105"
                onClick={handleSubmit}>
                    + Add
                </button>
            </div>
            
        </section>
    </main>
}