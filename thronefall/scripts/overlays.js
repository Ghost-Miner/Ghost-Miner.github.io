// 
// SUBMISSION WINDOW
// 
const submitWinString = "submit";
function OpenSubmitWindow() 
{
	// TrackUserEvents("button click","open submit window","N/A");
	const submitWindow = document.getElementById("submitWindowBakcground");
	const overlayWindow = document.getElementById("overlayWindow");

	submitWindow.classList.remove("windowCloseAnim");
	overlayWindow.classList.remove("overlayHideAnim");

	if (animationsEnabled)
	{
		submitWindow.classList.add("windowOpenAnim");
	}
	overlayWindow.style.display = "block";
	location.hash = submitWinString;

	// HideChoiceButtons("score");	
}
function CloseSubmitWindow ()
{
	TrackUserEvents("button click","close submit window","N/A");
	const submitWindow  = document.getElementById("submitWindowBakcground");
	const overlayWindow = document.getElementById("overlayWindow");
	const windowIframe  = document.getElementById("submitFormFrame");

	submitWindow.classList.remove("windowOpenAnim");
	
	if (animationsEnabled)
	{
		submitWindow.classList.add("windowCloseAnim");
		
		Sleep(500).then(() => 
		{ 
			overlayWindow.classList.add("overlayHideAnim");
		} );
		Sleep(750).then(() => 
		{ 
			overlayWindow.style.display = "none";
		} );
	}
	else
	{
		overlayWindow.style.display = "none";
	}
	windowIframe.src = "";
	location.hash = "";
	// ShowChoiceButtons();
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
	const submitWinTitle = document.getElementById("titleBarText");

	textStyle = "Fancy";
	animationsEnabled = "true";

	console.log(type);
	if (type == "time")
	{
		submitWinTitle.textContent = "Submit new speed-run";

		if (currentTheme == "dark")
		{
			document.getElementById("submitFormFrame").src = "./submit/legacy/timeDark.html"
		}
		else
		{
			document.getElementById("submitFormFrame").src = "./submit/legacy/time.html"
		}
	}
	else
	{
		submitWinTitle.textContent = "Submit new high-score";
		document.getElementById("submitFormFrame").src = "https://dev-tfsubs.pantheonsite.io/submit/?id=" + formID + "#" + currentTheme + "&" + textStyle + "&" + 
																												 + "&" + window.innerWidth + "x" + window.innerHeight;
		// document.getElementById("submitFormFrame").src = "./img/rightback.png";
	}
	TrackUserEvents("button click","load submit " + type + " form","N/A");
}

// 
// R U L E S 
// 
function ShowRulesWindow ()
{
	TrackUserEvents("button click","show rules","show rules windows")
	const rulesWindow 	= document.getElementById("rulesWindowsBackground");
	const overlayWindow = document.getElementById("rulesWindow");

	overlayWindow.classList.remove("overlayHideAnim");
	rulesWindow.classList  .remove("windowCloseAnim");
	if (animationsEnabled)
	{
		rulesWindow.classList  .add	  ("windowOpenAnim");
	}		
	overlayWindow.style.display = "block";
}

function HideRulesWindow ()
{
	const rulesWindow 	= document.getElementById("rulesWindowsBackground");
	const overlayWindow = document.getElementById("rulesWindow");

	rulesWindow.classList.remove("windowOpenAnim");
	if (animationsEnabled)
	{
		rulesWindow.classList.add("windowCloseAnim");
		
		// document.getElementById("overlayWindow").style.display = "none";
		Sleep(500).then(() => 
		{ 
			overlayWindow.classList.add("overlayHideAnim");
		} );
		Sleep(750).then(() => 
		{ 
			overlayWindow.style.display = "none";
		} );
	}
	else
	{
		// rulesWindow	 .style.display = "none";
		overlayWindow.style.display = "none";
	}


	// document.getElementById("rulesWindow").style.display = "none";
}

