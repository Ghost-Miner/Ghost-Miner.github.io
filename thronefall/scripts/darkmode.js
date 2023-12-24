let currentTheme;

function CheckSavedTheme()
{
    currentTheme = GetCookie("Theme");
    // console.log("SAVED: " + currentTheme);

    switch(currentTheme)
    {
        default:
            console.warn("CheckSavedTheme | No cookie for Theme found. " + currentTheme);
            SetLightTheme();
        break;

        case "light":
            SetLightTheme();
        break;
        
        case "dark":
            SetDarkTheme();
        break;
    }
}

function ToggleThemes ()
{
    currentTheme = GetCookie("Theme");
    switch(currentTheme)
    {
        default:
            console.warn("ToggleThemes | No cookie for Theme found. " + currentTheme);
            SetLightTheme();
        break;
        
        case "light":
            SetDarkTheme();
        break;
            
        case "dark":
            SetLightTheme();
        break;
    }
    // console.log("ToggleThemes | " + currentTheme);
    // SetOptionsWinValues();
}

function ChangeOldTableClass()
{
    currentTheme = GetCookie("Theme");
    const oldTableBgr = document.getElementsByClassName("oldLBtable");
    // console.log(oldTableBgr);
    switch (currentTheme)
    {
        default:
            console.error("ChangeOldTableClass() | Invalid value for currentTheme! " + currentTheme);
        break;
        
        case "light":
            for (let i = 0; i < oldTableBgr.length; i++)
            {
                oldTableBgr[i].classList.remove("table-dark");
                // oldTableBgr[i].classList.add("table-light");
            }
        break;

        case "dark":
            for (let i = 0; i < oldTableBgr.length; i++)
            {
                // oldTableBgr[i].classList.remove("table-light");
                oldTableBgr[i].classList.add("table-dark");
            }
        break;
    }
}

function SetDarkTheme ()
{
    // console.log("Setting dark theme");
    SetCookie("Theme","dark");
    currentTheme = "dark";

    const divContent = '<link rel="stylesheet" href="./styles/darkmode.css">'
    const darkThemeTogglerDiv = document.getElementById("darkThemeTogglerDiv");

    darkThemeTogglerDiv.innerHTML = divContent; 
    document.getElementById("LBtableMain").classList.add("table-dark");
    document.getElementById("LBtableMainTime").classList.add("table-dark");

    document.getElementById("colourThemeToggleIcon").src = "./img/moon.png";
    // document.getElementById("fontStyleToggleIcon").src = "./img/text style white.png";
    document.getElementById("searchToggleButtonIcon").src = "./img/search white.png";

    SelectRandomBackground(1); 
    ChangeTableData('Neuland');
    // Loading screen is hidden by the darkmode stylesheet
}
function SetLightTheme ()
{
    // console.log("Setting light theme");
    SetCookie("Theme","light"); // Save theme to cookies
    currentTheme = "light"; // Update current theme 

    const divContent = '';
    const darkThemeTogglerDiv = document.getElementById("darkThemeTogglerDiv");

    darkThemeTogglerDiv.innerHTML = divContent;
    document.getElementById("LBtableMain").classList.remove("table-dark"); // Add BS4 table-dark class to tables to make stripes visible
    document.getElementById("LBtableMainTime").classList.remove("table-dark"); // Add BS4 table-dark class to tables to make stripes visible

    document.getElementById("colourThemeToggleIcon").src = "./img/sun.png"; // Replace toggle button icon with sun
    // document.getElementById("fontStyleToggleIcon").src = "./img/text style black.png";
    document.getElementById("searchToggleButtonIcon").src = "./img/search black.png";

    SelectRandomBackground(1); 
    ChangeTableData('Neuland');    
    HideLoadingScreen(); // Hide laoding screen
}

function HideLoadingScreen()
{
    document.getElementById("loadingOVerlay").style.display = "none";
}