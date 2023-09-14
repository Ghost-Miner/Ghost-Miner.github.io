// 
// SUBMISSION WINDOW
// 
// function OpenSubmitWindow() 
// {
// 	document.getElementById("overlayWindow").style.display = "block";
// 	location.hash = "submit";
// }
function CloseSubmitWindow ()
{
	// document.getElementById("overlayWindow").style.display = "none";
	// ShowChoiceButtons();
	location.hash = "";
	document.getElementById("overlayWindow").innerHTML = "";
}

// function ShowChoiceButtons ()
// {
// 	document.getElementById("chooseSubTypeButtons").style.display = "block";
// 	document.getElementById("submiFormDiv").style.display = "none";
	
// 	document.getElementById("submitFormFrame").src = ""
// }
function HideChoiceButtons (type)
{
	document.getElementById("chooseSubTypeButtons").style.display = "none";
	document.getElementById("submiFormDiv").style.display = "block";

	if (type == "time")
	{
		document.getElementById("titleBarText").textContent = "Submit new speed-run";
		document.getElementById("submitFormFrame").src = "./submitSpeed.html"
	}
	else
	{
		document.getElementById("titleBarText").textContent = "Submit new high-score";
		document.getElementById("submitFormFrame").src = "./submit.html"
	}
}

// 
// SUBMISSION INFO WINDOW
// 
function CloseSubInfoWindow() 
{
	document.getElementById("overlayWindow").style.display = "none";
	location.hash = "";		
	ResetSubInfoWindowValues ();
}

// 
// OLD SCORE/TIME PROOF 
// Used for speed-runs and demo 
// 
function OpenProofWindowImage(picLink) 
{
	document.getElementById("newProofWindowMainImage").style.display = "block";

	var imgLink	   = document.getElementById("newProofImage");
	imgLink.src = picLink;
}				  
function CloseProofWindowImage() 
{
	document.getElementById("newProofWindowMainImage").style.display = "none";
					
	var imgLink    = document.getElementById("newProofImage");
	imgLink.src = "";
}

function OpenVideoWindow(link) 
{
	document.getElementById("newProofWindowMainVideo").style.display = "block";
	var videoLink = document.getElementById("newProofVideo");
	videoLink.src = link;
}				  
function CloseVideoWindow() 
{
	document.getElementById("newProofWindowMainVideo").style.display = "none";
	var videoLink = document.getElementById("newProofVideo");
	videoLink.src = "";
}

