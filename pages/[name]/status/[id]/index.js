import { Tweet } from "components/Tweet";
import { getTweet } from 'lib/data';
import prisma from "lib/prisma";

const SingleTweet = ({ tweet }) => {
  return (
    <Tweet tweet={ tweet } />
  );
};

export const getServerSideProps = async ({ params }) => {
  let tweet = await getTweet(params.id, prisma);
  tweet = JSON.parse(JSON.stringify(tweet));

  return {
    props: {
      tweet,
    }
  }
}

export default SingleTweet;