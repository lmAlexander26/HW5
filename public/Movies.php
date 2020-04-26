<?php
    $URL = 'http://127.0.0.1:8000/movies';
    $get = file_get_contents($URL);
    print($get);