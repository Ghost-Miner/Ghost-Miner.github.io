function ShowSecretMessage (mysteryText)
{
    const path = window.location.pathname;
    const pageName = mysteryText
    const secretMessage = "<h1>Nothing to see here. ;)</h1>"
    console.log(path);
    if (path == pageName)
    {
        document.body.innerHTML = secretMessage;
    }
    else
    {
        const secretScriptElements = document.getElementsByClassName("secretMsgScriptElem");
        for (let i = 0; i < secretScriptElements.length; i++)
        {
            secretScriptElements.innerHTML = "AEIOU";
        }
    }
}