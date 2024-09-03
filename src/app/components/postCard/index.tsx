import { SinglePostData } from '@/app/hooks/useSinglePost';
import { useRouter } from 'next/navigation';

interface PostCardProps {
  singlePost: SinglePostData;
}

const PostCard = ({ singlePost }: PostCardProps) => {
  const router = useRouter();
  const handleCancelViewFullPost = () => {
    router.push(`/components/posts`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 gap-5">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-black-800">{singlePost.title}</h2>
          <p className="text-gray-600 mb-6">{singlePost.body}</p>
          <div className="flex justify-center space-x-6 mb-6">
            <button className="flex items-center space-x-2 text-pink-500">
              <span>❤️</span>
              <span>{singlePost.reactions.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500">
              <span>💔</span>
              <span>{singlePost.reactions.dislikes}</span>
            </button>
            <button className="flex items-center space-x-2 text-blue-500">
              <span>👀</span>
              <span>{singlePost.views}</span>
            </button>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-indigo-700 mb-2">Tags</h3>
            <div className="flex flex-wrap justify-center">
              {singlePost.tags.map((tag) => (
                <span key={tag} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={handleCancelViewFullPost}
            className="w-1/4 bg-blue-600 text-white py-2 px-4 rounded-md ml-56"
          >
            Back to Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;