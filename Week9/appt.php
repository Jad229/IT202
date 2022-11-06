<?php

$name = $_GET["name"];
$service = $_GET["services"];
$visits = $_GET["numOfVisits"];
$price = $_GET["price"];
$taxRate = $_GET["tax"];

$subTotal = $price * $visits;
$taxPercent = $taxRate / 100;
$taxAmt = $subTotal * $taxPercent;

$totalCost = $subTotal + $taxAmt;

echo "<p><strong>$name</strong>, you have <strong>$visits</strong> appointments for the following procedures <strong>$service</strong> at the price of <strong>\$$price</strong> per visit. With a tax rate of <strong>$taxRate%</strong>. The total cost including tax is <strong>\$$totalCost</strong>.</p>";

?>