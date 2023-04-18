import DisplayCard from "../../../components/DisplayCard";
import DisplayTag from "../../../components/DisplayTag";

import PlusIcon from "../../../assets/icons/plus-icon.svg";
import TaskOneImage from "../../../assets/images/task-image-1.jpg";
import TaskTwoImage from "../../../assets/images/task-image-2.jpg";
import TaskThreeImage from "../../../assets/images/task-image-3.jpg";

import Button from "../../../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full p-16 overflow-y-auto">
      <div className="flex items-start gap-[40px] flex-wrap">
        <div className="flex flex-col flex-1 min-w-[260px]">
          <DisplayTag className="mb-6" />
          <div className="w-full flex flex-col gap-4">
            <DisplayCard percentage={0} imageSrc={TaskOneImage} />
            <DisplayCard title="Usability testing" percentage={0} />
          </div>

          {/* Add task button */}
          <div className="min-h-[48px] border-2 border-[#D5D5D5] border-dotted mt-4 rounded-xl overflow-hidden">
            <Button className="w-full min-h-[48px] bg-gray-2">
              <img className="invert" src={PlusIcon} alt="icon" /> Add Task
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-[260px]">
          <DisplayTag className="mb-6" label="Inprogress" taskCount={1} />

          <div className="w-full flex flex-col gap-4">
            <DisplayCard
              percentage={36}
              stage="inprogress"
              imageSrc={TaskTwoImage}
            />
          </div>

          {/* Add task button */}
          <div className="min-h-[48px] border-2 border-[#D5D5D5] border-dotted mt-4 rounded-xl overflow-hidden">
            <Button className="w-full min-h-[48px] bg-gray-2">
              <img className="invert" src={PlusIcon} alt="icon" /> Add Task
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-[260px]">
          <DisplayTag className="mb-6" label="Completed" taskCount={2} />

          <div className="w-full flex flex-col gap-4">
            <DisplayCard
              title="Usability testing"
              stage="completed"
              percentage={70}
            />
            <DisplayCard
              percentage={70}
              stage="completed"
              imageSrc={TaskThreeImage}
            />
          </div>

          {/* Add task button */}
          <div className="min-h-[48px] w-full border-2 border-[#D5D5D5] border-dotted mt-4 rounded-xl overflow-hidden">
            <Button className="w-full min-h-[48px] bg-gray-2">
              <img className="invert" src={PlusIcon} alt="icon" /> Add Task
            </Button>
          </div>
        </div>
      </div>

      <div className=" min-h-[200px] w-full" />
    </div>
  );
}
