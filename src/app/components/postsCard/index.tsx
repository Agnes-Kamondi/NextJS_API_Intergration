import { PostData } from "@/app/hooks/useGetPost";
import { useRouter } from "next/navigation";

interface PostCardProps {
  post: PostData;
}

const PostsCard = ({ post }: PostCardProps) => {
  const router = useRouter();

  const handleViewFullPost = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl border-2 border-orange-100">
      <div className="p-6 bg-gradient-to-br from-red-50 to-white">
        <h2 className="text-2xl font-semibold mb-3 text-black-800 line-clamp-2">{post.title}</h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{post.body}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-pink-500 hover:text-pink-600">
              <span>❤️</span>
              <span>{post.reactions.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
              <span>💔</span>
              <span>{post.reactions.dislikes}</span>
            </button>
            <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
              <span>👀</span>
              <span>{post.views}</span>
            </button>
          </div>
          <button
            onClick={handleViewFullPost}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-dark-blue-700"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;