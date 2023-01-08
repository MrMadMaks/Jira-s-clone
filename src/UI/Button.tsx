import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../store/modalSlice';


interface ButtonProps {
    name: string,
    value?: boolean
}



const Button = ({ name, value }: ButtonProps) => {

    const style = {
        btn: `bg-slate-400 px-[30px] py-[15px] rounded-lg text-stone-100 text-base uppercase font-semibold m-auto hover:bg-sky-500`
    }

    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(toggleModal(!value))} className={style.btn} >
            {name}
        </button>
    );
};
export default Button;