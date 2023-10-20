const unread = document.querySelectorAll("#unread");
const notifications = document.querySelectorAll(".notifications");

const additionalMessages = [
  "sample Text",
  "sample Text",
  "sample Text",
  "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  '<img src="assets/images/image-chess.webp" alt="">',
  "sample Text",
  "sample Text"
];

function readThis(index) {

  unread[index].className = '';

  const expand = document.querySelectorAll('.notifications .expand');
  console.log(notifications[index].children);
  if (!notifications[index].children[1]) {
    notifications[index].innerHTML += `<div class="expand">
      <p>${additionalMessages[index]}</p>
    </div>`;
  }

  notifications[index].className = "notifications";
  unread[index].className = "";
  console.log(`${unread[index].className} : ${notifications[index].className}`);
}


function readAll() {
  for (let i = 0; i < unread.length; i++) {
    readThis(i);
  }
}
