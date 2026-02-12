// -----------------------------
// Realism Engine
// -----------------------------

// Config
const REALISM_CONFIG = {
    minInterval: 3000,  // min 3 sec between synthetic comments
    maxInterval: 12000, // max 12 sec
    maxCommentsPerPost: 50, // max comments per post for realism
    adminReplyChance: 0.2 // 20% chance admin replies
};

// Track comments per post (keyed by post ID)
const postComments = {}; 

// -----------------------------
// Inject synthetic comment
// -----------------------------
function injectSyntheticComment(postId) {
    // Ensure post comment array exists
    if (!postComments[postId]) postComments[postId] = [];

    // Stop if reached max comments
    if (postComments[postId].length >= REALISM_CONFIG.maxCommentsPerPost) return;

    // Generate comment
    const textOptions = [
        "Amazing post! 🔥",
        "Thanks for sharing 😊",
        "I was looking for this!",
        "Wow, really helpful 👍",
        "Can someone explain this further?",
        "LOL 😂",
        "Not sure I agree 🤔",
        "Great content 💯",
        "Where can I learn more?",
        "This is epic!"
        // ... expand to 1000+ synthetic phrases for realism
    ];
    const text = textOptions[Math.floor(Math.random() * textOptions.length)];
    const commentObj = createComment(text); // from personas.js

    // Push into array and render
    postComments[postId].push(commentObj);
    renderComment(commentObj);

    // Random chance admin replies
    if (Math.random() < REALISM_CONFIG.adminReplyChance) {
        setTimeout(() => {
            const adminText = "Hi! Profit Hunter 🌐 here, glad you asked 😊";
            const adminComment = createComment(adminText, null, true);
            postComments[postId].push(adminComment);
            renderComment(adminComment);
        }, 2000 + Math.random() * 2000); // admin reply 2-4 sec later
    }

    // Schedule next synthetic comment
    scheduleNextSynthetic(postId);
}

// -----------------------------
// Schedule next synthetic comment
// -----------------------------
function scheduleNextSynthetic(postId) {
    const interval = REALISM_CONFIG.minInterval + Math.random() * 
                     (REALISM_CONFIG.maxInterval - REALISM_CONFIG.minInterval);
    setTimeout(() => injectSyntheticComment(postId), interval);
}

// -----------------------------
// Initialize realism for a post
// -----------------------------
function startRealismForPost(postId) {
    if (!postComments[postId]) postComments[postId] = [];

    // Start with random number of existing comments (5–15)
    const initialCount = 5 + Math.floor(Math.random() * 11);
    for (let i = 0; i < initialCount; i++) {
        const text = "Initial comment " + (i + 1);
        const commentObj = createComment(text);
        postComments[postId].push(commentObj);
        renderComment(commentObj);
    }

    // Start injecting synthetic comments
    scheduleNextSynthetic(postId);
}
