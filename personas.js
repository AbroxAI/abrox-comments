// -----------------------------
// Synthetic Users Pool
// -----------------------------

// Example: 50 sample names, you can expand to 1000+ for realism
const syntheticUsers = [
    { name: 'Alice 🌸', avatar: 'https://i.pravatar.cc/32?u=alice1' },
    { name: 'Bob ⚡', avatar: 'https://i.pravatar.cc/32?u=bob1' },
    { name: 'Charlie 🚀', avatar: 'https://i.pravatar.cc/32?u=charlie1' },
    { name: 'Diana 🐱', avatar: 'https://i.pravatar.cc/32?u=diana1' },
    { name: 'Ethan 🎵', avatar: 'https://i.pravatar.cc/32?u=ethan1' },
    { name: 'Fiona 🍀', avatar: 'https://i.pravatar.cc/32?u=fiona1' },
    { name: 'Gus 🏎️', avatar: 'https://i.pravatar.cc/32?u=gus1' },
    { name: 'Hana 💎', avatar: 'https://i.pravatar.cc/32?u=hana1' },
    { name: 'Ivan 🔥', avatar: 'https://i.pravatar.cc/32?u=ivan1' },
    { name: 'Jade 🌙', avatar: 'https://i.pravatar.cc/32?u=jade1' },
    // ... add more until you reach 1000+ synthetic users
];

// -----------------------------
// Admin Persona
// -----------------------------
const adminUser = {
    name: 'Profit Hunter 🌐',
    avatar: 'https://i.pravatar.cc/32?u=admin',
    isAdmin: true
};

// -----------------------------
// Utility Functions
// -----------------------------

/**
 * Get a random synthetic user
 * @returns {Object} {name, avatar}
 */
function getRandomSyntheticUser() {
    const index = Math.floor(Math.random() * syntheticUsers.length);
    return syntheticUsers[index];
}

/**
 * Create a new comment object
 * @param {string} text - comment text
 * @param {string|null} image - optional image
 * @param {boolean} isAdmin - true if admin
 */
function createComment(text, image = null, isAdmin = false) {
    const user = isAdmin ? adminUser : getRandomSyntheticUser();
    return {
        name: user.name,
        avatar: user.avatar,
        text: text,
        image: image || null,
        isAdmin: isAdmin,
        timestamp: new Date().toISOString()
    };
}
