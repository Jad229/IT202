<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Search</title>
</head>
<body>
<?php
    $servername = "sql1.njit.edu";
    $username = "jad229";
    $password = "----------";
    $dbname = "jad229";
    $con = mysqli_connect($servername,$username,$password,$dbname);
    if (mysqli_connect_errno())
    {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    session_start();

    $studentID = $_SESSION["stuId"];

    $result = mysqli_query($con,"SELECT * FROM Student INNER JOIN Transcript WHERE Student.ID = $studentID AND Transcript.StudentID = $studentID");


    echo "<table border='1'>
                <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Major</th>
                <th>Course</th>
                <th>Grade</th>
                </tr>";

            while($row = mysqli_fetch_array($result))
            {
                echo "<tr>";
                echo "<td>" . $row['Name'] . "</td>";
                echo "<td>" . $row['StudentID'] . "</td>";
                echo "<td>" . $row['Major'] . "</td>";
                echo "<td>" . $row['Course'] . "</td>";
                echo "<td>" . $row['Grade'] . "</td>";
                echo "</tr>";
            }
    			echo "</table> <br><br>";

?>

   <a href="search.php"><button>Back</button></a>

</body>
</html>
