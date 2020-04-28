<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Info</title>
    <script
        src="https://code.jquery.com/jquery-3.5.0.js"
        integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc="
        crossorigin="anonymous">
    </script> 
    <script src="movies.js"></script>
</head>
<body onload="changeIt();">
    <h2>Movie Information Site</h2>
    <select id="years" name="years"></select>
    <span id="results"></span>
    <button id="showButton">Click here for information about movies</button>
</body>
</html>
