import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { delProject } from '../store/addNewProjectSlice';

export interface IProjectCard {
    id: number,
    title: string,
    description: string,
}


export const ProjectCard = ({ title, description, id }: IProjectCard) => {

    const projects = useSelector((state: RootState) => state.addProject.projects)
    const dispatch = useDispatch()

    const removeProject = (id: number) => {
        dispatch(delProject(projects.filter(project => project.id !== id)))
    }

    return (
        <div className='flex flex-col cursor-pointer items-center w-[32%] group ring-1 ring-slate-900/5  shadow-lg rounded-md p-4 min-h-[300px] hover:bg-sky-500 hover:ring-sky-500'>
            <Link to={`/${title}`} className='shrink grow basis-auto w-full' >
                <div className='flex flex-col items-center'>
                    <h2 className='font-bold text-xl group-hover:text-white break-all'>{title}</h2>
                    <p className='group-hover:text-white break-all text-center mb-2'>{description}</p>
                </div>
            </Link>
            <button onClick={() => removeProject(id)} className='bg-slate-400 px-[30px] py-[10px] rounded-lg text-stone-100 text-base uppercase font-semibold m-auto hover:bg-sky-500 outline ' >Удалить</button>
        </div>
    )
}
