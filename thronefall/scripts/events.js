function PageReadyEvent()
{
    console.log("PAGE READY.\nWaiting for leaderboard.");
    document.getElementById("scoreCategoryButton").classList.add("active");

    SelectRandomBackground(1);
    CheckSavedFontStyle();
    CheckSavedTheme();
    CheckAnimState();

    GetformID();
    SpawnTableRows();
    GetSubData();
    OpenSubmitFromURL();
    GetTimeSubData();
    ChangeTimeTableData("Neuland");

    // SetOptionsWinValues();
}

function LeaderBoarReadyEvent ()
{
    console.log("LEADERBOARD READY.");

    ChangeTableData('Neuland'); // Load Neuland subs
    // Enable category btuttons
    document.getElementById("timeCategoryButton").disabled = false;
    document.getElementById("demoCategoryButton").disabled = false;

    ShowSubInfo(GetAdressHash()); // Open submission by its number
    FindSubmissionById(GetAdressHash()); // Open submission by its ID
}