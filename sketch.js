let bot
function preload() {
    bot = new RiveScript();
    bot.loadFile("brain.rive", brainReady, brainError);
}
function setup() {
    noCanvas();
    document.getElementById("text").value = "" 

    document.getElementById("send").addEventListener("click", () => {
        a = document.getElementById("text")
        if (a.value) {
            (async () => {
                console.log(a.value)
                chat = document.getElementById("chat")
    
                chat.innerHTML += `<div class="msg right-msg">
                <div class="msg-img" style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"></div>
        
                <div class="msg-bubble">
                  <div class="msg-info">
                    <div class="msg-info-name">You</div>
                    <!-- <div class="msg-info-time">12:46</div> -->
                  </div>
        
                  <div class="msg-text">
                    ${a.value}
                  </div>
                </div>
              </div>`
                chat.innerHTML += `      <div class="msg left-msg">
    <div class="msg-img" style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"></div>
    
    <div class="msg-bubble">
    <div class="msg-info">
    <div class="msg-info-name">SIA</div>
    <!-- <div class="msg-info-time">12:45</div> -->
    </div>
    
    <div class="msg-text">
    ${(await bot.reply("local-user", a.value))}
    </div>
    </div>
    </div>`
                a.value = ""
                document.getElementById("chat").scrollTo(0,  document.getElementById("chat").scrollHeight);
    
            })();
    
        }
    })
    
    document.getElementById("text").addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("send").click();
        }
    });
    
}


function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();

    // let reply = bot.reply('local-user', 'set ' + num);
}


function brainError(e) {
    console.log('Chatbot error!', e)
}