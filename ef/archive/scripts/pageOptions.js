function GetUrlSearch ()
{
    let search = location.search.split("?")[1];
    return search;
}
function GetUrlHash ()
{
    let hash = location.hash.split("#")[1];
    return hash;
}

function GetImageIndexFromUrl ()
{
    try 
    {
        if (GetUrlSearch().includes("pic="))
        {
            let urlHash = GetUrlSearch();   
            let imgNum = urlHash.split("=")[1];

            return imgNum;
        }
    }
    catch { }
    return null;
}
function SetImageIndexUrl (_imageIndex)
{
    location.hash = "pic=" + _imageIndex;
}
function ClearImageIndexUrl()
{
    location.hash = "";
}

function TryOpenImageViewerFromUrl ()
{
    let imgIndex = GetImageIndexFromUrl(); 
    if (imgIndex != null && imgIndex < imageItemArray.length)
    {
        try 
        {
            OpenImageView(imageItemArray[imgIndex]);
        }
        catch (ex)
        {
            console.log(ex);
        }
    }
}

function AddKeyboardEvents ()
{
    $(document).off("keyup");
    $(document).on("keyup", KeyPressed);
    // console.log("added events");
}
function KeyPressed (e)
{
    console.log("KeyPressed: " + e.code);

    // Viewer key binds
    if (openImageData != null)
    {
        switch (e.code)
        {
            case "Escape":
                CloseImageView();
                break;

            case "ArrowLeft":
                try 
                {
                    OpenImageView(imageItemArray[openImageData[IMAGE_INDEX_COL] - 1]);
                } catch (ex) {};
                break;

            case "ArrowRight":
                try 
                {
                    OpenImageView(imageItemArray[openImageData[IMAGE_INDEX_COL] + 1])
                } catch (ex) {};
                break;
        }
    }

    if (e.code == "Backspace")
    {
        GoToHomePage();
    }
}

function GoToHomePage ()
{
    location.replace("/ef/archive/")
}