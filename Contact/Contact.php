<?php

$conn= mysqli_connect('localhost','root','abd@123456','contact us');

if($conn){
	echo 'Connection Error: ' . mysqli_connect_error();
}

echo "Connection Ok";
?>