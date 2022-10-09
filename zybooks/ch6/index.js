function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {

   let distributionArr = [0,0,0,0,0];

   scoresArray.forEach(function(score){
      switch(true){
         case score >= 90:
            distributionArr[0] += 1;
            break;
         case score >= 80:
            distributionArr[1] += 1;
            break;
         case score >= 70:
            distributionArr[2] += 1;
            break;
         case score >= 60:
            distributionArr[3] += 1;
            break;
         case score <= 59:
            distributionArr[4] += 1;
            break;
         default:
            break;
      }
   });
   return distributionArr;
}

function setTableContent(userInput) {
   let scoreStr = parseScores(userInput);
   let distributionArray = buildDistributionArray(scoreStr);

   let firstRow = document.getElementById("firstRow");

   let gradeA = distributionArray[0] * 10;
   let gradeB = distributionArray[1] * 10;
   let gradeC = distributionArray[2] * 10;
   let gradeD = distributionArray[3] * 10;
   let gradeF = distributionArray[4] * 10;

   firstRow.innerHTML = "<td><div style=\"height:" +gradeA+ "px\" class=\"bar0\"></div></td>\n" +
       "   <td><div style=\"height:" +gradeB+ "px\" class=\"bar1\"></div></td>\n" +
       "   <td><div style=\"height:" +gradeC+ "px\" class=\"bar2\"></div></td>\n" +
       "   <td><div style=\"height:" +gradeD+ "px\"  class=\"bar3\"></div></td>\n" +
       "   <td><div style=\"height:" +gradeF+ "px\" class=\"bar4\"></div></td>"


   let thirdRow = document.getElementById("thirdRow");

   thirdRow.innerHTML = "<td><div>"+distributionArray[0]+"</div></td>\n" +
       "   <td><div>"+distributionArray[1]+"</div></td>\n" +
       "   <td><div>"+distributionArray[2]+"</div></td>\n" +
       "   <td><div>"+distributionArray[3]+"</div></td>\n" +
       "   <td><div>"+distributionArray[4]+"</div></td>";

}

// The argument can be changed for testing purposes
setTableContent("100 78 98 63 86 99 90 59");