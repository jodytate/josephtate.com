
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script src="../bootstrap/js/bootstrap.min.js"></script>

    <?php 

    //echo $otherScripts 

    foreach($otherScripts as $value) {
  		print '<script src=".js/' . $value . '.js"></script>';
	}


$length = count($array);
for ($i = 0; $i < $length; $i++) {
  print $array[$i];
}
	

    ?>



  </body>
</html>