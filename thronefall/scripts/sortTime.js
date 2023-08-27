function SpawnTableRowsTime()
{
    let tableRow = document.getElementsByClassName("tableRow");

    for (let i = 0; i < 50; i++)
    {
        let newRow = tableRow[0].cloneNode(true);
        let tBody = document.getElementById("newLbBody").append(newRow);
    }
}

let tableData; // data from entries.csv parsed into an array

async function GetSubDataTime ()
{
    const CSVresponse = await GetCSVFile("time");
    const ParseCSV    = await CSVToArray(CSVresponse);

    tableData = await ParseCSV;

    // console.log("RESPONSE");
    // console.log(ParseCSV);

    SortSubDataTime();
}

// VARIABLES SHARED BY SortSubData AND ChangeTableData
let NeulandSubs = new Array();
let NordfelsSubs = new Array();
let DurststeinSubs = new Array();
let FrostseeSubs = new Array();

let canShowTableData = false;

function SortSubDataTime()
{
    tableData.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));

}