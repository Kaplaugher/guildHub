import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
  { src: '/jeff.jpg', name: 'Jeff Jacobson' },
  { src: '/donny.jpg', name: 'Ear Ring Kid' },
  { src: '/juri.jpg', name: 'Asian Girl' },
  { src: '/will.jpg', name: 'Small Hands' },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
