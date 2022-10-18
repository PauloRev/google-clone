import Head from 'next/head';
import { useRouter } from 'next/router';
import Parser from 'html-react-parser';
import PaginationButtons from './PaginationButtons';

export default function SearchResults({ results }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>
      <div className="w-full mx-auto px-4 sm:pl-[5%] md:pl-[10%]">
        <p className="text-gray-600 text-sm mt-4 mb-6">
          About {results.searchInformation.formattedTotalResults} results (
          {results.searchInformation.formattedSearchTime} seconds)
        </p>
        {results.items.map((result) => (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="group">
              <a className="text-sm truncate" href={result.link}>
                {result.formattedUrl}
              </a>
              <a
                className="group-hover:underline decoration-blue-800"
                href={result.link}
              >
                <h2 className="truncate text-xl font-medium text-blue-800">
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="text-gray-800">{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
        <PaginationButtons />
      </div>
    </>
  );
}
