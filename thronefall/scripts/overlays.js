// 
// SUBMISSION WINDOW
// 
function OpenSubmitWindow() 
{
	document.getElementById("overlayWindow").style.display = "block";
	location.hash = "submit";
}
function CloseSubmitWindow ()
{
	document.getElementById("overlayWindow").style.display = "none";
	location.hash = "";
	ShowChoiceButtons();
	// document.getElementById("overlayWindow").innerHTML = "";
}

function ShowChoiceButtons ()
{
	document.getElementById("chooseSubTypeButtons").style.display = "block";
	document.getElementById("submiFormDiv").style.display = "none";
	
	document.getElementById("submitFormFrame").src = ""
}
function HideChoiceButtons (type)
{
	// console.log("HideChoiceButtons " + currentTheme);
	document.getElementById("chooseSubTypeButtons").style.display = "none";
	document.getElementById("submiFormDiv").style.display = "block";

	if (type == "time")
	{
		if (currentTheme == "dark")
		{
			document.getElementById("submitFormFrame").src = "./submit/legacy/timeDark.html"
		}
		else
		{
			document.getElementById("submitFormFrame").src = "./submit/legacy/time.html"
		}
		document.getElementById("titleBarText").textContent = "Submit new speed-run";
	}
	else if (type == "scoreNew")
	{
		document.getElementById("titleBarText").textContent = "Submit new high-score";
		if (currentTheme == "dark")
		{
			document.getElementById("submitFormFrame").src = "https://dev-thronefall.pantheonsite.io/submitv2?id=" + formID + "#dark";
		}
		else
		{
			document.getElementById("submitFormFrame").src = "https://dev-thronefall.pantheonsite.io/submitv2?id=" + formID + "#light";
		}
	}
	else
	{
		document.getElementById("submitFormFrame").src = "./submit/score/index.html";
		document.getElementById("titleBarText").textContent = "Submit new high-score";
	}
}
// 
// OLD SCORE/TIME PROOF 
// Used for speed-runs and demo 
// 
function OpenProofWindowImage(imgLink) 
{
	console.warn("OpenProofWindowImage() is a deprectaed function and only used for demo archive and speedruns. Use ShowSubInfo() instead");
	document.getElementById("old_ProofWindowMainImage").style.display = "block";

	var img	   = document.getElementById("old_ProofImage");
	img.src = imgLink;
}				  
function CloseProofWindowImage() 
{
	document.getElementById("old_ProofWindowMainImage").style.display = "none";
					
	var imgLink    = document.getElementById("old_ProofImage");
	imgLink.src = "";
}

function OpenVideoWindow(link) 
{
	console.warn("OpenProofWindowImage() is a deprectaed function and only used for demo archive and speedruns. Use ShowSubInfo() instead");

	document.getElementById("newProofWindowMainVideo").style.display = "block";
	var videoLink = document.getElementById("old_ProofVideo");
	videoLink.src = link;
}				  
function CloseVideoWindow() 
{
	document.getElementById("newProofWindowMainVideo").style.display = "none";
	var videoLink = document.getElementById("old_ProofVideo");
	videoLink.src = "";
}

function ShowRulesWindow ()
{
	document.getElementById("rulesWindow").style.display = "block";
}

function HideRulesWindow ()
{
	document.getElementById("rulesWindow").style.display = "none";
}

