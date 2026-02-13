// interactions.js

// DOM Elements
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
        sendBtn.style.display = 'flex';
        rightButtons.style.display = 'none';
    } else {
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

    // Get a real or synthetic persona
    const persona = Personas.getRandom(); // from personas.js

    // Create comment element
    const commentEl = document.createElement('div');
    commentEl.className = 'tg-comment';

    commentEl.innerHTML = `
        <img class="tg-comment-avatar" src="${persona.avatar}" alt="${persona.name}">
        <div class="tg-bubble ${persona.isAdmin ? 'admin' : ''}">
            <div class="tg-bubble-name">${persona.name}</div>
            <div class="tg-bubble-text">${text}</div>
        </div>
    `;

    commentsContainer.appendChild(commentEl);

    // Scroll smoothly to bottom
    commentEl.scrollIntoView({ behavior: 'smooth', block: 'end' });

    // Clear input and reset buttons
    commentInput.value = '';
    sendBtn.style.display = 'none';
    rightButtons.style.display = 'flex';
});

// -----------------------------
// Emoji Picker
// -----------------------------
emojiBtn.addEventListener('click', () => {
    // TODO: implement actual emoji picker
    alert('Emoji picker would open here.');
});

// -----------------------------
// Media / Camera buttons
// -----------------------------
rightButtons.querySelectorAll('.tg-icon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('aria-label');
        alert(`${type} clicked`);
        // TODO: media preview
    });
});

// -----------------------------
// Optional: Generate synthetic comments over time
// -----------------------------
setInterval(() => {
    const syntheticComment = RealismEngine.generateComment(); // from realism-engine.js
    if (!syntheticComment) return;

    const commentEl = document.createElement('div');
    commentEl.className = 'tg-comment';

    commentEl.innerHTML = `
        <img class="tg-comment-avatar" src="${syntheticComment.avatar}" alt="${syntheticComment.name}">
        <div class="tg-bubble ${syntheticComment.isAdmin ? 'admin' : ''}">
            <div class="tg-bubble-name">${syntheticComment.name}</div>
            <div class="tg-bubble-text">${syntheticComment.text}</div>
        </div>
    `;

    commentsContainer.appendChild(commentEl);
    commentEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
}, 12000); // every 12 seconds, new synthetic comment
