<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios</title>
</head>
<style>
     body{
            background-color:pink;
        }
        h1{
            color:white;
            font-size:40px
                        
        }
        #central{
            display:flex;  
            flex-direction:column;
            align-items:center;          
            background-color:gray;
            height:700px;
            width:700px;
            margin-left:auto;
            margin-right:auto;
            margin-top:50px;
            border-radius:30px;
           
        }
        #textinput{
            color:gray;
        }
        h2{
            display:flex;
            width:50px;
            flex-direction:column;
            align-items:left;
            color:white;
            text-align:end;
            margin-left:auto;
            margin-right:600px;
            justify-content:space-evenly;
        }
</style>
<body>
    <div id="central">
        <h1>Exercicios</h1>
    <?php 
        echo "<h1>Incorporando emojis! \u{1F30E}</h1>  ";
    ?>
    </div>
</body>

</html>