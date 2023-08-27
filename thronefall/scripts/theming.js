function ChangeFontToCleaner ()
{
    document.getElementById("mainPageContainer").style.fontFamily = "Roboto,sans-serif,Arial";
    document.getElementById("Clean_font_toggle").disabled = true;
    document.getElementById("Default_font_toggle").disabled = false;

    SetCookie("FontStyle","Clean");
}
function ChangeFontToDefault ()
{
    document.getElementById("mainPageContainer").style.fontFamily = "'Times New Roman',Times,serif"; 
    document.getElementById("Clean_font_toggle").disabled = false;
    document.getElementById("Default_font_toggle").disabled = true;

    SetCookie("FontStyle","Default");
}
function SetFontStyle () 
{
    let savedFont = GetCookie("FontStyle");

    switch (savedFont)
    {
        default:
            console.log("SetFontStyle | Bisciut not found or is invalid value.");
            ChangeFontToDefault();
        break;
        
        case "Default":
            ChangeFontToDefault();
        break;
        
        case "Clean":
            ChangeFontToCleaner();
        break;
    }
}

function ColourChangeDark() 
{
    // Text colour and background colour
    document.body.style.color="white";
    document.getElementById("BgrBox").style.backgroundColor="rgba(0, 0, 0, 0.95)";
    document.getElementById("footerText").style.color="white";
    
    // Add dark teme to all tables with "oldLBtable" class
    const oldLBtable = document.getElementById("oldLBtable");
    const newLBTable = document.getElementById("newLBTable");

    oldLBtable.classList.add("table-dark");
    newLBTable.classList.add("table-dark");
    
    // Add dark teme to all tables with "oldLBHeader" class
    const oldLBtableHeader = document.getElementsByClassName("oldLBHeader");
    const newLBTableHead = document.getElementById("newLbHeader");
    
    oldLBtableHeader.classList.remove("table-dark");
    oldLBtableHeader.classList.add("table-light");
    oldLBtableHeader.style.color = "black";

    newLBTableHead.classList.remove("table-dark");
    newLBTableHead.classList.add("table-light");
    newLBTableHead.style.color = "black";
        
    //Colour of the collapsible section for submit and options
    document.getElementById("pageOptionsTogglesGroupCotentBox").style.backgroundColor = "#2c3034";
    document.getElementById("submissionTypeGroupCotentBox").style.backgroundColor = "#2c3034";

    document.getElementById("Dark_theme_toggle").disabled = true;
    document.getElementById("Light_theme_toggle").disabled = false;

    // Change buttons shadow to white
    const topButtons = document.getElementsByClassName("btn");
    for (let i = 0; i < topButtons.length; i++)
    {
        topButtons[i].style.boxShadow = "2px 2px 8px rgba(255,255,255,0.5)";
    }
    SetCookie("PageTheme","dark");
}
function ColourChangeLight() 
{
    // Text colour and background colour
    document.body.style.color = "black";
    document.getElementById("BgrBox").style.backgroundColor="rgba(255, 255, 255, 0.95)";
    document.getElementById("footerText").style.color = "black";
    
    // Add dark teme to all tables with "oldLBtable" class
    const oldLBtable = document.getElementBy("oldLBtable");
    const newLBTable = document.getElementById("newLBTable");

    oldLBtable.classList.remove("table-dark");
    newLBTable.classList.remove("table-dark");
    
    // Add dark teme to all tables with "oldLBHeader" class
    const oldLBtableHead = document.getElementsById("oldLBHeader");
    const newLBTableHead = document.getElementById("newLbHeader");

    oldLBtableHead.classList.add("table-dark");
    oldLBtableHead.classList.remove("table-light");
    oldLBtableHead.style.color = "white";

    newLBTableHead.classList.add("table-dark");
    newLBTableHead.classList.remove("table-light");
    newLBTableHead.style.color = "white";
        
    //Colour of the collapsible section for submit and options
    document.getElementById("pageOptionsTogglesGroupCotentBox").style.backgroundColor = "#ffffff";
    document.getElementById("submissionTypeGroupCotentBox").style.backgroundColor = "#ffffff";

    document.getElementById("Dark_theme_toggle").disabled = false;
    document.getElementById("Light_theme_toggle").disabled = true;

    // Change buttons shadow to white
    const topButtons = document.getElementsByClassName("btn");
    for (let i = 0; i < topButtons.length; i++)
    {
        topButtons[i].style.boxShadow = "2px 2px 4px rgba(0,0,0,0.5)"; 
    }
    SetCookie("PageTheme","light");
}
function SetTheme () 
{
    let savedTheme = GetCookie("PageTheme");

    switch (savedTheme)
    {
        default:
            console.log("SetTheme | Bisciut not found or is invalid value. Value: " + savedTheme);
            CheckAdressSearch();
        break;
        
        case "dark":
            ColourChangeDark();
            //document.getElementById("submitFormFrame").src="./submit.html";
        break;
        
        case "light":
            ColourChangeLight();
            //document.getElementById("submitFormFrame").src="./submit.html";
        break;
    }
}