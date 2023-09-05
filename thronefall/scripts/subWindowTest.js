let s_position   = "";
let s_name       = "";
let s_score      = "";
let s_gold       = "";
let s_mutators   = "";
let s_proof      = "";
let s_usedWeapon = "";
let s_version    = "";
let s_date       = "";
////////////////////////////
function ShowScores ()
{
    console.log("==== SUBMISSION INFO ==================================");
    console.log("Position: " + s_position);
    console.log("Name: " + s_name);
    console.log("Score: " + s_score);
    console.log("Gold: " + s_gold);
    console.log("Mutators: " + s_mutators);
    console.log("Proof: " + s_proof);
    console.log("UsedWeapon: " + s_usedWeapon);
    console.log("Version: " + s_version); 
    console.log("Date: " + s_date);
    console.log("=======================================================");
}

function ShowSubInfo (submissionIndex)
{
    if (submissionIndex >= tableData.length || submissionIndex == undefined || submissionIndex == "")
    {
        console.error("Invalid submission index.");
        return;
    }    
    const chosenSubmission = tableData[submissionIndex];
    if (chosenSubmission[0] == "Submission Date" || chosenSubmission[3] != "Early access")
    {
        console.error("Invalid submission");
        return;
    }
    console.log(chosenSubmission);
    
    if (chosenSubmission[1] == "o")
    {
        console.log("OBSOLETE");
    }
    if (chosenSubmission[1] == "r")
    {
        console.log("REJECTED");
    }

    s_position   = "N/A";
    s_name       = chosenSubmission[2];
    s_score      = chosenSubmission[5];
    s_gold       = chosenSubmission[6];
    s_mutators   = chosenSubmission[9];
    s_proof      = chosenSubmission[7];
    s_usedWeapon = chosenSubmission[11];
    s_version    = chosenSubmission[10];
    s_date       = chosenSubmission[8];

    location.hash = submissionIndex;
    ShowScores ();
}