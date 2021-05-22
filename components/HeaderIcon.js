function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-theme-accent-blue group">
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-theme-accent-blue ${
          active && 'text-theme-accent-blue'
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
