let checkboxesValid = false;
let captchaValid = false;
let maxChosenPerks = 3;

function ValidateCheckboxes() 
{
    // Get all checkboxes from the first group
    var checkboxesGroup1 = document.getElementsByName('usedMutators');
    var isCheckedGroup1 = false;

    // Check if at least one checkbox is checked in the first group
    for (var i = 0; i < checkboxesGroup1.length; i++) 
    {
      if (checkboxesGroup1[i].checked) 
      {
        isCheckedGroup1 = true;
        break;
      }
    }

    // Get all checkboxes from the second group
    var checkboxesGroup2 = document.getElementsByName('usedPerks');
    var checkedCountGroup2 = 0;

    // Check if up to 3 checkboxes are checked in the second group
    for (var j = 0; j < checkboxesGroup2.length; j++) 
    {
      if (checkboxesGroup2[j].checked) 
      {
        checkedCountGroup2++;
      }
    }

    // Enable or disable the submit button based on checkbox status in both groups
    // submitButton.disabled = !(isCheckedGroup1 && (checkedCountGroup2 <= 3 && checkedCountGroup2 > 0));
    if((isCheckedGroup1 && (checkedCountGroup2 <= maxChosenPerks && checkedCountGroup2 > 0)) == false)
    {
        checkboxesValid = false;
    }
    else
    {
        checkboxesValid = true;
    }
    // console.log("M: " + isCheckedGroup1 + " P: " + checkedCountGroup2);
    ValidateAll();
}

function ValidateInputFields ()
{
    let inputFields = document.getElementsByClassName("formInputField");
    for (let i = 0; i < inputFields.length; i++)
    {
        inputFields[i].classList.remove("invalid");
    }
    for (let i = 0; i < inputFields.length; i++)
    {
        if (inputFields[i].value === "" && !(inputFields[i].classList.contains("hidden")) && !(inputFields[i].id.includes("commentsField")))
        {
            console.log(inputFields[i].id + " " + " empty");
            inputFields[i].classList.add("invalid");
        }
        // console.log(inputF[i].value);
    }
}

/////////////////////////////////////////////////////////////////////////////////////

const captchaLength = 6;
let captchaString;
let captchaDisplayText = document.getElementById("captchaText");
function GenerateCaptchaText()
{
    captchaDisplayText = document.getElementById("captchaText");
    captchaString = GenerateRandomLettersAndNumbers(captchaLength).toUpperCase();

    captchaDisplayText.textContent = captchaString;
}
function ValidateCaptcha()
{
    let captchaField = document.getElementById("captchaField");
    const userString = document.getElementById("captchaField").value;
    const captchaChars = userString.split('');
    // console.log(captchaChars);
    // console.log(captchaChars.length);

    if (userString.toUpperCase() === captchaString)
    {
        captchaValid = true;
    }
    else
    {
        captchaValid = false;
    }
    captchaField.value = userString.toUpperCase();
    ValidateAll();
}

/////////////////////////////////////////////////////////////////////////////////////

function ValidateAll()
{
    let submitButton = document.getElementById('submitButton');

    // CAPTCHA
    if (captchaValid && checkboxesValid)
    {
        submitButton.value = "Submit";
        submitButton.disabled = false;
    }
    else
    {
        submitButton.value = "Complete the form first.";
        submitButton.disabled = true;
    }
}