import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    posted_date,
    author_img,
    author,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className='mb-12'>
      <img
        className='w-full mb-4'
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className='flex justify-between'>
        <div className='flex gap-5 mb-6'>
          <img className='w-14' src={author_img} alt='' />
          <div>
            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className='mr-3 text-2xl'>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className='text-red-400 text-2xl'
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className='text-4xl'>{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href=''>{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Blog;
