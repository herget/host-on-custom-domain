import axios from "axios";

const Page = ({ websiteData }) => {
  return <div dangerouslySetInnerHTML={{ __html: websiteData }} />;
};

export async function getStaticProps({ params }) {
  const { page } = params;
  const pageToFetch = `${process.env.SITE}/${page}`;
  const { data } = await axios.get(pageToFetch);
  return {
    props: {
      websiteData: data,
    },
    revalidate: 10, // In seconds
  };
}

export const getStaticPaths = () => {
  return {
    paths: [], 
    fallback: "blocking",
  };
};

export default Page;
