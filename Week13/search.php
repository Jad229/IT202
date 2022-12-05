<?php include "connection.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$studentName = $_GET['name'];

$sql = "SELECT * FROM Student WHERE Name = '$studentName'";

$result = mysqli_query($con, $sql);

echo "<table border='1'>
            <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Major</th>
            </tr>";

        while($row = mysqli_fetch_array($result))
        {
            echo "<tr>";
            echo "<td>" . $row['ID'] . "</td>";
            echo "<td>" . $row['Name'] . "</td>";
            echo "<td>" . $row['Major'] . "</td>";
            echo "</tr>";
        }
            echo "</table> <br><br>";

mysqli_close($con);
?>

<a href="search.html">back</a>