function SetCookie(cname, cvalue, exdays) 
{
    exdays = 0.01;
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function GetCookie(cname) 
{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function DisplayData()
{
    const name      = GetCookie("name");
    const level     = GetCookie("level");
    const score     = GetCookie("score");
    const gold      = GetCookie("gold");
    const mutators  = GetCookie("mutators");
    const weapon    = GetCookie("weapon");
    const version   = GetCookie("version");
    const date      = GetCookie("date");
    const proof     = GetCookie("proof");

    const nameVar       = document.getElementById("name");
    const levelVar      = document.getElementById("level");
    const scoreVar      = document.getElementById("score");
    const goldVar       = document.getElementById("gold");
    const mutatorVar    = document.getElementById("mutators");
    const weaponVar     = document.getElementById("weapon");
    const versionVar    = document.getElementById("version");
    const dateVar       = document.getElementById("date");
    const proofVar      = document.getElementById("proof");

    nameVar.textContent     = name;
    levelVar.textContent    = level;
    scoreVar.textContent    = score;
    goldVar.textContent     = gold;
    mutatorVar.textContent  = mutators;
    weaponVar.textContent   = weapon;
    versionVar.textContent  = version;
    dateVar.textContent     = date;
    proofVar.textContent    = proof;
}