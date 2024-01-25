import { iconProps } from "./interface"

export const GradientCircle: React.FC<iconProps> = ({
    size,
    className='',
    fill='#FF9843',
}) => {
    return (
        <svg className={`${size} ${className}`} viewBox="0 0 950 950" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="475" cy="475" r="475" fill={fill}/>
        </svg>
    )
}