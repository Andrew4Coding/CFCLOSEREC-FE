import { iconProps } from "./interface"

export const Hamburger: React.FC<iconProps> = ({
    size,
    className='',
    fill='#FF9843',
}) => {
    return (
        <svg className={`${size} ${className}`} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93774 8.2501C5.93774 7.33883 6.67647 6.6001 7.58774 6.6001H27.3877C28.299 6.6001 29.0377 7.33883 29.0377 8.2501C29.0377 9.16137 28.299 9.9001 27.3877 9.9001H7.58774C6.67647 9.9001 5.93774 9.16137 5.93774 8.2501Z" fill={fill}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93774 16.5001C5.93774 15.5888 6.67647 14.8501 7.58774 14.8501H27.3877C28.299 14.8501 29.0377 15.5888 29.0377 16.5001C29.0377 17.4114 28.299 18.1501 27.3877 18.1501H7.58774C6.67647 18.1501 5.93774 17.4114 5.93774 16.5001Z" fill={fill}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93774 24.7501C5.93774 23.8388 6.67647 23.1001 7.58774 23.1001H27.3877C28.299 23.1001 29.0377 23.8388 29.0377 24.7501C29.0377 25.6614 28.299 26.4001 27.3877 26.4001H7.58774C6.67647 26.4001 5.93774 25.6614 5.93774 24.7501Z" fill={fill}/>
        </svg>

    )
}