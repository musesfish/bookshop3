<?php
require_once("../init.php");
session_start();
header("Content-Type:application/json");
//header("Content-Type:text/plain");
@$uid=$_SESSION["uid"];
@$cid=$_REQUEST["cid"];//来自客户端的用户购物车的id号
@$count=$_REQUEST["count"];//来自客户端的对应购物车的商品数量

$sql_update="UPDATE bs_shopping_cart SET count=$count WHERE cid=$cid";
$sql_delete="DELETE FROM bs_shopping_cart WHERE cid=$cid";

if($count){//当数量为0时即为false那么就是删除操作 否则就是更新操作
  sql_execute($sql_update);
  echo '{"code":-1}'; 
}
else{
  sql_execute($sql_delete);
  echo '{"code":-2}';
}
