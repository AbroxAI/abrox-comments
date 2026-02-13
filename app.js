// -----------------------------
// App Initialization
// -----------------------------

// Example Post ID — in real use, set per Telegram post link
const currentPostId = 'post_001';

// Start realism engine for this post
startRealismForPost(currentPostId);

// -----------------------------
// Handle sending a comment from input
// -----------------------------
const inputField = document.getElementById('tg-comment-input');
const sendBtn = document.getElementById('tg-send-btn');

sendBtn.addEventListener('click', () => {
    const text = inputField.value.trim();
    if (!text) return;

    // Create a real user comment (generate random ID for demo)
    const userId = `real_${Math.floor(Math.random() * 10000)}`;
    const commentObj = createRealUserComment(userId, text);

    // Store in postComments array for the post
    if (!postComments[currentPostId]) postComments[currentPostId] = [];
    postComments[currentPostId].push(commentObj);

    // Render in DOM
    renderComment(commentObj);

    // Clear input
    inputField.value = '';
    inputField.focus();
});

// -----------------------------
// Optional: Handle Enter key for sending
// -----------------------------
inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
    }
});

// -----------------------------
// Optional: new comments indicator
// -----------------------------
const newCommentsIndicator = document.getElementById('tg-new-comments');
let isAtBottom = true;

const commentsContainer = document.getElementById('tg-comments-container');
commentsContainer.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = commentsContainer;
    isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
    if (isAtBottom) newCommentsIndicator.classList.add('hidden');
});

function showNewCommentsIndicator() {
    if (!isAtBottom) {
        newCommentsIndicator.classList.remove('hidden');
    }
}

// Wrap renderComment to show indicator if user scrolled up
const originalRenderComment = renderComment;
renderComment = (commentObj) => {
    originalRenderComment(commentObj);
    showNewCommentsIndicator();
};
