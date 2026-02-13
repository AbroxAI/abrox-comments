// bubble-renderer.js
// ----------------------------------
// Responsible ONLY for rendering
// Telegram-style comment bubbles
// ----------------------------------

const BubbleRenderer = (() => {

    /**
     * Render a comment bubble
     * @param {Object} persona - from identity-engine.js
     * @param {String} text - message content
     * @param {HTMLElement} container - comments container
     */
    function render(persona, text, container) {

        if (!container) return;

        const commentEl = document.createElement("div");
        commentEl.className = "tg-comment";

        commentEl.innerHTML = `
            <img 
                class="tg-comment-avatar" 
                src="${persona.avatar}" 
                alt="${persona.name}"
            />

            <div class="tg-bubble ${persona.isAdmin ? 'admin' : ''}">
                <div class="tg-bubble-name">
                    ${persona.name}
                </div>
                <div class="tg-bubble-text">
                    ${escapeHTML(text)}
                </div>
            </div>
        `;

        container.appendChild(commentEl);

        // Smooth scroll to bottom like Telegram
        commentEl.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }

    /**
     * Basic XSS protection
     */
    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    return {
        render
    };

})();
