function handleData()
{
    var location = "";
    var theory = "";
    var summary = "";
    var diagnosis = "";
    var form_data = new FormData(document.querySelector("form"));
    console.log("form data: ");
    for(var pair of form_data.entries()) 
    {
        console.log(pair[0]+ ' : '+ pair[1]);
        var id = pair[0];
        switch(id) {
            case 'location':
                location = pair[1];
            case 'theory':
                theory = pair[1];
            case 'diagnosis':
                diagnosis = pair[1];
            case 'summary':
                summary = pair[1];
        }
    }
    var sentence1 = "The clinician met with the client " + location + " to treat their diagnosis of " + diagnosis + ".";
    var sentence2 = "The clinician utilized " + theory + " to support the client in building their skills.";
    var sentence3 = summary + " The session took place date at time for 55 minutes. - MNS";
    var note = sentence1 + " " + sentence2 + " " + sentence3;
    console.log(note);
    return note;
}