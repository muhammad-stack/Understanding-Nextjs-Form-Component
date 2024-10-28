import getSearchResults from "@/app/lib/getSearchResult";
import Link from "next/link";

interface SearchPageProps {
    searchParams: Promise<{ workerId: string }>;
}

interface Results {
    id : number;
    title : string;
    body : string;
}

export default async function SearchPage({ searchParams } : SearchPageProps ) {
  // NOTE: This await searchParams is key
  const userId = (await searchParams).workerId;
  const results  = await getSearchResults(userId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8">
      <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back To Search
      </Link>
      <h1 className="text-3xl font-semibold mb-6">Results</h1>
      {results.length > 0 ? (
        <ul className="space-y-6">
          {results.map((result : Results ) => (
            <li
              key={result.id}
              className="p-6 rounded-lg bg-gray-800 border border-gray-700 shadow-lg shadow-gray-900"
            >
              <h2 className="text-2xl font-semibold mb-2">{result.title}</h2>
              <p className="text-gray-300">{result.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-purple-400 via-rose-600 to-slate-500">No results found.</p>
      )}
    </div>
  );
}
