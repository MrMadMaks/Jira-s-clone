import { useDispatch, useSelector } from 'react-redux'
import { ReactNode } from 'react'
import { RootState } from '../store'
import { delTask } from '../store/tasksSlice'
import { toggleModal } from '../store/taskModalSice';
import { showTitle, showDescr } from '../store/showTaskSlice';


export interface ITaskCreateCard {
    id: number,
    title: string,
    taskNumber?: number,
    description?: string,
    projectTitle?: string | undefined,
    createAt?: string | Date,
    finishAt?: string | Date,
    timeInWork?: string | Date,
    status?: 'new' | 'in progress' | 'done',
    priority?: string,
    children?: ReactNode,
}

export const TaskCreateCard = ({ title, description, id }: ITaskCreateCard) => {

    const values = useSelector((state: RootState) => state.tasks.values)
    const value = useSelector((state: RootState) => state.taskToggle.value)
    const dispatch = useDispatch()

    const removeTask = (id: number, e: React.MouseEvent) => {
        e.stopPropagation()
        dispatch(delTask(values.filter(value => value.id !== id)))
    }

    const showTask = () => {
        dispatch(showTitle(title))
        dispatch(showDescr(description))
        dispatch(toggleModal(!value))
    }

    return (
        <div onClick={showTask} className='flex flex-col cursor-pointer items-center w-[32%] group ring-1 ring-slate-900/5  shadow-lg rounded-md p-4 min-h-[300px] hover:bg-sky-500 hover:ring-sky-500'>
            <div className='shrink grow basis-auto w-full' >
                <div className='flex flex-col items-center'>
                    <h2 className='font-bold text-xl group-hover:text-white break-all'>{title}</h2>
                    <p className='group-hover:text-white break-all text-center mb-2'>{description}</p>
                </div>
            </div>
            <button onClick={(e) => removeTask(id, e)} className='bg-slate-400 px-[30px] py-[10px] rounded-lg text-stone-100 text-base uppercase font-semibold m-auto hover:bg-sky-500 outline' >Удалить</button>
        </div>
    )
}
