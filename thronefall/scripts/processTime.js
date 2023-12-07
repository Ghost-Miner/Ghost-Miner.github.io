let timeData; // data from entries.csv parsed into an array
let ti_sortOrder = "down"; // Current sort order

const ti_subDateColumn     = 0;
const ti_statusColumn      = 1;
const ti_nameColumn        = 2;
const ti_levelColumn       = 3;
const ti_minutesColumn     = 4;
const ti_secondsColumn     = 5;
const ti_milsColumn        = 6;
const ti_proofColumn       = 7;
const ti_userDateColumn    = 8;
const ti_weaponColumn      = 9;
const ti_numOfMutsColumn   = 10;
const ti_versionColumn     = 11;
const ti_goldColumn        = 12;
// const ti_usedMutsColumn    = 11;
// const ti_usedPerksColumn   = 12;
// const ti_notesColumn       = 13;
// const ti_subIDColumn       = 14;
const ti_sudIndexColumn    = 50;
const ti_positionColumn    = 51;
const ti_fullTimeColumn    = 52;
const ti_timeInSecColumn   = 53;

// 
// REQUEST DATA
// 
async function GetTimeSubData ()
{
    const CSVresponse = await GetTimeData(); //GetCSVFile("time"); // Download data
    const ParseCSV    = await CSVToArray(CSVresponse,","); // Convert it to an array

    timeData = await ParseCSV; // Load downloaded data into a variable
    // console.log("RESPONSE");
    // console.log(ParseCSV);
    SortTimeSubData();
}

// VARIABLES SHARED BY SortSubData AND ChangeTableData
// Each array contains list of ubmission for the according level
let ti_NeulandSubsScor     = new Array();
let ti_NordfelsSubs    = new Array();
let ti_DurststeinSubs  = new Array();
let ti_FrostseeSubsa    = new Array();
let ti_UferWindSubs    = new Array();
let ti_FullGamedSubs    = new Array();

let ti_canShowTableData = false;

// 
// SORT DATA
// 
function SortTimeSubData ()
{
    // Currently chosen submission
    let chosenRow;

    // REMOVE ALL SUBS THAT ARENT ACCEPTED
    let acceptedSubs = new Array();
    let acceptedSubsNumber = 0;

    let fulltime;

    for (let i = 0; i < timeData.length; i++)
    {
        chosenRow = timeData[i];

        chosenRow[ti_sudIndexColumn]  = i;
        chosenRow[ti_fullTimeColumn]  = chosenRow[ti_minutesColumn] + ":" + chosenRow[ti_secondsColumn] + ":" + chosenRow[ti_milsColumn];
        chosenRow[ti_timeInSecColumn] = (parseInt(chosenRow[ti_minutesColumn]) * 60) + parseInt(chosenRow[ti_secondsColumn]) + (parseInt(chosenRow[ti_milsColumn]) / 1000);

        if (chosenRow[ti_statusColumn] == "a")
        {
            acceptedSubs[acceptedSubsNumber] = chosenRow;
            acceptedSubsNumber++;
        }
    }
    // console.log("== ACCEPTED SUBS y

    // SORT BY MAP
    let NLSubNum = 0;
    let NFSubNum = 0;
    let DSSubNum = 0;
    let FSSubNum = 0;
    let UFSubNum = 0;
    let FullSubNum = 0;

    for (let i = 0; i < acceptedSubs.length; i++)
    {
        chosenRow = acceptedSubs[i];
        level = chosenRow[ti_levelColumn];

        switch (level)
        {
            default:
                console.error("SortTimeSubData | \"level\" value: " + chosenRow + " is unknown");
                break;

            case "Neuland":
                ti_NeulandSubsScor[NLSubNum] = chosenRow;
                NLSubNum++;
                break;

            case "Nordfels":
                ti_NordfelsSubs[NFSubNum] = chosenRow;
                NFSubNum++;
                break;

            case "Durststein":
                ti_DurststeinSubs[DSSubNum] = chosenRow;
                DSSubNum++;
                break;
            case "Durststein":
                ti_DurststeinSubs[DSSubNum] = chosenRow;
                DSSubNum++;
                break;

            case "Frostsee":
                ti_FrostseeSubsa[FSSubNum] = chosenRow;
                FSSubNum++;
                break;

            case "Uferwind":
                ti_UferWindSubs[UFSubNum] = chosenRow;
                UFSubNum++;
                break;
            case "Full game":
                ti_FullGamedSubs[FullSubNum] = chosenRow;
                FullSubNum++;
                break;
        }
    }

    // SORT LISTS BY SCORE
    ti_NeulandSubsScor.sort((a, b) => parseFloat(b[ti_timeInSecColumn]) + parseFloat(a[ti_timeInSecColumn]));
    ti_NordfelsSubs   .sort((a, b) => parseFloat(b[ti_timeInSecColumn]) + parseFloat(a[ti_timeInSecColumn]));
    ti_DurststeinSubs .sort((a, b) => parseFloat(b[ti_timeInSecColumn]) + parseFloat(a[ti_timeInSecColumn]));
    ti_FrostseeSubsa  .sort((a, b) => parseFloat(b[ti_timeInSecColumn]) + parseFloat(a[ti_timeInSecColumn]));
    ti_UferWindSubs   .sort((a, b) => parseFloat(b[ti_timeInSecColumn]) + parseFloat(a[ti_timeInSecColumn]));

    // console.log("== MAP SUBS SORTED ===========================");
    // console.log(ti_NeulandSubsScor);
    // console.log(ti_NordfelsSubs);
    // console.log(ti_DurststeinSubs);
    // console.log(ti_FrostseeSubsa);

    // ASSIGN SUBMISSION NUMBER
    // Neuland
    for (let i = 0; i < ti_NeulandSubsScor.length; i++)
    {
        chosenRow = ti_NeulandSubsScor[i];
        chosenRow[ti_positionColumn] = i + 1;
    }
    // Nordfels
    for (let i = 0; i < ti_NordfelsSubs.length; i++)
    {
        chosenRow = ti_NordfelsSubs[i];
        chosenRow[ti_positionColumn] = i + 1;
    }
    // Durststein
    for (let i = 0; i < ti_DurststeinSubs.length; i++)
    {
        chosenRow = ti_DurststeinSubs[i];
        chosenRow[ti_positionColumn] = i + 1;
    }
    // Frostsee
    for (let i = 0; i < ti_FrostseeSubsa.length; i++)
    {
        chosenRow = ti_FrostseeSubsa[i];
        chosenRow[ti_positionColumn] = i + 1;
    }
    // Uferwind
    for (let i = 0; i < ti_UferWindSubs.length; i++)
    {
        chosenRow = ti_UferWindSubs[i];
        chosenRow[ti_positionColumn] = i + 1;
    }
    // Full game
    for (let i = 0; i < ti_UferWindSubs.length; i++)
    {
        chosenRow = ti_FullGamedSubs[i];
        chosenRow[ti_positionColumn] = i + 1;
    }

    ti_canShowTableData = true; // ALLOW USER TO CHANGE TABLE
    // ChangeTableData('Neuland'); // Load Neuland ubs

    // ChangeTimeTableData("Durststein");
}


// DISPLAY TABLE FOR REQUESTED LEVEL
function ChangeTimeTableData(level)
{
    // STOP FUNCTION IF IT'S ALREADY RUNNING
    if (!ti_canShowTableData)
    {
        // console.log("NOT READY!");
        return;
    }

    // Hide level name column 
    // HideLevelNameColumn();
    // Reset the leaderboard section to remove all event listenvers
    document.getElementById("t_leaderboardContent").outerHTML = document.getElementById("t_leaderboardContent").outerHTML

	// SORT ITEMS INTO CORRESPOINDING VALUES
	let chosenArray;
	let chosenMap = level;

    // SELECT CORRECR ARRAY
	switch (chosenMap)
	{
		case "Neuland":
			chosenArray = ti_NeulandSubsScor;
			break;

		case "Nordfels":
			chosenArray = ti_NordfelsSubs;
			break;

		case "Durststein":
			chosenArray = ti_DurststeinSubs;
			break;
		case "Durststein":
			chosenArray = ti_DurststeinSubs;
			break;

		case "Frostsee":
			chosenArray = ti_FrostseeSubsa;
			break;

		case "Uferwind":
			chosenArray = ti_UferWindSubs;
			break;

		case "Full":
			chosenArray = ti_FullGamedSubs;
			break;
	}

    // CREATE ARRAYS FOR EACH VALUE TYPE
    let map = new Array();
	let position = new Array();
	let names = new Array();
	let time = new Array();
	let coins = new Array();
	let date = new Array();
	let proof = new Array();
    let mutators = new Array();
    let subID = new Array();
    let version = new Array();
    let usedWeapon = new Array();
    let subIndex = new Array();

    // ASSIGN EACH VALUE TYPE
	for (let i = 0; i < chosenArray.length; i++)
	{
		chosenRow = chosenArray[i];;

        map[i]        = chosenRow[ti_levelColumn];
        position[i]   = chosenRow[ti_positionColumn];
		names[i]      = chosenRow[ti_nameColumn];
		time[i]      = chosenRow[ti_fullTimeColumn];
		coins[i]      = chosenRow[ti_goldColumn];
		date[i]       = chosenRow[ti_userDateColumn];
        // subID[i]      = chosenRow[ti_subIDColumn];
        mutators[i]   = chosenRow[ti_numOfMutsColumn];
        version[i]    = chosenRow[ti_versionColumn];
        usedWeapon[i] = chosenRow[ti_weaponColumn];
        subIndex[i]   = chosenRow[ti_sudIndexColumn];
        proof[i]      = chosenRow[ti_proofColumn];
	}
	// console.log("---------------------------------------------");
	// console.log(names);
	// console.log(score);
	// console.log(coins);
	// console.log(date);
	// console.log(proof);
	// console.log("---------------------------------------------");

    // GET EACH TABLE COLUMN
    const tMapName  = document.getElementsByClassName("t_mapName");
	const tPosition = document.getElementsByClassName("t_position");
	const tNames    = document.getElementsByClassName("t_name");
	const tTime     = document.getElementsByClassName("t_time");
	const tCoins    = document.getElementsByClassName("t_coins");
	const tDate     = document.getElementsByClassName("t_date");
    //const tProof    = document.getElementsByClassName("proof");   DEPRECATED
    const tMutNums  = document.getElementsByClassName("t_mutNums");
    const tVersion  = document.getElementsByClassName("t_version");
    const tWeapon   = document.getElementsByClassName("t_usedWeapon");
    //const tSubID    = document.getElementsByClassName("subID");

	let tableRows = document.getElementsByClassName("timeTableRow");

    for (let i = 0; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "table-row";
    }

    // REST TEXT INSIDE CELLS
	// for (let k = 0; k < tableRows.length; k++)
	// {
	// 	tMapName[k].textContent  = "";
	// 	tPosition[k].textContent = "";
	// 	tNames[k].textContent    = "";
	// 	tTime[k].textContent    = "";
	// 	tCoins[k].textContent    = "";
	// 	tDate[k].textContent     = "";
    //     tMutNums[k].textContent  = "";
    //     tVersion[k].textContent  = "";
    //     tWeapon[k].textContent   = "";
    //     // tSubID[k].textContent = "";
	// }

    // ASSIGN TEXT INSIDE EACH CELL
	for (let k = 0; k < chosenArray.length; k++)
	{
		// tMapName[k] .textContent = map[k];
		tPosition[k].textContent = position[k];
		tNames[k]   .textContent = names[k];

        tTime[k]  .textContent = time[k];
		tCoins[k]  .textContent = coins[k];
        tMutNums[k].textContent = mutators[k];
		tDate[k]   .textContent = RemoveTimeFromData(date[k]);
        tVersion[k].textContent = version[k];
        tWeapon[k] .textContent = usedWeapon[k];
        
        tableRows[k].addEventListener("click",() => { OpenVideoWindow(GetEmbedYTLink(proof[k])) },false);
	}
    // HIDE ALL EMPTY ROWS
    for (let i = chosenArray.length; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "none";
    }

    // Add order utton to table header
    // document.getElementById("th-mapName")   .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "mapName")  }, false);
    // document.getElementById("th-position")  .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "score")    }, false);
    // document.getElementById("th-name")      .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "name")     }, false);
    // document.getElementById("th-score")     .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "score")    }, false);
    // document.getElementById("th-coins")     .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "gold")     }, false);
    // document.getElementById("th-mutNums")   .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "mutators") }, false);
    // document.getElementById("th-usedWeapon").addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "weapon")   }, false);
    // document.getElementById("th-date")      .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "date")     }, false);
    // document.getElementById("th-version")   .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "version")  }, false);
    
    document.getElementById("t_leaderboardContent").style.display = "block";  // SHOW LEADERBOAR SECTION
	document.getElementById("t_leaderboardNameText").textContent = chosenMap + " speed-runs"; // SET LEADERBOARD TITLE
    document.getElementById("searchResultsLegendText").style.display = "none";  // HIDE SEARCH RESULTS LEGEND

    const mutatorColumn = document.getElementsByClassName("t_mutatorsColumn ");
    const weaponColumn = document.getElementsByClassName("t_weaponColumn");
    if (chosenMap == "Neuland")
    {
        for (let i = 0; i < mutatorColumn.length; i++)
        {
            mutatorColumn[i].style.display = "none";
        }
        for (let i = 0; i < weaponColumn.length; i++)
        {
            weaponColumn[i].style.display = "none";
        }
    }
    else
    {
        for (let i = 0; i < mutatorColumn.length; i++)
        {
            mutatorColumn[i].style.display = "table-cell";
        }
        for (let i = 0; i < weaponColumn.length; i++)
        {
            weaponColumn[i].style.display = "table-cell";
        }
    }
    // Hide the "loading page" used to hide the transition from light to dark mode
    // HideLoadingScreen();
}