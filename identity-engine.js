// -----------------------------
// Identity Engine
// -----------------------------

// Store real users keyed by a unique ID (could be session, localStorage, etc.)
const realUsers = {};

// Default placeholder avatars (replace with any service or user uploads)
const defaultAvatars = [
    'https://i.pravatar.cc/32?u=real1',
    'https://i.pravatar.cc/32?u=real2',
    'https://i.pravatar.cc/32?u=real3',
    'https://i.pravatar.cc/32?u=real4',
    'https://i.pravatar.cc/32?u=real5'
];

// -----------------------------
// Generate a new real user
// -----------------------------
function registerRealUser(userId, name = null, avatar = null) {
    if (realUsers[userId]) return realUsers[userId];

    const user = {
        id: userId,
        name: name || `User${Math.floor(Math.random() * 1000)}`,
        avatar: avatar || defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)]
    };

    realUsers[userId] = user;
    return user;
}

// -----------------------------
// Get a real user by ID
// -----------------------------
function getRealUser(userId) {
    return realUsers[userId] || registerRealUser(userId);
}

// -----------------------------
// Create comment object for a real user
// -----------------------------
function createRealUserComment(userId, text, image = null) {
    const user = getRealUser(userId);
    return {
        name: user.name,
        avatar: user.avatar,
        text: text,
        image: image,
        isAdmin: false,
        timestamp: new Date().toISOString()
    };
}

// -----------------------------
// Mix real and synthetic users
// -----------------------------
function pickRandomUserForComment() {
    // 50/50 chance real user or synthetic
    if (Math.random() < 0.5) {
        const syntheticComment = createComment(
            "Random synthetic message",
            null,
            false
        );
        return syntheticComment;
    } else {
        // Example userId: could be session or hash
        const userId = `real_${Math.floor(Math.random() * 1000)}`;
        const realComment = createRealUserComment(userId, "Random real user message");
        return realComment;
    }
}
