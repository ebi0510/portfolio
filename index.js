// 要素を取得
// getElementsByClassName() を使用しようとしたがこれだと配列で返すので、getElementById() のような動作を期待する場合はquerySelector()を使うと良い
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    var btns = document.querySelectorAll('.modalBtn');
    var spans = document.querySelectorAll('.btn_close');

    // ボタンをクリックすると対応するモーダルを開く
    btns.forEach(function(btn) {
        btn.onclick = function() {
            var modalId = btn.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        }
    });

    // <span> (x) をクリックするとモーダルを閉じる
    spans.forEach(function(span) {
        span.onclick = function() {
            var modal = span.closest('.modal');
            modal.style.display = "none";
        }
    });

    // モーダルの外側をクリックすると閉じる
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});