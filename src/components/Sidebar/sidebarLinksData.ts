import DasboardIcon from "../../assets/icons/dashboard-icon.svg";
import SettingsIcon from "../../assets/icons/settings-icon.svg";
import ActivitiesIcon from "../../assets/icons/fast.svg";
import UsersIcon from "../../assets/icons/users-icon.svg";
import AddedUserIcon from "../../assets/icons/add-user-icon.svg";
import AffiliateIcon from "../../assets/icons/affiliate-icon.svg";
import ProfileIcon from "../../assets/icons/fast.svg";
import LogoutIcon from "../../assets/icons/users-icon.svg";

export default {
  data: {
    sidebarMain: [
      {
        label: "Dashboard",
        icon: DasboardIcon,
        link: "/",
      },
      {
        label: "Settings",
        icon: SettingsIcon,
        link: "/",
      },
      {
        label: "Activities",
        icon: ActivitiesIcon,
        link: "/",
      },
      {
        label: "Users",
        icon: UsersIcon,
        link: "/",
      },
      {
        label: "Added user",
        icon: AddedUserIcon,
        link: "/",
      },
      {
        label: "Affiliate",
        icon: AffiliateIcon,
        link: "/",
      },
    ],

    otherLinks: [
      {
        label: "Profile",
        icon: ProfileIcon,
        link: "/",
      },
      {
        label: "Logout",
        icon: LogoutIcon,
        link: "/",
      },
    ],
  },
};
