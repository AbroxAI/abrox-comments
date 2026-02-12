// -----------------------------
// DOM Elements
// -----------------------------
const inputField = document.getElementById('tg-comment-input');
const emojiBtn = document.querySelector('.tg-icon-btn[data-type="emoji"]');
const mediaBtn = document.querySelector('.tg-icon-btn[data-type="media"]');
const micBtn = document.querySelector('.tg-icon-btn[data-type="mic"]');
const sendBtn = document.getElementById('tg-send-btn');
const commentsContainer = document.getElementById('tg-comments-container');

// -----------------------------
// Telegram-style Input Button Toggle
// -----------------------------
function updateInputButtons() {
    if(inputField.value.trim().length > 0) {
        // User typing → hide emoji/media/mic, show blue send
        emojiBtn.style.display = 'none';
        mediaBtn.style.display = 'none';
        micBtn.style.display = 'none';
        sendBtn.style.background = '#3fa0ff';
    } else {
        // Empty → show emoji/media/mic
        emojiBtn.style.display = 'flex';
        mediaBtn.style.display = 'flex';
        micBtn.style.display = 'flex';
        sendBtn.style.background = '#555'; // inactive gray
    }
}

// Listen for input changes
inputField.addEventListener('input', updateInputButtons);
updateInputButtons(); // initial

// -----------------------------
// Emoji Picker (simple example)
// -----------------------------
emojiBtn.addEventListener('click', () => {
    // Simple prompt for demonstration; you can replace with full emoji UI
    const emoji = prompt('Insert emoji:');
    if (emoji) {
        inputField.value += emoji;
        updateInputButtons();
        inputField.focus();
    }
});

// -----------------------------
// Media Picker
// -----------------------------
mediaBtn.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            // Create a temporary bubble with image preview
            sendComment(inputField.value, imageData);
            inputField.value = '';
            updateInputButtons();
        };
        reader.readAsDataURL(file);
    };
    fileInput.click();
});

// -----------------------------
// Send Button
// -----------------------------
sendBtn.addEventListener('click', () => {
    const text = inputField.value.trim();
    if (!text) return; // don't send empty
    sendComment(text);
    inputField.value = '';
    updateInputButtons();
});

// -----------------------------
// Function to create a bubble
// -----------------------------
function sendComment(text, imageData = null) {
    // Create comment container
    const comment = document.createElement('div');
    comment.className = 'tg-comment';

    // Avatar (replace with real user avatar later)
    const avatar = document.createElement('img');
    avatar.className = 'tg-comment-avatar';
    avatar.src = 'https://i.pravatar.cc/32?u=' + Math.random(); // placeholder
    comment.appendChild(avatar);

    // Bubble
    const bubble = document.createElement('div');
    bubble.className = 'tg-bubble';
    bubble.innerText = text;

    // Add image if exists
    if(imageData) {
        const img = document.createElement('img');
        img.src = imageData;
        img.style.maxWidth = '200px';
        img.style.borderRadius = '12px';
        img.style.display = 'block';
        img.style.marginTop = '6px';
        bubble.appendChild(img);
    }

    comment.appendChild(bubble);
    commentsContainer.appendChild(comment);

    // Scroll into view
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
}
