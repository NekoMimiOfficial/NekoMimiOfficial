<?php

header('Content-Type: application/json; charset=utf-8');

$operation= "none";
$userID= "none";
$secret= "none";

$operation= $_GET['job'];
if ($operation == "none") {
	$data= [
		"status" => 804
	];
	echo json_encode($data);
}else{
	if ($operation == "neko") {
		$data= [
			"status" => 200,
			"response" => "mimi"
		];
		echo json_encode($data);
	}
}

?>