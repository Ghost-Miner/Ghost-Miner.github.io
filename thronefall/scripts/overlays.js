// 
// SUBMISSION WINDOW
// 
function OpenSubWindow() 
{
	document.getElementById("newSubmitOverlay").style.display = "block";
}
function CloseSubmitWindow ()
{
	document.getElementById("newSubmitOverlay").style.display = "none";
	ShowChoiceButtons();
}
function HideChoiceButtons ()
{
	document.getElementById("chooseSubTypeButtons").style.display = "none";
	document.getElementById("submitFormDiv").style.display = "block";
}
function ShowChoiceButtons ()
{
	document.getElementById("chooseSubTypeButtons").style.display = "block";
	document.getElementById("submitFormDiv").style.display = "none";
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