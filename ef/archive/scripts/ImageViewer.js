function OpenImageView(_imageUrl, _imageName)
{
    console.log("OPENING " + _imageName + " : " + _imageUrl);
    $("#windowImageElem")[0].src = _imageUrl;
    $("#imageNameSpan")[0].textContent = _imageName;
    $("#imageDescriptionSpan")[0].textContent = "";

    $("#imageViewWindowSection")[0].style.display = "block";
}

function CloseImageView()
{
    $("#windowImageElem")[0].src = "";
    $("#imageNameSpan")[0].textContent = "";
    $("#imageDescriptionSpan")[0].textContent = "";

    $("#imageViewWindowSection")[0].style.display = "none";
}

