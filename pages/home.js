import { NewTweet } from "components/NewTweet";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Tweets } from 'components/Tweets';
import prisma from "lib/prisma";
import { getTweets } from "lib/data";

const HomePage = ({ tweets }) => {

    const { data: session, status } = useSession();
    const router = useRouter();

    console.log(tweets);

    const loading = status === 'loading';

    if(loading) return null;

    if(!session) return router.push('/');

    return (
        <>
            <NewTweet />
            <Tweets tweets={tweets}/>
        </>
    )
};

export async function getServerSideProps() {
    let tweets = await getTweets(prisma);

    tweets = JSON.parse(JSON.stringify(tweets));

    return {
        props: {
            tweets,
        }
    };
}

export default HomePage;
