import { buttonInterface } from "./interface"

export const MainButton: React.FC<buttonInterface> = ({
    buttonText = 'Hello',
    buttonBackgroundColor = '#121212',
    buttonForegroundColor = 'white',
}) => {
    return (
        <button className={`flex bg-[${buttonBackgroundColor}] px-5 py-2 flex-grow-1 justify-center text-${buttonForegroundColor} duration-100 hover:scale-110 h-full
        items-center flex-grow min-w-40 md:min-w-0`}>
                {
                    buttonText
                }
        </button>
    )
}