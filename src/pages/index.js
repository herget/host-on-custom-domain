import axios from "axios";

const Index = ({ websiteData }) => {
  return <div dangerouslySetInnerHTML={{ __html: websiteData }} />;
};

export async function getStaticProps() {
  const pageToFetch = process.env.SITE;
  const { data } = await axios.get(pageToFetch);
  return {
    props: {
      websiteData: data,
    },
    revalidate: 10, // In seconds
  };
}

export default Index;
