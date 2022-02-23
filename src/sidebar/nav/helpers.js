import HomeIcon from "../icons/HomeIcon";
import ExploreIcon from "../icons/ExploreIcon";
import NotificationIcon from "../icons/NotificationIcon";
import MessagesIcon from "../icons/MessagesIcon";
import ProfileIcon from "../icons/ProfileIcon";
import BookmarksIcon from "../icons/BookmarksIcon";
import ListsIcon from "../icons/ListsIcon";
import MoreIcon from "../icons/MoreIcon";

export const navItems = [
  {
    active: false,
    text: "Home",
    path: "/home",
    badge: true,
    Icon: HomeIcon,
  },
  {
    active: false,
    text: "Explore",
    path: "/explore",
    badge: false,
    Icon: ExploreIcon,
  },
  {
    active: false,
    text: "Notifications",
    path: "/notifications",
    badge: false,
    Icon: NotificationIcon,
  },
  {
    active: false,
    text: "Messages",
    path: "/messages",
    badge: false,
    Icon: MessagesIcon,
  },
  {
    active: false,
    text: "Bookmarks",
    path: "/bookmarks",
    badge: false,
    Icon: BookmarksIcon,
  },
  {
    active: false,
    text: "Lists",
    path: "/lists",
    badge: false,
    Icon: ListsIcon,
  },
  {
    active: false,
    text: "Profile",
    path: "/profile",
    badge: false,
    Icon: ProfileIcon,
  },
  {
    active: false,
    text: "More",
    path: "",
    badge: false,
    Icon: MoreIcon,
  },
];
