import Image from 'next/image';
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-theme-accent-green rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-theme-accent-blue" />}
      <p className="hidden sm:inline-flex font-medium text-white">{title}</p>
    </div>
  );
}

export default SidebarRow;
