import { HTMLAttributes, forwardRef } from "react";
import sidebarLinksData from "./sidebarLinksData";
import { Link } from "react-router-dom";
import Button, { buttonVariants } from "../Button";
import LightningIcon from "../../assets/icons/lightning-icon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export default forwardRef<HTMLDivElement, SidebarProps>(function Sidebar(
  { className },
  ref
) {
  return (
    <nav
      ref={ref}
      className={`min-w-[272px]  max-w-[272px] flex flex-col justify-between relative h-screen overflow-y-scroll w-full left-0 top-0 bg-primary-2 px-8 py-[38px] ${className}`}
    >
      <div>
        {/* Top section of sidebar */}
        <div className="w-full bg-primary-3 rounded-lg h-[46px] flex items-center justify-center gap-3 mb-[38px]">
          <img src={LightningIcon} alt="fast" />
          <span className="text-base font-normal text-white">
            Welcome Keerthi
          </span>
        </div>

        {/* Section with links */}
        <div className="w-full space-y-3">
          {sidebarLinksData.data.sidebarMain.map((link, index: number) => {
            return (
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  className: "px-[8px]",
                })}
                key={index}
                to={link.link}
              >
                <div className="min-w-[18px]">
                  <img src={link.icon} alt="icon" />
                </div>
                {link.label}
              </Link>
            );
          })}

          <hr className="opacity-60" />

          {sidebarLinksData.data.otherLinks.map((link, index: number) => {
            return (
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  className: "px-[8px] opacity-60",
                })}
                key={index}
                to={link.link}
              >
                <div className="min-w-[18px]">
                  <img src={link.icon} alt="icon" />
                </div>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-w-[208px] w-full mt-12">
        <Button size="md" className="w-full rounded-lg bg-primary-1 text-white">
          <img src={PlusIcon} alt="plus" /> NEW PROJECT
        </Button>
      </div>
    </nav>
  );
});
