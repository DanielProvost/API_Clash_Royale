<?php
include Database.php;
include Harvester.php;




class AddDataBase {



   public function addLocation($id,$name){

        $sql = 'INSERT INTO localisation(id,name) 
		VALUES (?,?,)';
        $this->db->queryAction($sql,[$id,$name]);
    }



    function addPlayers(){
        $sql = 'INSERT INTO detailplayers(expLevel,name,previousRank,rank,tag,trophies)
		VALUES (?,?,?,?,?,?)';
        $this->db->queryAction($sql,[$expLevel,$name,$previousRank,$rank,$tag,$trophies]);
    }
}

?>