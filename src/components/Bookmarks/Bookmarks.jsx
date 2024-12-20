import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className='md:w-1/3'>
      <h2 className='text-2xl ml-20'>bookmarkd Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
