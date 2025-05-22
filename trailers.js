function ChooseRandomTrailer ()
{
    const numberOfTrailers = 3;
    
    let trailerNumber = GetRandomInt(0,numberOfTrailers);
    let trailerPath;

    switch (trailerNumber)
    {
        case 0:
            trailerPath = "/img/EOS_trailer.mp4";
            break;
            
        case 2:
            trailerPath = "/img/ISWM_trailer.mp4";
            break;
            
        case 3:
            trailerPath = "/img/ISWM_trailer_alt.mp4";
            break;
    }

    console.log(trailerPath);
    $("#trailerVideo")[0].src = trailerPath;
}

// The maximum is inclusive and the minimum is inclusive
function GetRandomInt(min, max) 
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); 
}