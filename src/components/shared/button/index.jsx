"use client";


const Button = ({disabled,onClick,title,color})=>{

    return(
        <>
        <button disabled={disabled} onClick={onClick} type="submit" 
        className={`border rounded-xl bg-${color} h-12 text-white disabled:bg-light-grey`}>{title}</button>

        
        </>
        

    )
}

export default Button;