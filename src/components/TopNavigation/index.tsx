import { HTMLAttributes, forwardRef, useState } from "react";
import Button from "../Button";
import ProfileImage from "../../assets/images/profile-image.png";
import ParticipantIcon from "../../assets/icons/users-icon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import LightningIcon from "../../assets/icons/fast.svg";
import BoardViewIcon from "../../assets/icons/board-view-icon.svg";
import ListViewIcon from "../../assets/icons/list-view.svg";
import Settings from "../../assets/icons/settings-icon.svg";

interface TopNavigationProps extends HTMLAttributes<HTMLDivElement> {}

export default forwardRef<HTMLDivElement, TopNavigationProps>(
  function TopNavigation({}, ref) {
    const [isHidden, setIsHidden] = useState(true);

    return (
      <section
        ref={ref}
        className="fixed [@media_(min-width:_840px)]:relative w-full z-50 [@media_(min-width:_840px)]:h-[221px] h-max bg-white shadow-light [@media_(min-width:_840px)]:pt-10 pt-6 pb-6 [@media_(min-width:_840px)]:px-16 px-8"
      >
        <div className="w-full flex flex-col justify-between h-full">
          {/* Upper section */}
          <div className="flex w-full items-center justify-between">
            {/* Settings drop down icon - only visible on mobile */}

            <Button
              onClick={() => setIsHidden(() => !isHidden)}
              className="[@media_(min-width:_840px)]:hidden rounded-lg"
            >
              <img
                src={Settings}
                alt="settings-icon"
                className="invert min-w-[18px]"
              />
            </Button>

            {/* Title Header and subtext */}
            <div className="[@media_(min-width:_840px)]:block hidden">
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
          <div
            className={`w-full absolute top-10 py-8 [@media_(min-width:_840px)]:py-0 [@media_(min-width:_840px)]:top-0 bg-white left-0 [@media_(min-width:_840px)]:px-0 px-4 [@media_(min-width:_840px)]:relative mt-12  [@media_(min-width:_840px)]:flex ${
              isHidden ? "-translate-x-[120%]" : "translate-x-0"
            }  [@media_(min-width:_840px)]:flex-row flex-col items-center justify-between [@media_(min-width:_840px)]:translate-x-0 transition-all duration-200`}
          >
            {/* Profile picture of members */}
            <div className="flex items-center w-max pl-3 [@media_(min-width:_840px)]:pl-0 mb-3">
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
            <div className="flex-col items-center [@media_(min-width:_840px)]:flex [@media_(min-width:_840px)]:flex-row">
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
              <div className="max-w-[208px] w-full mt-12 [@media_(min-width:_840px)]:hidden ml-3">
                <Button
                  size="md"
                  className="w-full text-base whitespace-nowrap rounded-lg bg-black-1 text-white"
                >
                  <img src={PlusIcon} alt="plus" /> NEW PROJECT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
