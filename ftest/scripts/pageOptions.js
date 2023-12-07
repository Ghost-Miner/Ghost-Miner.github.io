function GetUrlInfo()
{
	console.log("-- URL INFO --------------------------------");
	console.log(' href => ' + window.location.href);
	console.log(' host => ' + window.location.host);
	console.log(' hostname => ' + window.location.hostname);
	console.log(' port => ' + window.location.port);
	console.log(' protocol => ' + window.location.protocol);
	console.log(' pathname => ' + window.location.pathname);
	console.log(' hashpathname => ' + window.location.hash);
	console.log(' search=> ' + window.location.search);
	console.log("--------------------------------------------");
}

function SetCookie(cname, cvalue, exdays) 
{
    if (exdays == undefined)
    {
        exdays = 365;
    }
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