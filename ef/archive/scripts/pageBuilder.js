let imageLinks = new Array();
let imageNames = new Array();


function CreateThumbnailGrid ()
{
    let imageLinksDiv = document.querySelector("#imageLinksListDiv");
    let imageLinksList = document.getElementsByClassName("imageLink");

    let imageContentDiv = document.createElement("div")
    imageContentDiv.classList.add("listSmallMainDiv");

    for (let i = 0; i < imageLinksList.length; i++)
    {
        imageLinks[i] = imageLinksList[i].href;
        imageNames[i] = imageLinksList[i].text;
    }

    // console.table(imageLinks);
    // console.table(imageNames);

    // Create individual items
    for (let i = 0; i < imageLinksList.length; i++)
    {    
        // Create main div
        let imageItemDiv = document.createElement("div");
        imageItemDiv.classList.add("listSmallItemDiv");

        imageItemDiv.addEventListener("click", () => OpenImageView(imageLinks[i], imageNames[i]));
        
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
        imgElem.loading = "lazy";
        if (imageLinks[i].includes(".jpg"))
        {
            imgElem.src = (imageLinks[i].split(".jpg")[0] + "_thumb.webp");;
        }
        else if (imageLinks[i].includes(".png"))
        {
            imgElem.src = (imageLinks[i].split(".png")[0] + "_thumb.webp");
        }

        // console.log(imageLinks[i].split(".jpg")[0] + "_thumb.webp");

        // put everything together
        imageItemDiv.insertAdjacentElement("afterbegin",contentDiv);
        contentDiv  .insertAdjacentElement("afterbegin",anchorElem);
        
        anchorElem  .insertAdjacentElement("afterbegin",imgElem);
        anchorElem  .insertAdjacentHTML   ("beforeend","<br>");
        anchorElem  .insertAdjacentElement("beforeend", spanElem)

        // Add the created item into the grid div
        imageContentDiv.insertAdjacentElement("beforeend", imageItemDiv);
    }

    imageLinksDiv.insertAdjacentElement("afterend", imageContentDiv);
    imageLinksDiv.style.display = "none";    
}