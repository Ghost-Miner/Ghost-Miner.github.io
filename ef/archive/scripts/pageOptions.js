function AddKeyboardEvents ()
{
    $(document).off("keyup");
    $(document).on("keyup", KeyPressed);
    console.log("added events");
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
                try {
                    OpenImageView(imageItemArray[openImageData[IMAGE_INDEX_COL] - 1]);
                } catch (ex) {};
                break;

            case "ArrowRight":
                try {
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