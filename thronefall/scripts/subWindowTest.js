// Unparsed values
// let rawValString;
// let rawValChars = new Array();

// Parsed valzes
let s_position   = "";
let s_name       = "";
let s_score      = "";
let s_gold       = "";
let s_mutators   = "";
let s_proof      = "";
let s_usedWeapon = "";
let s_version    = "";
let s_date       = "";
////////////////////////////
function ShowScores ()
{
    console.log("==== SUBMISSION INFO ==================================");
    console.log("Position: " + s_position);
    console.log("Name: " + s_name);
    console.log("Score: " + s_score);
    console.log("Gold: " + s_gold);
    console.log("Mutators: " + s_mutators);
    console.log("Proof: " + s_proof);
    console.log("UsedWeapon: " + s_usedWeapon);
    console.log("Version: " + s_version); 
    console.log("Date: " + s_date);
    console.log("=======================================================");
}

function ParseSubValues (rawVals)
{
    s_position   = "";
    s_name       = "";
    s_score      = "";
    s_gold       = "";
    s_mutators   = "";
    s_proof      = "";
    s_usedWeapon = "";
    s_version    = "";
    s_date       = "";

    console.log(rawVals);
    location.hash = "submission=" + rawVals;
    
    const rawValString = rawVals;
    const valChars  = rawValString.split('');

    let valueNumber = 1;

    for (let i = 0; i < valChars.length; i++)
    {
        // console.log(valChars[i]);
        if (valChars[i] == ";")
        {
            // console.log("Hit separator");
            valueNumber++;
            i++;
        }

        switch(valueNumber)
        {
            case 1: 
                s_position = valChars[i];
            break;
            
            case 2: 
                s_name = s_name + valChars[i];
            break;
            
            case 3: 
                s_score = s_score + valChars[i];
            break;
            
            case 4: 
                s_gold = s_gold + valChars[i];
            break;
            
            case 5: 
                s_mutators = s_mutators + valChars[i];
            break;
            
            case 9: 
                s_proof = s_proof + valChars[i];
            break;
            
            case 6: 
                s_usedWeapon = s_usedWeapon + valChars[i];
            break;
            
            case 7: 
                s_version = s_version + valChars[i];
            break;
            
            case 8: 
                s_date = s_date + valChars[i];
            break;
        }
    }

    // console.log( 
    //         s_position   + ", " +
    //         s_name       + ", " +
    //         s_score      + ", " +
    //         s_gold       + ", " +
    //         s_mutators   + ", " +
    //         s_proof      + ", " +
    //         s_usedWeapon + ", " +
    //         s_version    + ", " +
    //         s_date       + ", "
    // );

    ShowScores();
}