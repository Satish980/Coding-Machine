import "./App.css";
import NestedComments from "./components/NestedComments";
import commentsData from "./data/comments.json";

function App() {
  return (
    <div>
      <h1>Nested Comments System</h1>
      <NestedComments
        comments={commentsData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        // onUpvote={() => {}}
        // onDownvote={() => {}}
      />
    </div>
  );
}

export default App;
