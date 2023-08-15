
function SpawnTableRows()
{
    let tableRow = document.getElementsByClassName("tableRow");

    for (let i = 0; i < 50; i++)
    {
        let newRow = tableRow[0].cloneNode(true);
        let tBody = document.getElementById("tbody").append(newRow);
    }
}

let tableData;

async function GetSubData ()
{
    const CSVresponse = await GetCSVFile();
    const ParseCSV = await CSVToArray(CSVresponse);

    tableData = await ParseCSV;

    console.log("RESPINSE");
    console.log(ParseCSV);

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

    // DISPLAY ARRAY CONTENT
    console.log("-- ALL SUBS ---------------------------------------------");
    console.log(tableData);
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
    console.log("== FULL GAME SUBS SORTED ===========================")
    console.log(fullGameSubs);

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
    console.log("== ACCEPTED SUBS SORTED ===========================")
    console.log(acceptedSubs);

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
    console.log("== MAP SUBS SORTED ===========================");
    console.log(NeulandSubs);
    console.log(NordfelsSubs);
    console.log(DurststeinSubs);
    console.log(FrostseeSubs);

    canShowTableData = true;
    ChangeTableData('Neuland');
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

	for (let i = 0; i < chosenArray.length; i++)
	{
		chosenRow = chosenArray[i];;

		names[i] = chosenRow[2];
		score[i] = chosenRow[5];
		coins[i] = chosenRow[6];
		date[i] = chosenRow[8];
		proof[i] = chosenRow[7];
	}
	console.log("---------------------------------------------");
	console.log(names);
	console.log(score);
	console.log(coins);
	console.log(date);
	console.log(proof);
	console.log("---------------------------------------------");

	const tPosition = document.getElementsByClassName("position");
	const tNames    = document.getElementsByClassName("name");
	const tScore    = document.getElementsByClassName("score");
	const tCoins    = document.getElementsByClassName("coins");
	const tDate     = document.getElementsByClassName("date");
	const tProof    = document.getElementsByClassName("proof");
    const linkProof = document.getElementsByClassName("proofLink"); 

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
		//tProof[k].textContent = "";
	}

	for (let k = 0; k < chosenArray.length; k++)
	{
		tPosition[k].textContent = k + 1;
		tNames[k].textContent = names[k];
		tScore[k].textContent = score[k];
		tCoins[k].textContent = coins[k];
		tDate[k].textContent = date[k];
		//tProof[k].textContent = proof[k];
        linkProof[k].href = proof[k];
	}
    for (let i = chosenArray.length; i < tableRows.length; i++)
    {
        tableRows[i].style.display = "none";
    }

    document.getElementById("newLBLoadingImg").style.display = "none";
    document.getElementById("leaderBoardSection").style.display = "block";
    
	document.getElementById("tableName").textContent = chosenMap;
}