// reference: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop

function dropHandler(e) {
  const listContainer = document.getElementById("list-container");

  // preventing browser default behavior of opening file
  e.preventDefault();
  if (e.dataTransfer.items) {
    [...e.dataTransfer.items].forEach((item, i) => {
      if (item.kind === "file") {
        const file = item.getAsFile();
        const fileName = file.name;
        listContainer.innerHTML += `${i + 1}. ${fileName}<br/>`;
      }
    });
  } else {
    [...e.dataTransfer.files].forEach((file, i) => {
      const fileName = file.name;
      listContainer.innerHTML += `${i + 1}. ${fileName}<br/>`;
    });
  }
}

function dragOverHandler(e) {
  // preventing browser default behavior of opening file
  e.preventDefault();
}
