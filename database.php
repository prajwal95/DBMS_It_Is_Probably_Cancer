
<?php

// Create connection to Oracle
$conn = oci_connect("pk1", "Guna#gator", "oracle.cise.ufl.edu:1521/orcl");

$query = 'select * from borders';
$stid = oci_parse($conn, $query);
$r = oci_execute($stid);

// Fetch the results in an associative array 
print '<table border="1">';
while ($row = oci_fetch_array($stid, OCI_RETURN_NULLS+OCI_ASSOC)) {
   print '<tr>';
   foreach ($row as $item) {
      print '<td>'.($item?htmlentities($item):' ').'</td>';
   }
   print '</tr>';
}
print '</table>';

// Close the Oracle connection
oci_close($conn);  

?>
