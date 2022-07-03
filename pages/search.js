import Head from "next/head";
import { API_KEY, CSE_KEY, MAIN_KEY } from "../keys";
import axios from "axios";
import Response from "../response";

import Header from "../components/Header";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term}- Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || 0;
  const data = useDummyData
    ? Response
    : await fetch(
        `${MAIN_KEY}?key=${API_KEY}&cx=${CSE_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
