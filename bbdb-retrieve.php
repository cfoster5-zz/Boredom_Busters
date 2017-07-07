<?php
   header('Access-Control-Allow-Origin: *');
   //******READ DATA FROM TABLES 'Vendor', 'Categories', 'Coupons'
   // Define database connection parameters
   $hn      = 'localhost';              
   $un      = 'username-of-database-here';
   $pwd     = 'password-for-database-here';
   $db      = 'name-of-database';
   $cs      = 'utf8';

   // Set up the PDO parameters
   $dsn  = "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
   $opt  = array(
                        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                        PDO::ATTR_EMULATE_PREPARES   => false,
                       );
   // Create a PDO instance (connect to the database)
   $pdo  = new PDO($dsn, $un, $pwd, $opt);
   $data = array();


   //  query database table and retrieve data
   try {
      $vendor    = $pdo->query('SELECT VEN_Name, VEN_Address, VEN_Address2, VEN_City, VEN_State, VEN_Zip,
                        VEN_Phone, VEN_Web, VEN_Price, VEN_Desc, VEN_OPN, VEN_CLS FROM Vendors ORDER BY VEN_Name ASC');

      while ($row  = $vendor->fetch(PDO::FETCH_OBJ))
      {
         // Assign each row of data to associative array
         $data[] = $row;
      }

      // Return data as JSON
      echo json_encode($data);
   }
        catch(PDOException $e)
   {
      echo $e->getMessage();
   }

   //
   try {

     $categories  = $pdo->query('SELECT VEN_Name, VEN_Address, VEN_Address2, VEN_City, VEN_State, VEN_Zip,
                        VEN_Phone, VEN_Web, VEN_Price, VEN_Desc, VEN_OPN, VEN_CLS FROM Categories ORDER BY VEN_Name ASC');

        while ($row  = $categories->fetch(PDO::FETCH_OBJ))
      {
         $data[] = $row;
      }    

         echo json_encode($data);

   }
        catch(PDOException $e)
   {
      echo $e->getMessage();
   }

   //Coupons tables
   try {

      $coupons    = $pdo->query('SELECT CAT_Type, CAT_Desc, CAT_IMG FROM Coupons ORDER BY CAT_Type ASC');

      while ($row  = $vendor->fetch(PDO::FETCH_OBJ))
      {       
         $data[] = $row;
      }

   }
      
      echo json_encode($data);
   }
        catch(PDOException $e)
   {
      echo $e->getMessage();
   }

?>
