function GetImageDetails1()
{
    GetImageDetails_1();
}

function GetImageDetails_1 ()
{
    tableRows = $("table").getElementsByTagName("tr");

    imageDetails = new Array();

    for (let i = 0; i < tableRows.length; i++)
    {
        imageUrl = tableRows[i].getElementsByTagName("a")[0].href;
        imageDescr = tableRows[i].textContent;
        imageDetails[i] = [imageUrl, imageDescr];
    }

    console.table(imageDetails);
    console.log(imageDetails);
}


GetImageDetails();