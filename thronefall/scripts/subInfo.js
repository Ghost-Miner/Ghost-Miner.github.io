let s_position   = "";
let s_name       = "";
let s_score      = "";
let s_gold       = "";
let s_mutators   = "";
let s_proof      = "";
let s_usedWeapon = "";
let s_version    = "";
let s_date       = "";
let s_perks      = "";
let s_mutList    = "";
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

function CloseSubInfoWindow() 
{
	document.getElementById("subInfoOverlayWindow").style.display = "none";
	location.hash = "";		
	ResetSubInfoWindowValues ();
}

function ShowSubInfo (submissionIndex)
{
    // console.log("===== NEW SUBUINFI =========");
    // submissionIndex = ExtractSubNumber(submissionIndex);
    // ResetSubInfoWindowValues();

    // if (submissionIndex.includes("submit"))
    // {
    //     return;
    // }

    // document.getElementById("obsoleteSubInfoBar").style.display = "none";
    // document.getElementById("rejectedSubInfoBar").style.display = "none";
    
    if (submissionIndex == "")
    {   return;   }
    if (submissionIndex >= tableData.length || submissionIndex == undefined)
    {
        console.warn("ShowSubInfo | Invalid submission index: " + submissionIndex);
        return;
    }    
    const chosenSubmission = tableData[submissionIndex];
    if (chosenSubmission[0] == "Submission Date" || chosenSubmission[3] != "Early access")
    {
        console.warn("ShowSubInfo | Invalid submission " + chosenSubmission + "; " + submissionIndex);
        return;
    }
   // console.log(chosenSubmission);
    
    if (chosenSubmission[1] == "o")
    {
        console.log("OBSOLETE");
        document.getElementById("obsoleteSubInfoBar").style.display = "block";
    }
    if (chosenSubmission[1] == "r")
    {
        console.log("REJECTED");
        document.getElementById("rejectedSubInfoBar").style.display = "block";
    }

    s_position   = chosenSubmission[21];
    s_name       = chosenSubmission[2];
    s_score      = chosenSubmission[5];
    s_gold       = chosenSubmission[6];
    s_mutators   = chosenSubmission[9];
    // video (old) proof = 7
    // image (new) proof = 17
    s_proof      = chosenSubmission[7]; 
        if (s_proof == "")
        {
            console.log("Submission #" + submissionIndex + " uses image (new) proof");
            s_proof = chosenSubmission[17];
        }
    s_usedWeapon = chosenSubmission[11];
    s_version    = chosenSubmission[10];
    s_date       = chosenSubmission[8];
    s_perks      = chosenSubmission[13]
    s_mutList    = chosenSubmission[12]

    location.hash = "score=" + submissionIndex;
    // ShowScores ();
    AssignSubInfoWindowValues();
}

function AssignSubInfoWindowValues ()
{    
    document.getElementById("subIinfoVideoDiv").style.display = "none";
    document.getElementById("subIinfoImageDiv").style.display = "none";
    document.getElementById("subIinfoExternalImgDiv").style.display = "none";

    if (IsPicServiceSupoorted(s_proof))
    {
        document.getElementById("subIinfoImageDiv").style.display = "block";
        document.getElementById("subInfoImg").src = s_proof;
        document.getElementById("subInfoImgLink").href = s_proof;
    }
    else
    {
        if (s_proof.includes("youtu"))
        {
            document.getElementById("subIinfoVideoDiv").style.display = "block";
            document.getElementById("subInfoVideo").src = GetEmbedYTLink(s_proof);
            document.getElementById("subIinfoFileUrl").href = s_proof;
            document.getElementById("subIinfoFileUrl").textContent = ShortenYTLink(s_proof);
            // document.getElementById("subInfoImg").style.display = "none";            
        }
        else
        {
            document.getElementById("subIinfoExternalImgDiv").style.display = "block";
            document.getElementById("extenralImgButtonLink").href = s_proof;
        }
    }

    if (s_perks != "")
    {   document.getElementById("si_perksList").textContent = FormatPerksOrMutatorsList(s_perks);  }
    else
    {   document.getElementById("si_perksList").textContent = "Unknown";    }
    
    if (s_mutList != "")
    {   document.getElementById("si_mutatorsList").textContent = FormatPerksOrMutatorsList(s_mutList); }
    else
    {   document.getElementById("si_mutatorsList").textContent = s_mutators; }

    document.getElementById("si_position").textContent = "#" + s_position;

    document.getElementById("si_name").textContent = s_name;
    document.getElementById("si_score").textContent = SplitScore(s_score);
    document.getElementById("si_gold").textContent = s_gold;
    // document.getElementById("si_mutators").textContent = s_mutators;
    document.getElementById("si_weapon").textContent = s_usedWeapon;
    document.getElementById("si_version").textContent = s_version;
    document.getElementById("si_date").textContent = RemoveTimeFromData(s_date);
    
    document.getElementById("subInfoOverlayWindow").style.display = "block";
}
function ResetSubInfoWindowValues ()
{
    document.getElementById("obsoleteSubInfoBar").style.display = "none";
    document.getElementById("rejectedSubInfoBar").style.display = "none";

    document.getElementById("subInfoVideo").src = "";
    document.getElementById("subInfoImg").src = "";

    document.getElementById("subIinfoVideoDiv").style.display = "none";
    document.getElementById("subIinfoImageDiv").style.display = "none";
    document.getElementById("subIinfoExternalImgDiv").style.display = "none";

    document.getElementById("si_name").textContent     = ""
    document.getElementById("si_score").textContent    = "";
    document.getElementById("si_gold").textContent     = "";
    // document.getElementById("si_mutators").textContent = "";
    document.getElementById("si_weapon").textContent   = "";
    document.getElementById("si_version").textContent  = "";
    document.getElementById("si_date").textContent     = "";
    // document.getElementById("sil_proof").textContent    = "";
}