function GetUrlInfo()
{
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

// Returns string after # in the address
function GetAdressHash()
{
	const hash = window.location.hash;
	const noHash = RemoveHasSymbol(hash);
	
	console.log("URL hash: " + hash + "; " + noHash);

	if (hash.includes("sub"))
	{
		return ExtractSubNumber(noHash);
	}
	else
	{
		return noHash;
	}
}
// Returns string after ? in the address
function GetAdressSearch()
{
	const srch = window.location.search;
	console.log("URL hash: " + srch);
	return srch;
}

function ExtractSubNumber (rawString)
{
    let returnStringChars = new Array();
    let returnStringFull = "";
    let charIndex = 0;

    const str   = rawString;
    const chars = str.split('');

    for (let i = 1; i < chars.length; i++)
    {
        returnStringChars[charIndex] = chars[i];
        charIndex++;
    }
    // console.log(returnStringChars);
    
    charIndex = 0;
    returnStringChars.reverse();
    let subNumChars = new Array();

    console.log(returnStringChars);

    for (let i = 0; i < returnStringChars.length; i++)
    {
        console.log(returnStringChars[i])
        if (returnStringChars[i] == "=")
        {
            break;
        }
        subNumChars[charIndex] = returnStringChars[i];
        charIndex++;
    }
    console.log(subNumChars);

    subNumChars.reverse();
    for (let i = 0; i < subNumChars.length; i++)
    {
        returnStringFull = returnStringFull + subNumChars[i];
    }
    console.log(subNumChars);
    console.log(returnStringFull);

    return returnStringFull;
}
function RemoveHasSymbol (hashString)
{
    let returnStringChars = new Array();
    let returnStringFull = "";
    let charIndex = 0;

    const str   = hashString;
    const chars = str.split('');

    for (let i = 1; i < chars.length; i++)
    {
        returnStringChars[charIndex] = chars[i];
        charIndex++;
    }
    for (let i = 0; i < returnStringChars.length; i++)
    {
        returnStringFull = returnStringFull + returnStringChars[i];
    }

    return returnStringFull;
}



function SelectRandomBackground(mappNumner)
{
	// const body = document.getElementsByTagName('body')[0];

	let bgrNumber = 0;
	bgrNumber = GetRandomInt(1,11); 
	// console.log(bgrNumber);
	// console.log(body);

	switch (mappNumner)
	{
		default:
			document.body.style.backgroundImage = 'url("./img/backgrounds/bliss darker.jpg")';
			console.log("INVALID VALUE");
		break;

		case 1:  // Neuland
			switch(bgrNumber)
				{	
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/day/Neulands Day 5.jpg")'; break;
					
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/night/Neulands Night 5.jpg")'; break;

					case 11:document.body.style.backgroundImage = 'url("./img/backgrounds/1 Neulands/Neulands Victory.jpg")'
				}
		break;

		case 2:  // Nordfels
			switch(bgrNumber)
				{	
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Day/Nordfels Day 5.jpg")'; break;
					
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Night/Nordfels Night 5.jpg")'; break;

					case 11:document.body.style.backgroundImage = 'url("./img/backgrounds/2 Nordfels/Nordfels Victory.jpg")'
				}
		break;
		
		case 3:  // Durststein
			switch(bgrNumber)
				{
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Day/Durststein Day 5.jpg")'; break;
					
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Night/Durststein Night 5.jpg")'; break;

					case 11:document.body.style.backgroundImage = 'url("./img/backgrounds/3 Durststein/Durststein Victory.jpg")'
				}
		break;

		case 4: // Frostsee
			switch(bgrNumber)
				{		
					// Day
					case 1: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 1.jpg")'; break;
					case 2: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 2.jpg")'; break;
					case 3: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 3.jpg")'; break;
					case 4: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 4.jpg")'; break;
					case 5: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Day/Frostsee Day 5.jpg")'; break;
							
					// Night
					case 6: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 1.jpg")'; break;
					case 7: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 2.jpg")'; break;
					case 8: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 3.jpg")'; break;
					case 9: document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 4.jpg")'; break;
					case 10:document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Night/Frostsee Night 5.jpg")'; break;

					case 11:document.body.style.backgroundImage = 'url("./img/backgrounds/4 Frostsee/Frostsee Victory.jpg")'; break;
				}
		break;
	}
	// console.log	(document.body.style.backgroundImage);
}

function GetRandomInt(min, max) 
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
  

// --------
// COOKIES
//---------
function SetCookie(cname, cvalue)
{
	document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function GetCookie(cname)
{
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++)
	{
		let c = ca[i];
		while (c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0)
		{
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function CheckCookie(cname)
{
	let cookieValue = GetCookie(cname);

	return cookieValue;
}