const IMAGE_INDEX_COL = 0;
const IMAGE_URL_COL   = 1;
const IMAGE_NAME_COL  = 2
const IMAGE_DESC_COL  = 3;

let imageItemArray = new Array();

let imageLinks = new Array();
let imageNames = new Array();
let imageIndex = new Array();
let imageDesc  = new Array();

async function BuildPage()
{
    CreateThumbnailGrid();

    InsertImageViewer();
}

function CreateThumbnailGrid ()
{
    let imageLinksDiv  = document.querySelector("#imageLinksListDiv");
    let imageLinksList = document.getElementsByClassName("imageLink");

    let imageContentDiv = document.createElement("div")
    imageContentDiv.classList.add("listSmallMainDiv");

    imageLinksDiv.style.visibility = "hidden";

    for (let i = 0; i < imageLinksList.length; i++)
    {
        imageLinks[i] = imageLinksList[i].href;
        imageNames[i] = imageLinksList[i].text;
        imageIndex[i] = i;
        imageDesc [i] = imageLinksList[i].id;

        let tempArray = new Array();
        tempArray[IMAGE_INDEX_COL] = i;
        tempArray[IMAGE_URL_COL]  = imageLinks[i];
        tempArray[IMAGE_NAME_COL] = imageNames[i]
        tempArray[IMAGE_DESC_COL] = imageDesc[i];

        // console.table([imageLinksList[i].id, imageDesc[i], imageLinksList[i].innerHTML]);    

        imageItemArray[i] = tempArray;
    }
    
    // console.table(imageItemArray);

    // console.table(imageLinks);
    // console.table(imageNames);

    // Create individual items
    for (let i = 0; i < imageLinksList.length; i++)
    {    
        // Create main div
        let imageItemDiv = document.createElement("div");
        imageItemDiv.classList.add("listSmallItemDiv");

        imageItemDiv.addEventListener("click", () => OpenImageView(imageItemArray[i]));
        
        // Create div for content
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("listSmallDivContent");

        // Create the link
        // let anchorElem = document.createElement("a");
        // anchorElem.classList.add("imageItemLinkContainer");
        // anchorElem.href = imageLinks[i];

        // Create caption container
        let captionDivElem = document.createElement("div");
        captionDivElem.classList.add("listSmallIconTitleDiv");

        // Create captiomn
        let spanElem = document.createElement("span");
        spanElem.textContent = imageNames[i];
        spanElem.textContent = spanElem.textContent.split("_").join(" ");
        spanElem.classList.add("listSmallIconTitle");

        // Create image
        let imgElem = document.createElement("img");
        imgElem.classList.add("listSmallIconImage");
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

        // anchorElem.style.display ="none";

        // console.log(imageLinks[i].split(".jpg")[0] + "_thumb.webp");

        // put everything together
        imageItemDiv  .insertAdjacentElement("afterbegin",contentDiv);
        captionDivElem.insertAdjacentElement("afterbegin", spanElem);
        contentDiv    .insertAdjacentElement("afterbegin", imgElem);
        contentDiv    .insertAdjacentElement("beforeend", captionDivElem);
        // contentDiv  .insertAdjacentElement("afterbegin",anchorElem); 
        
        // contentDiv.insertAdjacentHTML("beforeend","<br>");

        // anchorElem  .insertAdjacentElement("afterbegin",imgElem);
        // anchorElem  .insertAdjacentHTML   ("beforeend","<br>");
        // anchorElem  .insertAdjacentElement("beforeend", spanElem)

        // Add the created item into the grid div
        imageContentDiv.insertAdjacentElement("beforeend", imageItemDiv);
    }

    imageLinksDiv.insertAdjacentElement("afterend", imageContentDiv);
    imageLinksDiv.style.display = "none";
}

function InsertImageViewer ()
{
    let viewerDiv = '<div hx-get="../imageViewer.html" hx-swap="outerHTML" hx-trigger="load" id="imageviewerPlaceholder"></div>';
    $("#masterDiv")[0].insertAdjacentHTML("afterend", viewerDiv);
    console.log("Inserted omage viewer");
}