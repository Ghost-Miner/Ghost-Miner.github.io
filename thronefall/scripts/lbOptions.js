function ChangeShownTable(tableToShow, sectionName)
{
	// console.log("ChangeShownTable: " + tableToShow + "; " + sectionName);
	const LBsections = document.getElementsByClassName("LeaderBoard_section");

	for (let i = 0; i < LBsections.length; i++)
	{
		LBsections[i].style.display = "none";
	}

	let showTable = document.getElementById(tableToShow);
	showTable.style.display = "block";

	window.location.hash = sectionName;
}

function ChangeCategory(name)
{
    HideLevelNameColumn();
    // Subcategory buttons
	const scoreLevelsButton = document.getElementById("scoreLevelsToggle");
	const timeLevelsButton  = document.getElementById("timeLevelsToggle");
	const demoLevelsButton  = document.getElementById("demoLevelsToggle");
    // Category buttons
	const scoreCatButton = document.getElementById("scoreCategoryButton");
	const timeCatButton  = document.getElementById("timeCategoryButton"); 
	const demoCatButton  = document.getElementById("demoCategoryButton");
    // LB secions
	const scoresSection = document.getElementById("lbScoresSection");
    const timeSection   = document.getElementById("lbTimeSection")
	const demoSection   = document.getElementById("lbDemoSection")

	// HIDE ALL SUB-CAT BUTTONS
	scoreLevelsButton.style.display = "none";
	timeLevelsButton .style.display = "none";
	demoLevelsButton .style.display = "none";
	// RESET ALL CATEGORY BUTTONS ACTIVE STATE
	scoreCatButton.classList.remove("active");
	timeCatButton .classList.remove("active");
	demoCatButton .classList.remove("active");

    scoresSection.style.display = "none";
    timeSection  .style.display = "none";
    demoSection  .style.display = "none";

	switch (name)
	{
		default:
			console.error("ChangeCategory | Name (\""+ name +"\") is not a valid category name!");
		break;

		case "score":
			scoresSection.style.display = "block";

			// Levels toggle
			scoreLevelsButton.style.display = "grid";
			// Category toggle
			scoreCatButton.classList.add("active");
		break;

		case "time":
			timeSection.style.display ="block";

			// Levels toggle
			timeLevelsButton.style.display = "grid";
			// Category toggle
			timeCatButton.classList.add("active");
            ChangeTimeTableData("Neuland");
            SelectRandomBackground(1);
		break;

		case "demo":
			demoSection.style.display ="block";

			// Levels toggle
			demoLevelsButton.style.display = "grid";
			// Category toggle
			demoCatButton.classList.add("active");
		break;
	}
}

function AssignNumbersDemo(tableName)
{
	switch (tableName)
	{
		case "Nordfels":
			const NFcollection = document.getElementsByClassName("SB_NF_Position");

			for (let i = 0; i < NFcollection.length; i++)
			{
				NFcollection[i].textContent = (i + 1);
				NFcollection[i].style.textAlign = "center";
			}
			break;

		case "Neuland":
			const NLcollection = document.getElementsByClassName("SB_NL_Position");

			for (let i = 0; i < NLcollection.length; i++)
			{
				NLcollection[i].textContent = (i + 1);
				NLcollection[i].style.textAlign = "center";
			}
			break;

		case "Nordfels time":
			const NFTimeCollection = document.getElementsByClassName("TIME_NF_Position");

			for (let i = 0; i < NFTimeCollection.length; i++)
			{
				NFTimeCollection[i].textContent = (i + 1);
				NFTimeCollection[i].style.textAlign = "center";
			}
			break;

		case "Neuland time":
			const NLTimeCollection = document.getElementsByClassName("TIME_NL_Position");

			for (let i = 0; i < NLTimeCollection.length; i++)
			{
				NLTimeCollection[i].textContent = (i + 1);
				NLTimeCollection[i].style.textAlign = "center";
			}
			break;
	}
}

function AssignPositionNumbers ()
{
	const posColumn = document.getElementsByClassName("SB_Position");

	for (let i = 0; i < posColumn.length; i++)
	{
		posColumn[i].textContent = (i + 1);
		posColumn[i].style.textAlign = "center";
	}
}

const tableMaxRows = 200;
function SpawnTableRows()
{
    let scoreTableRow = document.getElementsByClassName("scoreTableRow");
    let timeTableRow  = document.getElementsByClassName("timeTableRow");
    let scoreTableBody = document.getElementById("scoreLBtableBody");
    let timeTableBody = document.getElementById("timeLBtableBody");
    let newScoreRow;
    let newTimeRow;

    for (let i = 0; i < tableMaxRows; i++)
    {
        newScoreRow = scoreTableRow[0].cloneNode(true);
        scoreTableBody.append(newScoreRow);
        
        newTimeRow = timeTableRow[0].cloneNode(true);
        timeTableBody.append(newTimeRow);
    }
}

function HideLevelNameColumn ()
{
    const levelNameCol = document.getElementsByClassName("mapNameColumn");
    for (let i = 0; i < levelNameCol.length; i++)
    {
        levelNameCol[i].style.display = "none";
    }
}
function ShowLevelNameColumn ()
{
    const levelNameCol = document.getElementsByClassName("mapNameColumn");
    for (let i = 0; i < levelNameCol.length; i++)
    {
        levelNameCol[i].style.display = "block";
    }
}

/////////////////////////////////////////////////////////////////

function IsPicServiceSupoorted (url)
{
    const supportedDomains = 
    [
        "i.postimg.cc",
        "i.ibb.co",
        "i.imgur.com",
        "media.discordapp.net",
        "cdn.discordapp.com",
        "ghost-miner.github.io",
    ]

    for (let i = 0; i < supportedDomains.length; i++)
    {
        chosenDomain = supportedDomains[i];
        if (url.includes(chosenDomain))
        {
            return true;
        }
    }
    return false;
}

// Add spaces to separate thousand and million (69420 => 69 420 (plase laugh))
function SplitScore(scoreNum)
{
    const inputNumber = scoreNum; // Input value
    const inputNumsChars = inputNumber.split('').reverse(); // Split into indiviual charascters and reverse it 
    let   outputNumber = ""; // Initialize output string

    for (let i = 0; i < inputNumsChars.length; i++)
    {
        // 3: thousand, 6: million
        if (i == 3 || i == 6)
        {
            outputNumber = outputNumber + "\xa0" + inputNumsChars[i];
        }
        else
        {
            outputNumber = outputNumber + inputNumsChars[i];
        }
    }
    // Split output string into individual characters, reverse the order, and join all characters back together
    return outputNumber.split('').reverse().join('');
}

// Remove that werd character at the end of version numbers.
// this function follows the same structure as SplitScore(scoreNum). 
function FormatVersionNumber (versionString)
{
    const inputVerString = versionString;
    const versionChars = inputVerString.split('');
    let   outputVerString = "";

    for (let i = 0; i < versionChars.length; i++)
    {
        if (versionChars[i] == "´")
        {
            break;
        }
        outputVerString = outputVerString + versionChars[i];
    }
    return outputVerString;
}

// Change the date format to day/month/year
// this function follows the same structure as SplitScore(scoreNum). 
function FormatSubmissionDate (dateString)
{
    // Do format the date if it doesnt contain dah (which means it already formatted)
    if (!dateString.includes("-"))
    {
        return dateString;
    }
    const inputDate = dateString; 
    const dateChars = inputDate.split('');
    let outputDateString = "";

    let dayStr = ""; // Day part
    let monthStr = ""; // month part
    let yearStr = ""; // year part
    let dashCount = 0; // first dash separates year from month, second one separates mknth from day
    for (let i = 0; i < dateChars.length; i++)
    {
        // This character is uput at the end to keep the date in plain text. Skip it while formatting
        if (dateChars[i] == "´")
        {
            continue;
        }
        // Skip to the next character 
        if (dateChars[i] == "-")
        {
            dashCount++;
            continue;
        }
        switch(dashCount)
        {
            case 0: // Year
                yearStr = yearStr + dateChars[i];
                break;
            
            case 1: // Month
                monthStr = monthStr + dateChars[i];
                break;
            
            case 2: // Day
                dayStr = dayStr + dateChars[i];
                break;
            
        }
    }

    return (dayStr + "/" + monthStr + "/" + yearStr);
}

function GetEmbedYTLink (vidLink)
{
    let videoIDChars = new Array();
    let vidIDIndex = 0;
    let vidIDString = "";

    const ytLink = "https://youtube.com/embed/";
    const inputStr = vidLink;
    const chars = inputStr.split(''); 

    for (let i = chars.length - 1; i >= 0; i--)
    {
        if (chars[i] == "=" || chars[i] == "/")
        {
            break;
        }
        videoIDChars[vidIDIndex] = chars[i]; 
        vidIDIndex++;
    }

    // console.log(chars);
    // console.log("------------------------");
    // console.log(videoIDChars)//.reverse());

    let IDs = videoIDChars.reverse();
    for (let i = 0; i < IDs.length; i++)
    {
        vidIDString = vidIDString + IDs[i];
    }
    // console.log(vidIDString);
    return (ytLink + vidIDString);
}


function ShortenYTLink (url)
{
    let videoIDChars = new Array();
    let vidIDIndex = 0;
    let vidIDString = "";

    const ytLink = "youtu.be/";
    const inputStr = url;
    const chars = inputStr.split(''); 

    for (let i = chars.length - 1; i >= 0; i--)
    {
        if (chars[i] == "=" || chars[i] == "/")
        {
            break;
        }
        videoIDChars[vidIDIndex] = chars[i]; 
        vidIDIndex++;
    }

    // console.log(chars);
    // console.log("------------------------");
    // console.log(videoIDChars)//.reverse());

    let IDs = videoIDChars.reverse();
    for (let i = 0; i < IDs.length; i++)
    {
        vidIDString = vidIDString + IDs[i];
    }
    // console.log(vidIDString);
    return (ytLink + vidIDString);
}

function RemoveTimeFromData (dateAndTime)
{
    if (dateAndTime.length <= 10 && dateAndTime.includes("/"))
    {
        return dateAndTime;
    }
    let dateChars = new Array();
    let finalDateString = "";

    const inputString = dateAndTime;
    const inputChars = inputString.split('');

    if (dateAndTime.includes("-"))
    {
        for (let i = 0; i < inputChars.length - 1; i++)
        {
            dateChars[i] = inputChars[i];
        }
    }
    else
    {       
        for (let i = 0; i < inputChars.length - 5; i++)
        {
            dateChars[i] = inputChars[i];
        }
    }
    for (let i = 0; i < dateChars.length; i++)
    {
        finalDateString = finalDateString + dateChars[i];
    }

    //console.log(finalDateString.length);
    return finalDateString;
}

/////////////////////////////////////////////////

function FormatPerksOrMutatorsList (toFormat)
{
    // console.log("= FormatPerksOrMutatorsList ======================================");
    let perksArrString = "";
    let perksArr = new Array();
    let perksArrIndex = 0;

    const inputString = toFormat;
    const inputChars = inputString.split('');

    let formattedString = "";

    for (let i = 0; i < inputChars.length; i++)
    {
        // console.log("ICL: "+ inputChars.length + "; " + i
        if (inputChars[i] == ";")
        {
            inputChars[i] = "";
            perksArr[perksArrIndex] = perksArrString;
            perksArrIndex++;
            perksArrString = "";
        }
        perksArrString = perksArrString + inputChars[i];
    }
    perksArr[perksArrIndex] = perksArrString;
    perksArrIndex++;
    perksArrString = "";

    // console.log(perksArrString);
    // console.log(perksArr);

    for (let i = 0; i < inputChars.length; i++)
    {
        if (inputChars[i] == ";")
        {
            // console.log("New line");
            inputChars[i] = ", ";
        }
    }    
    for (let i = 0; i < inputChars.length; i++)
    {
        formattedString = formattedString + inputChars[i];
        // perksArr[perksArrIndex] = formattedString;
        // console.log(perksArr);
    }
    // console.log(perksArr + "; " + inputString)
    return formattedString;
}

function FormatPerksOrMutatorIcons(toFormat)
{
    // console.log("====PERSKS OR MUTA===================================");
    let perksArrString = "";
    let perksArr = new Array();
    let perksArrIndex = 0;

    if (toFormat == "")
    {
        console.error("FormatPerksOrMutatorIcons | 'toFormat' argument is empty");
        perksArr[0] = "unknown"
        perksArr[1] = "unknown"
        perksArr[2] = "unknown"
        return perksArr;
    }

    let perksArrStringSplit;
    let perksArrStringCopy = "";

    const inputString = toFormat;
    const inputChars = inputString.split('');

    for (let i = 0; i < inputChars.length; i++)
    {
        // console.log("ICL: "+ inputChars.length + "; " + i);
        if (inputChars[i] == ";" || inputChars[i] == ",")
        {
            inputChars[i] = "";
            perksArr[perksArrIndex] = perksArrString;
            perksArrIndex++;
            perksArrString = "";
        }
        // console.log(inputChars[i]);
        perksArrString = perksArrString + inputChars[i];

        perksArrStringSplit = perksArrString.split('');
        if (perksArrStringSplit[0] == " ")
        {
            console.warn("FormatPerksOrMutatorIcons | Space character is not allowedů");
            perksArrStringCopy = perksArrString;
            perksArrString = "";

            for (let i = 0; i < perksArrStringCopy; i++)
            {
                perksArrString = perksArrString + perksArrStringSplit[i];
            }
        }
    }    
    // perksArrStringSplit = perksArrString.split('');
    // if (perksArrStringSplit[0] == " ")
    // {
    //     console.log("SPACE IS ILLEGAL");
    // }
    perksArr[perksArrIndex] = perksArrString;
    perksArrIndex++;
    perksArrString = "";
    
    // console.log(perksArr);
    return perksArr;
}

function GetMutatorPageName (mutatorName)
{
    const wikiURL = "https://throne-fall.github.io/game%20content/mutators/";
    const extension = ".html";

    switch (mutatorName)
    {
        default:
            console.error("GetMutatorPageName | \"" + mutatorName + "\" is not a valid Mutator name");
            return "#";

        case "Falcon god":
            return (wikiURL + "falcon_god" + extension);

        case "God of death":
            return (wikiURL + "death_god" + extension);

        case "God of destruction":
            return (wikiURL + "destruction_god" + extension);

        case "No towers pact":
            return (wikiURL + "no_towers_pact" + extension);

        case "No units pact":
            return (wikiURL + "no_units_pact" + extension);

        case "No walls pact":
            return (wikiURL + "no_walls_pact" + extension);

        case "Phoenix god":
            return (wikiURL + "phoenix_god" + extension);

        case "Pray to the war gods":
            return (wikiURL + "pray_to_the_war_gods" + extension);

        case "Snake god":
            return (wikiURL + "snake_god" + extension);

        case "Tiger god":
            return (wikiURL + "tiger_god" + extension);

        case "Turtle god":
            return (wikiURL + "turtle_god" + extension);

        case "Wasp god":
            return (wikiURL + "wasp_god" + extension);
    }
}

function GetPerkPageName (perkName)
{
    const wikiURL = "https://throne-fall.github.io/game%20content/perks/";
    const extension = ".html";

    switch (perkName)
    {
        default:
            console.error("GetPerkPageName | \"" + perkName + "\" is not a valid perk name");
            return "#";

        case "Anti-air telescope":
            return (wikiURL + "anti-air telescope" + extension);

        case "Arcane towers":
            return (wikiURL + "arcane towers" + extension);

        case "Archery skills":
            return (wikiURL + "archery skills" + extension);

        case "Architect's council":
            return (wikiURL + "architects council" + extension);

        case "Big harbours":
            return (wikiURL + "big harbours" + extension);

        case "Castle blueprints":
            return (wikiURL + "castle blueprints" + extension);

        case "Castle Fortifications":
            return (wikiURL + "castle fortifications" + extension);

        case "Commander mode":
            return (wikiURL + "commander mode" + extension);

        case "Elite warriors":
            return (wikiURL + "elite warriors" + extension);

        case "Faster research":
            return (wikiURL + "faster research" + extension);

        case "Fortified houses":
            return (wikiURL + "fortified houses" + extension);

        case "Gladiator school":
            return (wikiURL + "gladiator school" + extension);

        case "Glass cannon":
            return (wikiURL + "glass cannon" + extension);

        case "Gods lotion":
            return (wikiURL + "gods lotion" + extension);

        case "Healing spirits":
            return (wikiURL + "healing spirits" + extension);

        case "Health potions":
            return (wikiURL + "health potions" + extension);

        case "Heavy armour":
            return (wikiURL + "heavy armor" + extension);

        case "Ice magic":
            return (wikiURL + "ice magic" + extension);

        case "Indestructible mines":
            return (wikiURL + "indestructable mines" + extension);

        case "Melee damage":
            return (wikiURL + "melee damage" + extension);

        case "Melee resistance":
            return (wikiURL + "melee resistance" + extension);

        case "Power towers":
            return (wikiURL + "power tower" + extension);

        case "Pumpkin fields":
            return (wikiURL + "pumpkin fields" + extension);

        case "Ranged damage":
            return (wikiURL + "ranged damage" + extension);

        case "Ranged resistance":
            return (wikiURL + "ranged resistance" + extension);

        case "Ring of resurrection":
            return (wikiURL + "ring of resurrection" + extension);

        case "Royal mint":
            return (wikiURL + "royal mint" + extension);

        case "Stronger_Heroes_Icon":
            return (wikiURL + "stronger heros" + extension);

        case "Treasure hunter":
            return (wikiURL + "treasure hunter" + extension);

        case "War horse":
            return (wikiURL + "war horse" + extension);

        case "Warrior mode":
            return (wikiURL + "warrior mode" + extension);
    }
}

//////////////////////////////////////////////////////////////////////////////////////

function GetSearchInputSring()
{
    const value = document.getElementById("site-search").value;
    return value;
}
let searchResultsSubs;
function SearchSubByName(searchedString)
{
    if (searchedString == "" || searchedString == null)
    {
        alert("Search input cannot be empty!");
        return;
    }
    if (searchedString.toLowerCase() == "never gonna give you up" || searchedString.toLowerCase() == "rick astley" || searchedString.toLowerCase() == "rick roll")
    {
        // console.log("SECRET FOUND " + searchedString);
        location.replace("./img/rick 720p.mp4");
        return;
    }
    searchResultsSubs = new Array();
    let srcResArrIndex = 0;

    let srcString = searchedString.toUpperCase();
    let chosenSub;
    let subName;
    let subIndex;

    for (let i = 1; i < scoresData.length; i++)
    {
        if (i >= tableMaxRows)
        {
            console.warn("SearchSubByName() | Number of search results is higher than number of available table rows.");
            alert("WARNING: \nNumber of search results is higher than the number of available table rows. \nSome results aren't shown.");
            break;
        }        
        chosenSub = scoresData[i];

        subName = chosenSub[sc_nameColumn].toUpperCase();
        subIndex = chosenSub[sc_sudIndexColumn];

        if (chosenSub[sc_positionColumn] == "" || chosenSub[sc_positionColumn] == null)
        {
            chosenSub[sc_positionColumn] = chosenSub[sc_statusColumn].toUpperCase();
        }

        if (subName.includes(srcString) && !subName.includes("TEST"))
        {
            // console.log("=======================================")
            // console.log("Added match to src res list");
            // console.log("Found match at " + i + ": " + chosenSub[sc_nameColumn]);
            searchResultsSubs[srcResArrIndex] = chosenSub;
            srcResArrIndex++;
        }
    }
    // console.log("== RESULTS ==================");
    // console.log(searchResultsSubs);
    // if (searchResultsSubs[0] == null)
    // {
    //     alert("No result found.");
    //     return;
    // }
    ChangeTableData("Search");
    HideSearchField();
}

function FindSubmissionById(_subID)
{
    let chosenSub;
    let submissionID;
    let subNumber;

    for (let i = 0; i < scoresData.length; i++)
    {
        chosenSub = scoresData[i];
        submissionID = chosenSub[sc_subIDColumn];
        subNumber = chosenSub[sc_sudIndexColumn];

        //console.log(i + " " + subNumber);
        
        if(submissionID == null)
        {
            console.error("FindSubmissionById | submissionID value is invallid or undefined!");
            return;
        }        
        if (submissionID == _subID)
        {
            // console.log("FindSubmissionById | FOUND MATCH AT INDEX " + i);
            ShowSubInfo(subNumber); 
            return;
        }
    }
    
    // console.log("-------------------------------------------------------");
    // console.log("[ WARN] No submission with such ID was found");
    // console.log(chosenSub);
    // console.log(submissionID);
    // console.log(subNumber);
    // console.log("============================================================");
}