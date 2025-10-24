// Notification
function showNotification(msg){
    const notif=document.createElement('div');
    notif.className='fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded z-50';
    notif.innerText=msg;
    document.body.appendChild(notif);
    setTimeout(()=> notif.remove(),3000);
}

// Modal
function openModal(id){ document.getElementById(id).style.display='block'; }
function closeModal(id){ document.getElementById(id).style.display='none'; }

// Smooth Scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Login/Register
let currentUser=null;
function handleLogin(e){
    e.preventDefault();
    const email=document.getElementById('email').value;
    currentUser={name: email.split('@')[0], email};
    localStorage.setItem('roomrun_user', JSON.stringify(currentUser));
    document.body.classList.add('logged-in');
    document.getElementById('user-name').innerText=currentUser.name;
    closeModal('login-modal');
    showNotification('Logged in successfully!');
}
function handleRegister(e){
    e.preventDefault();
    const name=document.getElementById('reg-name').value;
    const email=document.getElementById('reg-email').value;
    currentUser={name,email};
    localStorage.setItem('roomrun_user', JSON.stringify(currentUser));
    closeModal('register-modal');
    showNotification('Registered successfully! Please login.');
}
function logout(){
    localStorage.removeItem('roomrun_user');
    document.body.classList.remove('logged-in');
    showNotification('Logged out.');
}

// Chat Example
function sendMessage(){
    const chatInput=document.getElementById('chat-input');
    const msg=chatInput.value;
    if(msg.trim()==='') return;
    const chatBox=document.getElementById('chat-box');
    const msgDiv=document.createElement('div');
    msgDiv.className='chat-message user';
    msgDiv.innerText=msg;
    chatBox.appendChild(msgDiv);
    chatInput.value='';
    chatBox.scrollTop=chatBox.scrollHeight;

    // Bot reply
    setTimeout(()=>{
        const botDiv=document.createElement('div');
        botDiv.className='chat-message bot';
        botDiv.innerText='Thanks for your message! We will respond soon.';
        chatBox.appendChild(botDiv);
        chatBox.scrollTop=chatBox.scrollHeight;
    },1000);
}
