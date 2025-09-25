document.addEventListener('DOMContentLoaded', () => {
    const beads = document.querySelectorAll('.bead');

    // タッチイベントの処理
    document.addEventListener('touchstart', (e) => {
        // 現在のすべての指の情報を取得
        const touches = e.touches;
        
        // すべての珠の点灯をリセット
        beads.forEach(bead => {
            bead.classList.remove('lit');
        });

        // 触れているすべての指に対応する珠を点灯させる
        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
            
            // タップされた要素が珠であるか確認
            if (targetElement && targetElement.classList.contains('bead')) {
                targetElement.classList.add('lit');
            }
        }
    });

    // 指が画面から離れたときの処理
    document.addEventListener('touchend', (e) => {
        // 画面に触れている指がなくなったか確認
        if (e.touches.length === 0) {
            beads.forEach(bead => {
                bead.classList.remove('lit');
            });
        }
    });
});
