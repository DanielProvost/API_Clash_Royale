<?php




$harvester= new Harvester;
$locOutput = $harvester->getLocation();
$db = new Database();

$plOutpout = $harvester->getPlayers();


$expLevel = $plOutpout['expLevel'];
$name = $plOutpout['name'];
$previousRank = $plOutpout['previousRank'];
$rank = $plOutpout['rank'];
$tag = $plOutpout['tag'];
$trophies = $plOutpout['trophies'];



?>