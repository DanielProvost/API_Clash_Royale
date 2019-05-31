<?php
//require 'Harvester.php';

//
//
//$harvester= new Harvester;
//
//
//$output = $harvester->getPlayers();
//
//
//
//var_dump($output);
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

$token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY0MSwiaWRlbiI6IjUyMzU0MTIxMjkzMDc2ODkwNyIsIm1kIjp7InVzZXJuYW1lIjoiTWFlZ3JpdGgiLCJrZXlWZXJzaW9uIjozLCJkaXNjcmltaW5hdG9yIjoiMTQ0MiJ9LCJ0cyI6MTU1OTI5MzM1NDY2N30.NcnfY3tw-lKwMmpzqOd5SygmZpgb4fDecvv2zfxBmpw";
$opts = [
    "http" => [
        "header" => "auth:" . $token
    ]
];

$context = stream_context_create($opts);

$test = file_get_contents("https://api.royaleapi.com/top/players",true, $context);

var_dump(($test));
?>