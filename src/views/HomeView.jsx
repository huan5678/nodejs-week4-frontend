import moment from 'moment';
import {usePostsContext} from '../context/index';
import FilterSearch from '../components/FilterSearch';
import NonPost from '../components/NonPost';
import PostCard from '../components/PostCard';

moment.locale('zh-tw');

export default function HomeView() {
  const {posts} = usePostsContext();

  return (
    <div className="md:col-span-2 flex flex-col space-y-4">
      <FilterSearch />
      {
        posts.length > 0 ? posts.map(
          post => <div key={post._id}>
            <PostCard
              userName={post.user.name}
              userImage={post.user.photo}
              createdAt={moment(post.createdAt).format('YYYY/MM/DD HH:mm:ss')}
              postContent={post.content}
              postImage={post.image}
            />
          </div>
        ) : <NonPost />
      }
    </div>
  )
}
