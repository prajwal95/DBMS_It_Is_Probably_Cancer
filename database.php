#!/usr/local/bin/php
<?php

// Create connection to Oracle
$connection = oci_connect($username = 'cheung',
                          $password = 'data&base42017',
                          $connection_string = '//oracle.cise.ufl.edu/orcl');

// Get query string as a get request (maybe change to POST later)
$query = str_replace('%20', ' ',$_SERVER['QUERY_STRING']);

$stid = oci_parse($connection, $query);
$r = oci_execute($stid);

// Fetch the results in an associative array
$rows = array();
while($r = oci_fetch_assoc($stid)) {
        $rows[] = $r;
 }
$result =(json_encode($rows));
echo "$result";
// Close the Oracle connection
oci_close($connection);

?>
