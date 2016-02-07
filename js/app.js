"use strict";

// setuo your IIFE (Immediately Invoked Function Expression)

(function () {

	console.log("App Started...");
	
	//declared a named function way
	function ProjectDescription() {
		console.log("inside ProjectDescription function");
		
		var firstProject, secondProject, thirdProject, aboutme;
		
		firstProject = document.getElementById("firstProject");
		firstProject.innerHTML = "This was my final project in the first semester for web and internet fundamentels. Perticularly in this project I learned how to use jQuery slider and integrate google maps on website. ";
		
		secondProject = document.getElementById("secondProject");
		secondProject.innerHTML = "It is an ecommerce application that allows users to shop bags through the mobile app.The application interface is simple and fluid, giving the users a smooth and satisfactory feel while using the application. ";
		
		thirdProject = document.getElementById("thirdProject");
		thirdProject.innerHTML = "The team collaboration and communication app displays a user interface that I have perticularly designed to keep the workflow clear, straightforward, and as elegant as possible.";
		
		aboutme = document.getElementById("aboutme");
		aboutme.innerHTML = "Hi, I'm priyank vyas. A web/User Interface designer from India. I have completed my Bachelor of Engineering in India where I worked as a web/UI designer in one of the best mobile and web application development company of Gujarat for more than 2 years. where I designed various application for android ,iOS and web. But because of my strong desire to learn Web development I enrolled for the course of interactive web design and development in Georgian college, Barrie, Ontario";
	}
		ProjectDescription();



})();