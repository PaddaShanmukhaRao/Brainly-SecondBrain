import { ShareIcon } from "../../icons/ShareIcon";
import { SidebarItem } from "./Sidebarcomponent";

export function Sidebar() {
  return (
    <div className="left-0 top-0 h-screen bg-white border-r w-72 fixed">
      <div className="flex px-4 text-2xl items-center gap-2">
        <ShareIcon /> Brainly
      </div>
      <div className="flex items-center gap-2 pl-4 py-2 cursor-pointer">
        <SidebarItem icon={<ShareIcon />} text="Twitter" />
      </div>
      <div className="flex items-center gap-2 pl-4 cursor-pointer">
        <SidebarItem icon={<ShareIcon />} text="Youtube" />
      </div>
    </div>
  );
}
