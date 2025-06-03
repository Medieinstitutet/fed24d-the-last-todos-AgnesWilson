type ButtonProps = {
    children: React.ReactNode;
}

export const Button = ({children}: ButtonProps) => {
    return <>
        <button className="bg-[#dc5c2a] border-2 rounded-md border-[#ffe762] [font-family:'Caveat', ] font-extrabold text-[#ffe762] text-2xl w-30">{children}</button>
    </>
}