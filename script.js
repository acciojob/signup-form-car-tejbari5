//your code here
<!DOCTYPE html>

<html>

<head>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<!-- the entire body must be written by student -->
	<form method="post">
		<label id="name">Name: <input type="text" placeholder="Name" required></label><br>
		<label id="email"> Email: <input type="email" placeholder="Email" required></label><br>
		<label>Gender:
			<label><input type="radio" name="gender" value="Male"> Male </label>
			<label><input type="radio" name="gender" value="Female"> Female </label>
			</label>
		<br>
		<label id="cars">Car Brands: 
		<select>
			<option>Benz</option>
			<option>Ambazedor</option>
			<option>Rolls Roys</option>
			
		</select>
		
		</label><br>
		<label id="age"> Age: <input type="number" placeholder="Age" required></label><br>
		<label id="DOB"> DOB: <input type="date" required></label><br>
		<label id="tel">Phone Number: <input type="Tel" placeholder="xxx-xxx-xxxx"></label><br>
		<label id="password">PassWord: <input type="password" placeholder="Password" required></label><br>
		<label id="tos">I agree to the TOS: <input type="checkbox" required></label><br>
		<button type="submit">Submit</button>
	</form>
    <script type="text/javascript" src="./script.js">
</script>

</body>

</html>