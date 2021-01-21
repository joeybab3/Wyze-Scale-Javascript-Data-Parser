<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous">
    <title>Wyze Parsing</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
</head>
<body>
    <div class="conatiner mt-5 px-5">
        <div class="row">
			<div class="col-md-12 mb-5 text-center">
				<h1 id="username">Load a file to get started</h1>
				<p>No data is sent over the internet, all processing is done on your local browser.</p>
			</div>
		</div>
		<div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-3">
                <input class="form-control" type="file" id="input" accept=".xls,.xlsx"  >
            </div>
            <div class="col-md-2">
                <button class="btn btn-primary" id="button">Convert</button>
            </div>
		</div>
		<div class="row mt-5">
			<div class="col-md-6">
				<canvas id="body" width="640" height="480"></canvas>
			</div>
			<div class="col-md-6">
				<canvas id="heart" width="640" height="480"></canvas>
			</div>
		</div>
	</div>
</body>
<script src="scale.js"></script>
</html>