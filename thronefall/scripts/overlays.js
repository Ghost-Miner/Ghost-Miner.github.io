function OpenSubWindow()
{
	document.getElementById("newSubmitOverlay").style.display = "block";
}
function CloseSubmitWindow ()
{
	document.getElementById("newSubmitOverlay").style.display = "none";
	ShowChoiceButtons();
}
function MinimizeSubmitWindow ()
{
	document.getElementById("newSubmitOverlay").style.display = "none";
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