import { HTMLAttributes, forwardRef } from "react";
import Button from "../Button";
import ProfileImage from "../../assets/images/profile-image.png";
import ParticipantIcon from "../../assets/icons/users-icon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import LightningIcon from "../../assets/icons/fast.svg";
import BoardViewIcon from "../../assets/icons/board-view-icon.svg";
import ListViewIcon from "../../assets/icons/list-view.svg";

interface TopNavigationProps extends HTMLAttributes<HTMLDivElement> {}

export default forwardRef<HTMLDivElement, TopNavigationProps>(
  function TopNavigation({}, ref) {
    return (
      <section
        ref={ref}
        className="lg:block hidden fixed right-0 w-full max-w-[calc(100%-272px)] z-50 h-[221px] bg-white shadow-light pt-10 pb-6 px-16"
      >
        <div className="w-full flex flex-col justify-between h-full">
          {/* Upper section */}
          <div className="flex w-full items-center justify-between">
            {/* Title Header and subtext */}
            <div>
              <h1 className="font-semibold text-[38px]">New Campaign Run </h1>
              <span className="font-normal text-sm leading-[17px] text-gray-0">
                A new campaign launch work for brand new featur in May month
              </span>
            </div>

            {/* Button on the right */}
            <Button className="max-w-[160px] rounded-lg bg-black-1 text-white w-full font-normal text-sm">
              ADD MEMBERS
            </Button>
          </div>

          {/* Lower section */}
          <div className="w-full flex items-center justify-between">
            {/* Profile picture of members */}
            <div className="flex items-center">
              <div className="flex items-center ml-auto">
                <img
                  src={ProfileImage}
                  className="h-7 w-7 rounded-r-full"
                  alt="profile"
                />
                <img
                  src={ProfileImage}
                  className="h-7 w-7 -translate-x-2 rounded-r-full"
                  alt="profile"
                />
                <img
                  src={ProfileImage}
                  className="h-7 w-7 z-10 -translate-x-4 rounded-r-full"
                  alt="profile"
                />
              </div>
              <span className="text-gray-0 text-sm">8 member(s)</span>
            </div>

            {/* Filter options */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                className="text-gray-5 text-sm px-3 gap-2"
              >
                <img src={ParticipantIcon} className="invert" alt="icon" />{" "}
                Participants View
              </Button>
              <Button
                variant="ghost"
                className="text-gray-5 text-sm px-3 gap-2"
              >
                <img src={BoardViewIcon} className="invert" alt="icon" /> Board
                View
              </Button>
              <Button
                variant="ghost"
                className="text-gray-5 text-sm px-3 gap-2"
              >
                <img src={ListViewIcon} className="invert" alt="icon" /> List
                View
              </Button>
              <Button
                variant="ghost"
                className="text-gray-5 text-sm px-3 gap-2"
              >
                <img src={LightningIcon} className="invert" alt="icon" /> Power
                View
              </Button>
              <Button variant="ghost" className="text-gray-5 text-sm px-3 pr-0">
                <img src={PlusIcon} className="invert" alt="icon" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
