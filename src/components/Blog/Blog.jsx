import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
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
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className='text-4xl'>{title}</h2>
      <p>
        {hashtags.map((hash) => (
          <span key={blog.id}>
            <a href=''>{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
