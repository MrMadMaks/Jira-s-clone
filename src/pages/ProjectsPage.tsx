import Button from "../UI/Button";
import { ProjectCard } from "../containers/ProjectCard"
import ModalProject from "../components/ModalProject";
import { useSelector } from 'react-redux'
import { RootState } from '../store'


export const ProjectsPage = () => {
    const projects = useSelector((state: RootState) => state.addProject.projects)

    return (
        <div className='bg-gray-100 min-h-[100vh] overflow-hidden'>
            <div className="container max-w-[1024px] m-auto flex content-center flex-col p-[40px]">
                <h1 className="m-auto text-4xl font-bold" >Список проектов</h1>
                <div className="flex justify-center grow shrink basis-auto flex-row flex-wrap gap-3 mt-20 min-h-[300px] mb-[80px]" >
                    {
                        projects.length === 0
                            ?
                            <div className="m-auto text-2xl font-bold uppercase" >Проектов пока нет :(</div>
                            :
                            projects.map((project) => {
                                return (
                                    <ProjectCard key={project.id} {...project} />
                                )
                            })
                    }
                </div>
                <Button name='Добавить новый проект' />
                <ModalProject />
            </div>
        </div>
    )
}
