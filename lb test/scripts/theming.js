
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
    document.body.style.color="white";
    document.getElementById("BgrBox").style.backgroundColor="rgba(0, 0, 0, 0.95)";
    document.getElementById("footerText").style.color="white";
    
    // Add dark teme to all tables with "LeaderBoard_table" class
    const LBtable = document.getElementsByClassName("LeaderBoard_table");
    for (let i = 0; i < LBtable.length; i++)
    {
        LBtable[i].classList.add("table-dark");
    } 
    
    // Add dark teme to all tables with "LeaderBoard_table_header" class
    const LBtableHeader = document.getElementsByClassName("LeaderBoard_table_header");
    for (let i = 0; i < LBtableHeader.length; i++)
    {
        LBtableHeader[i].classList.remove("thead-dark"); 
        LBtableHeader[i].classList.add("thead-light");  
    } 
    
    document.getElementById("pageOptionsTogglesGroupCotentBox").style.backgroundColor = "#2c3034";
    document.getElementById("submissionTypeGroupCotentBox").style.backgroundColor = "#2c3034";

    document.getElementById("Dark_theme_toggle").disabled = true;
    document.getElementById("Light_theme_toggle").disabled = false;

    let topButtons = document.getElementsByClassName("btn");
    for (let i = 0; i < topButtons.length; i++)
    {
        topButtons[i].style.boxShadow = "2px 2px 8px rgba(255,255,255,0.5)";
    }
    SetCookie("PageTheme","dark");
}
function ColourChangeLight() 
{
    document.body.style.color="black";
    document.getElementById("BgrBox").style.backgroundColor="rgba(255, 255, 255, 0.95)";
    document.getElementById("footerText").style.color="black";
    
    // Add dark teme to all tables with "LeaderBoard_table" class
    const LBtable = document.getElementsByClassName("LeaderBoard_table");
    for (let i = 0; i < LBtable.length; i++)
    {
        LBtable[i].classList.remove("table-dark");
    } 
    
    // Add dark teme to all tables with "LeaderBoard_table_header" class
    const LBtableHeader = document.getElementsByClassName("LeaderBoard_table_header");
    for (let i = 0; i < LBtableHeader.length; i++)
    {
        LBtableHeader[i].classList.add("thead-dark"); 
        LBtableHeader[i].classList.remove("thead-light");  
    } 
    
    document.getElementById("pageOptionsTogglesGroupCotentBox").style.backgroundColor = "#ffffff";
    document.getElementById("submissionTypeGroupCotentBox").style.backgroundColor = "#ffffff";

    document.getElementById("Dark_theme_toggle").disabled = false;
    document.getElementById("Light_theme_toggle").disabled = true;

    let topButtons = document.getElementsByClassName("btn");
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