import timeago from "lib/timeago";

export const Tweet = ({ tweet }) => {
    return (
        <p>
            { timeago.format( new Date(tweet.createAt)) }{' '} 
            { tweet.author.email }{' '}
            { tweet.content }
        </p>
    )
};
