<?php
	/*连接到数据库*/
	require_once("../init.php");
	session_start();
	$_SESSION["uid"]=null;//用于清空已登录记录
	echo '{"code":-2}';
?>