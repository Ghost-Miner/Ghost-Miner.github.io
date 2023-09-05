// Unparsed values
// let rawValString;
// let rawValChars = new Array();

// Parsed valzes
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

function ShowSubInfo (submission)
{
    if (submission == undefined || submission[0] == "Submission Date" || submission[3] != "Early access")
    {
        console.error("Invalid submission");
        return;
    }
    console.log(submission);
    
    if (submission[1] == "o")
    {
        console.log("OBSOLETE");
    }
    if (submission[1] == "r")
    {
        console.log("REJECTED");
    }

    s_position   = "N/A";
    s_name       = submission[2];
    s_score      = submission[5];
    s_gold       = submission[6];
    s_mutators   = submission[9];
    s_proof      = submission[7];
    s_usedWeapon = submission[11];
    s_version    = submission[10];
    s_date       = submission[8];

    ShowScores ();
}