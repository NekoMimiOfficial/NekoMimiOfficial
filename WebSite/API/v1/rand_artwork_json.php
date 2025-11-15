<?php
$dir = '../../res/artworks/'; // Set the directory path
$files = glob($dir . '*.*'); // Get all files in the directory

// Check if there are any files in the directory
if (count($files) == 0) {
  $response = ['error' => 'No files in "res/" directory'];
} else {
    // Generate a random index number
    $randIndex = rand(0, count($files) - 1);
    
    // Get the random file name
    $randFile = $files[$randIndex];
    
    // Display the random file name
    $fileName = 'http://nekomimi.tilde.team/API/res/artworks/' . basename($randFile);
    $response = ['url' => $fileName, 'filename' => basename($randFile)];
}

header('Content-Type: application/json; charset=utf-8');
$json = json_encode($response);
echo $json;

?>

