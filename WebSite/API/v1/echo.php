<?php
$resp= "";
if (!empty($_GET["data"]))
{
  $resp= $_GET["data"];
}
$resp= preg_replace("/[\r\n\t]+/", "", $resp);
echo $resp;
?>
