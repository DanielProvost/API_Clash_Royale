<?php

class Harvester
{

    const apiKey ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMwYzUxMDRhLTQ2YTYtNDgxOC1hZjRhLWI5NjI4YTQxMGRiMSIsImlhdCI6MTU1ODY4MzM0NCwic3ViIjoiZGV2ZWxvcGVyL2I3YTk3YmNlLTU2N2UtODQ3MC05YWIzLTk3N2NkNzM4ZDQzNCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTQuMTk5LjI0MC4xNzAiXSwidHlwZSI6ImNsaWVudCJ9XX0.hmou8EDDg5z1grNKs2bjQoRD4-WvJsxy9_UL9tLxPmlJtolC6OOFrH7R1hlHKnncE8KxwBmwHiQPsFR_Om-Rxw";
    const beginUrl = "https://api.clashroyale.com/v1";

    private $url;


    public function getUrl($finUrl){
        $cmd = "curl -X GET --header \'Accept:application/json\' --header \'authorization:Bearer ".self::apiKey."\' ";
        $url = $cmd.self::beginUrl.$finUrl;
        return $this->url = $url;
    }

    public function thrawExec($finUrl){
        $url = $this->getUrl('');
        $this->exec($url, $output);
        return $output;
    }

    public function getLocation(){
        $finUrl = '\locations';
        return $this->thrawExec($finUrl);
    }

    public function getPlayers(){
        $finUrl = '/locations/57000087/rankings/players?limit=20';
        return $this->thrawExec($finUrl);
    }
 
}

?>

