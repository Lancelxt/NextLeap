// Create a div element
const footer = document.createElement('footer');

// Add a class to the div using classList
footer.classList.add('footer');

// Append the div to the body of the document (you can append it to any other element as needed)
document.body.appendChild(footer);


const footerMain = document.createElement('div')
footerMain.classList.add('footer-main')
footer.appendChild(footerMain)


const footerBottom = document.createElement('div')
footerBottom.classList.add('footer-bottom')
footer.appendChild(footerBottom)



// Loop through columns
footerJSON.columns.forEach(column => {
    const title = column.title;
    const listData = column.data;

    // Create main div for each column
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('footer-column');
    footerMain.appendChild(columnDiv);

    // Create title element (h3)
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    columnDiv.appendChild(titleElement);

    // Check if it's an array (list) or not
    if (column.dataType === 'ARRAY') {
        // Create ul element for the data
        const ulElement = document.createElement('ul');
        listData.forEach(item => {
            const liElement = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.textContent = item;
            // Assuming each link points to '#' for now, you can replace it with the actual URLs
            linkElement.href = '#';
            liElement.appendChild(linkElement);
            ulElement.appendChild(liElement);
        });

        // Append ul to the main div
        columnDiv.appendChild(ulElement);
    } else {
        // It's not an array, treat it as a normal div
        const divElement = document.createElement('div');
        divElement.textContent = listData;
        // Append the div to the column div
        columnDiv.appendChild(divElement);
    }
});


// For Bottom-footer

footerJSON.bottom.forEach(bottom => {
    const img = bottom.img
    const text = bottom.text



    const misc = document.createElement('div')
    misc.classList.add('misc')
    footerBottom.appendChild(misc)

    const image = document.createElement('img')
    image.src = img;
    misc.appendChild(image)

    miscLink = document.createElement('a')
    miscLink.href = "#"
    miscLink.textContent = text;
    misc.appendChild(miscLink)


    
    }
);


