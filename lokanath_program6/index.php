<?php
  $user = "Lokanath S";
  $fname = 'counter.txt';
  $fs = fopen($fname,"r");
  $count = fscanf($fs,"%d");
  $count[0]++;
  fclose($fs);
  $fs = fopen($fname,"w");
  fprintf($fs,"%d",$count[0]);
  fclose($fs);
//control part
?>
<!DOCTYPE html>
<!-- this is a view part -->
<html>
<head>
  <title>Program 6</title>
</head>
<body style="background-color:#BADFE7;">
  <h1><?php echo $user; ?> WELCOME TO SAMPLE PHP SCRIPT!!</h1>
  <h2>This program displays the number of page visits!!</h2>
  <h2>REFRESH THE PAGE</h2>
  <p>Total number of views are: <?php echo $count[0]?></P>
</body>
</html>
