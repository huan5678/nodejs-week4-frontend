import TheTitleBar from '../components/TheTitleBar';
import TheCreatePost from '../components/TheCreatePost';

export default function CreatePostView() {
  return (
    <div className="md:col-span-2 space-y-4">
      <TheTitleBar content="張貼動態" />
      <TheCreatePost />
    </div>
  )
}
