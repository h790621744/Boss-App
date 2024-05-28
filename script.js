// script.js

// 显示登录弹窗
document.getElementById('login-button').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'block';
});

// 显示注册弹窗
document.getElementById('signup-button').addEventListener('click', function() {
    document.getElementById('signup-modal').style.display = 'block';
});

// 隐藏弹窗
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// 处理登录表单提交
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // 模拟 AJAX 请求
    console.log('发送登录请求...');
    console.log('邮箱:', email);
    console.log('密码:', password);

    // 这里可以使用真实的 AJAX 请求，向服务器发送登录请求
});

// 处理注册表单提交
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 模拟 AJAX 请求
    console.log('发送注册请求...');
    console.log('用户名:', username);
    console.log('邮箱:', email);
    console.log('密码:', password);

    // 这里可以使用真实的 AJAX 请求，向服务器发送注册请求
});

// script.js

