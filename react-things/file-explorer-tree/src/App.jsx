// Nested File/Folder Structure
// Collapse or Un collapse items
// Add or Remove File / Folders

import { useState } from "react";
import "./App.css";
import data from "./data.json";

const ADD_FOLDER = "https://cdn-icons-png.flaticon.com/512/4732/4732459.png";
const REMOVE = "https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
const ADD_FILE = "https://cdn-icons-png.flaticon.com/512/1091/1091916.png";

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  const handleOnClick = (item) => {
    if (!item?.isFolder) return;
    setIsExpanded((prev) => ({
      ...prev,
      [item.id]: !prev?.[item.id],
    }));
  };

  return (
    <div className="container">
      {list.map((item) => {
        return (
          <div style={{ cursor: item?.isFolder ? "pointer" : "default" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {item?.isFolder ? (
                <span
                  onClick={() => {
                    handleOnClick(item);
                  }}
                >
                  {item?.isFolder ? (isExpanded?.[item.id] ? "- " : "+ ") : ""}
                  {item.name}
                </span>
              ) : (
                <span>{item?.name}</span>
              )}
              {item?.isFolder && (
                <>
                  <span
                    onClick={() => addNodeToList(item.id, "folder")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={ADD_FOLDER}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </span>
                  <span
                    onClick={() => addNodeToList(item.id, "file")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={ADD_FILE}
                      style={{ height: "24px", width: "24px" }}
                    />
                  </span>
                </>
              )}
              <span
                onClick={() => deleteNodeFromList(item.id)}
                style={{ cursor: "pointer" }}
              >
                <img src={REMOVE} style={{ height: "20px", width: "20px" }} />
              </span>
            </div>
            {item?.children && isExpanded?.[item.id] ? (
              <List
                list={item.children}
                addNodeToList={addNodeToList}
                deleteNodeFromList={deleteNodeFromList}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  const [folderData, setFolderData] = useState(data);

  const addNodeToList = (parentId, type = "folder") => {
    const name = prompt("Enter Name: ");

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: type === "folder" ? true : false,
                ...(type === "folder" ? { children: [] } : {}),
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setFolderData((prev) => updateTree(prev, name));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node?.children) {
            return { ...node, children: updateTree(node?.children) };
          }
          return node;
        });
    };

    setFolderData((prev) => updateTree(prev));
  };
  return (
    <>
      <div>
        <List
          list={folderData}
          addNodeToList={addNodeToList}
          deleteNodeFromList={deleteNodeFromList}
        />
      </div>
    </>
  );
}

export default App;
