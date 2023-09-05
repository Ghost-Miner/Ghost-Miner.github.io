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
    document.getElementById("newSubInfoTest").style.display = "none";

    document.getElementById("sil_name").textContent     = ""
    document.getElementById("sil_score").textContent    = "";
    document.getElementById("sil_gold").textContent     = "";
    document.getElementById("sil_mutators").textContent = "";
    document.getElementById("sil_proof").textContent    = "";
    document.getElementById("sil_weapon").textContent   = "";
    document.getElementById("sil_version").textContent  = "";
    document.getElementById("sil_date").textContent     = "";

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

    document.getElementById("sil_name").textContent = s_name;
    document.getElementById("sil_score").textContent = s_score;
    document.getElementById("sil_gold").textContent = s_gold;
    document.getElementById("sil_mutators").textContent = s_mutators;
    document.getElementById("sil_proof").textContent = s_proof;
    document.getElementById("sil_weapon").textContent = s_usedWeapon;
    document.getElementById("sil_version").textContent = s_version;
    document.getElementById("sil_date").textContent = s_date;
    
    document.getElementById("newSubInfoTest").style.display = "block";
}