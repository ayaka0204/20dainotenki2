document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // 一度アニメーションしたら監視を停止
                }
            });
        },
        { threshold: 0.1 } // 要素が10%見えたらトリガー
    );

    // トークの各メッセージを監視対象に追加
    const messages = document.querySelectorAll(".message");
    messages.forEach(message => {
        message.classList.add("hidden"); // 初期状態を設定
        observer.observe(message);
    });
});
