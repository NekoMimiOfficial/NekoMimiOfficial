<?php

$dir = '../v1/res/'; // Set the directory path
$files = glob($dir . '*.*'); // Get all files in the directory

// Check if there are any files in the directory
if (count($files) == 0) {
  echo 'No files in "res/" directory';
  exit();
} else {
    // Generate a random index number
    $randIndex = rand(0, count($files) - 1);
    
    // Get the random file name
    $randFile = $files[$randIndex];
    
    // Display the random file name
    $fileName = 'http://nekomimi.tilde.team/API/v1/res/' . basename($randFile);
}


  $name = basename($randFile);
  list($width, $height, $type, $attr) = getimagesize($fileName);
?>

<meta content='width=device-width, initial-scale=1' name='viewport'>

<meta name="twitter:title" content="NekoMimi Artworks">
<meta name="twitter:description" content="a random artwork from the v1 API">

<meta property="og:title" content="NekoMimi Artworks">
<meta property="og:site_name" content="NekoLabs LLC">
<meta property="description" content="a random artwork from teh v1 API">
<meta property="og:description" content="a random artwork from the v1 API">
<meta property="og:image" content="<?php echo $fileName; ?>">
<meta property="og:image:width" content="<?php echo $width; ?>">
<meta property="og:image:height" content="<?php echo $height; ?>">

<title><?php echo end($name); ?></title>

<img src = "<?php echo $fileName; ?>">
