<?php
if(isset($_POST['email'])) {

    $email_to = "akashgajjar8@gmail.com";

    $email_subject = "website html form submissions";

    $email_from = $_POST['email'];

    $email_message = "Form details below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Email: ".clean_string($email_from)."\n";

$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers);
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Submission Successful</title>
    <link rel="icon" href="http://res.cloudinary.com/akashgajjar/image/upload/v1505859671/agicon_nhyxzw.png">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Ubuntu:300i" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  </head>
  <body class="jumbotron container">
    <section class="text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Thank You!</h1>
        <p class="lead text-muted">Thanks for opting in, I will try to get in touch with you ASAP.</p>
      </div>
    </section>
  </body>
</html>

<?php
}
die();
?>
