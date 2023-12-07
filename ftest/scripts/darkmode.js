let currentTheme;

function CheckSavedTheme()
{
    currentTheme = GetCookie("Theme");
    console.log("SAVED: " + currentTheme);

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
    console.log("ToggleThemes | " + currentTheme);
}

function ChangeOldTableClass()
{
    currentTheme = GetCookie("Theme");
    const oldTableBgr = document.getElementsByClassName("oldLBtable");
    console.log(oldTableBgr);
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
    console.log("Setting dark theme");
    SetCookie("Theme","dark");
    
    currentTheme = "dark";
    SelectRandomBackground(GetRandomInt(1,5));

    const divContent = '<link rel="stylesheet" href="./styles/darkMode.css">'
    const darkThemeTogglerDiv = document.getElementById("darkThemeTogglerDiv");
    darkThemeTogglerDiv.innerHTML = divContent;
    // Loading screen is hidden by the darkmode stylesheet
}
function SetLightTheme ()
{
    console.log("Setting light theme");
    SetCookie("Theme","light"); // Save theme to cookies
    
    currentTheme = "light"; // Update current theme 
    SelectRandomBackground(GetRandomInt(1,5));

    const divContent = '';
    const darkThemeTogglerDiv = document.getElementById("darkThemeTogglerDiv");
    darkThemeTogglerDiv.innerHTML = divContent;
}

function HideLoadingScreen()
{
    document.getElementById("loadingOVerlay").style.display = "none";
}



function SelectRandomBackground(mappNumner)
{
	// const body = document.getElementsByTagName('body')[0];

	let bgrNumber = 0;
	let minRand = 1; let maxRand = 10;

	switch (currentTheme)
    {
        case "light":
			minRand = 1;
			maxRand = 5;
        break;

        case "dark":
			minRand = 6;
			maxRand = 10;            
        break;
    }

	bgrNumber = GetRandomInt(minRand,maxRand);
	// console.log(bgrNumber);
	// console.log(body);

	switch (mappNumner)
	{
		default:
			document.body.style.backgroundImage = 'url("./img/backgrounds/Overworld.jpg")';
			console.log("INVALID VALUE");
		break;

		case 1:  // Neuland
			switch(bgrNumber)
				{	
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 5.jpg")'; break;
					
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 5.jpg")'; break;

					case 0: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/Neulands Victory.jpg")'
				}
		break;

		case 2:  // Nordfels
			switch(bgrNumber)
				{	
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 5.jpg")'; break;
					
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 5.jpg")'; break;

					case 0: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Nordfels Victory.jpg")'
				}
		break;
		
		case 3:  // Durststein
			switch(bgrNumber)
				{
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 5.jpg")'; break;
					
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 5.jpg")'; break;

					case 0: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Durststein Victory.jpg")'
				}
		break;

		case 4: // Frostsee
			switch(bgrNumber)
				{		
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 5.jpg")'; break;
							
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 5.jpg")'; break;

					case 0: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Frostsee Victory.jpg")'; break;
				}
		break;

		case 5: // Uferwind
			switch(bgrNumber)
				{		
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Day/Uferwind Day 1.png")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Day/Uferwind Day 2.png")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Day/Uferwind Day 3.png")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Day/Uferwind Day 4.png")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Day/Uferwind Day 5.png")'; break;
							
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Night/Uferwind Night 1.png")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Night/Uferwind Night 2.png")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Night/Uferwind Night 3.png")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Night/Uferwind Night 4.png")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Night/Uferwind Night 5.png")'; break;

					case 0: document.body.style.backgroundImage = 'url("./img/backgrounds/5 Uferwind/Uferwind Victory.png")'; break;
				}
		break;
	}
	// console.log	(document.body.style.backgroundImage);
}

function GetRandomInt(min, max) 
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}