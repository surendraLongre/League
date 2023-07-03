<?php
$targetDirectory = '/var/www/html/images'; // Specify the directory where the files are located
$searchTerm =$_POST['photo']; // The word you want to search for

// Get all files in the directory
$files = scandir($targetDirectory);

$matchingFiles = []; // Array to store matching filenames

// Loop through each file
foreach ($files as $file) {
  if ($file !== '.' && $file !== '..') {
    $filePath = $targetDirectory . '/' . $file;

    // Check if the path points to a file
    if (is_file($filePath)) {
//	    echo $filePath;
      // Read the contents of the file
      // Check if the search term exists in the file contents (case-insensitive)
      if (stripos($file, $searchTerm) !== false) {
//	      echo $file;
        // If the search term is found, add the filename to the matchingFiles array
        $matchingFiles[] = $file;
      }
    }
  }
}

// Print the matching filenames
foreach ($matchingFiles as $filename) {
//  echo $filename . '<br>';
  echo "<img class='person-photo' src='./images/$filename' alt='gargee'>";
}
?>

