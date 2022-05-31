import { Tweet } from "./Tweet";

export const Tweets = ({ tweets }) => {

    if(!tweets) return null;

    return (
        <>
            { tweets.map((tweet, i) => (
                <Tweet key={ i } tweet={ tweet } />
            ))}
        </>
    );
};
