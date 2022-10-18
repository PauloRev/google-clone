import Head from 'next/head';
import { useRouter } from 'next/router';
import ImageResults from '../../components/ImageResults';

import SearchHeader from '../../components/SearchHeader';
import SearchResults from '../../components/SearchResults';
import ResultsMock from '../../services/ResultsMock';

export default function Search({ results }) {
  // console.log(results);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />

      {router?.query?.searchType === 'image' ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context?.query?.start || '1';
  const mockData = false; // Pass FALSE value for searching custom terms and for active pagination real results

  const data = mockData
    ? ResultsMock
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context?.query.term}${
          context?.query.searchType && '&searchType=image'
        }&start=${startIndex}`
      ).then((res) => res.json());
  return {
    props: {
      results: data,
    },
  };
}
