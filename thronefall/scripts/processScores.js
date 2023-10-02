// data from entries.csv parsed into an array
    let tableData;
// Current sort order
    let sortOrder = "down";

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
let UferWindSubs = new Array();

let canShowTableData = false;

function SortSubData ()
{
    // tableData.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    // console.log("SORTED =================");
    // console.log(tableData);

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
        chosenRow[20] = i;

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
    let UFSubNum = -1;

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

            case "Uferwind":
                UFSubNum++;
                UferWindSubs[UFSubNum] = chosenRow;
                break;
            
        }
    }
    NeulandSubs   .sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    NordfelsSubs  .sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    DurststeinSubs.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    FrostseeSubs  .sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    UferWindSubs  .sort((a, b) => parseInt(b[5]) - parseInt(a[5]));
    // console.log("== MAP SUBS SORTED ===========================");
    // console.log(NeulandSubs);
    // console.log(NordfelsSubs);
    // console.log(DurststeinSubs);
    // console.log(FrostseeSubs);

    for (let i = 0; i < NeulandSubs.length; i++)
    {
        chosenRow = NeulandSubs[i];
        chosenRow[21] = i + 1;
    }
    for (let i = 0; i < NordfelsSubs.length; i++)
    {
        chosenRow = NordfelsSubs[i];
        chosenRow[21] = i + 1;
    }
    for (let i = 0; i < DurststeinSubs.length; i++)
    {
        chosenRow = DurststeinSubs[i];
        chosenRow[21] = i + 1;
    }
    for (let i = 0; i < FrostseeSubs.length; i++)
    {
        chosenRow = FrostseeSubs[i];
        chosenRow[21] = i + 1;
    }
    for (let i = 0; i < UferWindSubs.length; i++)
    {
        chosenRow = UferWindSubs[i];
        chosenRow[21] = i + 1;
    }

    canShowTableData = true;
    ChangeTableData('Neuland');

    document.getElementById("timeCategoryButton").disabled = false;
    document.getElementById("demoCategoryButton").disabled = false;

    ShowSubInfo(GetAdressHash());
}

function ChangeTableData(level)
{
    // STOP FUNCTION IF IT'S ALREADY RUNNING
    if (!canShowTableData)
    {
        console.log("NOT READY!");
        return;
    }

    // Reset the leaderboard section to remove all event listenvers
    document.getElementById("leaderboardContent").outerHTML = document.getElementById("leaderboardContent").outerHTML

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

		case "Uferwind":
			chosenArray = UferWindSubs;
			break;
	}

    // CREATE ARRAYS FOR EACH VALUE TYPE
	let position = new Array();
	let names = new Array();
	let score = new Array();
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

        position[i]   = chosenRow[21];
		names[i]      = chosenRow[2];
		score[i]      = chosenRow[5];
		coins[i]      = chosenRow[6];
		date[i]       = chosenRow[8];
		proof[i]      = chosenRow[7];
        subID[i]      = chosenRow[9];
        mutators[i]   = chosenRow[9];
        version[i]    = chosenRow[10];
        usedWeapon[i] = chosenRow[11];
        subIndex[i]   = chosenRow[20];
	}
	// console.log("---------------------------------------------");
	// console.log(names);
	// console.log(score);
	// console.log(coins);
	// console.log(date);
	// console.log(proof);
	// console.log("---------------------------------------------");

    // GET EACH TABLE COLUMN
	const tPosition = document.getElementsByClassName("position");
	const tNames    = document.getElementsByClassName("name");
	const tScore    = document.getElementsByClassName("score");
	const tCoins    = document.getElementsByClassName("coins");
	const tDate     = document.getElementsByClassName("date");
    //const tProof    = document.getElementsByClassName("proof");
    const tMutNums  = document.getElementsByClassName("mutNums");
    const tVersion  = document.getElementsByClassName("version");
    const tWeapon   = document.getElementsByClassName("usedWeapon");
    //const tSubID    = document.getElementsByClassName("subID");

	let tableRows = document.getElementsByClassName("tableRow");

    for (let i = 0; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "table-row";
    }

    // REST TEXT INSIDE CELLS
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

    // ASSIGN TEXT INSIDE EACH CELL
	for (let k = 0; k < chosenArray.length; k++)
	{
		tPosition[k].textContent = position[k];
		tNames[k].textContent = names[k];

        tScore[k].textContent = SplitScore(score[k]);
		tCoins[k].textContent = coins[k];
        tMutNums[k].textContent = mutators[k];
		tDate[k].textContent = RemoveTimeFromData(date[k]);
        tVersion[k].textContent = version[k];
        tWeapon[k].textContent = usedWeapon[k];
        
        tableRows[k].addEventListener("click",() => { ShowSubInfo(subIndex[k]) },false);
	}
    // HIDE ALL EMPTY ROWS
    for (let i = chosenArray.length; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "none";
    }

    // Add order utton to table header
    document.getElementById("th-position")  .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "score")    }, false);
    document.getElementById("th-name")      .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "name")     }, false);
    document.getElementById("th-score")     .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "score")    }, false);
    document.getElementById("th-coins")     .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "gold")     }, false);
    document.getElementById("th-mutNums")   .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "mutators") }, false);
    document.getElementById("th-usedWeapon").addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "weapon")   }, false);
    document.getElementById("th-date")      .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "date")     }, false);
    document.getElementById("th-version")   .addEventListener("click",() => { OrderBoardBy(level.toLowerCase(), "version")  }, false);
    // HIDE LOADING ANIMATION
    document.getElementById("LBLoadingIndicator").style.display = "none";
    // SHOW LEADERBOAR SECTION
    document.getElementById("leaderboardContent").style.display = "block";
    // SET LEADERBOARD TITLE
	document.getElementById("leaderboardNameText").textContent = chosenMap + " high-scores";
}

let sortDown = true;
function OrderBoardBy (map, orderType)
{
    // Initialize array to sort
    let  chosenMapArray = new Array();

    // Get what ma is selected
    switch (map)
    {
        default:
            console.error("OrderBoardBy | Invalid value for map! " + map);
        return;

        case "neuland":
            chosenMapArray = NeulandSubs;
        break;

        case "nordfels":
            chosenMapArray = NordfelsSubs;
        break;

        case "durststein":
            chosenMapArray = DurststeinSubs;
        break;

        case "frostsee":
            chosenMapArray = FrostseeSubs;
        break;

        case "uferwind":
            chosenMapArray = UferWindSubs;
        break;
    }

    // Replace all "unknown"s in mutator columns with -1 for better sorting.
    let chosenRow;
    let chosenMutString;
    let chosenVerString;
    for (let i = 0; i < chosenMapArray.length; i++)
    {
        chosenRow       = chosenMapArray[i];
        chosenMutString = chosenRow[9];
        chosenVerString = chosenRow[10];

        if (chosenMutString == "unknown" || chosenVerString == "unknown")
        {
            // console.log("i: " + i + ", " + chosenRow[21] + " mut unknown " + chosenRow[i]);
            chosenRow[9] = -1;
            chosenRow[10] = -1;
        }
    }

    // Selecte the correct sorting value
    switch (orderType)
    {
        default:
            console.error("OrderBoardBy | Invalid value for orderType! " + orderType);
        return;
        
        case "score":
            chosenMapArray.sort((a,b) => parseInt(b[5]) - parseInt(a[5]));
        break;
        
        case "gold":
            chosenMapArray.sort((a,b) => parseInt(b[6]) - parseFloat(a[6]));
        break;
        
        case "mutators":
            chosenMapArray.sort((a,b) => parseInt(b[9]) - parseInt(a[9]));
        break;
        
        case "version":
            chosenMapArray.sort((a,b) => parseFloat(b[10]) - parseFloat(a[10]));
        break;

        case "weapon":
            chosenMapArray.sort((a,b) => {
                    const weaponA = a[11].toUpperCase(); //console.log("A: " + nameA);
                    const weaponB = b[11].toUpperCase(); //console.log("B: " + nameB);
                    if (weaponA < weaponB) { return -1; }
                    if (weaponA > weaponB) { return  1; }
                    // names must be equal 
                    return 0;    
                } );
        break;

        case "name":
            chosenMapArray.sort((a,b) => {
                    const nameA = a[2].toUpperCase(); //console.log("A: " + nameA);
                    const nameB = b[2].toUpperCase(); //console.log("B: " + nameB);
                    if (nameA < nameB) { return -1; }
                    if (nameA > nameB) { return  1; }
                    // names must be equal 
                    return 0;    
                } );
        break;

        case "date":
                chosenMapArray.sort((a,b) => {
                    const dateA = a[0]; 
                    const dateB = b[0]; 
                    if (dateA > dateB) { return -1; }
                    if (dateA < dateB) { return  1; }
                } );
        break;
    }

    // Sett all mutator column with -1 back to unknown
    for (let i = 0; i < chosenMapArray.length; i++)
    {
        chosenRow       = chosenMapArray[i];
        chosenMutString = chosenRow[9];
        chosenVerString = chosenRow[10];

        if (chosenMutString == "-1")
        {
            // console.log("i: " + i + ", " + chosenRow[21] + " setting back to unknown " + chosenRow[i]);
            chosenRow[9] = "unknown";
        }
        if (chosenVerString == "-1")
        {
            // console.log("i: " + i + ", " + chosenRow[21] + " setting back to unknown " + chosenRow[i]);
            chosenRow[10] = "unknown";
        }
    }
    // console.log("--- chosenMapArray ordered -----------------------------------");
    // console.log(chosenMapArray);

    if (!sortDown)
    {
        let oldArray = chosenMapArray;
        let newArray = new Array()
        let j = 0;
        for (let i = oldArray.length - 1; i >= 0; i--)
        {
            newArray[j] = oldArray[i];
            j++; 
        }
        chosenMapArray = newArray
        // console.log("--------------------------------------");
        // console.log(chosenMapArray);
    }
    sortDown = !sortDown;
    ////////////////////////////////////////////////////////////////

     // CREATE ARRAYS FOR EACH VALUE TYPE
	let position = new Array();
	let names = new Array();
	let score = new Array();
	let coins = new Array();
	let date = new Array();
	let proof = new Array();
    let mutators = new Array();
    let subID = new Array();
    let version = new Array();
    let usedWeapon = new Array();
    let subIndex = new Array();

    // ASSIGN EACH VALUE TYPE
	for (let i = 0; i < chosenMapArray.length; i++)
	{
		chosenRow = chosenMapArray[i];;

        position[i] = chosenRow[21];
		names[i] = chosenRow[2];
		score[i] = chosenRow[5];
		coins[i] = chosenRow[6];
		date[i] = chosenRow[8];
		proof[i] = chosenRow[7];
        subID[i] = chosenRow[9];
        mutators[i] = chosenRow[9];
        version[i] = chosenRow[10];
        usedWeapon[i] = chosenRow[11];
        subIndex[i] = chosenRow[20];
	}

    // GET EACH TABLE COLUMN
	const tPosition = document.getElementsByClassName("position");
	const tNames    = document.getElementsByClassName("name");
	const tScore    = document.getElementsByClassName("score");
	const tCoins    = document.getElementsByClassName("coins");
	const tDate     = document.getElementsByClassName("date");
    //const tProof    = document.getElementsByClassName("proof");
    const tMutNums  = document.getElementsByClassName("mutNums");
    const tVersion  = document.getElementsByClassName("version");
    const tWeapon   = document.getElementsByClassName("usedWeapon");
    //const tSubID    = document.getElementsByClassName("subID");

	let tableRows = document.getElementsByClassName("tableRow");

    for (let i = 0; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "table-row";
    }

    // REST TEXT INSIDE CELLS
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

    // ASSIGN TEXT INSIDE EACH CELL
	for (let k = 0; k < chosenMapArray.length; k++)
	{
		tPosition[k].textContent = position[k];
		tNames[k].textContent = names[k];

        tScore[k].textContent = SplitScore(score[k]);
		tCoins[k].textContent = coins[k];
        tMutNums[k].textContent = mutators[k];
		tDate[k].textContent = RemoveTimeFromData(date[k]);
        tVersion[k].textContent = version[k];
        tWeapon[k].textContent = usedWeapon[k];
        
        tableRows[k].addEventListener("click",() => { ShowSubInfo(subIndex[k]) },false,);
	}
    // HIDE ALL EMPTY ROWS
    for (let i = chosenMapArray.length; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "none";
    }
    console.log(sortDown);

}