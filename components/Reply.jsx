import React, { useState } from "react";
import { comments } from "../libs/comments";

export default function Reply(props) {
  const like = comments.filter((x) => x.likeNum > 0);
  return (
    <div>
      {comments.map((x, i) => (
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src={x.replies.username}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {x.replies.username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
          </div>
        </div>
      ))}
    </div>
  );
}
