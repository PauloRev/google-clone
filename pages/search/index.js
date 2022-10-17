import Head from 'next/head';

import SearchHeader from '../../components/SearchHeader';
import SearchResults from '../../components/SearchResults';
import ResultsMock from '../../services/ResultsMock';

export default function Search({ results }) {
  console.log(results);

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />

      <SearchResults results={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;

  const data = mockData
    ? ResultsMock
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context?.query.term}${
          context?.query.searchType && '&searchType=image'
        }`
      ).then((res) => res.json());
  return {
    props: {
      results: data,
    },
  };
}
