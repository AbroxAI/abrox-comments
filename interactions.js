// interactions.js
// -------------------------------------------------
// Handles:
// - Input behavior
// - Media ↔ Send toggle
// - Sending real user messages
// Requires:
// - bubble-renderer.js
// -------------------------------------------------

const Interactions = (() => {

    let container;
    let input;
    let sendBtn;
    let rightButtons;
    let emojiBtn;

    function init(config) {

        container = config.container;
        input = config.input;
        sendBtn = config.sendBtn;
        rightButtons = config.rightButtons;
        emojiBtn = config.emojiBtn;

        if (!container || !input || !sendBtn || !rightButtons) {
            console.warn("Interactions not initialized properly.");
            return;
        }

        bindInputToggle();
        bindSendBehavior();
        bindMediaButtons();
    }

    // -----------------------------------------
    // Telegram-style toggle (media ↔ send)
    // -----------------------------------------
    function bindInputToggle() {

        input.addEventListener("input", toggleButtons);
        toggleButtons(); // set initial state
    }

    function toggleButtons() {
        if (input.value.trim().length > 0) {
            sendBtn.style.display = "flex";
            rightButtons.style.display = "none";
        } else {
            sendBtn.style.display = "none";
            rightButtons.style.display = "flex";
        }
    }

    // -----------------------------------------
    // Send message
    // -----------------------------------------
    function bindSendBehavior() {

        sendBtn.addEventListener("click", sendMessage);

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                if (input.value.trim()) {
                    e.preventDefault();
                    sendMessage();
                }
            }
        });
    }

    function sendMessage() {

        const text = input.value.trim();
        if (!text) return;

        // Real user persona (fixed identity)
        const userPersona = {
            name: "You",
            avatar: "static/real-user.png",
            isAdmin: false
        };

        BubbleRenderer.render(userPersona, text, container);

        resetInput();
    }

    function resetInput() {
        input.value = "";
        toggleButtons();
        input.focus();
    }

    // -----------------------------------------
    // Media + Emoji button hooks
    // (Logic can be expanded later)
    // -----------------------------------------
    function bindMediaButtons() {

        if (emojiBtn) {
            emojiBtn.addEventListener("click", () => {
                console.log("Emoji picker triggered");
                // integrate emoji system later
            });
        }

        rightButtons.querySelectorAll(".tg-icon-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const type = btn.getAttribute("aria-label");
                console.log(`${type} clicked`);
            });
        });
    }

    return {
        init
    };

})();
