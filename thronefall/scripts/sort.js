function SpawnTableRows()
{
    let tableRow = document.getElementsByClassName("tableRow");

    for (let i = 0; i < 50; i++)
    {
        let newRow = tableRow[0].cloneNode(true);
        let tBody = document.getElementById("newLbBody").append(newRow);
    }
}

let tableData; // data from entries.csv parsed into an array

async function GetSubData ()
{
    const CSVresponse = await GetCSVFile("score");
    const ParseCSV    = await CSVToArray(CSVresponse);

    tableData = await ParseCSV;

    // console.log("RESPONSE");
    // console.log(ParseCSV);

    SortSubData();
}

// VARIABLES SHARED BY SortSubData AND ChangeTableData
let NeulandSubs = new Array();
let NordfelsSubs = new Array();
let DurststeinSubs = new Array();
let FrostseeSubs = new Array();

let canShowTableData = false;

function SortSubData ()
{
    tableData.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    console.log("SORTED =================");
    console.log(tableData);

    // DISPLAY ARRAY CONTENT
    // console.log("-- ALL SUBS ---------------------------------------------");
    // console.log(tableData);
    let chosenRow;

    // REMOV ALL SUBMISSIOSN THAT ARENT EARLY ACCESSS
    let fullGameSubs = new Array();
    let fullGameSubsNum = -1;

    for (let i = 0; i < tableData.length; i++)
    {
        chosenRow = tableData[i];

        if (chosenRow[3] == "Early access")
        {
            fullGameSubsNum++;
            fullGameSubs[fullGameSubsNum] = chosenRow;
            // console.log("Element " + i + ", "+ fullGamearrNum + " is full");
        }
    }
    // console.log("== FULL GAME SUBS SORTED ===========================")
    // console.log(fullGameSubs);

    // REMOVE ALL SUBS THAT ARENT ACCEPTED

    let acceptedSubs = new Array();
    let acceptedSubsNumber = -1;

    for (let i = 0; i < fullGameSubs.length; i++)
    {
        chosenRow = fullGameSubs[i];

        if (chosenRow[1] == "a")
        {
            acceptedSubsNumber++;
            acceptedSubs[acceptedSubsNumber] = chosenRow;
        }
        else
        {
            //console.log(chosenRow[1]);
        }
    }
    // console.log("== ACCEPTED SUBS SORTED ===========================")
    // console.log(acceptedSubs);

    // SORT BY MAP
    let NLSubNum = -1;
    let NFSubNum = -1;
    let DSSubNum = -1;
    let FSSubNum = -1;

    for (let i = 0; i < acceptedSubs.length; i++)
    {
        chosenRow = acceptedSubs[i];
        level = chosenRow[4];

        switch (level)
        {
            default:
                console.log("WARNING: " + chosenRow + " donest match with anxthing");
                break;

            case "Neuland":
                NLSubNum++;
                NeulandSubs[NLSubNum] = chosenRow;
                break;

            case "Nordfels":
                NFSubNum++;
                NordfelsSubs[NFSubNum] = chosenRow;
                break;

            case "Durststein":
                DSSubNum++;
                DurststeinSubs[DSSubNum] = chosenRow;
                break;
            case "Durststein":
                DSSubNum++;
                DurststeinSubs[DSSubNum] = chosenRow;
                break;

            case "Frostsee":
                FSSubNum++;
                FrostseeSubs[FSSubNum] = chosenRow;
                break;
        }
    }
    NeulandSubs.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    NordfelsSubs.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    DurststeinSubs.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    FrostseeSubs.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    // console.log("== MAP SUBS SORTED ===========================");
    // console.log(NeulandSubs);
    // console.log(NordfelsSubs);
    // console.log(DurststeinSubs);
    // console.log(FrostseeSubs);

    canShowTableData = true;
    ChangeTableData('Neuland');

    document.getElementById("newTimCatToggle").disabled = false;
    document.getElementById("newDemoCatToggle").disabled = false;
}

function ChangeTableData(level)
{
    if (!canShowTableData)
    {
        console.log("NOT READY!");
        return;
    }

	//console.log(document.getElementsByClassName("tableRow").length);
	// SORT ITEMS INTO CORRESPOINDING VALUES
	let chosenArray;
	let chosenMap = level;

	switch (chosenMap)
	{
		case "Neuland":
			chosenArray = NeulandSubs;
			break;

		case "Nordfels":
			chosenArray = NordfelsSubs;
			break;

		case "Durststein":
			chosenArray = DurststeinSubs;
			break;
		case "Durststein":
			chosenArray = DurststeinSubs;
			break;

		case "Frostsee":
			chosenArray = FrostseeSubs;
			break;
	}

	let names = new Array();
	let score = new Array();
	let coins = new Array();
	let date = new Array();
	let proof = new Array();
    let mutators = new Array();
    let subID = new Array();
    let version = new Array();
    let usedWeapon = new Array();

	for (let i = 0; i < chosenArray.length; i++)
	{
		chosenRow = chosenArray[i];;

		names[i] = chosenRow[2];
		score[i] = chosenRow[5];
		coins[i] = chosenRow[6];
		date[i] = chosenRow[8];
		proof[i] = chosenRow[7];
        subID[i] = chosenRow[9];
        mutators[i] = chosenRow[9];
        version[i] = chosenRow[10];
        usedWeapon[i] = chosenRow[11];
	}
	// console.log("---------------------------------------------");
	// console.log(names);
	// console.log(score);
	// console.log(coins);
	// console.log(date);
	// console.log(proof);
	// console.log("---------------------------------------------");

	const tPosition = document.getElementsByClassName("position");
	const tNames    = document.getElementsByClassName("name");
	const tScore    = document.getElementsByClassName("score");
	const tCoins    = document.getElementsByClassName("coins");
	const tDate     = document.getElementsByClassName("date");
	const tProof    = document.getElementsByClassName("proof");
    const tMutNums  = document.getElementsByClassName("mutNums");
    const tVersion  = document.getElementsByClassName("version");
    const tWeapon   = document.getElementsByClassName("usedWeapon");
    // const tSubID    = document.getElementsByClassName("subID");

	let tableRows = document.getElementsByClassName("tableRow");
    for (let i = 0; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "table-row";
    }

	for (let k = 0; k < tableRows.length; k++)
	{
		tPosition[k].textContent = "";
		tNames[k].textContent = "";
		tScore[k].textContent = "";
		tCoins[k].textContent = "";
		tDate[k].textContent = "";
        tMutNums[k].textContent = "";
        tVersion[k].textContent = "";
        tWeapon[k].textContent = "";
        // tSubID[k].textContent = "";
	}

    let isVideo = false;
    let proofString;
    const videoString = "youtu";
    let scoreValue;
    let videoLinkToSplit;
    
	for (let k = 0; k < chosenArray.length; k++)
	{
		tPosition[k].textContent = k + 1;
		tNames[k].textContent = names[k];
        tScore[k].textContent = SplitScore(score[k]);
		tCoins[k].textContent = coins[k];
        tMutNums[k].textContent = mutators[k];
		tDate[k].textContent = RemoveTimeFromData(date[k]);
        tVersion[k].textContent = version[k];
        tWeapon[k].textContent = usedWeapon[k];

        proofString = proof[k];
        isVideo = proofString.includes(videoString);

        const externalLinkDivsPart1 = "<div id=\"extProofLinkDivWrapper\"> <div id=\"extProofLinkDivText\"> <a class=\"extProofLink\" href=\""
        const externalLinkDivsPart2 = "\" target=\"_blank\"> Screenshot </a> </div> <div id=\"extProofLinkDivIcon\"> <img src=\"./img/external thin.png\" id=\"extProofLinkDivImg\"> </div> </div>"

        if (isVideo) // Link goes to a video
        {   
            tProof[k].innerHTML = "<a class='ScoreProofLink' title='Proof of the highscore' onclick='OpenVideoWindow(\"" + GetEmbedYTLink(proof[k]) + "\")'> Video </a>";  
        }
        else // Link goes to a picture
        {   
            if (IsPicServiceSupoorted(proof[k]))
            {
                tProof[k].innerHTML = "<a class='ScoreProofLink' title='Proof of the highscore' onclick='OpenProofWindowImage(\"" + proof[k] + "\")'> Screenshot </a>";
            }
            else
            {
                // tProof[k].innerHTML = "<a class='ScoreProofLink' title='Proof of the highscore' target='_blank' href=\"" + proof[k] + "\"> Screenshot </a>";
                tProof[k].innerHTML = externalLinkDivsPart1 + proof[k] + externalLinkDivsPart2;
            }
        }
        // linkProof[k].href = proof[k];
	}
    for (let i = chosenArray.length; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "none";
    }
    document.getElementById("newLBLoadingImg").style.display = "none";
    document.getElementById("newLBTableSection").style.display = "block";

	document.getElementById("tableName").textContent = chosenMap + " high-scores";
}

function IsPicServiceSupoorted (url)
{
    const supportedDomains = 
    [
        "i.postimg.cc",
        "media.discordapp.net",
        "cdn.discordapp.com",
        "ghost-miner.github.io"
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