

function CompilePage ()
{
    let imageLinksDiv = document.querySelector("#imageLinksListDiv");
    let imageLinksList = document.getElementsByClassName("imageLink");

    let imageContentDiv = document.createElement("div")
    imageContentDiv.classList.add("listSmallMainDiv");

    let imageLinks = new Array();
    let imageNames = new Array();

    for (let i = 0; i < imageLinksList.length; i++)
    {
        imageLinks[i] = imageLinksList[i].href;
        imageNames[i] = imageLinksList[i].text;
    }

    console.table(imageLinks);
    console.table(imageNames);

    for (let i = 0; i < imageLinksList.length; i++)
    {    
        // Create main div
        let imageItemDiv = document.createElement("div");
        imageItemDiv.classList.add("listSmallItemDiv");
        
        // Create div for content
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("listSmallDivContent");

        // Create the link
        let anchorElem = document.createElement("a");
        anchorElem.classList.add("imageItemLinkContainer");
        anchorElem.href = imageLinks[i];

        // Create captiomn
        let spanElem = document.createElement("span");
        spanElem.textContent = imageNames[i];
        spanElem.textContent = spanElem.textContent.split("_").join(" ");

        // Create image
        let imgElem = document.createElement("img");
        imgElem.classList.add("listSmallIcon");
        imgElem.src = imageLinks[i];

        // put everything together
        imageItemDiv.insertAdjacentElement("afterbegin",contentDiv);
        contentDiv.insertAdjacentElement  ("afterbegin",anchorElem);
        anchorElem.insertAdjacentElement  ("afterbegin",imgElem);
        anchorElem.insertAdjacentHTML     ("beforeend","<br>");
        anchorElem.insertAdjacentElement  ("beforeend", spanElem)

        imageContentDiv.insertAdjacentElement("beforeend", imageItemDiv);
    }

    imageLinksDiv.insertAdjacentElement("afterend", imageContentDiv);
    imageLinksDiv.style.display = "none";    
}