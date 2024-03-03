function Sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

function GetUrlInfo()
{
	console.log(' href: ' + window.location.href);
	console.log(' host: ' + window.location.host);
	console.log(' hostname: ' + window.location.hostname);
	console.log(' port: ' + window.location.port);
	console.log(' protocol: ' + window.location.protocol);
	console.log(' pathname: ' + window.location.pathname);
	console.log(' hashpathname: ' + window.location.hash);
	console.log(' search: ' + window.location.search);
	console.log("--------------------------------------------");
}

// Returns string after # in the address
function GetAdressHash()
{
	const hash = window.location.hash;
	const noHash = RemoveHasSymbol(hash);
	// console.log("URL hash: " + hash + " - " + noHash);

	if (hash == "#" || hash == "")
	{
		// console.log("Nothing in hash found");
		return;
	}

	if (hash.includes("score"))
	{
		return ExtractSubNumber(noHash);
	}
	else if (hash.includes("id="))
	{
		return ExtractSubID(noHash);
	}
	else
	{
		return noHash;
	}
}
// Returns string after ? in the address
function GetAdressSearch()
{
	const search = window.location.search;
	const searchNoQ = RemoveQuesMarkSymbol(search);
	// console.log("URL search: " + search);

	if (search.includes("name"))
	{
		return ExtractSubNumber(search);
	}
	else 
	{
		return searchNoQ;
	}
}

function ExtractSubNumber (rawString)
{
    let returnStringChars = new Array();
    let returnStringFull = "";
    let charIndex = 0;

    const str   = rawString;
    const chars = str.split('');

    for (let i = 1; i < chars.length; i++)
    {
        returnStringChars[charIndex] = chars[i];
        charIndex++;
    }
    // console.log(returnStringChars);
    
    charIndex = 0;
    returnStringChars.reverse();
    let subNumChars = new Array();

    // console.log(returnStringChars);

    for (let i = 0; i < returnStringChars.length; i++)
    {
        // console.log(returnStringChars[i])
        if (returnStringChars[i] == "=")
        {
            break;
        }
        subNumChars[charIndex] = returnStringChars[i];
        charIndex++;
    }
    // console.log(subNumChars);

    subNumChars.reverse();
    for (let i = 0; i < subNumChars.length; i++)
    {
        returnStringFull = returnStringFull + subNumChars[i];
    }
    // console.log(subNumChars);
    // console.log(returnStringFull);

    return returnStringFull;
}
function ExtractSubID(rawString)
{
	let returnStringChars = new Array();
    let returnStringFull = "";
    let charIndex = 0;

    const str   = rawString;
    const chars = str.split('');

    for (let i = 1; i < chars.length; i++)
    {
        returnStringChars[charIndex] = chars[i];
        charIndex++;
    }
    // console.log(returnStringChars);
    
    charIndex = 0;
    returnStringChars.reverse();
    let subNumChars = new Array();

    // console.log(returnStringChars);

    for (let i = 0; i < returnStringChars.length; i++)
    {
        // console.log(returnStringChars[i])
        if (returnStringChars[i] == "=")
        {
            break;
        }
        subNumChars[charIndex] = returnStringChars[i];
        charIndex++;
    }
    // console.log(subNumChars);

    subNumChars.reverse();
    for (let i = 0; i < subNumChars.length; i++)
    {
        returnStringFull = returnStringFull + subNumChars[i];
    }
    // console.log(subNumChars);
    // console.log(returnStringFull);

    return returnStringFull;
}

function RemoveQuesMarkSymbol (hashString)
{
    let returnStringChars = new Array();
    let returnStringFull = "";
    let charIndex = 0;

    const str   = hashString;
    const chars = str.split('');

    for (let i = 1; i < chars.length; i++)
    {
        returnStringChars[charIndex] = chars[i];
        charIndex++;
    }
    for (let i = 0; i < returnStringChars.length; i++)
    {
        returnStringFull = returnStringFull + returnStringChars[i];
    }

    return returnStringFull;
}
function RemoveHasSymbol (hashString)
{
    let returnStringChars = new Array();
    let returnStringFull = "";
    let charIndex = 0;

    const str   = hashString;
    const chars = str.split('');

    for (let i = 1; i < chars.length; i++)
    {
        returnStringChars[charIndex] = chars[i];
        charIndex++;
    }
    for (let i = 0; i < returnStringChars.length; i++)
    {
        returnStringFull = returnStringFull + returnStringChars[i];
    }

    return returnStringFull;
}

function OpenSubmitFromURL ()
{
	const urlHash = GetAdressHash();

	if (urlHash == submitWinString)
	{
		OpenSubmitWindow();
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SelectRandomBackground(mappNumner)
{
	let bgrNumber = 0;
	let minRand = 1; let maxRand = 10;

	switch (currentTheme)
    {
        case "light":
			minRand = 0;
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
			document.body.style.backgroundImage = 'url("./img/backgrounds/bliss darker.jpg")';
			console.error("SelectRandomBackground | Invalid value for mappNumner (\"" + mappNumner + "\")");
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

		case 6: // Sturmklamm
		{
			switch(bgrNumber)
			{
				case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/6 Sturmklamm/sturmklamm_1.png")'; break;
			}
		}
	}
	// console.log	(document.body.style.backgroundImage);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function GetRandomInt(min, max) 
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
function GenerateRandomCharacters(strLength) 
{
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
  
    for (let i = 0; i < strLength; i++) 
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }  
    return result;
}
function GenerateRandomNumber(strLength) 
{
    const charset = "0123456789";
    let result = "";
  
    for (let i = 0; i < strLength; i++) 
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }  
    return result.toString();
}
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let textStyle = "fancy";
function ToggleFontStyle()
{
	// console.log(textStyle);
	switch(textStyle)
	{
		default:
			console.warn("ChangeFontStyle() | Invalid textStyle value: \"" + textStyle + "\"");
		break;

		case "fancy": // Toggle to clear
			SetCookie("Font","clear");
			textStyle = "clear";
			document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
		break;

		case "clear": // Toggle to fancy
			SetCookie("Font","fancy");
			textStyle = "fancy";
			document.body.style.fontFamily = "'Times New Roman', Times, serif";
		break;
	}
	// SetOptionsWinValues();
}
function CheckSavedFontStyle()
{
    textStyle = GetCookie("Font");

    switch(textStyle)
    {
        default:
            console.warn("No cookie for Font found.");
			textStyle = "fancy";
        break;

        case "fancy":
			textStyle = "clear";
			ToggleFontStyle();
        break;
        
        case "clear":
			textStyle = "fancy";
			ToggleFontStyle();
        break;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let animationsEnabled;
function CheckAnimState ()
{
	animationsEnabled = GetCookie("Animations");
	// console.log("CURRENT: " + animationsEnabled);
	switch (animationsEnabled)
	{
		default:
			EnableAnimations();
			break;

		case "true":
			EnableAnimations();
			break;
			
		case "false":
			DisableAnimations();
			break;
	}
}

function ToggleAnimations ()
{
	animationsEnabled = GetCookie("Animations");
	// console.log("ANIMS: " + animationsEnabled);
	switch (animationsEnabled)
	{
		default:
			EnableAnimations();
			break;

		case "false":
			EnableAnimations();
			break;
			
		case "true":
			DisableAnimations();
			break;
	}
	console.log("Animations: " + animationsEnabled);
	// SetOptionsWinValues();
}

let togglAnimDrpdownText;
function EnableAnimations()
{
	animationsEnabled = true;
	togglAnimDrpdownText = document.getElementById("ToggleAnimationsDrp");
	togglAnimDrpdownText.textContent = "Disable animations"
	SetCookie("Animations","true");
}
function DisableAnimations()
{
	animationsEnabled = false;
	togglAnimDrpdownText = document.getElementById("ToggleAnimationsDrp");
	togglAnimDrpdownText.textContent = "Ensable animations";
	SetCookie("Animations","false");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let formID;
function GetformID()
{
	formID = GetCookie("formID");
    if (formID == "" || formID == undefined || formID == null)
    {
        formID = GenerateRandomCharacters(16);
		SetCookie("formID",formID);
        // console.log("set formID " + formID);
    }
    return formID;
}

let searchVisible = false; 
function ToggleSearchField()
{
	switch(searchVisible)
	{
		case false:
			ShowSearchField();
			break;

		case true:
			HideSearchField();
			break;
	}
}
function ShowSearchField ()
{
	document.getElementById("searchDiv").style.display = "block";
	searchVisible = true; 
}
function HideSearchField ()
{
	document.getElementById("searchDiv").style.display = "none";
	searchVisible = false; 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// A X E D
// function SetOptionsWinValues ()
// {
// 	const themeButton 	   = document.getElementById("optThemeButton");
// 	const fintStyleButton  = document.getElementById("optFontButton");
// 	const animToggleButton = document.getElementById("optAnimToggle");

// 	themeButton.textContent 	 = "Colour theme: " + currentTheme;
// 	fintStyleButton.textContent  = "Text style: " + textStyle;
// 	animToggleButton.textContent = "Animations: " + animationsEnabled;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let searchForString = "name";
let searchedDataType = "string";
function AdvChangeSearchFor (searchFor)
{
	const stringInputField  = document.getElementById("advancedSearchString");
	const numberInputFields = document.getElementById("advSrcNumberFieldDiv");

	stringInputField .style.display = "none";
	numberInputFields.style.display = "none";
	switch (searchFor)
	{
		default:
			console.error("AdvChangeSearchFor() invalid argument " + searchFor);
			break;

		case "name":
			stringInputField .style.display = "block";
			searchedDataType = "string";
			searchForString = "name";
		break;

		case "score":
			numberInputFields.style.display = "grid";
			searchedDataType = "int";
			searchForString = "score";
		break;

		case "gold":
			numberInputFields.style.display = "grid";
			searchedDataType = "int";
			searchForString = "gold";
		break;

		case "weapon":
			stringInputField .style.display = "block";
			searchedDataType = "string";
			searchForString = "weapon";
		break;

		case "version":
			stringInputField .style.display = "block";
			searchedDataType = "string";
			searchForString = "version";
		break;

		case "date":
			searchForString = "date";
			searchedDataType = "string";
		break;
	}
	AdvancedSearchSubs();
}

function AdvSrcReplacePositionWithStaus (chosenSub)
{
	if (chosenSub[sc_positionColumn] == "" || chosenSub[sc_positionColumn] == null)
	{
		chosenSub[sc_positionColumn] = chosenSub[sc_statusColumn].toUpperCase();
	}
}
function AdvSrcTooManyResultsError()
{
	console.warn("SearchSubByName() | Number of search results is higher than number of available table rows.");
	alert("WARNING: \nNumber of search results is higher than the number of available table rows. \nSome results aren't shown.");
}
let srcSubType = "score";
function ChangeSrcSubType (type)
{
	srcSubType = type;
	
	if (srcSubType == "score")
	{
		document.getElementById("subTypeScoreToggleScore").disabled = false;
		document.getElementById("subTypeScoreToggleGold") .disabled = false;
	}
	else
	{
		document.getElementById("subTypeScoreToggleScore").disabled = true;
		document.getElementById("subTypeScoreToggleGold") .disabled = true; 
	}
	AdvancedSearchSubs();
}

function AdvSrcShowResults ()
{
	switch (srcSubType)
	{
		default:
			console.error("AdvSrcShowResults | 'srcSubType' value is invalid: " + "(" + srcSubType +")");
		break;

		case "score":
			ChangeCategory("score");
			ChangeTableData("Search");
			HideAdvancedSearchWindow();
		break;

		case "time":
			ChangeCategory("time");
			ChangeTimeTableData("Search");
			HideAdvancedSearchWindow();
		break;
	}
}

function HideAdvancedSearchWindow()
{
	const advSrcWindow = document.getElementById("advancedSearchWindowsBackground");
	const overlayWindow = document.getElementById("advancedSearchWindow");

	advSrcWindow.classList.remove("windowOpenAnim");
	
	if (animationsEnabled)
	{
		advSrcWindow.classList.add("windowCloseAnim");
		
		Sleep(500).then(() => 
		{ 
			overlayWindow.classList.add("overlayHideAnim");
		} );
		Sleep(750).then(() => 
		{ 
			overlayWindow.style.display = "none";
		} );
	}
	else
	{
		overlayWindow.style.display = "none";
	}

	// document.getElementById("advancedSearchWindow").style.display = "none";
}
function OpenAdvancedSearchWindow ()
{
	const advSrcWindow = document.getElementById("advancedSearchWindowsBackground");
	const overlayWindow = document.getElementById("advancedSearchWindow");

	advSrcWindow.classList.remove("windowCloseAnim");
	overlayWindow.classList.remove("overlayHideAnim");

	if (animationsEnabled)
	{
		advSrcWindow.classList.add("windowOpenAnim");
	}
	overlayWindow.style.display = "block";

    HideSearchField();

	// document.getElementById("advancedSearchWindow").style.display = "block";
}

function AdvancedSearchSubs()
{
	switch (srcSubType)
	{
		default:
			console.error("AdvancedSearchSubs | 'srcSubType' value is invalid: " + "(" + srcSubType +")");
		break;

		case "score":
			AdvancedSearchScores();
		break;

		case "time":
			AdvancedSearchTimes();
		break;
	}
}
function AdvancedSearchScores ()
{
	const showResultsbutton = document.getElementById("startSearchButton");
	const searchedString 	= document.getElementById("advancedSearchString").value;
	const searchedNunMin 	= document.getElementById("advancedSearchNumberMin").value;
	let   searchedNunMax 	= document.getElementById("advancedSearchNumberMax").value;

	// console.log("IF value: " + searchedString);
	// TEMRINATE FUNCTION IF INPUT STRING IS EMPTY
	if (searchedString == "" && searchedDataType == "string")
    {
        console.log("string input is empty.");
		document.getElementById("numOfSearchResultsValueText").textContent = 0;
		showResultsbutton.disabled = true;
        return;
    }
	else if(searchedDataType == "int" && (searchedNunMin == "" || searchedNunMax == ""))
	{
		console.log("Int input is empty.");
		document.getElementById("numOfSearchResultsValueText").textContent = 0;
		showResultsbutton.disabled = true;
        return;
	}
	else
	{
		showResultsbutton.disabled = false;
	}
	
	if (searchedNunMax == 0)
	{
		searchedNunMax = 100000;
	}

    searchResultsSubs = new Array();
    let srcResArrIndex = 0;
	let srcString; // searched string

	let chosenSub; // Currently chosen item
	let subIndex;
	let subValue; 

	switch (searchForString)
	{
		default:
			console.error("AdvancedSearchScores() invalid argument " + searchType);
		break;
		
		case "name":
			srcString = searchedString.toUpperCase(); // Normalize letters case because JS is case snesitive

			for (let i = 1; i < scoresData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = scoresData[i];		
				subIndex  = chosenSub [sc_sudIndexColumn];		
				subValue  = chosenSub [sc_nameColumn].toUpperCase();

				AdvSrcReplacePositionWithStaus(chosenSub);
				if (subValue.includes(srcString))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;

		case "version":
			srcString = searchedString.toUpperCase(); // Normalize letters case because JS is case snesitive

			for (let i = 1; i < scoresData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = scoresData[i];		
				subIndex  = chosenSub [sc_sudIndexColumn];		
				subValue  = chosenSub [sc_versionColumn].toUpperCase();

				AdvSrcReplacePositionWithStaus(chosenSub);
				if (subValue.includes(srcString))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;

		case "score":
			srcString = searchedString; // Normalize letters case because JS is case snesitive

			for (let i = 1; i < scoresData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = scoresData[i];		
				subIndex  = chosenSub [sc_sudIndexColumn];		
				subValue  = parseInt(chosenSub[sc_scoreColumn]);

				AdvSrcReplacePositionWithStaus(chosenSub);

				if (subValue > parseInt(searchedNunMin) && subValue < parseInt(searchedNunMax))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;

		case "gold":
			srcString = searchedString; // Normalize letters case because JS is case snesitive

			for (let i = 1; i < scoresData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = scoresData[i];		
				subIndex  = chosenSub [sc_sudIndexColumn];		
				subValue  = parseInt(chosenSub[sc_goldColumn]);

				AdvSrcReplacePositionWithStaus(chosenSub);

				if (subValue > parseInt(searchedNunMin) && subValue < parseInt(searchedNunMax))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;

		case "weapon":
			srcString = searchedString.toUpperCase(); // Normalize letters case because JS is case snesitive

			for (let i = 1; i < scoresData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = scoresData[i];		
				subIndex  = chosenSub [sc_sudIndexColumn];		
				subValue  = chosenSub [sc_weaponColumn].toUpperCase();

				AdvSrcReplacePositionWithStaus(chosenSub);
				
				if (subValue.includes(srcString))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;
	}
	if (searchResultsSubs[0] == null)
    {
        console.log("No result found.");
		showResultsbutton.disabled = true;
        // return;
    }
	// console.log(searchResultsSubs);
	// console.log("RESULTS: " + searchResultsSubs.length);
	// document.getElementById("startSearchButton").disabled = false;
	document.getElementById("numOfSearchResultsValueText").textContent = searchResultsSubs.length;
}

function AdvancedSearchTimes ()
{
	const showResultsbutton = document.getElementById("startSearchButton");
	const searchedString 	= document.getElementById("advancedSearchString").value;
	const searchedNunMin 	= document.getElementById("advancedSearchNumberMin").value;
	let   searchedNunMax 	= document.getElementById("advancedSearchNumberMax").value;

	// console.log("IF value: " + searchedString);
	// TEMRINATE FUNCTION IF INPUT STRING IS EMPTY
	if (searchedString == "" && searchedDataType == "string")
    {
        console.log("string input is empty.");
		document.getElementById("numOfSearchResultsValueText").textContent = 0;
		showResultsbutton.disabled = true;
        return;
    }
	else if(searchedDataType == "int" && (searchedNunMin == "" || searchedNunMax == ""))
	{
		console.log("Int input is empty.");
		document.getElementById("numOfSearchResultsValueText").textContent = 0;
		showResultsbutton.disabled = true;
        return;
	}
	else
	{
		showResultsbutton.disabled = false;
	}
	
	if (searchedNunMax == 0)
	{
		searchedNunMax = 100000;
	}

    searchResultsSubs = new Array();
    let srcResArrIndex = 0;
	let srcString; // searched string

	let chosenSub; // Currently chosen item
	let subIndex;
	let subValue; 

	switch (searchForString)
	{
		default:
			console.error("AdvancedSearchTime() invalid argument " + searchType);
		break;
		
		case "name":
			srcString = searchedString.toUpperCase(); // Normalize letters case because JS is case snesitive

			for (let i = 1; i < timeData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = timeData[i];		
				subIndex  = chosenSub [ti_sudIndexColumn];		
				subValue  = chosenSub [ti_nameColumn].toUpperCase();

				AdvSrcReplacePositionWithStaus(chosenSub);
				if (subValue.includes(srcString))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;

		case "version":
			srcString = searchedString.toUpperCase(); // Normalize letters case because JS is case snesitive

			for (let i = 1; i < timeData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = timeData[i];		
				subIndex  = chosenSub [ti_sudIndexColumn];		
				subValue  = chosenSub [ti_versionColumn].toUpperCase();

				AdvSrcReplacePositionWithStaus(chosenSub);
				if (subValue.includes(srcString))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;

		case "gold":
			srcString = searchedString; // Normalize letters case because JS is case snesitive

			for (let i = 1; i < timeData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = timeData[i];		
				subIndex  = chosenSub [ti_sudIndexColumn];		
				subValue  = parseInt(chosenSub[ti_goldColumn]);

				AdvSrcReplacePositionWithStaus(chosenSub);

				if (subValue > parseInt(searchedNunMin) && subValue < parseInt(searchedNunMax))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;

		case "weapon":
			srcString = searchedString.toUpperCase(); // Normalize letters case because JS is case snesitive

			for (let i = 1; i < timeData.length; i++)
			{
				if (i >= tableMaxRows)
				{
					AdvSrcTooManyResultsError();
					break;
				}        
				chosenSub = timeData[i];		
				subIndex  = chosenSub [ti_sudIndexColumn];		
				subValue  = chosenSub [ti_weaponColumn].toUpperCase();

				AdvSrcReplacePositionWithStaus(chosenSub);
				
				if (subValue.includes(srcString))
				{
					searchResultsSubs[srcResArrIndex] = chosenSub;
					srcResArrIndex++;
				}
			}
		break;
	}
	if (searchResultsSubs[0] == null)
    {
        console.log("No result found.");
		showResultsbutton.disabled = true;
        // return;
    }
	// console.log(searchResultsSubs);
	// console.log("RESULTS: " + searchResultsSubs.length);
	// document.getElementById("startSearchButton").disabled = false;
	document.getElementById("numOfSearchResultsValueText").textContent = searchResultsSubs.length;
}