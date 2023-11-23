function GetFormData()
{
    const nameValue = document.getElementById("displayName").value;
    let   levelValue;
    const scoreValue = document.getElementById("totalScore").value;
    const goldValue = document.getElementById("gold").value;
    const numOfMutatorsValue = document.getElementById("numOfMutators").value;
    let   weaponValue;
    const versionValue = document.getElementById("gameVersion").value;
    const dateValue = document.getElementById("date").value;
    const proofValue = document.getElementById("scorePRoof").value;
    
    const levelField = document.getElementsByClassName("levelField");
    const weaponField = document.getElementsByClassName("weaponField");

    for (let i = 0; i < levelField.length; i++)
    {
        if (levelField[i].checked)
        {
            console.log(i+1 + ": " + levelField[i].id);
            levelValue = levelField[i].id;
            break;
        }
    }
    for (let i = 0; i < weaponField.length; i++)
    {
        if (weaponField[i].checked)
        {
            console.log(i+1 + ": " + weaponField[i].id);
            weaponValue = weaponField[i].id;
            break;
        }
    }

    console.log(
        "== FORM DATA === " + "\n" +
        "Name: " + nameValue  + "\n" +
        "Level: " + levelValue  + "\n" +
        "Score: " + scoreValue  + "\n" +
        "Gold: " + goldValue  + "\n" +
        "Mutators: " + numOfMutatorsValue  + "\n" +
        "Weapon: " + weaponValue  + "\n" +
        "Version: " + versionValue + "\n" +
        "Date: " + dateValue + "\n" +
        "PRoof: " + proofValue  + "\n" +
        "==================="
    );

    SetCookie("name",    nameValue);
    SetCookie("level",   levelValue);
    SetCookie("score",   scoreValue);
    SetCookie("gold",    goldValue);
    SetCookie("mutators",numOfMutatorsValue);
    SetCookie("weapon",  weaponValue);
    SetCookie("version", versionValue);
    SetCookie("date",    dateValue);
    SetCookie("proof",   proofValue);

    // location.replace("./form submit.html");
    DisplayData();
}