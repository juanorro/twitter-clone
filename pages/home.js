import { NewTweet } from "components/NewTweet";
import { useSession } from "next-auth/react";

const HomePage = () => {

    const { data: session, status } = useSession();

    if(status === 'loading') return <p>...</p>

    return (
        <>
            { session ? <NewTweet /> : <p>No estámos loegados</p> }
        </>
    )
};

export default HomePage;
