// 
// SUBMISSION WINDOW
// 
function OpenSubWindow() 
{
	document.getElementById("newSubmitOverlay").style.display = "block";
	location.hash = "submit";
}
function CloseSubmitWindow ()
{
	document.getElementById("newSubmitOverlay").style.display = "none";
	ShowChoiceButtons();
	location.hash = "";
}
function HideChoiceButtons (type)
{
	document.getElementById("chooseSubTypeButtons").style.display = "none";
	document.getElementById("submitFormDiv").style.display = "block";

	if (type == "time")
	{
		document.getElementById("submitFrame").src = "./submitSpeed.html"
	}
	else
	{
		document.getElementById("submitFrame").src = "./submit.html"
	}
}
function ShowChoiceButtons ()
{
	document.getElementById("chooseSubTypeButtons").style.display = "block";
	document.getElementById("submitFormDiv").style.display = "none";
	
	document.getElementById("submitFrame").src = ""
}

// 
// NEW SCORE/TIME PROOF 
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

function CloseSubInfoWindow() 
{
	document.getElementById("newSubInfoWindow").style.display = "none";
	location.hash = "";		
	ResetSubInfoWindowValues ();
	// var imgLink    = document.getElementById("subInfoImg");
	// imgLink.src = "";
}