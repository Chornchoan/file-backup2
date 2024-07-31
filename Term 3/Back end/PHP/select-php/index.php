<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <form action="result.php" method ='post'>
            <div class="mb-3">
                <select name="choice" class="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio1" name="major" value="WEB">
                <label class="form-check-label" for="radio1">WEB</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="major" value="SNA">
                <label class="form-check-label" for="radio2">SNA</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio3" name="major" value="mobile">
                <label class="form-check-label" for="radio3">Mobile</label>
            </div>

        <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkbox1" name="skill[]" value="PHP">
                <label class="form-check-label" for="checkbox">PHP</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input"id="checkbox2" name="skill[]" value="DB" >
                <label class="form-check-label"for="checkbox">DB</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input"id="checkbox3" name="skill[]" value="BE" >
                <label class="form-check-label"for="checkbox">BE</label>
            </div>
        <div class="form-group mt-3">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
    </div>
    
</body>
</html>
