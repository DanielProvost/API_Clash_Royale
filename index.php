<?php
require 'Harvester.php';



$harvester= new Harvester;
$output = $harvester->getLocation();



var_dump($output);
//
//$db = new Database();
//
//$plOutpout = $harvester->getPlayers();
//
//
//$expLevel = $plOutpout['expLevel'];
//$name = $plOutpout['name'];
//$previousRank = $plOutpout['previousRank'];
//$rank = $plOutpout['rank'];
//$tag = $plOutpout['tag'];
//$trophies = $plOutpout['trophies'];



?>