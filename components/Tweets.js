import { Tweet } from "./Tweet";

export const Tweets = ({ tweets, nolink }) => {

    if(!tweets) return null;

    return (
        <>
            { tweets.map((tweet, i) => (
                <Tweet key={ i } tweet={ tweet } nolink={ nolink } />
            ))}
        </>
    );
};
