function ChangeShownTable(tableToShow, sectionName)
{
	console.log("ChangeShownTable: " + tableToShow + "; " + sectionName);
	const LBsections = document.getElementsByClassName("LeaderBoard_section");

	for (let i = 0; i < LBsections.length; i++)
	{
		LBsections[i].style.display = "none";
	}

	let showTable = document.getElementById(tableToShow);
	showTable.style.display = "block";

	window.location.hash = sectionName;
}

function ChangeCategory(name)
{
	// GET ALL SUB-CAT BUTTONS
	const scoreSectionLBToggles = document.getElementById("newLBToggleScore");
	const timeSectionLBToggles  = document.getElementById("newLBToggleTime");
	const demoSectionLBToggles  = document.getElementById("newLBToggleDemo");

	const scoreCategoryToggle = document.getElementById("newScoreCatToggle");
	const timeCategoryToggle = document.getElementById("newTimCatToggle");
	const demoCategoryToggle = document.getElementById("newDemoCatToggle");

	scoreSectionLBToggles.style.display = "none";
	timeSectionLBToggles .style.display = "none";
	demoSectionLBToggles .style.display = "none";

	// RESET ALL CATEGORY BUTTONS
	scoreCategoryToggle.classList.remove("active");
	timeCategoryToggle .classList.remove("active");
	demoCategoryToggle .classList.remove("active");

	switch (name)
	{
		default:
			console.log("[ ERROR ] In ChangeCategory(): " + name + " is not a valid category name!");
			break;

		case "score":
			document.getElementById("newLBTableSection").style.display = "block";
			document.getElementById("leaderBoard").style.display ="none";

			scoreSectionLBToggles.style.display = "grid";
			document.getElementById("hs_cat_btn").classList.add("active");
			break;

		case "time":
			document.getElementById("newLBTableSection").style.display = "none";
			document.getElementById("leaderBoard").style.display ="block";

			timeSectionLBToggles.style.display = "grid";
			document.getElementById("sr_cat_btn").classList.add("active");
			break;
		case "demo":
			document.getElementById("newLBTableSection").style.display = "none";
			document.getElementById("leaderBoard").style.display ="block";

			demoSectionLBToggles.style.display = "grid";
			document.getElementById("demo_cat_btn").classList.add("active");
			break;
	}
}

function ResetPositionNumbers(tableName)
{
	switch (tableName)
	{
		case "Nordfels":

			const NFcollection = document.getElementsByClassName("SB_NF_Position");

			for (let i = 0; i < NFcollection.length; i++)
			{
				NFcollection[i].textContent = "#";
				NFcollection[i].style.textAlign = "center";
			}
			break;

		case "Neuland":
			const NLcollection = document.getElementsByClassName("SB_NL_Position");

			for (let i = 0; i < NLcollection.length; i++)
			{
				NLcollection[i].textContent = "#";
				NLcollection[i].style.textAlign = "center";
			}
			break;

		case "Nordfels time":
			const NFTimeCollection = document.getElementsByClassName("TIME_NF_Position");

			for (let i = 0; i < NFTimeCollection.length; i++)
			{
				NFTimeCollection[i].textContent = "#";
				NFTimeCollection[i].style.textAlign = "center";
			}
			break;

		case "Neuland time":
			const NLTimeCollection = document.getElementsByClassName("TIME_NL_Position");

			for (let i = 0; i < NLTimeCollection.length; i++)
			{
				NLTimeCollection[i].textContent = "#";
				NLTimeCollection[i].style.textAlign = "center";
			}
			break;
	}
}

function AssignNumbersDemo(tableName)
{
	switch (tableName)
	{
		case "Nordfels":
			const NFcollection = document.getElementsByClassName("SB_NF_Position");

			for (let i = 0; i < NFcollection.length; i++)
			{
				NFcollection[i].textContent = (i + 1);
				NFcollection[i].style.textAlign = "center";
			}
			break;

		case "Neuland":
			const NLcollection = document.getElementsByClassName("SB_NL_Position");

			for (let i = 0; i < NLcollection.length; i++)
			{
				NLcollection[i].textContent = (i + 1);
				NLcollection[i].style.textAlign = "center";
			}
			break;

		case "Nordfels time":
			const NFTimeCollection = document.getElementsByClassName("TIME_NF_Position");

			for (let i = 0; i < NFTimeCollection.length; i++)
			{
				NFTimeCollection[i].textContent = (i + 1);
				NFTimeCollection[i].style.textAlign = "center";
			}
			break;

		case "Neuland time":
			const NLTimeCollection = document.getElementsByClassName("TIME_NL_Position");

			for (let i = 0; i < NLTimeCollection.length; i++)
			{
				NLTimeCollection[i].textContent = (i + 1);
				NLTimeCollection[i].style.textAlign = "center";
			}
			break;
	}
}

function AssignPositionNumbers ()
{
	const posColumn = document.getElementsByClassName("SB_Position");

	for (let i = 0; i < posColumn.length; i++)
	{
		posColumn[i].textContent = (i + 1);
		posColumn[i].style.textAlign = "center";
	}
}

function ChangeActiveCategory (catName)
{
	switch (catName)
	{
		default:
			console.log("[ EEROR ]: Category " + catName + " does not exist.");
		break;

		case "":
			console.log("[ INFO ]: No category selected. using default.");
			ChangeCategory("demo");
			break;

		case "?score":
			ChangeCategory("score")
		break;

		case "?time":
			ChangeCategory("time")
		break;

		case "?demo":
			ChangeCategory("demo")
		break;
	}
} 
/*function ChangeActiveBoard (boardName)
{
	switch(boardName)
	{
		
	}
}*/
