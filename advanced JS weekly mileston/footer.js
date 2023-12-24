const footer = createDiv();
footer.classList.add("footer");
document.body.appendChild(footer);

const footerMain = createDiv();
footerMain.classList.add("footer-main");
footer.appendChild(footerMain);

const footerBottom = createDiv();
footerBottom.classList.add("footer-bottom");
footer.appendChild(footerBottom);

// for columns in footerJSON
footerJSON.columns.forEach((column) => {
  const title = column.title;
  const listData = column.data;

  const columnDiv = createDiv();
  columnDiv.classList.add("footer-column");
  footerMain.appendChild(columnDiv);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  columnDiv.appendChild(titleElement);

  // Check if it's an array (list) or not
  if (column.dataType === "ARRAY") {
    // Create ul element for the data
    const ulElement = document.createElement("ul");
    listData.forEach((item) => {
      const liElement = document.createElement("li");
      const linkElement = document.createElement("a");
      linkElement.textContent = item;
      linkElement.href = "#";
      liElement.appendChild(linkElement);
      ulElement.appendChild(liElement);
    });

    columnDiv.appendChild(ulElement);
  } else {
    const divElement = createDiv();
    divElement.textContent = listData;
    columnDiv.appendChild(divElement);
  }
});

// For Bottom-footer

footerJSON.bottom.forEach((bottom) => {
  const img = bottom.img;
  const text = bottom.text;

  const misc = createDiv();
  misc.classList.add("misc");
  footerBottom.appendChild(misc);

  if (img && img.trim() !== "") {
    const image = document.createElement("img");
    image.src = img;
    misc.appendChild(image);
  }

  const miscLink = document.createElement("a");
  miscLink.href = "#";
  miscLink.textContent = text;
  misc.appendChild(miscLink);
});
