<?php

/*curl https://api.groq.com/openai/v1/chat/completions -s \*/
/*-H "Content-Type: application/json" \*/
/*-H "Authorization: Bearer $GROQ_API_KEY" \*/
/*-d '{*/
/*"model": "llama3-8b-8192",*/
/*"messages": [{*/
/*    "role": "user",*/
/*    "content": "Explain the importance of fast language models"*/
/*}]*/
/*}'*/

$message = "Howdy! Thanks for using nekomimi::API::v3 please enter a prompt with the ?prompt= GET method along your key ex: ?prompt=what%20can%20you%20do&key=GROQ_API_KEY";
$prompt = "Respond with nothing but exactly what follows: " . $message;
$API_KEY = "";

if (!empty($_GET["prompt"]))
{
  $prompt = $_GET["prompt"];
  /*$prompt = "hello";*/
}

if (!empty($_GET['key']))
{
  $API_KEY = $_GET['key'];
}

$url = "https://api.groq.com/openai/v1/chat/completions";
$data = [
  "model" => "llama3-8b-8192",
  "messages" => [[
    "role" => "user",
    "content" => $prompt
  ]]
];

$post = json_encode($data);
/*$post = $data;*/

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $API_KEY
]);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

$result=curl_exec($ch);
curl_close($ch);

header('Content-Type: application/json; charset=utf-8');
echo $result;
?>
