"use client";

import Comment from "@/components/Comment";
import PostOwnner from "@/components/PostOwnner";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner  username="Atip Poonkatevit" 
        studentNum="660610805" 
        text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" 
        likeNum={100} 
        userImagePath=".../public/profileImages/handsome.jpg" 
        />
        {comments.map((m)=>
        <Comment userImagePath={m.userImagePath}
          username={m.username}
          commentText={m.commentText}
          likeNum={m.likeNum}
          replies={m.replies}
        />
        )}
    </div>
    </div>
  );
}
