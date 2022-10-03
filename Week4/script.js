function isUcidValid() {
    let ucidInput = document.getElementById("ucid").value;
    let ucidList = ["jad229", "paa22", "zap2001", "Sis404"];

    let re = /[a-zA-Z]+\d*/i;

    if (re.test(ucidInput)) {
        if(ucidList.indexOf(ucidInput) > -1){
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


