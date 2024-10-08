// 自动根据时间切换模式
function autoToggleMode() {
    const now = new Date(); // 获取当前时间
    const hours = now.getHours(); // 获取当前小时数
    const mainElement = document.getElementById('main-content'); // 获取main元素

    // 假设白天是6点到18点
    if (hours >= 6 && hours < 18) {
        mainElement.classList.remove('dark-mode'); // 移除夜间模式类
        document.getElementById('mode-toggle-icon').classList.remove('fa-moon'); // 移除月亮图标
        document.getElementById('mode-toggle-icon').classList.add('fa-sun'); // 添加太阳图标
    } else {
        mainElement.classList.add('dark-mode'); // 添加夜间模式类
        document.getElementById('mode-toggle-icon').classList.remove('fa-sun'); // 移除太阳图标
        document.getElementById('mode-toggle-icon').classList.add('fa-moon'); // 添加月亮图标
    }
}

// 初始化时自动切换模式
autoToggleMode();

// 手动切换模式
document.getElementById('mode-toggle-btn').addEventListener('click', function() {
    const mainElement = document.getElementById('main-content'); // 获取main元素
    mainElement.classList.toggle('dark-mode'); // 切换夜间模式类
    const icon = document.getElementById('mode-toggle-icon'); // 获取图标元素
    if (mainElement.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun'); // 移除太阳图标
        icon.classList.add('fa-moon'); // 添加月亮图标
    } else {
        icon.classList.remove('fa-moon'); // 移除月亮图标
        icon.classList.add('fa-sun'); // 添加太阳图标
    }
});
