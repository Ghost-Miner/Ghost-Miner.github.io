let videoIsPlaying = false;
let conLog = false;
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
	if (conLog)
	{
		console.log("REPLACING IMAGEE WITH VIDEO");
	}

	$("#videoFramesContainer")[0].style.display = "none";
	$("#overlayBlurDiv")[0].style.display = "none";

	$("#eosVideo")	   [0].style.display = "block";
	$("#MovieTitleDiv")[0].style.display = "block";
}

function Sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

let frameRate      = 20;
let frameTimeFloat = (1 / frameRate * 1000);
let frameTimeInt   = Math.round(frameTimeFloat);

let maxNumberOfFrames   = frameRate / 2; // Number of frames to buffer
let totalNumberOfFrames = 1400; // Total length
let framesFolder 		= "eos-15fps";

let startFrame    = 0;
let endFrame 	  = maxNumberOfFrames;
let currentFrame  = 0;

async function CreateFrameBuffer ()
{
	if (videoIsPlaying)
	{
		return;
	}

	
	if (conLog)
	{
		console.warn("CreateFrameBuffer | NEW BUFFER | Size: " + maxNumberOfFrames + " | FPS: " + frameRate)// SF " + startFrame + " ; EF " + endFrame);
	}
	let imageToDupe = $(".eosTrailerGif");
	let imageParent = $("#videoFramesContainer");
	let newImage;

	// Remove previous frames before they can't be all deleted in CycleImages()
	let allImages = $(".eosTrailerGif");
	if (allImages.length > maxNumberOfFrames)
	{
		for (let i = 1; i < allImages.length; i++)
		{
			allImages[i].remove();
		}
	}

	// imageToDupe[0].remove();
	for (let i = startFrame + 1; i < endFrame + 1; i++)
	{
		if (i > totalNumberOfFrames)
		{
			if (conLog)
			{
				console.warn(".\n\n\n\n\nCreateFrameBuffer | END OP VIDEO\n\n\n\n\n.");
			}
			currentFrame  = 0;
			break;
		}

		newImage = imageToDupe[0].cloneNode(true);
		newImage.id  = "frame-" + i;
		newImage.src = "./" + framesFolder + "/" + i + ".webp";
		// newImage.style.display = "none";
		imageParent.append(newImage);

		currentFrame = i;
	}
	
	startFrame = currentFrame;
	endFrame = currentFrame + maxNumberOfFrames;

	// await Sleep(50);
	CycleImages();
}

async function CycleImages ()
{
	frameTimeFloat = 1 / frameRate * 1000;
	let allImages = $(".eosTrailerGif");

	for (let i = 0; i < maxNumberOfFrames; i++)
	{
		if (allImages[i] == undefined || videoIsPlaying)
		{
			break;
		}

		await Sleep(frameTimeFloat);

		currentFrame++;
		
		if (conLog)
		{
			console.log("CycleImages | INDEX: " + i + " | FRAME: " + currentFrame);
		}

		// Remove the previous frame. Removing the current frame causes flickering
		if (i > 0)
		{
			allImages[i - 1].remove();
		}
	}
	// console.warn("CycleImages | END OF BUFFER");

	// await Sleep(50);
	CreateFrameBuffer();
}