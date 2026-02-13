// Get DOM elements
const commentInput = document.getElementById('tg-comment-input');
const sendBtn = document.getElementById('tg-send-btn');
const rightButtons = document.querySelector('.tg-right-buttons');
const commentsContainer = document.getElementById('tg-comments-container');
const emojiBtn = document.querySelector('.tg-icon-btn[data-type="emoji"]');

// -----------------------------
// Swap Media Buttons <-> Send Arrow
// -----------------------------
commentInput.addEventListener('input', () => {
    if (commentInput.value.trim().length > 0) {
        // Typing: show blue send arrow
        sendBtn.style.display = 'flex';
        rightButtons.style.display = 'none';
    } else {
        // Empty: hide send, show media buttons
        sendBtn.style.display = 'none';
        rightButtons.style.display = 'flex';
    }
});

// -----------------------------
// Send Message
// -----------------------------
sendBtn.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (!text) return;

    // Create comment element
    const commentEl = document.createElement('div');
    commentEl.className = 'tg-comment';

    commentEl.innerHTML = `
        <img class="tg-comment-avatar" src="static/real-user.png" alt="User Avatar">
        <div class="tg-bubble">
            <div>You</div>
            <div>${text}</div>
        </div>
    `;

    commentsContainer.appendChild(commentEl);

    // Clear input and reset buttons
    commentInput.value = '';
    sendBtn.style.display = 'none';
    rightButtons.style.display = 'flex';

    // Scroll to bottom
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
});

// -----------------------------
// Emoji Picker
// -----------------------------
emojiBtn.addEventListener('click', () => {
    alert('Emoji picker would open here.');
});

// -----------------------------
// Media / Camera buttons
// -----------------------------
rightButtons.querySelectorAll('.tg-icon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`${btn.getAttribute('aria-label')} clicked`);
    });
});
