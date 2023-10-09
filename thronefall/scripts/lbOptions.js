function ChangeShownTable(tableToShow, sectionName)
{
	console.log("ChangeShownTable: " + tableToShow + "; " + sectionName);
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
	const scoreLevelsButton = document.getElementById("scoreLevelsToggle");
	const timeLevelsButton  = document.getElementById("timeLevelsToggle");
	const demoLevelsButton  = document.getElementById("demoLevelsToggle");

	const scoreCatButton = document.getElementById("scoreCategoryButton");
	const timeCatButton  = document.getElementById("timeCategoryButton"); 
	const demoCatButton  = document.getElementById("demoCategoryButton");

	const leaderboardSection = document.getElementById("leaderBoardMain");
	const oldLeaderboardSection = document.getElementById("oldLeaderBoards")

	// HIDE ALL SUB-CAT BUTTONS
	scoreLevelsButton.style.display = "none";
	timeLevelsButton .style.display = "none";
	demoLevelsButton .style.display = "none";

	// RESET ALL CATEGORY BUTTONS ACTIVE STATE
	scoreCatButton.classList.remove("active");
	timeCatButton .classList.remove("active");
	demoCatButton .classList.remove("active");

	switch (name)
	{
		default:
			console.log("[ ERROR ] In ChangeCategory: " + name + " is not a valid category name!");
		break;

		case "score":
			leaderboardSection.style.display = "block";
			oldLeaderboardSection.style.display ="none";

			// Levels toggle
			scoreLevelsButton.style.display = "grid";
			// Category toggle
			scoreCatButton.classList.add("active");
		break;

		case "time":
			leaderboardSection.style.display = "none";
			oldLeaderboardSection.style.display ="block";

			// Levels toggle
			timeLevelsButton.style.display = "grid";
			// Category toggle
			timeCatButton.classList.add("active");
		break;

		case "demo":
			leaderboardSection.style.display = "none";
			oldLeaderboardSection.style.display ="block";

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

function SpawnTableRows()
{
    let tableRow = document.getElementsByClassName("tableRow");

    for (let i = 0; i < 50; i++)
    {
        let newRow = tableRow[0].cloneNode(true);
        let tBody = document.getElementById("LBtableBody").append(newRow);
    }
}

/////////////////////////////////////////////////////////////////

function IsPicServiceSupoorted (url)
{
    const supportedDomains = 
    [
        "i.postimg.cc",
        "media.discordapp.net",
        "cdn.discordapp.com",
        "ghost-miner.github.io",
        "i.imgur.com"
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

function SplitScore(scoreNum)
{
    let charsArray = new Array();
    let firstDigits = new Array();
    let last3digits = new Array();
    let digitArrNum = 0;
    
    let formattedString = "";
    const str = scoreNum;
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++)
    {
        charsArray[i] = chars[i]; 
    }
    for (let i = 0; i < chars.length - 3; i++)
    {
        firstDigits[i] = chars[i]; 
    }
    for (let i = charsArray.length - 1; i > charsArray.length - 4; i--)
    {
        last3digits[digitArrNum] = charsArray[i];        
        digitArrNum++;
    }
    for (let i = 0; i < firstDigits.length; i++)
    {
        formattedString = formattedString + firstDigits[i];
    }
    formattedString = formattedString + "\xa0"
    for (let i = last3digits.length - 1; i >= 0; i--)
    {
        formattedString = formattedString + last3digits[i];
    }
    return formattedString;
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
    if (dateAndTime.length <= 10)
    {
        return dateAndTime;
    }
    let dateChars = new Array();
    let finalDateString = "";

    const inputString = dateAndTime;
    const inputChars = inputString.split('');

    for (let i = 0; i < inputChars.length - 5; i++)
    {
        dateChars[i] = inputChars[i];
    }
    for (let i = 0; i < dateChars.length; i++)
    {
        finalDateString = finalDateString + dateChars[i];
    }

    //console.log(finalDateString.length);
    return finalDateString;
}

function FormatPerksOrMutatorsList (toFormat)
{   
    const inputString = toFormat;
    const inputChars = inputString.split('');

    let formattedString = "";

    for (let i = 0; i < inputChars.length; i++)
    {
        if (inputChars[i] == "\n")
        {
            console.log("New line");
            inputChars[i] = ", ";
        }
    }
    
    for (let i = 0; i < inputChars.length; i++)
    {
        formattedString = formattedString + inputChars[i];
    }
    return formattedString;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LinkSplice (_inputString, _subID)
{
    const fileWebsite = "http://thronefall.maweb.eu/files/score/Thronefall score submission";
    const subID = _subID; 

    // Input
    const inputString = _inputString;
    const inputChars = inputString.split('');

    // Output
    let outCharsIndex = 0;
    let outputChars = new Array();
    let outputString = "";
    let finalString = "";

    inputChars.reverse();
    for (let i = 0; i < inputChars.length; i++)
    {
        if (inputChars[i] == "/")
        {
            console.log("FOUND SSLASH " + i);
            break;
        }
        outputChars[outCharsIndex] = inputChars[i];
        outCharsIndex++;
    }
    outputChars.reverse();
    console.log(outputChars);

    for (let i = 0; i < outputChars.length; i++)
    {
        outputString = outputString + outputChars[i];
    }
    console.log(outputString);

    finalString = fileWebsite + "/" + subID + "/" + outputString;
    
    document.getElementById("someText").href = finalString;
    document.getElementById("someText").textContent = finalString;
    
    //console.log(finalString);
    return finalString;
}

function SearchSubs (_subID)
{
    let chosenSub;
    let submissionID;
    let subNumber;

    for (let i = 0; i < tableData.length; i++)
    {
        chosenSub = tableData[i];
        submissionID = chosenSub[14];
        subNumber = chosenSub[20];

        if (submissionID == _subID)
        {
            console.log("SearchSubs | FOUND MATCH AT INDEX" + i);
        }
    }
    ShowSubInfo(subNumber);
}