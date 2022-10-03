function isUcidValid() {
    let ucidInput = document.getElementById("ucid").value;
    let ucidList = ["jad229", "paa22", "zap2001", "Sis404"];

    let re = /[a-zA-Z]+\d*/i;

    //Test the ucidInput against the regular expression
    if (re.test(ucidInput)) {

        //checking if ucidInput is found within the array ucidList
        if(ucidList.indexOf(ucidInput) > -1){ // if indexOf returns -1 ucid is not in the list
            alert("VALID UCID FORMAT AND UCID FOUND")
        }
        else{
            alert("VALID UCID FORMAT BUT INVALID UCID");
        }
    }
    else {
        alert("UCID DOES NOT CONFORM TO VALID FORMAT");
    }
}


