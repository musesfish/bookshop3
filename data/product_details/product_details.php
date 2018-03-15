<?php
	header("Content-Type:application/json");
	require_once("../init.php");
	@$bid=$_REQUEST["bid"];//拿到商品id
	$sql="SELECT * FROM bs_book WHERE bid=$bid";//从商品表得出对应商品信息
	$output=sql_execute($sql)[0];
    echo json_encode($output);
?>