'use client'
import React, { useEffect, useState } from "react"
import { Body } from "./Sections/Body"
import { contextDataInterface, dataInterface } from "./ModuleElements/interface"


const options = {
    data: {
        email: '',
        password: '',
        todo: [],
        ongoing: [],
        done: [],
    },
    setData: () => {}
}
export const dataContext = React.createContext<contextDataInterface>(options)

export function HomeModule() {
    const [testData, setTestData] = useState<dataInterface>(options.data);
    useEffect(() => {
        fetch('https://cfcloserec-be.vercel.app/ba@gmail.com', {
            cache: 'no-store',
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            // console.log(data)
            setTestData(data)
        }).catch((e) => {
        })
    }, [])

    if (testData == options.data) return <div className="fixed w-full h-full flex justify-center items-center text-white animate-pulse">
        Loading Data ...
    </div>

    return (
     <div>
        <dataContext.Provider value={{data: testData, setData: setTestData }}>
            <Body/>
        </dataContext.Provider>
     </div>
    )
}
