import { IoBookmarkOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Blog = ({blog,handelAddToBookmark,handleMarkAsRead}) => {
    console.log(blog);
 const {title,cover,author,author_img,reading_time,posted_date,hashtag} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4 ">
                <div className="flex">
                   <img className="w-14" src={author_img} alt="" />
                   <div className="ml-6">
                    <h3 className="text-2xl">{author}</h3>
                     <p>{posted_date}</p>
                   </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handelAddToBookmark(blog)} className="ml-2  text-2xl"><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className="text-4xl mb-2">{title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) =><span  key={idx}><a  href="">{ hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className="font-bold underline text-purple-600">Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}
export default Blog;