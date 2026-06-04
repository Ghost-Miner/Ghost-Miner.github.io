let openImageData = null;

function OpenImageView(_imageItemDataItem)
{
    DisableNavigationButtons();

    $("#windowImageElem")[0].src = _imageItemDataItem[IMAGE_URL_COL];
    $("#imageNameSpan")[0].textContent = _imageItemDataItem[IMAGE_NAME_COL];
    $("#imageDescriptionSpan")[0].textContent = _imageItemDataItem[IMAGE_DESC_COL];
    $("#imageViewWindowSection")[0].style.display = "block";
    
    SetNavButtonTarget(_imageItemDataItem);
    openImageData = _imageItemDataItem;
}

function CloseImageView()
{
    $("#windowImageElem")[0].src = "";
    $("#imageNameSpan")[0].textContent = "";
    $("#imageDescriptionSpan")[0].textContent = "";

    $("#imageViewWindowSection")[0].style.display = "none";

    openImageData = null;
}

function SetNavButtonTarget(_imageItemDataItem)
{   
    // console.log("TARGET:");
    // console.table(_imageItemDataItem);

    // clear all event listeners 
    $("#windowNavigationImgButtonLeft").off("click");
    $("#windowNavigationImgButtonRight").off("click");

    // assign new event listeners
    $("#windowNavigationImgButtonLeft").on("click", () => OpenImageView(imageItemArray[_imageItemDataItem[IMAGE_INDEX_COL] - 1])    );
    $("#windowNavigationImgButtonRight").on("click", () => OpenImageView(imageItemArray[_imageItemDataItem[IMAGE_INDEX_COL] + 1]) );

    EnableNavigationButtons(); // Reset state of both buttons

    if (_imageItemDataItem[IMAGE_INDEX_COL] == imageItemArray.length - 1)
    {
        $("#windowNavigationImgButtonRight")[0].disabled = true; 
    }

    if (_imageItemDataItem[IMAGE_INDEX_COL] == 0)
    {
        $("#windowNavigationImgButtonLeft")[0].disabled  = true;           
    }

    $("#downloadImageLink")[0].href = _imageItemDataItem[IMAGE_URL_COL];
}

function DisableNavigationButtons ()
{
    $("#windowNavigationImgButtonRight")[0].disabled = true;
    $("#windowNavigationImgButtonLeft")[0].disabled  = true;   
}
function EnableNavigationButtons()
{
    $("#windowNavigationImgButtonRight")[0].disabled = false;
    $("#windowNavigationImgButtonLeft")[0].disabled  = false;  
}