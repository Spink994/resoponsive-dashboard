/* eslint-disable  */
import { forwardRef, HTMLAttributes } from "react";
import tailwindMerger from "../../../utils/tailwindMerger";

interface DisplayCardProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  taskCount?: number;
}

export default forwardRef<HTMLDivElement, DisplayCardProps>(function DisplayTag(
  { title, className, label, taskCount, children, ...props },
  ref
) {
  return (
    <div
      {...props} // this is for any other property or properties that isn't destructured above
      className={tailwindMerger(
        `bg-gray-3 rounded-lg min-w-[300px] max-w-[600px] p-4 h-[51px] flex items-center justify-between ${className}`
      )}
      ref={ref}
    >
      {/* children - to show your own custom component, will o
        verride the in house product information component if supplied */}
      {children ?? (
        // In house display tag information component -
        // only shows when there is no children supplied to the DisplayTag
        <div className="flex w-full items-center justify-between">
          <span className="text-gray-6 font-[500]">{label ?? "To Do"}</span>{" "}
          <span className="h-[35px] w-[35px] rounded-[4px] bg-black-1 text-white font-[500] flex items-center justify-center">
            {taskCount ?? 3}
          </span>
        </div>
      )}
    </div>
  );
});
