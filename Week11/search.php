<!DOCTYPE html>
<html>
<head>
    <title>Student Search</title>
</head>
<body>
<?php

    $servername = "sql1.njit.edu";
    $username = "jad229";
    $password = "-----------";
    $dbname = "jad229";
    $con = mysqli_connect($servername,$username,$password,$dbname);
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL:" . mysqli_connect_error();
    }

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
        session_start();

        // Get values submitted from the login form
        $studentID = $_POST["stuId"];

        $result = mysqli_query($con,"SELECT * FROM Student WHERE ID = '$studentID'");

        if (mysqli_num_rows($result) > 0) {
            $_SESSION["stuId"] = $studentID;
            header("Location: table.php");
            die;
        }  else {
            echo 'not found';
        }
    }
?>

    <form method="POST" action="search.php">

        <label for="stuId">Student ID:</label>
        <input type="text" name="stuId" id="stuId" autofocus required>

        <p><input type="submit" value="Submit"></p>
    </form>
</body>
</html>