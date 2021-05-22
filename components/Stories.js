import StoryCard from './StoryCard';

function Stories() {
  const stories = [
    {
      name: 'Ear Ring Kid',
      src: '/donny.jpg',
      profile: '/donny.jpg',
    },
    {
      name: 'Garbage WD Main',
      src: '/juri.jpg',
      profile: '/juri.jpg',
    },
    {
      name: 'Jeffy',
      src: '/jeff.jpg',
      profile: '/jeff.jpg',
    },
    {
      name: 'Small Hands',
      src: '/will.jpg',
      profile: '/will.jpg',
    },
  ];
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
