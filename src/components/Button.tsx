type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button = ({children, onClick }: ButtonProps) => {
    return <>
        <button onClick={onClick} 
            className=" cursor-pointer
            bg-[#dc5c2a] rounded-md border-2 border-[#ffe762][font-family:'Caveat', ] font-extrabold text-[#ffe762] text-2xl w-30
            hover:border-black focus:outline-blue-300">
        {children}</button>
    </>
}   