<?php
require_once("../init.php");
session_start();
header("Content-Type:application/json");
//header("Content-Type:text/plain");
@$uid=$_SESSION["uid"];
@$cid=$_REQUEST["cid"];//���Կͻ��˵��û����ﳵ��id��
@$count=$_REQUEST["count"];//���Կͻ��˵Ķ�Ӧ���ﳵ����Ʒ����

$sql_update="UPDATE bs_shopping_cart SET count=$count WHERE cid=$cid";
$sql_delete="DELETE FROM bs_shopping_cart WHERE cid=$cid";

if($count){//������Ϊ0ʱ��Ϊfalse��ô����ɾ������ ������Ǹ��²���
  sql_execute($sql_update);
  echo '{"code":-1}'; 
}
else{
  sql_execute($sql_delete);
  echo '{"code":-2}';
}
