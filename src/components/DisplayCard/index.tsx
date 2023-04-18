/* eslint-disable  */
import { forwardRef, HTMLAttributes } from "react";
import tailwindMerger from "../../../utils/tailwindMerger";
import ProgressIcon from "../../assets/icons/progress-icon.svg";
import LinkIcon from "../../assets/icons/link-icon.svg";
import CommentsIcon from "../../assets/icons/comments-icon.svg";
import OptionsIcon from "../../assets/icons/options-icon.svg";
import ProileImage from "../../assets/images/profile-image.png";
import TaskImage from "../../assets/images/task-image-1.jpg";

interface DisplayCardProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  altLabel?: string;
  description?: string;
  completed?: string;
  totalTask?: string;
  comments?: string;
  links?: string;
  percentage?: number;
  stage?: "todo" | "inprogress" | "completed";
}

export default forwardRef<HTMLDivElement, DisplayCardProps>(
  function DisplayCard(
    {
      imageSrc,
      altLabel,
      title,
      description,
      completed,
      totalTask,
      comments,
      links,
      percentage,
      stage,
      className,
      children,
      ...props
    },
    ref
  ) {
    return (
      <div
        {...props} // this is for any other property or properties that isn't destructured above
        className={tailwindMerger(
          `bg-white min-w-[260px] p-4 shadow-light rounded-xl ${className}`
        )}
        ref={ref}
      >
        {/* The image section of the product card - only shows 
        when you pass in the imageSrc to the DisplayCard */}
        {imageSrc && (
          <div className="w-full h-max bg-gray-1 overflow-hidden mb-[18px]">
            <img
              className="w-full"
              src={imageSrc ?? TaskImage}
              alt={altLabel ?? "product-picture"}
            />
          </div>
        )}

        {/* children - to show your own custom component, will o
        verride the in house product information component if supplied */}
        {children ?? (
          // In house display card product information component -
          // only shows when there is no children supplied to the DisplayCard
          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between mb-[14px]">
              <div>
                <h1 className="text-base leading-5 font-[600]">
                  {title ?? "Highfidelity Design"}
                </h1>
                <p className="font-normal text-sm leading-6 text-gray-0">
                  {description ?? "Make clear design and color"}
                </p>
              </div>
              {/* Options */}
              <button type="button" className="bg-transparent border-none">
                <img src={OptionsIcon} alt="options" />
              </button>
            </div>

            {/* Progress Component */}
            <div className="flex flex-col w-full items-center gap-2">
              <div className="flex gap-2 items-center w-full">
                <img src={ProgressIcon} alt="progress-icon" />

                <span className="font-normal text-sm leading-5 text-gray-0">
                  Progress
                </span>

                <div className="ml-auto font-[500] text-sm leading-5 text-black-1">
                  <span>{completed ?? 2}</span>/<span>{totalTask ?? 10}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-lg overflow-hidden bg-gray-4">
                <div
                  style={{
                    width: `${percentage!.toString()}%`,
                    height: "100%",
                    backgroundColor:
                      stage === "todo"
                        ? "transparent"
                        : stage === "inprogress"
                        ? "#FF5F37"
                        : stage === "completed"
                        ? "#8BC488"
                        : "transparent",
                  }}
                  className="transition-all duration-200"
                />
              </div>
              {/* Progress comment and links */}
              <div className="flex w-full items-center gap-3 font-normal text-sm leading-5 text-gray-0">
                <div className="flex items-center gap-[6px]">
                  <img src={CommentsIcon} alt="comment" />
                  <span>{comments ?? 7}</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <img src={LinkIcon} alt="link" />
                  <span>{links ?? 2}</span>
                </div>

                <div className="flex items-center ml-auto">
                  <img
                    src={ProileImage}
                    className="h-7 w-7 translate-x-4 rounded-r-full"
                    alt="profile"
                  />
                  <img
                    src={ProileImage}
                    className="h-7 w-7 translate-x-2 rounded-r-full"
                    alt="profile"
                  />
                  <img
                    src={ProileImage}
                    className="h-7 w-7 z-10  rounded-r-full"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
