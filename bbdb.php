<?php
//Be sure to upload bbdb.php and bbdb-retrieve.php to a publicly accessible location on your remote server,
// permissions should be set to 755
// absolute address to these scripts (I.e. 'http://www.website-address.suffix/directory'/bbdb-retrieve.php) FILL IN UNDERLINE***
//we need this for the Ionic/Angular side of the project.
   header('Access-Control-Allow-Origin: *');
    //******CREATE, UPDATE, DELETE DATA FROM TABLES 'Vendor', 'Categories', 'Coupons'
   // Define database connection parameters
   $hn      = 'localhost';
   $un      = 'username-of-database-here';
   $pwd     = 'password-for-database-here';
   $db      = 'VEN_Name-of-database';
   $cs      = 'utf8';

   // Set up the PDO parameters
   $dsn  = "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
   $opt  = array(
                        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                        PDO::ATTR_EMULATE_PREPARES   => false,
                       );
   // connect to the database
   $pdo  = new PDO($dsn, $un, $pwd, $opt);

   // Retrieve specific parameter from supplied URL
   $key  = strip_tags($_REQUEST['key']);
   $data    = array();


   // Determine which mode is being requested
   switch($key)
   {

      // Add a new record to the Vendors table
      case "vendorCreate":

         // Sanitise?!?

         $VEN_Name       = filter_var($_REQUEST['VEN_Name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Address    = filter_var($_REQUEST['VEN_Address'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Address2   = filter_var($_REQUEST['VEN_Address2'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_City       = filter_var($_REQUEST['VEN_City'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_State      = filter_var($_REQUEST['VEN_State'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Zip        = filter_var($_REQUEST['VEN_Zip'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Phone      = filter_var($_REQUEST['VEN_Phone'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Web        = filter_var($_REQUEST['VEN_Web'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Price      = filter_var($_REQUEST['VEN_Price'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Desc       = filter_var($_REQUEST['VEN_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_OPN        = filter_var($_REQUEST['VEN_OPN'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_CLS        = filter_var($_REQUEST['VEN_CLS'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);


         // run PDO
         try {
            $sql  = "INSERT INTO Vendors( VEN_Name, VEN_Address, VEN_Address2, VEN_City, VEN_State, VEN_Zip,
                        VEN_Phone, VEN_Web, VEN_Price, VEN_Desc, VEN_OPN, VEN_CLS )
                     VALUES( :VEN_Name, :VEN_Address, :VEN_Address2, :VEN_City, :VEN_State, :VEN_Zip, :VEN_Phone, :VEN_Web,
                             :VEN_Price, :VEN_Desc, :VEN_OPN, :VEN_CLS)";
            $stmt    = $pdo->prepare($sql);
            $stmt->bindParam(':VEN_Name', $VEN_Name, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Address', $VEN_Address, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Address2', $VEN_Address2, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_City', $VEN_City, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_State', $VEN_State, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Zip', $VEN_Zip, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Phone', $VEN_Phone, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Web', $VEN_Web, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Price', $VEN_Price, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Desc', $VEN_Desc, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_OPN', $VEN_OPN, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_CLS', $VEN_CLS, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode(array('message' => 'A new Vendor: '. $VEN_Name . ' was added to the database'));
         }
         // Error Catch
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

            break;

		//Add a new record to the Categories table
		case "categoriesCreate":

		$CAT_Type = filter_var($_REQUEST['CAT_Type'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		$CAT_Desc = filter_var($_REQUEST['CAT_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		$CAT_IMG = filter_var($_REQUEST['CAT_IMG'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		    //also need to make sure all of Categories' records are present
		try {
            $sql  = "INSERT INTO Categories(CAT_Type, CAT_Desc, CAT_IMG) VALUES(:CAT_Type, :CAT_Desc, :CAT_IMG)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':CAT_Type', $CAT_Type, PDO::PARAM_STR);
            $stmt->bindParam(':CAT_Desc', $CAT_Desc, PDO::PARAM_STR);
			      $stmt->bindParam(':CAT_IMG', $CAT_IMG, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode(array('message' => 'Category Type: '. $CAT_Type .' : ' . $CAT_Desc .' was added to the database'));
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

            break;

	  //Add a new record to Coupons table
	  case "couponsCreate":

		$CPN_IMG = filter_var($_REQUEST['CPN_IMG'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		$CPN_Desc = filter_var($_REQUEST['CPN_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);


		    //also need to make sure all of Coupons' records are present******
		try {
            $sql  = "INSERT INTO Categories(CPN_IMG, CPN_Desc) VALUES(:CPN_IMG, :CPN_Desc)";
            $stmt    = $pdo->prepare($sql);
            $stmt->bindParam(':CPN_IMG', $CPN_IMG, PDO::PARAM_STR);
            $stmt->bindParam(':CPN_Desc', $CPN_Desc, PDO::PARAM_STR);
		    $stmt->execute();

            echo json_encode(array('message' => 'The image link: ' . $CPN_IMG . '  :  ' . $CPN_Desc .' was added to the database'));
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

            break;



	 // Update an existing record in the Vendors table
      case "updateVendors":

         // Sanitise
		 $VEN_Name       = filter_var($_REQUEST['VEN_Name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Address    = filter_var($_REQUEST['VEN_Address'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Address2   = filter_var($_REQUEST['VEN_Address2'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_City       = filter_var($_REQUEST['VEN_City'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_State      = filter_var($_REQUEST['VEN_State'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Zip        = filter_var($_REQUEST['VEN_Zip'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Phone      = filter_var($_REQUEST['VEN_Phone'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Web        = filter_var($_REQUEST['VEN_Web'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Price      = filter_var($_REQUEST['VEN_Price'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Desc       = filter_var($_REQUEST['VEN_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_OPN        = filter_var($_REQUEST['VEN_OPN'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_CLS        = filter_var($_REQUEST['VEN_CLS'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // Run PDO
         try {
            $sql  = "UPDATE Vendors SET VEN_Name = :VEN_Name, VEN_Address = :VEN_Address, VEN_Address2 = :VEN_Address2,
            VEN_City = :VEN_City, VEN_State = :VEN_State, VEN_Zip = :VEN_Zip, VEN_Phone = :VEN_Phone, VEN_Web = :VEN_Web,
            VEN_Price = :VEN_Price, VEN_Desc = :VEN_Desc, VEN_OPN = :VEN_OPN, VEN_CLS = :VEN_CLS  WHERE id = :VEN_ID";

            $stmt =  $pdo->prepare($sql);
            $stmt->bindParam(':VEN_Name', $VEN_Name, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Address', $VEN_Address, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Address2', $VEN_Address2, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_City', $VEN_City, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_State', $VEN_State, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Zip', $VEN_Zip, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Phone', $VEN_Phone, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Web', $VEN_Web, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Price', $VEN_Price, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_Desc', $VEN_Desc, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_OPN', $VEN_OPN, PDO::PARAM_STR);
            $stmt->bindParam(':VEN_CLS', $VEN_CLS, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode('message'=> . $VEN_Name .' was updated');
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;

	   case "updateCategories":

         // Sanitise
		 $CAT_Type = filter_var($_REQUEST['CAT_Type'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		 $CAT_Desc = filter_var($_REQUEST['CAT_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		 $CAT_IMG = filter_var($_REQUEST['CAT_IMG'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // run PDO
         try {
            $sql  = "UPDATE Categories SET CAT_Type = :CAT_Type, CAT_Desc = :CAT_Desc, CAT_IMG = :CAT_IMG WHERE id = :CAT_ID";
            $stmt =  $pdo->prepare($sql);
            $stmt->bindParam(':CAT_Type', $CAT_Type, PDO::PARAM_STR);
            $stmt->bindParam(':CAT_Desc', $CAT_Desc, PDO::PARAM_STR);
            $stmt->bindParam(':CAT_IMG', $CAT_IMG, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode('message'=> . $CAT_Type . ' was updated');
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;

	   case "updateCoupons":

         // Sanitise
         $CPN_IMG = filter_var($_REQUEST['CPN_IMG'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		 $CPN_Desc = filter_var($_REQUEST['CPN_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);


         // run PDO
         try {
            $sql  = "UPDATE Coupons SET CPN_IMG = :CPN_IMG, CPN_Desc = :CPN_Desc WHERE id = :CPN_ID";
            $stmt =  $pdo->prepare($sql);
            $stmt->bindParam(':CPN_IMG', $CPN_IMG, PDO::PARAM_STR);
            $stmt->bindParam(':CPN_Desc', $CPN_Desc, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode('message'=> 'The Coupon: '. $CPN_Desc . ' was updated');
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;




      // Remove an existing record in the Vendors table
      case "deleteVendors":

         // Sanitise
         $VEN_Name       = filter_var($_REQUEST['VEN_Name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Address    = filter_var($_REQUEST['VEN_Address'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Address2   = filter_var($_REQUEST['VEN_Address2'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_City       = filter_var($_REQUEST['VEN_City'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_State      = filter_var($_REQUEST['VEN_State'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Zip        = filter_var($_REQUEST['VEN_Zip'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Phone      = filter_var($_REQUEST['VEN_Phone'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Web        = filter_var($_REQUEST['VEN_Web'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Price      = filter_var($_REQUEST['VEN_Price'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_Desc       = filter_var($_REQUEST['VEN_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_OPN        = filter_var($_REQUEST['VEN_OPN'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $VEN_CLS        = filter_var($_REQUEST['VEN_CLS'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
        //Run PDO
         try {
            $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM Vendors WHERE id = :VEN_ID";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':VEN_ID', $VEN_ID, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('message'=>'The vendor: ' . $VEN_Name . ' was removed');
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

             break;

      case "deleteCategories"

         $CAT_Type = filter_var($_REQUEST['CAT_Type'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		 $CAT_Desc = filter_var($_REQUEST['CAT_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		 $CAT_IMG = filter_var($_REQUEST['CAT_IMG'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

          try {
            $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM Categories WHERE id = :CAT_ID";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':CAT_ID', $CAT_ID, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('The category: ' . $CAT_Type . ' was removed');
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

             break;

      case "deleteCoupons"

        $CPN_IMG = filter_var($_REQUEST['CPN_IMG'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
		$CPN_Desc = filter_var($_REQUEST['CPN_Desc'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

          try {
            $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM Coupons WHERE id = :CPN_ID";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':CPN_ID', $CPN_ID, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('message'=>'The coupons: ' . $CPN_Desc . ' was removed');
         }

         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

             break;



   }

?>
