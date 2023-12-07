function FormSubmitEvent()
{
    document.getElementById("overlayWindow").style.display = "block";
    submitForm();
}
function FormLoadEvent()
{
    CheckSavedTheme();
    SelectRandomBackground(GetRandomInt(1,5));
    GenerateCaptchaText();
    SetSubmissionDate(); SetFormID(); SetSubID(); 
    ValidateCheckboxes();
}

function SetLevelNameValue()
{
    let   levelValue;
    const levelField = document.getElementsByClassName("levelField");

    let usedMutsField = document.getElementById("noMutators");
    let usedPerksField = document.getElementById("noPerks");
    let usedWeaponBow = document.getElementById("Bow");
    let usedWeaponGroup = document.getElementsByName("weaponName");

    HideInputFieldsET(false);
    for (let i = 0; i < levelField.length; i++)
    {
        if (levelField[i].checked)
        {
            // console.log(i+1 + ": " + levelField[i].id);
            levelValue = levelField[i].id;
            if (levelValue == "Neuland")
            {
                usedMutsField.checked = true;
                usedPerksField.checked = true;
                usedWeaponBow.checked = true;

                usedMutsField.disabled = true; // Disable slection for mutators
                usedPerksField.disabled = true; // disable selction for perks
                // disable selection for weapin
                for (let i = 0; i < usedWeaponGroup.length; i++)
                {
                    usedWeaponGroup[i].disabled = true;
                }
                HidePerksSelection('none','noPerks');
                HideMutatorSelection('none','noMutators');
                SetWeaponNameValue();
                ValidateCheckboxes();
            }
            else if (levelValue == "eternalTrials")
            {
                usedMutsField.checked = true;
                // usedPerksField.checked = true;
                usedWeaponBow.checked = true;

                usedMutsField.disabled = true;
                // usedPerksField.disabled = true;
                for (let i = 0; i < usedWeaponGroup.length; i++)
                {
                    usedWeaponGroup[i].disabled = true;
                }
                // HidePerksSelection('none','noPerks');
                HideMutatorSelection('none','noMutators');
                SetWeaponNameValue();
                ValidateCheckboxes();

                HideInputFieldsET(true);
            }
            else
            {
                usedMutsField.checked = false;
                usedPerksField.checked = false;
                usedWeaponBow.checked = false;

                usedMutsField.disabled = false;
                usedPerksField.disabled = false;
                for (let i = 0; i < usedWeaponGroup.length; i++)
                {
                    usedWeaponGroup[i].disabled = false;
                }
                HidePerksSelection('none','noPerks');
                HideMutatorSelection('none','noMutators');
                SetWeaponNameValue();
                ValidateCheckboxes();
            }
            break;
        }
    }
    document.getElementById("levelNameValue").value = levelValue;
    // console.log(levelValue);
}
function SetWeaponNameValue()
{
    let   weaponValue;
    const weaponField = document.getElementsByClassName("weaponField");
    for (let i = 0; i < weaponField.length; i++)
    {
        if (weaponField[i].checked)
        {
            // console.log(i+1 + ": " + weaponField[i].id);
            weaponValue = weaponField[i].id;
            break;
        }
    }
    document.getElementById("weaponNameValue").value = weaponValue;
    // console.log(weaponValue);
}

let mutatorString = "";
let mutatorListIndex = 0;
let mutatorList = new Array();
function AddMutatorToList(mutName, id)
{
    const mutatorField = document.getElementById(id).checked;

    if (mutatorField)
    {
        // console.log("CHECKED");
        mutatorList[mutatorListIndex] = mutName + ", ";
        mutatorListIndex++;
    }
    else
    {
        // mutatorListIndex--;
        // console.log("NT CHECKED");
        for (let i = 0; i < mutatorList.length; i++)
        {
            if (mutatorList[i] == (mutName + ", ") )
            {
                // console.log("found and remoiving");
                mutatorList[i] = "";
            }
            else
            {
                // console.log("Not found");
            }
        }
    }
    
    mutatorString = "";
    for (let i = 0; i < mutatorList.length; i++)
    {
        mutatorString = mutatorString + mutatorList[i];// + "\n";
    }
    
    const mutatorStringField = document.getElementById("mutsList");
    mutatorStringField.value = mutatorString;

    // console.log("=======================");
    // console.log("Mut list: " + mutatorListIndex);
    // console.log(mutatorString);
}

let perksString = "";
let perksListIndex = 0;
let perksList = new Array();
function AddPerkToList(perkName, id)
{
    const perkField = document.getElementById(id).checked;
    if (perkField)
    {
        // console.log("CHECKED OERJK");
        perksList[perksListIndex] = perkName + ", ";
        perksListIndex++;
    }
    else
    {
        // perksListIndex--;
        // console.log("NT CHECKED");
        for (let i = 0; i < perksList.length; i++)
        {
            if (perksList[i] == (perkName + ", ") )
            {
                // console.log("found and remoiving");
                perksList[i] = "";
            }
            else
            {
                // console.log("Not found");
            }
        }
    }
    
    perksString = "";
    for (let i = 0; i < perksList.length; i++)
    {
        perksString = perksString + perksList[i];// + ", ";
    }
    const perkStringField = document.getElementById("perksList");
    perkStringField.value = perksString;

    // console.log("=======================");
    // console.log("Perk list: " + perksListIndex);
    // console.log(perksString);
}

function HidePerksSelection(status,id)
{
    let   perksCheckBs     = document.getElementsByName('usedPerks');
    const perkStringField  = document.getElementById("perksList");
    const perkFieldChecked = document.getElementById(id).checked;

    const perkSelectionDiv  = document.getElementById("usedPerksSelection");
    const noPerksCheck      = document.getElementById("noPerksDiv");
    const unknownPerksCheck = document.getElementById("unknownPerksDiv")

    for (let i = 0; i < perksList.length; i++)
    {
        console.log("Clearing: " + i + " val: " + perksList[i]);
        perksList[i] = "";
    }
    for (let i = 0; i < perksCheckBs.length; i++)
    {
        perksCheckBs[i].checked = false;
    }
    // TRUE
    if (perkFieldChecked)
    {
        document.getElementById("arcaneTowers").checked = true;
        perkSelectionDiv.style.display = "none";
        switch(status)
        {
            default:
                console.error("HidePerksSelection() | Unknown value " + status);
                perkStringField.value = "*unknown value*";
                break;
            case "none":
                perkStringField.value = "None";
                unknownPerksCheck.style.display = "none";
                break;

            case "unknown":
                perkStringField.value = "Unknown";
                noPerksCheck.style.display = "none";
                break;
        }
    }
    // FALSE
    else
    {
        document.getElementById("arcaneTowers").checked = false;
        perkSelectionDiv.style.display = "grid";
        unknownPerksCheck.style.display = "block";
        noPerksCheck.style.display = "block";
        switch(status)
        {
            default:
                console.error("HidePerksSelection() | Unknown value " + status);
                perkStringField.value = "*unknown value*";
                break;
            case "none":
                perkStringField.value = "";
                break;

            case "unknown":
                perkStringField.value = "";
                break;
        }
    }
}

function HideMutatorSelection(status,id)
{    
    let   mutCheckBs    = document.getElementsByName('usedMutators');
    const mutatorFieldChecked = document.getElementById(id).checked;
    const mutatorStringField = document.getElementById("mutsList");

    const mutatorSelectionDiv = document.getElementById("usedMutatorsSelection");
    const noMutatorsCheck = document.getElementById("noMutatorsDiv");
    const unknownMutsCheck = document.getElementById("unknownMutatorsDiv");

    for (let i = 0; i < mutatorList.length; i++)
    {
        console.log("Clearing: " + i + " val: " + mutatorList[i]);
        mutatorList[i] = "";
    }
    for (let i = 0; i < mutCheckBs.length; i++)
    {
        mutCheckBs[i].checked = false;
    }
    if (mutatorFieldChecked)
    {
        document.getElementById("falconGod").checked = true;
        mutatorSelectionDiv.style.display = "none";
        switch(status)
        {
            default:
                console.error("HidePerksSelection() | Unknown value " + status);
                mutatorStringField.value = "*unknown value*";
                break;
            case "none":
                mutatorStringField.value = "None";
                unknownMutsCheck.style.display = "none";

                break;

            case "unknown":
                mutatorStringField.value = "Unknown";
                noMutatorsCheck.style.display = "none";
                break;
        }
    }
    else
    {
        document.getElementById("falconGod").checked = false;
        mutatorSelectionDiv.style.display = "grid";
        noMutatorsCheck.style.display = "block";
        unknownMutsCheck.style.display = "block";
        switch(status)
        {
            default:
                console.error("HidePerksSelection() | Unknown value " + status);
                mutatorStringField.value = "*unknown value*";
                break;
            case "none":
                mutatorStringField.value = "";
                break;

            case "unknown":
                mutatorStringField.value = "";
                break;
        }
    }
}

function HideInputFieldsET(hideItems)
{
    if(hideItems)
    {
        maxChosenPerks = 40;
        document.getElementById("goldDiv").style.display = "none";
        document.getElementById("gold").value = "0";
        document.getElementById("weaponDiv").style.display = "none";
    }
    else
    {
        maxChosenPerks = 3;
        document.getElementById("goldDiv").style.display = "grid";
        document.getElementById("weaponDiv").style.display = "grid";
    }
}

// SYSTEM TIME
function GetLocalTime()
{
    const currDate = new Date();
    const timeString = currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds();
    // console.log(timeString);
    return timeString;
}
function GetLocalDate()
{
    const date = new Date();
    const dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return dateString;
}
function GetLocalDateForField()
{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10)
    { day = "0" + date.getDate(); }
    if (month < 10)
    { month = "0" + (date.getMonth() + 1); }

    const dateString = year + "-" + month + "-" + day;
    return dateString;   
}

// UTC TIME
function GetUtcTime()
{
    const currDate = new Date();
    const timeString = currDate.getUTCHours() + ":" + currDate.getUTCMinutes() + ":" + currDate.getUTCSeconds();
    // console.log(timeString);
    return timeString;
}
function GetUtcDate()
{
    const date = new Date();
    const dateString = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
    return dateString;
}

function SetSubmissionDate()
{
    document.getElementById("subDate").value = GetUtcDate() + " " + GetUtcTime();
}
function SetUserDate()
{
    document.getElementById("date").value = GetLocalDateForField();
}


function GenerateRandomCharacters(strLength) 
{
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-#&@!?$";
    let result = "";
  
    for (let i = 0; i < strLength; i++) 
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }  
    return result;
}
function GenerateRandomLettersAndNumbers(strLength)
{
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
  
    for (let i = 0; i < strLength; i++) 
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }  
    return result;
}
function GenerateRandomNumber(strLength) 
{
    const charset = "0123456789";
    let result = "";
  
    for (let i = 0; i < strLength; i++) 
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }  
    return result.toString();
}

function SetFormID()
{
    document.getElementById("token").value = GetformID();
}
function SetSubID ()
{
    document.getElementById("subID").value = GenerateRandomCharacters(16);
}
function GetformID()
{
    let formID = GetCookie("formID");
    // console.log("formID: " + formID);
    if (formID == "" || formID == undefined || formID == null)
    {
        formID = GenerateRandomCharacters(64);
        SetCookie("formID",formID);
        // console.log("set formID " + formID)
    }
    return formID;
}

function submitFormjQ() {
    const formData = {
        displayName: $("#displayName").val(),
        totalScore: $("#totalScore").val(),
        gold: $("#gold").val(),
        numOfMutators: $("#numOfMutators").val(),
        date: $("#date").val(),
        commentsField: $("#commentsField").val(),
        scorePRoof: $("#scorePRoof").val(),
        gameVersion: $("#gameVersion").val(),

        subDate: $("#subDate").val(),
        levelNameValue: $("#levelNameValue").val(),
        weaponNameValue: $("#weaponNameValue").val(),
        mutsList: $("#mutsList").val(),
        perksList: $("#perksList").val(),
        token: $("#token").val(),
        subID: $("#subID").val(),
    };

    var comments      = e.parameter.commentsField;
  var displayName   = e.parameter.displayName;
  var gold          = e.parameter.gold;
  var formID        = e.parameter.token;
  var gameVersion   = e.parameter.gameVersion;
  var level         = e.parameter.levelNameValue;
  var numOfMutators = e.parameter.numOfMutators;
  var mutList       = e.parameter.mutsList;
  var perkList      = e.parameter.perksList;
  var scorePRoof    = e.parameter.scorePRoof;
  var subDate       = e.parameter.subDate;
  var subID         = e.parameter.subID
  var totalScore    = e.parameter.totalScore;
  var userDate      = e.parameter.date;
  var weapon        = e.parameter.weaponNameValue;

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbymQ5pc4zq7rPh009wcecH7kQcj-fQ5bcp8l9eUij04IYNwkWcxv4SUAUfKzKt5sABbKg/exec",
      type: "POST",
      data: formData,
      success: function(response) {
        // Handle success (optional)
        console.log(response);
      },
      error: function(error) {
        // Handle errors (optional)
        console.error(error);
      }
    });

    // Prevent the form from submitting in the traditional way
    return false;
  }

  function submitForm() {
    const displayName = document.getElementById("displayName").value;
    const totalScore = document.getElementById("totalScore").value;
    const gold = document.getElementById("gold").value;
    const numOfMutators = document.getElementById("numOfMutators").value;
    const gameVersion = document.getElementById("gameVersion").value;
    const date = document.getElementById("date").value;
    const commentsField = document.getElementById("commentsField").value;
    const scorePRoof = document.getElementById("scorePRoof").value;
    const subDate = document.getElementById("subDate").value;
    const levelNameValue = document.getElementById("levelNameValue").value;
    const weaponNameValue = document.getElementById("weaponNameValue").value;
    const mutsList = document.getElementById("mutsList").value;
    const perksList = document.getElementById("perksList").value;
    const token = document.getElementById("token").value;
    const subID = document.getElementById("subID").value;

    var formData = new FormData();
    formData.append("displayName", displayName);
    formData.append("totalScore", totalScore);
    formData.append("gold", gold);
    formData.append("numOfMutators", numOfMutators);
    formData.append("gameVersion", gameVersion);
    formData.append("date", date);
    formData.append("commentsField", commentsField);
    formData.append("scorePRoof", scorePRoof);
    formData.append("subDate", subDate);
    formData.append("levelNameValue", levelNameValue);
    formData.append("weaponNameValue", weaponNameValue);
    formData.append("mutsList", mutsList);
    formData.append("perksList", perksList);
    formData.append("token", token);
    formData.append("subID", subID);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbzDAFTqv3s0dmf_dPlA4Q77VqFy5qO_9I4wEyMUh8eNdiuqALoO7DkUMwdJjud4jKJyVQ/exec", true);

    // Set up a callback function to handle the response
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Successful response, you can handle the success here (optional)
        console.log(xhr.responseText);
      } else {
        // Error handling (optional)
        console.error(xhr.statusText);
      }
    };

    // Handle network errors
    xhr.onerror = function() {
        console.error("Network error", xhr.statusText);
      };
    // Send the form data
    xhr.send(formData);

    // Prevent the form from submitting in the traditional way
    return false;
  }