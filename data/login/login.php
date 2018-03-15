<?php
	/*连接到数据库*/
	require_once("../init.php");

	session_start();
	header("Content-Type:application/json");
	/*获取来自客户端的数据*/
	@$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];

	/*编写sql语句*/
	$sql="SELECT * FROM bs_user WHERE uname='$uname' AND upwd='$upwd'";
	/*获取sql语句查询结果*/
	$result=sql_execute($sql);
	/*反馈结果给客户端*/
	if($result){
	    $_SESSION["uid"]=$result[0]["uid"];//登录成功就将uid存入session中
		$_SESSION["uname"]=$result[0]["uname"];
		$uid = $result[0]["uid"];
        echo json_encode(["code"=>1,"msg"=>"登录成功，即将去往首页","uid"=>$uid,"uname"=>$uname]);
	}else{
		echo json_encode(["code"=>-2,"msg"=>"用户名或密码有误"]);
	}
?>