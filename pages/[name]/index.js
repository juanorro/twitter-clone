import prisma from "lib/prisma";
import { getUserTweets } from 'lib/data';
import { Tweets } from 'components/Tweets';

const UserProfile = ({ name, tweets }) => {

    return (
        <>
            <p className="text-center p-5">UserProfile of { name }</p>
            <Tweets tweets={ tweets } />
        </>
    );
};


export const getServerSideProps = async({ params }) => {
    
    let tweets = await getUserTweets(params.name, prisma);
    tweets = JSON.parse(JSON.stringify(tweets));
    
    return {
        props: {
            name: params.name,
            tweets,
        },
    };
};

export default UserProfile;