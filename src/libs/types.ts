// You can define interfaces for all React components here.
// Do not forget to export properly.
interface OwnerProps {
    username: string,
    studentNum: string,
    text: string,
    likeNum: number,
    userImagePath: string, 
}
export type {OwnerProps};

interface CommentProps {
    userImagePath: string,
    username: string,
    commentText: string,
    likeNum: number,
    replies: ReplyProps[],
}
export type {CommentProps};

interface ReplyProps {
    userImagePath: string,
    username: string,
    replyText: string,
    likeNum: number,
}
export type { ReplyProps };
