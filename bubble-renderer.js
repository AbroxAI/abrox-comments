 // -----------------------------
// Render a comment in the DOM
// -----------------------------
function renderComment(comment) {
    const { name, avatar, text, image, isAdmin, timestamp } = comment;

    // Comment container
    const commentEl = document.createElement('div');
    commentEl.className = 'tg-comment';

    // Avatar
    const avatarEl = document.createElement('img');
    avatarEl.className = 'tg-comment-avatar';
    avatarEl.src = avatar;
    commentEl.appendChild(avatarEl);

    // Bubble
    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'tg-bubble';
    if (isAdmin) bubbleEl.classList.add('admin');

    // User name
    const nameEl = document.createElement('div');
    nameEl.style.fontSize = '12px';
    nameEl.style.fontWeight = 'bold';
    nameEl.style.marginBottom = '2px';
    nameEl.textContent = name;
    bubbleEl.appendChild(nameEl);

    // Text
    const textEl = document.createElement('div');
    textEl.style.fontSize = '14px';
    textEl.style.lineHeight = '1.4';
    textEl.textContent = text;
    bubbleEl.appendChild(textEl);

    // Image (if present)
    if (image) {
        const imgEl = document.createElement('img');
        imgEl.src = image;
        imgEl.style.maxWidth = '200px';
        imgEl.style.borderRadius = '12px';
        imgEl.style.marginTop = '6px';
        imgEl.style.display = 'block';
        bubbleEl.appendChild(imgEl);
    }

    // Timestamp
    const timeEl = document.createElement('div');
    timeEl.style.fontSize = '10px';
    timeEl.style.color = '#aaa';
    timeEl.style.marginTop = '2px';
    const dateObj = new Date(timestamp);
    timeEl.textContent = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    bubbleEl.appendChild(timeEl);

    commentEl.appendChild(bubbleEl);

    // Append to container
    const container = document.getElementById('tg-comments-container');
    container.appendChild(commentEl);

    // Auto-scroll
    container.scrollTop = container.scrollHeight;

    // Trigger animation
    requestAnimationFrame(() => {
        commentEl.style.opacity = '1';
        commentEl.style.transform = 'translateY(0)';
    });
}

// -----------------------------
// Render multiple comments
// -----------------------------
function renderCommentsArray(commentsArray) {
    commentsArray.forEach(comment => renderComment(comment));
}
