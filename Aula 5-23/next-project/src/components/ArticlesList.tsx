/* eslint-disable @next/next/no-img-element */
"use client";

import { useQuery } from "@tanstack/react-query";
import AddArticleForm from "./CreateArticleForm";

// Define the Post type
interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: string;
  avatar: string;
  thumbnail: string;
}

function fetchArticles() {
  return fetch("https://67ca2fd7102d684575c4b4f8.mockapi.io/api/articles").then(
    (res) => res.json()
  );
}

function ArticlesList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    staleTime: 5000,
    gcTime: 60000,
  });

  if (isLoading) return <p>A carregar...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className="container mx-auto">
      <AddArticleForm />
      <div className="h-20"></div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data.map((post: Post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.thumbnail}
              alt={`Thumbnail for ${post.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
              <div className="flex items-center">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-800">{post.author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
