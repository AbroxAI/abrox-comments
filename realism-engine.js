// realism-engine.js

const RealismEngine = (() => {
    // Comment text pool
    const commentTexts = [
        "Wow, amazing!",
        "I totally agree 😊",
        "Can someone explain this?",
        "Interesting perspective 😎",
        "Thanks for sharing 💡",
        "I don't think so 🤔",
        "This is crazy!",
        "Love it ❤️",
        "Who else tried this?",
        "😂😂😂",
        "Wow, impressive 👏",
        "Hmm, not sure about that...",
        // ... expand to 2000+ realistic variations
    ];

    // Generate a synthetic comment
    function generateComment() {
        const persona = Personas.getRandom();
        const text = commentTexts[Math.floor(Math.random() * commentTexts.length)];

        return {
            name: persona.name,
            avatar: persona.avatar,
            text,
            isAdmin: persona.isAdmin
        };
    }

    return {
        generateComment
    };
})();
