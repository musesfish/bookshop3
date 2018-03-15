<?php
	header("Content-Type:application/json");
	require_once("../init.php");
	$output=[
		"recommended"=>[],
		"new_arrival"=>[],
		"banners"=>[]
	];
	$sql="SELECT * FROM bs_book  LIMIT 10";
	$output["recommended"]=sql_execute($sql);
	$sql="SELECT * FROM bs_index_product WHERE seq_new_arrival>0 ORDER BY seq_new_arrival LIMIT 6";
	$output["new_arrival"]=sql_execute($sql);
	$sql="SELECT * FROM bs_index_carousel LIMIT 6";
	$output["banners"]=sql_execute($sql);
	echo json_encode($output);
?>