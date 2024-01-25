import { Dispatch, SetStateAction } from "react";

export interface modalInterface {
    setOpenmodal: Dispatch<SetStateAction<boolean>>
}

export interface addModal extends modalInterface{
    type: 'todo' | 'ongoing' | 'done',
}

export interface editModal extends addModal {
    title: string,
    desciption: string,
    index: number,
}