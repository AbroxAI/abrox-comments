// app.js
// -------------------------------------------------
// Global application controller
// Connects all engines together
// -------------------------------------------------

const App = (() => {

    let commentsContainer;
    let commentCounterEl;
    let commentCount = 0;

    function init() {

        commentsContainer = document.getElementById("tg-comments-container");
        commentCounterEl = document.getElementById("tg-comment-count");

        if (!commentsContainer) {
            console.warn("Comments container not found.");
            return;
        }

        initInteractions();
        initRealism();

        observeNewComments();
    }

    // -----------------------------------------
    // Initialize user interactions
    // -----------------------------------------
    function initInteractions() {

        Interactions.init({
            container: commentsContainer,
            input: document.getElementById("tg-comment-input"),
            sendBtn: document.getElementById("tg-send-btn"),
            rightButtons: document.querySelector(".tg-right-buttons"),
            emojiBtn: document.querySelector('.tg-icon-btn[data-type="emoji"]')
        });

    }

    // -----------------------------------------
    // Initialize synthetic realism engine
    // -----------------------------------------
    function initRealism() {

        if (typeof RealismEngine !== "undefined") {
            RealismEngine.start(commentsContainer);
        }

    }

    // -----------------------------------------
    // Auto comment counter observer
    // -----------------------------------------
    function observeNewComments() {

        const observer = new MutationObserver(() => {
            updateCommentCount();
        });

        observer.observe(commentsContainer, {
            childList: true
        });

        updateCommentCount();
    }

    function updateCommentCount() {

        commentCount = commentsContainer.children.length;

        if (commentCounterEl) {
            commentCounterEl.textContent = commentCount;
        }

    }

    return {
        init
    };

})();


// -----------------------------------------
// Boot Application
// -----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    App.init();
});
