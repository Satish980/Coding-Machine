import React, { useState } from "react";

const Comment = ({
  comment = {},
  onSubmitComment = () => {},
  onEditComment = () => {},
  onDeleteComment = () => {},
}) => {
  const [expand, setExpand] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const toggleExpand = () => setExpand(!expand);
  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditedContent(comment.content);
  };
  const handleChange = (e) => {
    if(editMode){
      setEditedContent(e.target.value);
      return;
    }
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyContent) {
      onSubmitComment(comment.id, replyContent);
      setReplyContent("");
    }
  };

  const handleEditSubmit = () => {
    onEditComment(comment.id, editedContent);
    setEditMode(false)
  };

  const handleDelete = () => {
    onDeleteComment(comment.id)
  }
  return (
    <div className="comment">
      {!editMode ? (
        <>
          <p className="comment-content">{comment.content}</p>
          <p className="comment-info">Votes: {comment.votes}</p>
          <p className="comment-info">
            {new Date(comment.timestamp).toLocaleString()}
          </p>
        </>
      ) : (
        <div className="add-comment">
          <textarea
            value={editedContent}
            rows={3}
            cols={50}
            placeholder="Add a new comment ..."
            className="comment-textarea"
            onChange={handleChange}
          />
          <button className="comment-button" onClick={handleEditSubmit}>
            Save
          </button>
          <button className="comment-button" onClick={toggleEditMode}>
            Cancel
          </button>

        </div>
      )}

      <div className="comment-actions">
        <button className="comment-button" onClick={toggleExpand}>
          {expand ? "Hide Replies" : "Reply"}
        </button>
        <button className="comment-button" onClick={toggleEditMode}>
          Edit
        </button>
        <button className="comment-button" onClick={handleDelete}>Delete</button>
      </div>

      {expand && (
        <div className="comment-replies">
          <div className="add-comment">
            <textarea
              value={replyContent}
              rows={3}
              cols={50}
              placeholder="Add a new comment ..."
              className="comment-textarea"
              onChange={handleChange}
            />
            <button className="comment-button" onClick={handleReplySubmit}>
              Add Comment
            </button>
          </div>

          {comment?.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onSubmitComment={onSubmitComment}
              onEditComment={onEditComment}
              onDeleteComment={onDeleteComment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
