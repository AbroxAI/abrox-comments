// realism-engine.js
// -------------------------------------------------
// Controls synthetic activity timing + realism
// Requires:
// - identity-engine.js
// - bubble-renderer.js
// -------------------------------------------------

const RealismEngine = (() => {

    let container = null;
    let intervalId = null;

    // Large realistic message pool
    const messagePool = [
        "Wow this is solid 🔥",
        "Can someone explain this better?",
        "I tried this yesterday and it worked",
        "This makes sense actually",
        "Interesting strategy 🤔",
        "Who else is testing this?",
        "That entry was clean 💯",
        "Respect for sharing this",
        "I don't fully agree but okay",
        "This market is crazy lately",
        "Facts.",
        "That breakout was obvious",
        "Been waiting for this post",
        "Legend 🔥",
        "This helped a lot thanks",
        "Risky but smart",
        "Let’s see how it plays out",
        "Admin was right again 👀",
        "Timing was perfect",
        "Watching closely"
    ];

    /**
     * Start synthetic activity
     * @param {HTMLElement} targetContainer
     */
    function start(targetContainer) {
        if (!targetContainer) return;

        container = targetContainer;

        // Clear if already running
        if (intervalId) clearInterval(intervalId);

        intervalId = setInterval(() => {
            generateActivity();
        }, randomInterval());
    }

    /**
     * Stop activity
     */
    function stop() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    /**
     * Generate one realistic comment
     */
    function generateActivity() {

        if (!container) return;

        // 8% chance admin replies
        const isAdminReply = Math.random() < 0.08;

        const persona = isAdminReply
            ? getPersona({ type: "admin" })
            : getPersona({ type: "synthetic" });

        const message = messagePool[
            Math.floor(Math.random() * messagePool.length)
        ];

        BubbleRenderer.render(persona, message, container);

        // Restart interval with new random timing
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            generateActivity();
        }, randomInterval());
    }

    /**
     * Random interval between 6–18 seconds
     */
    function randomInterval() {
        return Math.floor(Math.random() * 12000) + 6000;
    }

    return {
        start,
        stop
    };

})();
