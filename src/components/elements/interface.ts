export interface buttonInterface {
    buttonText: string,
    buttonBackgroundColor?: string,
    buttonForegroundColor?: string,
    onClickFunction?: Function,
}

export interface addNewTaskInterface {
    type: 'todo' | 'ongoing' | 'done'
}