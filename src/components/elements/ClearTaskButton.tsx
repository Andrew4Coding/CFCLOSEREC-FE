'use client'

import { useContext } from "react"
import { clearTaskButtonInterface } from "./interface"
import { dataContext } from "../modules/HomeModules"

export const ClearTaskButton: React.FC<clearTaskButtonInterface> = ({
    type
}) => {
    
    const {data, setData} = useContext(dataContext)



    function handleClear () {
        setData({
            ... data,
            [type]: []
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
                        [type]: []
                    }
                )
            }).then(res => {
                return res.json()
            }).then(data => {
    
            }).catch(e => {
                console.log(e)
            })   
    }

    return (
        <button className="text-xs duration-100 hover:rotate-12" onClick={handleClear}>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_152_10" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#FFFFFF"/>
            </mask>
            <g mask="url(#mask0_152_10)">
            <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FB7373"/>
            </g>
            </svg>
            </span>
        </button>
    )
}