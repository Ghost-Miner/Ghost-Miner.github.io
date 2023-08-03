let doneLoading = false;
//
// LOAD TAVBLE
//
( async function LoadTable () 
	{
		let boardTMLRequest;
		let boardHTML;

		// Invalid table message
		//boardTMLRequest = await fetch('./leaderboards/invalid-table-msg.html'); // REtrueve the file
		//boardHTML        = await boardTMLRequest.text(); // Extract its content
		//document.querySelector('#leaderBoard').innerHTML = boardHTML; // Insert cintent into the selected div
			
		// Neuland socre
		boardTMLRequest = await fetch('./leaderboards/demo/nf-score.html'); // REtrueve the file
		boardHTML        = await boardTMLRequest.text(); // Extract its content
		document.querySelector('#nf-score').innerHTML = boardHTML; // Insert cintent into the selected div
			
		// Nordfels socre
		boardTMLRequest = await fetch('./leaderboards/demo/nl-score.html'); // REtrueve the file
		boardHTML        = await boardTMLRequest.text(); // Extract its content
		document.querySelector('#nl-score').innerHTML = boardHTML; // Insert cintent into the selected div
			
		// Dursstein socre
		boardTMLRequest = await fetch('./leaderboards/demo/nf-time.html'); // REtrueve the file
		boardHTML        = await boardTMLRequest.text(); // Extract its content
		document.querySelector('#nf-time').innerHTML = boardHTML; // Insert cintent into the selected div
			
		// Frostsee socre
		boardTMLRequest = await fetch('./leaderboards/demo/nl-time.html'); // REtrueve the file
		boardHTML        = await boardTMLRequest.text(); // Extract its content
		document.querySelector('#nl-time').innerHTML = boardHTML; // Insert cintent into the selected div
		
		doneLoading = true

		ResetPositionNumbers("Nordfels");
		ResetPositionNumbers("Neuland");
		ResetPositionNumbers("Nordfels time");
		ResetPositionNumbers("Neuland time");

		AssignNumbers("Nordfels");
		AssignNumbers("Neuland");
		AssignNumbers("Nordfels time");
		AssignNumbers("Neuland time"); 

		///ChangeShownTable('nf-score', 'nordfels_score');
		
		CheckAdressHref();		
		
		SetTheme();
		SetFontStyle();
	}
	) ();
	
			function ChangeShownTable (tableToShow, sectionName)
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

			function ResetPositionNumbers (tableName)
			{
				switch(tableName)
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
			function AssignNumbers (tableName)
			{
				switch(tableName)
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
							NLTimeCollection[i].textContent =(i + 1);
							NLTimeCollection[i].style.textAlign = "center";
						}
					break;
				}
			}
			