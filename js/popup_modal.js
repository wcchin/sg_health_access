

function openModal(evt, cardName) {
  var cardcontent = document.getElementById(cardName);
  //cardcontent.className = cardcontent.className += " is-active";
  cardcontent.style.display = "block";
}
/*
function closeModal(evt, cardName) {
  var cardcontent = document.getElementById(cardName);
  if (cardcontent && cardcontent.className.includes("is-active")) {
    //cardcontent.className = cardcontent.className.replace(" is-active", "");
	cardcontent.style.display = "none";
  }
  var but = cardcontent.querySelector("#copyButton");
  if (but && but.className.includes("is-success")) {
    but.textContent = "Copy bibtex";
    but.className = but.className.replace(" is-success", " is-info");
  }
}
*/

function closeAllModals() {
  (document.querySelectorAll('.modal')).forEach(($modal) => {
    if ($modal.style.display=="block") {
      //$modal.className = $modal.className.replace(" is-active", "");
	  $modal.style.display = "none";
    }
  });
  (document.querySelectorAll('#copyButton')).forEach((but) => {
    if (but.className.includes("bg-success")) {
		but.className = but.className.replace(" bg-success", " bg-info");
		//but.textContent = 'Copy';
		$(but).html('<span class="mu mu-radio-off"></span> Copy');
    }
  });
}

document.addEventListener('keydown', (event) => {
  const e = event || window.event;
  if (e.keyCode === 27) { // Escape key
    closeAllModals();
  }
});

function copyModal(evt, cardName) {
  var card = document.getElementById(cardName);
  var cardcontent = card.querySelector("#bibtex");
  const copyText = cardcontent.textContent;
  //console.log(copyText);
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  //navigator.clipboard.writeText(textArea.value);
  textArea.remove();
  
  var but = card.querySelector("#copyButton");
  //but.textContent = "Copied!";
  $(but).html('<span class="mu mu-pass"></span> Copied');
  but.className = but.className.replace(" bg-info", " bg-success");
}
