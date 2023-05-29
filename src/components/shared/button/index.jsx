"use client";


const Button = ({disabled,isSubmit,title,color})=>{

    return(
        <>
        <button disabled={disabled} onClick={isSubmit} type="submit" 
        className={`border rounded-xl bg-${color} h-12 text-white disabled:bg-light-grey`}>{title}</button>

        
        </>
        

    )
}

export default Button;