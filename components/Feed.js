import InputBox from './InputBox';
import Stories from './Stories';

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6">
      <div>
        {/* stories */}
        <Stories />
        {/* input */}
        <InputBox />
      </div>
    </div>
  );
}

export default Feed;
