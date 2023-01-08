
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { toggleModal } from '../store/modalSlice'
import { inputTitle, inputDescr } from '../store/createTaskSlice'
import Button from '../UI/Button'
import { createTask } from '../store/tasksSlice'

interface IModalTask {
    projectTitle: string | undefined
}

const ModalTask = ({ projectTitle }: IModalTask) => {

    const dispatch = useDispatch()
    const value = useSelector((state: RootState) => state.modal.value)
    const inputTaskTitle = useSelector((state: RootState) => state.createTask.title)
    const inputTaskDescr = useSelector((state: RootState) => state.createTask.description)
    const tasks = useSelector((state: RootState) => state.tasks.values)

    const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target.name === 'title' ? inputTitle(e.target.value) : inputDescr(e.target.value))
    }

    const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask = { id: Date.now(), title: inputTaskTitle, description: inputTaskDescr, projectTitle: projectTitle }
        console.log(newTask)
        dispatch(createTask([...tasks, newTask]))
        dispatch(inputTitle(''))
        dispatch(inputDescr(''))
    }

    return (
        <Transition appear show={value} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => dispatch(toggleModal(!value))}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                                >
                                    Новая задача
                                </Dialog.Title>

                                <form onSubmit={clickHandler} className='"flex items-center space-x-6"'>
                                    <span className="block text-sm font-medium text-slate-700 mt-4">Название задачи</span>
                                    <input type="text" value={inputTaskTitle} name='title' onChange={inputValue} className='mt-2 block w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
                                    <span className="block text-sm font-medium text-slate-700 mt-4">Описание задачи</span>
                                    <input type="text" value={inputTaskDescr} onChange={inputValue} name='descr' className='mt-2 mb-12 block w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
                                    <input type="file" className="block mt-3 w-full text-sm text-slate-500
                                    file:mr-4 file:px-[30px] file:py-[10px]
                                    file:rounded-lg file:border-0
                                    file:text-base file:font-semibold
                                    file:uppercase file:cursor-pointer
                                    file:bg-slate-400 file:text-stone-100
                                    hover:file:hover:bg-sky-500
                                    "/>
                                    <div className="mt-4 text-center">
                                        <Button name='Создать задачу' value={value} />
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalTask;