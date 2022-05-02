
export default function PostCard({
  userName,
  userImage,
  createdAt,
  postContent,
  postImage
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="flex justify-start items-center gap-4">
          <a href="#">
            <img src={userImage} className="card-avatar" alt="avatarImage" />
          </a>
          <div className="flex flex-col justify-start items-start">
            <a href="#" className="group">
              <p className="group-hover:text-primary font-bold mb-1 group-hover:underline
              ">{userName}</p>
            </a>
            <a href="#" className="group">
              <p className="text-xs text-gray-base font-num group-hover:underline group-hover:text-primary
              ">{createdAt}</p>
            </a>
          </div>
        </div>
        <p>{postContent}</p>
        {
          (postImage) ? <img src={postImage} className="card-image" /> : null
        }
      </div>
    </div>
  )
}
