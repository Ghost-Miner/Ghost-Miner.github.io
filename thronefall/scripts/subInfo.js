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
        // console.warn("ShowSubInfo | Invalid submission index: " + submissionIndex);
        return;
    }    
    const chosenSubmission = tableData[submissionIndex];
    if (chosenSubmission[0] == "Submission Date" || chosenSubmission[3] != "Early access")
    {
        // console.warn("ShowSubInfo | Invalid submission " + chosenSubmission + "; " + submissionIndex);
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
            console.log("Submission #" + submissionIndex + " uses new image proof");
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
    AssignSubInfoIcons();
}

function AssignSubInfoWindowValues ()
{
    // Hude all proof types elements
    document.getElementById("subIinfoVideoDiv").style.display = "none";
    document.getElementById("subIinfoImageDiv").style.display = "none";
    document.getElementById("subIinfoExternalImgDiv").style.display = "none";

    //  Assing corect proof
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

    // Assign perks
    if (s_perks != "")
    {   document.getElementById("si_perksList").textContent = FormatPerksOrMutatorsList(s_perks);  }
    else
    {   document.getElementById("si_perksList").textContent = "Unknown";    }
    
    //  Assign uttators
    if (s_mutList != "")
    {   document.getElementById("si_mutatorsList").textContent = FormatPerksOrMutatorsList(s_mutList); }
    else
    {   document.getElementById("si_mutatorsList").textContent = s_mutators; }

    // Assign positiom 
    document.getElementById("si_position").textContent = "#" + s_position;

    //  Assign the rest
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


function AssignSubInfoIcons ()
{
    document.getElementById("si_perksList").style.display = "none";
    document.getElementById("si_mutatorsList").style.display = "none";
    // document.getElementById("si_weapon").style.display = "none";

    // W E A P O N
    let weaponIcon = document.getElementById("subInfoWeaponIcon");
    let weaponWikiLink = document.getElementById("weaponWikiLink");
    let usedWeapon = s_usedWeapon;

    switch(usedWeapon)
    {
        default:
            weaponIcon.src = "../img/error.png";
            weaponIcon.title = ("< ! > \"" + usedWeapon + "\" is not on the list of recognized weapons.");
            break;

        case "unknown":
            weaponIcon.src = "../img/icons/unknown icon.png";
            weaponIcon.title = "Unknown";
            break;

        case "Bow":
            weaponIcon.src = "./img/icons/weapons/Long_Bow_Icon.png";
            weaponIcon.title = "Bow";
            // weaponWikiLink.href = "https://throne-fall.github.io/game%20content/weapons/Bow.html";
            break;
            
        case "Spear":
            weaponIcon.src = "./img/icons/weapons/Spear_Icon.png";
            weaponIcon.title = "Spear";
            // weaponWikiLink.href = "https://throne-fall.github.io/game%20content/weapons/Spear.html";
            break;
            
        case "Sword":
            weaponIcon.src = "./img/icons/weapons/Sword_Icon.png";
            weaponIcon.title = "Sword";
            // weaponWikiLink.href = "https://throne-fall.github.io/game%20content/weapons/Sword.html";
            break;
            
        case "Lightning staff":
            weaponIcon.src = "./img/icons/weapons/Lightning_Staff_Icon.png";
            weaponIcon.title = "Lightning staff";
            // weaponWikiLink.href = "https://throne-fall.github.io/game%20content/weapons/Lightning_Staff.html";
            break;
    }

    // P E R K S 
    let perksIcons = document.getElementsByClassName("subInfoPerkIcon");
    let perkWikiLink = document.getElementsByClassName("perkWikiLink");
    let perkName = document.getElementsByClassName("subInfoPerkName");
    let usedPerks = FormatPerksOrMutatorIcons(s_perks);
    let chosenPerk;

    for (let i = 0; i < perksIcons.length; i++)
    {
        chosenPerk = usedPerks[i];

        if (chosenPerk == "unknown")
        {
            perksIcons[i].src = "../img/icons/unknown icon.png";
            perksIcons[i].title = chosenPerk; 
            perkName[i].textContent = usedPerks[i];
        }
        else if (chosenPerk == "None" || chosenPerk == "- NONE -" || chosenPerk == "NONE")
        {
            if (usedPerks.length <= 1)
            {
                // Left
                perksIcons[0].src = "../img/nothing.png";
                perksIcons[0].title = ""; 
                perkName[0].textContent = "";
                // Middle
                perksIcons[1].src = "../img/nothing.png";
                perksIcons[1].title = chosenPerk; 
                perkName[1].textContent = chosenPerk;
                // Right
                perksIcons[2].src = "../img/nothing.png";
                perksIcons[2].title = ""; 
                perkName[2].textContent = "";

                break;
            }
        }
        else
        {
            perksIcons[i].src = "../img/icons/perks/" + chosenPerk + ".png";
            perksIcons[i].title = chosenPerk; 
            perkName[i].textContent = usedPerks[i];
        }
        // perkWikiLink[i].href = "https://throne-fall.github.io/game%20content/perks/" + chosenPerk.toLowerCase();
    }

    // M U T A T O R S
    let mutatorIcons = document.getElementsByClassName("subInfomutatorIcon");
    let mutatorWikiLink = document.getElementsByClassName("perkWikiLink");
    let mutatorName = document.getElementsByClassName("subInfoMutatorName");
    let usedMutators = FormatPerksOrMutatorIcons(s_mutList);
    let chosenMutator;

    for (let i = 0; i < mutatorIcons.length; i++)
    {
        chosenMutator = usedMutators[i];

        if (chosenMutator == "unknown")
        {
            document.getElementById("si_mutatorsList").style.display = "block";
            document.getElementById("si_mutatorsList").textContent = chosenMutator;

            mutatorIcons[i].src = "../img/nothing.png";
            mutatorIcons[i].title = ""; 
            mutatorName[i].textContent = "";
        }
        else if (chosenMutator == "None" || chosenMutator == "- NONE -" || chosenMutator == "NONE")
        {
            document.getElementById("si_mutatorsList").style.display = "block";
            document.getElementById("si_mutatorsList").textContent = chosenMutator;

            mutatorIcons[i].src = "../img/nothing.png";
            mutatorIcons[i].title = ""; 
            mutatorName[i].textContent = "";
        }
        else 
        {
            mutatorIcons[i].src = "../img/icons/mutators/" + chosenMutator + ".png";
            mutatorIcons[i].title = chosenMutator; 
            mutatorName[i].textContent = usedMutators[i];
        }
    }    
    for (let i = usedMutators.length; i < mutatorIcons.length; i++)
    {
        mutatorIcons[i].src = "../img/nothing.png";
    }
}