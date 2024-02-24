let baseLayoutReady    = false; // Bool to set if the base layout is loaded
let articleLayoutReady = false; // Bool to set if the article layout is loaded

function PageInit (type)
{
    switch(type)
    {
        default:
            console.error("Invalid type value");
            break;

        case "blank":
            BuilPageLayout();
            break;

        case "article":
            BuilPageLayout();
            break;
    }
}

//
//  Load the base layout
//
async function BuilPageLayout ()
{
    const baseHtml = await fetch ("/TFwiki/test/base.html");
    const baseText = await baseHtml.text();

    document.body.outerHTML  = baseText;
    
    const headerHtml = await fetch("/TFwiki/assets/parts/header.html");
    const navHtml    = await fetch("/TFwiki/assets/parts/nav.html");
    const footerHtml = await fetch("/TFwiki/assets/parts/footer.html");

    const headerText = await headerHtml.text();
    const navText    = await navHtml   .text();
    const footerText = await footerHtml.text();

    document.getElementById("websiteHeader").innerHTML = headerText;
    document.getElementById("navigation")   .innerHTML = navText;
    document.getElementById("footerContent").innerHTML = footerText;

    baseLayoutReady = true;
}

///////////////////////////////////////////////////////////////////////////////////

const nextCheckDelay = 100; // Delay before checking if baseLayoutReady = true again

// Set page and tab title
async function SetTitle (newTitle)
{
    while (!baseLayoutReady)
    {
        await new Promise(resolve => setTimeout(resolve, nextCheckDelay));
    }

    document.title = newTitle + " | Thronefall wiki";
    document.getElementsByClassName("pageTitle")[0].textContent = newTitle;
}

// Set content for the <meta> edescription tag 
async function SetPageDescription (descr)
{
    while (!baseLayoutReady)
    {
        await new Promise(resolve => setTimeout(resolve, nextCheckDelay));
    }

    document.getElementsByName("description")[0].outerHTML = '<meta name="description" content="' + descr +'">';
}

// Add a CSS style-sheet
// Styles are added to the bottom of the body element
async function AddStyle (styleName)
{
    while (!baseLayoutReady)
    {
        await new Promise(resolve => setTimeout(resolve, nextCheckDelay));
    }

    const stylePath = "/TFwiki/assets/styles/";
    const styleHtmlText = "<link rel=\"stylesheet\" href=\"" + stylePath + styleName + ".css\">";

    const bodyHtml = document.body.innerHTML;

    document.body.innerHTML = bodyHtml + styleHtmlText;
}

///////////////////////////////////////////////////////////////////////////////////

