// 強制橫屏
function forceLandscape() {
    if (screen.orientation) {
        screen.orientation.lock('landscape');
    }
}

// 檢查方向並應用相應樣式
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // 直屏時
        forceLandscape();
    } else {
        // 橫屏時
        document.getElementById('helloWorld').style.transform = 'rotate(90deg)';
    }
}

// 頁面載入時檢查方向
window.onload = function () {
    forceLandscape();
    checkOrientation();
};

// 窗口大小變化時檢查方向
window.onresize = checkOrientation;