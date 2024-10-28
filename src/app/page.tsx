import Form from "next/form";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <Form action="/search" className="flex flex-col items-center space-y-4 bg-gray-800 p-8 rounded-lg shadow-lg shadow-gray-900">
        <h1 className="text-3xl font-semibold mb-4">Search Posts By Id</h1>
        <input
          name="workerId"
          placeholder="Enter Worker ID"
          className="px-4 py-2 w-80 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg shadow-blue-800 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Posts
        </button>
      </Form>
    </div>
  );
}
