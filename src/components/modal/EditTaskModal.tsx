import { dataContext } from "../modules/HomeModules";
import { editModal } from "./interface"
import { useContext, useEffect, useState } from "react"

export const EditTaskModal: React.FC<editModal> = ({
    setOpenmodal,
    title,
    desciption,
    type,
    index
}) => {
    const [cardTitle, setCardTitle] = useState(title);
    const [cardDescription, setCardDescription] = useState(desciption)

    const {data, setData} = useContext(dataContext)

    const [error, setError] = useState('')
    
    function handleEdit () {
        if (cardDescription && cardTitle) {
            const temp = data[type].map((eachTask, i) => {
                if (i == index){
                    return {...eachTask, title: cardTitle, description: cardDescription}
                }
    
                return eachTask
            })
    
            setData({
                ...data,
                [type]: temp
            })
    
            setOpenmodal(false)
    
            fetch('https://cfcloserec-be.vercel.app/patch/ba@gmail.com', {
                cache: 'no-store',
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(
                    {                    
                        ... data,
                        [type]: temp
                    }
                )
            }).then(res => {
                return res.json()
            }).then(data => {
    
            }).catch(e => {
                console.log(e)
            }) 
        }
        else {
            setError("Field can't be empty!")
        }
    }

    function handleDelete () {
        const temp = data[type]

        const excess = temp.splice(index, 1)

        setData({
            ... data,
            [type]: temp
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
                    [type]: temp
                }
            )
        }).then(res => {
            return res.json()
        }).then(data => {

        }).catch(e => {
            console.log(e)
        }) 

        setOpenmodal(false)
    }

    useEffect(() => {
        if (cardTitle && cardDescription) {
            setError('')
        }
    }, [cardTitle, cardDescription])

    return <main className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/30"
    onClick={(event) => {
        if (event.target === event.currentTarget) {
            setOpenmodal(false)
        }
    }}>
        <section className="bg-white max-w-[80%] p-10 flex flex-col items-center" >
            <h1 className="text-black text-left font-bold mb-3 text-xl">Edit Task</h1>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <p className="text-[#707070] text-xs">Title</p>
                    <input type="text" className="outline-none w-full bg-[#F1F1F1] p-3 font-bold text-black" 
                    value={cardTitle} onChange={(e) => {
                        setCardTitle(e.target.value)
                    }}/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[#707070] text-xs">Description</p>
                    <textarea className="outline-none bg-[#F1F1F1] p-3 text-black text-xs w-full" 
                    value={cardDescription} onChange={(e) => {
                        setCardDescription(e.target.value)
                    }}/>
                </div>
                {
                    error != '' && <p className="text-red-500 text-xs">{error}</p>
                }
                <div className="flex gap-5 flex-wrap">
                    <button className="min-w-20 flex-grow bg-red-500 text-white py-2 text-sm duration-75 hover:scale-105"
                    onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <button className="min-w-20 flex-grow bg-black text-white py-2 text-sm duration-75 hover:scale-105"
                    onClick={handleEdit}
                    >
                        Save
                    </button>
                </div>
            </div>
            
        </section>
    </main>
}