
	 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script src="../bootstrap/js/bootstrap.min.js"></script>

    <?php 

      $length = count($otherScripts);
      
      if ($length > 0) {

      for ($i = 0; $i < $length; $i++) {
        echo '<script src=".js/' . $$otherScripts[$i] . '.js"></script>';;
      }

    }

    ?>
  <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
  </body>
</html>