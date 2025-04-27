import React, { useState } from "react";
import "./styles.css";
import useCommentTree from "../hooks/useCommentTree";
import Comment from "./Comment";

const NestedComments = ({
  comments,
  onSubmit = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const [comment, setComment] = useState("");
  const {
    comments: commentsData,
    insertComment,
    editComment,
    deleteComment
  } = useCommentTree(comments);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (comment) {
      handleReply(undefined, comment);
      setComment("");
      return;
    }
  };

  const handleReply = (commentId, content) => {
    insertComment(commentId, content);
  };

  const handleEdit = (commentId, content) => {
    editComment(commentId, content);
  };

  const handleDelete = (commentId) => {
    deleteComment(commentId);
  }
  return (
    <>
      <div className="add-comment">
        <textarea
          value={comment}
          rows={3}
          cols={50}
          placeholder="Add a new comment ..."
          className="comment-textarea"
          onChange={handleChange}
        />
        <button className="comment-button" onClick={handleSubmit}>
          Add Comment
        </button>
      </div>
      {commentsData?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onSubmitComment={handleReply}
          onEditComment={handleEdit}
          onDeleteComment={handleDelete}
        />
      ))}
    </>
  );
};

export default NestedComments;
