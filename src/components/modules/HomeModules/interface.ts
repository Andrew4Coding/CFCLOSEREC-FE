export interface cardInterface {
    title: string,
    description: string,
    type: 'todo' | 'ongoing' | 'done',
    index: number,
}

export interface bodyInterface {
    data: object[]
}
