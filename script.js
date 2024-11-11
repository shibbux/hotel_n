// Check if user is logged in
if(localStorage.getItem("isLoggedIn") === "true") {
    document.getElementById("userStatus").innerHTML = "<p>You are logged in!</p><a href='book-rooms.html' class='btn'>Book a Room</a><br><a href='booked-rooms.html' class='btn'>View Booked Rooms</a>";
    document.querySelector('.button-container').style.display = "none";  // Hide login/signup buttons if logged in
}