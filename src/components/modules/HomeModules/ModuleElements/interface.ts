import { Dispatch, SetStateAction } from "react";

export interface taskSectionInterface {
    type: "todo" | "ongoing" | "done",
    title: string,
}

export interface dataInterface {
    email: string,
    password: string,
    todo: {
        'title': string,
        'description': string,
    }[] | [],
    ongoing: {
        'title': string,
        'description': string,
    }[] | [],
    done: {
        'title': string,
        'description': string,
    }[] | [],
}
export interface contextDataInterface {
    data: dataInterface,
    setData: React.Dispatch<React.SetStateAction<dataInterface>>
}