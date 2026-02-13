// -----------------------------
// Avatar Pool
// -----------------------------
const avatarPool = [];

// Realistic faces (Pravatar)
for (let i = 1; i <= 200; i++) {
    avatarPool.push(`https://i.pravatar.cc/150?img=${i}`);
}

// Anime / random placeholders
for (let i = 1; i <= 50; i++) {
    avatarPool.push(`https://placeimg.com/64/64/any?${i}`);
}

// -----------------------------
// Username Pool
// -----------------------------
const usernamePool = [];
const emojis = ['🔥','💰','🌐','🚀','🎯','💎','📈'];

for (let i = 0; i < 1000; i++) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const name = Math.random() > 0.5 ? `User${i}` : `user${i}`;
    usernamePool.push(`${emoji} ${name}`);
}

// -----------------------------
// Synthetic Users
// -----------------------------
const syntheticUsers = usernamePool.map((name, idx) => ({
    name,
    avatar: avatarPool[idx % avatarPool.length]
}));

// -----------------------------
// Admin
// -----------------------------
const adminUser = {
    name: "Profit Hunter 🌐",
    avatar: "static/admin-avatar.png",
    isAdmin: true
};
