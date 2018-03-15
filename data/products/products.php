<?php
	require_once("../init.php");
	header("Content-Type:application/json");

	$output=[
		"count"=>0,
		"pageSize"=>10,
		"pageCount"=>0,
		"pageNo"=>0,
		"data"=>[]
	];
	@$kw=urldecode($_REQUEST["kw"]);
	@$pno=$_REQUEST["pno"];
	@$fid=$_REQUEST["fid"];

	if(!$pno) $pno=0;

	$sql="SELECT * FROM bs_book WHERE TITLE like '%".$kw."%'";

	$output["count"]=count(sql_execute($sql));//总数据数
	$output["pageCount"]=ceil($output["count"]/$output["pageSize"]);//页码数
	$output["pageNo"]=$pno;//当前页码
	$sql=$sql." LIMIT ".($pno*$output["pageSize"]).",".$output["pageSize"];// limit 0,5;
	$output["data"]=sql_execute($sql);//当页数据

	//echo $sql;
	//echo "\n\n";
	echo json_encode($output);
?>