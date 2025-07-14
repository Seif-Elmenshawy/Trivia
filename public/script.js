document.getElementById("input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        document.getElementById("send").click();
    }
});
document.getElementById("name-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("start-button").click();
    }
});
function entergame(){
    const name = document.getElementById("name-input").value;
    document.getElementById("name").style.display="none";
    document.getElementById("game").style.display="block";
const messagesList = document.getElementById("messages");
    if (messagesList) {
        const welcomeMessage = document.createElement("li");
        welcomeMessage.textContent = `${name} joined the chat!`;
        welcomeMessage.className = "welcome-message";
        messagesList.appendChild(welcomeMessage);
        
        // Scroll to show new message
        messagesList.scrollTop = messagesList.scrollHeight;
    } else {
        console.error("Messages list element not found!");
    }
}    
document.getElementById("send").addEventListener("click" ,function(){
    const name = document.getElementById('name-input').value.trim();
    const messageContent = document.getElementById("input").value.trim();
    const sent=`${name}: ${messageContent}`;
    socket.emit("chat message", sent);
})
const socket = io("http://localhost:3000");