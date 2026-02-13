// identity-engine.js
// -----------------------------
// Manages personas and admin identity
// -----------------------------

// Admin persona
const Admin = {
    name: "Profit Hunter 🌐",
    avatar: "static/admin-avatar.png",
    isAdmin: true
};

// Synthetic personas pool (1000+ for realism)
const SyntheticPool = [];
const TOTAL_PERSONAS = 1000;

// Example avatar sources for realism
const AVATAR_SOURCES = [
    "https://i.pravatar.cc/150?img=",
    "https://api.dicebear.com/6.x/avataaars/svg?seed=",
    "https://api.multiavatar.com/" // different style avatars
];

// Generate a random synthetic persona
function generateSyntheticPersona(id) {
    const nameVariants = [
        "alex", "maria", "john", "lily", "max", "zoe", "leo", "emma", "sam", "ava"
    ];

    // Add random suffix or emoji for realism
    const suffixes = ["", " 💸", " 🌟", "🔥", "💯", "✨", "💀", "😎"];

    const name = nameVariants[Math.floor(Math.random() * nameVariants.length)]
        + suffixes[Math.floor(Math.random() * suffixes.length)];

    // Random avatar from sources
    const avatarSource = AVATAR_SOURCES[Math.floor(Math.random() * AVATAR_SOURCES.length)];
    const avatar = avatarSource + Math.floor(Math.random() * 100);

    return {
        name: name,
        avatar: avatar,
        isAdmin: false
    };
}

// Populate the SyntheticPool
for (let i = 0; i < TOTAL_PERSONAS; i++) {
    SyntheticPool.push(generateSyntheticPersona(i));
}

// Helper: pick random persona
function getRandomPersona() {
    return SyntheticPool[Math.floor(Math.random() * SyntheticPool.length)];
}

// Expose a function to get admin or synthetic persona
function getPersona({ type = "synthetic" } = {}) {
    if (type === "admin") return Admin;
    return getRandomPersona();
}
