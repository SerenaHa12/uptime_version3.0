import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href
}) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(`
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-base 
        font-medium
        cursor-pointer
        hover:text-blue-900
        hover:bg-stone-100
        transition
        text-neutral-500
        py-2
        px-5
        `,
        active && "text-blue-900 bg-sky-100"
        )
      }
    >
      <Icon size={24} />
      <p className="truncate w-100">{label}</p>
    </Link>
   );
}

export default SidebarItem;