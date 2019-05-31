<?php

class Harvester
{

    const apiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY0MSwiaWRlbiI6IjUyMzU0MTIxMjkzMDc2ODkwNyIsIm1kIjp7InVzZXJuYW1lIjoiTWFlZ3JpdGgiLCJrZXlWZXJzaW9uIjozLCJkaXNjcmltaW5hdG9yIjoiMTQ0MiJ9LCJ0cyI6MTU1OTI5MzM1NDY2N30.NcnfY3tw-lKwMmpzqOd5SygmZpgb4fDecvv2zfxBmpw";
    const beginUrl = "https://api.royaleapi.com";

    private $url;


    public function getUrl($finUrl){
        $cmd = "curl -X GET --header 'Accept:application/json' --header 'authorization: Bearer".self::apiKey."' ";
        $url = $cmd.self::beginUrl.$finUrl;
        return $this->url = $url;
    }


    public function thrawExec($finUrl){

        $url = $this->getUrl($finUrl);
        var_dump($url);
        exec($url, $output);
        return $output;
    }

    public function getLocation(){
        $finUrl = '/locations';
        return $this->thrawExec($finUrl);
    }

    public function getPlayers(){
        $finUrl = '/top/players';
        return $this->thrawExec($finUrl);
    }
 
}



