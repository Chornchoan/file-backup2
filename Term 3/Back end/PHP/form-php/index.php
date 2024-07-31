<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    
</head>
<body>
    <div class="container">
        <form action="result.php" method="post">
            <div class='form-group mb-3'>
                <input type="text" class='form-control' name='text-input' placeholder='A'>
        
            </div> 
            <div class='form-group mb-3'>
                <input type="email" class='form-control' name='email-input' placeholder='B'>
        
            </div> 
            <div class='form-group mb-3'>
                <input type="password" class='form-control' name='password-input' placeholder='A'>
        
            </div> 
            <div class='form-group mb-3'>
                <input type="number" class='form-control' name='number-input' placeholder='A'>
        
            </div>
            <div class='form-group mb-3'>
                <textarea name="message" class="form-control" ></textarea>
            </div>
            <div class='form-group'>
                <button class='btn btn-primary'> Submit</button>
        
            </div>
        </form>

    </div>
</body>
</html>
