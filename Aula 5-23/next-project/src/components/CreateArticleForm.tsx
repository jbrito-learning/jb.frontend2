import { useMutation, useQueryClient } from "@tanstack/react-query";

// Define the article type
interface Article {
  id?: string;
  title: string;
  content: string;
}

// Define the input type for creating a new article
interface CreateArticleInput {
  title: string;
  content: string;
}

function createArticle(newArticle: CreateArticleInput): Promise<Article> {
  return fetch("https://67ca2fd7102d684575c4b4f8.mockapi.io/api/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newArticle),
  }).then((res) => res.json());
}

function AddArticleForm() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    mutation.mutate({ title, content });
    event.currentTarget.reset();
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Article
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            placeholder="Enter article title"
            required
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Write your article content here"
            required
            rows={4}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Creating..." : "Create Article"}
          </button>

          {mutation.isSuccess && (
            <span className="text-green-600 text-sm font-medium">
              Article created successfully!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddArticleForm;
