function isValidUcid(ucidInput){
    let ucidList = ["jad229", "paa22", "zap2001", "Sis404"];

    let re = /[a-zA-Z]+\d*/i;

    if(re.test(ucidInput)){
        ucidList.forEach(function(ucid){
            if(ucid === ucidInput){
                alert("VALID UCID FORMAT AND UCID FOUND");
            }
            else{
                alert("VALID UCID FORMAT BUT INVALID UCID");
            }
        });
    }
    else{
        alert("UCID DOES NOT CONFORM TO VALID FORMAT");
    }
}
