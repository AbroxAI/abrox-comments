// Ensure these are defined in index.html
const commentsContainer = document.getElementById('tg-comments-container');

// -----------------------------
// Add synthetic comment
// -----------------------------
function addSyntheticComment() {
    const user = syntheticUsers[Math.floor(Math.random() * syntheticUsers.length)];
    const textPool = [
        "Wow this is amazing!",
        "Can someone explain?",
        "I totally agree.",
        "This is 🔥",
        "Where can I find more info?",
        "💎💎💎",
        "Lol that's funny!",
        "I need this!"
    ];
    const text = textPool[Math.floor(Math.random() * textPool.length)];

    const commentEl = document.createElement('div');
    commentEl.className = 'tg-comment';

    commentEl.innerHTML = `
        <img class="tg-comment-avatar" src="${user.avatar}" alt="${user.name}">
        <div class="tg-bubble">${user.name}<br>${text}</div>
    `;

    commentsContainer.appendChild(commentEl);
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
}

// -----------------------------
// Admin reply
// -----------------------------
function addAdminReply(text) {
    const commentEl = document.createElement('div');
    commentEl.className = 'tg-comment';

    commentEl.innerHTML = `
        <img class="tg-comment-avatar" src="${adminUser.avatar}" alt="${adminUser.name}">
        <div class="tg-bubble admin">${adminUser.name}<br>${text}</div>
    `;

    commentsContainer.appendChild(commentEl);
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
}

// -----------------------------
// Simulate feed with timing
// -----------------------------
function simulateFeed() {
    setInterval(() => {
        // 70% chance for synthetic comment
        if (Math.random() < 0.7) addSyntheticComment();

        // 5% chance for admin reply
        if (Math.random() < 0.05) addAdminReply("Thanks for your question! 🔹");
    }, 2500 + Math.random() * 3000); // every 2.5-5.5s
}

// Start feed
simulateFeed();
