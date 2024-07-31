<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Include PHP files</title>
    <link rel="stylesheet" href="./css/system.css">
</head>
    
    <body>
        <form action="" method="get">
            <div class='title'> Club application</div>
            <div class="name"> Name: <input type="text" name="name"></div>
            <div class="club">
                Cloub you want to apply:
                <select> 
                    <option value="">Gym</option>
                    <option value="">footballe </option>
                    <option value="">Sing</option>
                    <option value="">Yoga</option> 
                </select>
            </div>
            <div class="time">
                Be time for you:
                <input type="radio" name="day"
                <?php if (isset($time) && $time=="Sarturdaymornings") echo "checked";?>
                value="Sarturdaymornings">Sarturday mornings
                <input type="radio" name="day"
                <?php if (isset($time) && $time=="Sarturdayafternoon") echo "checked";?>
                value="Sarturdayafternoon ">Sarturday afternoon 
                <input type="radio" name="day"
                <?php if (isset($time) && $time=="Sarturdayevening") echo "checked";?>
                value="Sarturdayevening ">Sarturday evening 
            </div>
            <div class="skill">
                Your Skill:
                <input type="checkbox">The best coder
                <input type="checkbox">a soper star
                <input type="checkbox">Singer
                <input type="checkbox">good in designe 
                <input type="checkbox">The best sleeper
            </div>
            <button type="submit">SUBMIT !</button>
        </form>
    </body>
</html>
