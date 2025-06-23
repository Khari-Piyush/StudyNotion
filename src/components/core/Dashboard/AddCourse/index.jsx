import { FaChevronLeft } from "react-icons/fa"
import RenderSteps from "./RenderSteps"

export default function AddCourse() {
    return (
        <>
            <div className="text-white flex items-start justify-center gap-4 w-full">
                <div className="flex flex-col gap-5 items-start w-[82%]">

                    <button className="flex justify-center items-center gap-1 text-richblack-400 font-medium text-sm"> 
                        <FaChevronLeft className="text-xs"/>
                        Back to Dashboard
                    </button>

                    <div className="flex flex-col w-full gap-3">
                        <RenderSteps/>
                    </div>
                </div>

                <div className="bg-richblack-800 rounded-lg  w-[384px] flex flex-col ">
                   <p className="text-lg font-bold pt-5 pl-1">⚡Code Upload Tips</p>
                   <ul className="text-xs list-disc leading-7 pl-6 pb-5 pr-2">
                        <li>Set the Course Price option or make it free.</li>
                        <li>Standard size for the course thumbnail is 1024x576.</li>
                        <li>Video section controls the course overview video.</li>
                        <li>Course Builder is where you create & organize a course.</li>
                        <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                        <li>Information from the Additional Data section shows up on the course single page.</li>
                        <li>Make Announcements to notify any important</li>
                        <li>Notes to all enrolled students at once.</li>
                   </ul>
                </div>
            </div>
        </>
    )
}