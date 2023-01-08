import { useDispatch, useSelector } from 'react-redux'
import { ReactNode } from 'react'
import { RootState } from '../store'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { toggleModal } from '../store/taskModalSice'


export interface ITaskCard {
    id?: number,
    title: string,
    taskNumber?: number,
    description?: string,
    createAt?: string | Date,
    finishAt?: string | Date,
    timeInWork?: string | Date,
    status?: 'new' | 'in progress' | 'done',
    priority?: string,
    children?: ReactNode
}

const TaskCard = () => {
    const dispatch = useDispatch()
    const value = useSelector((state: RootState) => state.taskToggle.value)
    const title = useSelector((state: RootState) => state.modalTask.title)
    const descr = useSelector((state: RootState) => state.modalTask.descr)

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
                                    {title}
                                </Dialog.Title>
                                <p className='group-hover:text-white break-all text-center mb-2'>{descr}</p>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
export default TaskCard;