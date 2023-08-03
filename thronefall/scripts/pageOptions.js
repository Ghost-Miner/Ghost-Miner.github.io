		
		function GetUrlInfo () 
		{
			console.log(' href => ' + window.location.href);
			console.log(' host => ' + window.location.host);
			console.log(' hostname => ' + window.location.hostname);
			console.log(' port => ' + window.location.port);
			console.log(' protocol => ' + window.location.protocol);
			console.log(' pathname => ' + window.location.pathname);
			console.log(' hashpathname => ' + window.location.hash);
			console.log(' search=> ' + window.location.search);
			console.log("-----------------------------------------------------------");
		}

			function CheckAdressHref () 
			{
				let hash = window.location.hash;
				switch(hash)
				{
					default:
						console.log("CheckAdressHref | invalid hash. ignoring");
						ChangeShownTable("nf-score", "nordfels_score");
					break;

					case "#nordfels_score":
						ChangeShownTable("nf-score", "nordfels_score");
					break;

					case "#neuland_score":
						ChangeShownTable("nl-score", "neuland_score");
					break;

					case "#nordfels_time":
						ChangeShownTable("nf-time", "nordfels_time");
					break;

					case "#neuland_time":
						ChangeShownTable("nl-time", "neuland_time");
					break;
				}
			}
			function CheckAdressSearch ()
			{
				let addrSearch = window.location.search;
				switch(addrSearch)
				{
					default:
						console.log("CheckAdressSearch | invalid value: " + addrSearch + " ignoring");
					break;

					case "?dark":
						ColourChangeDark();
					break;
					
					case "?light":
						ColourChangeLight();
					break;
				}
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
			function CheckCookie(cname)
			{
				let cookieValue = GetCookie(cname);

				return cookieValue; 
			}