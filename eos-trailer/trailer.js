let videoIsPlaying = false;

function HidePlayTextOverlay()
{
	milliseconds = 2500;
	setTimeout(() =>
	{
		$("#overlayBlurDiv")[0].classList.add("overlayHide");
	}, milliseconds);

	milliseconds = 3000;
	setTimeout(() =>
	{
		$("#overlayBlurDiv")[0].style.opacity = 0;
		$("#overlayBlurDiv")[0].classList.add("overlayBlurDivHover");
	}, milliseconds);
}

function ReplaceGifWothVideo()
{
	videoIsPlaying = true;
	console.log("REPLACING IMAGEE WITH VIDEO");
	$("#eosGif")[0].style.display = "none";
	$("#eosJPEG")[0].style.display = "none";
	$("#overlayBlurDiv")[0].style.display = "none";

	$("#eosVideo")[0].style.display = "block";
	$("#MovieTitleDiv")[0].style.display = "block";
}

function Sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function AnimatedImage()
{
	$("#eosGif")[0].style.display = "none";
	$("#eosJPEG")[0].style.display = "block";

	await Sleep(0.1);

	let numOfImages = 1451;
	let frameTime = 50;

	for (let i = 1; i < numOfImages; i++)
	{
		if (videoIsPlaying)
		{
			console.log("STOPPING ANIMATION BECAUSE VIDEO IS BEING PLAYED");
			return;
		}

		// console.log("CHANGING IMAGE TO " + i + ".png");
		$("#eosJPEG")[0].src = "/img/eos-JPG/" + i + ".jpg";

		await Sleep(frameTime);
	}

	await Sleep(1000);
	AnimatedImage();
}