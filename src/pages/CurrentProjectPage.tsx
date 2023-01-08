import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { TaskCreateCard } from '../containers/TaskCreateCard';
import Button from '../UI/Button'
import ModalTask from '../components/ModalTask';
import TaskCard from '../containers/TaskCard';
import { useParams } from 'react-router-dom';



export const CurrentProjectPage = () => {

    const { projectTitle } = useParams()
    const tasks = useSelector((state: RootState) => state.tasks.values)

    return (
        <div className='bg-gray-100 min-h-[100vh] overflow-hidden'>
            <div className="container max-w-[1024px] m-auto flex content-center flex-col p-[40px]">
                <h1 className="m-auto text-4xl font-bold mb-4" >{projectTitle}</h1>
                <div className="flex justify-center grow shrink basis-auto flex-row flex-wrap gap-3 mt-20 min-h-[300px] mb-[80px]" >
                    {
                        tasks.length === 0
                            ?
                            <div className="m-auto text-2xl font-bold uppercase" >Задач пока нет :(</div>
                            :
                            tasks.filter(task => task.projectTitle === projectTitle).map(task => {
                                return (
                                    <TaskCreateCard key={task.id} {...task} />
                                )
                            })
                    }
                </div>
                <Button name='Создать задачу' />
                <ModalTask projectTitle={projectTitle} />
                <TaskCard />
            </div>
        </div>
    )
}
