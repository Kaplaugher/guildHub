import { useSession } from 'next-auth/client';
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import {
  CalendarIcon,
  CogIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-xl xl:min-w-md ">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Guilds" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Streams" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={CogIcon} title="Settings" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
