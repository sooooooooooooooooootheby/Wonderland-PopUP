# Wonderland-PopUP

这是一个原生JavaScript编写的弹窗插件，v1.0.0版本支持最基本的自定义文本和超时。

# 使用方法:

## 安装

### CDN:

```
# js
在<body>标签内使用
https://cdn.jsdelivr.net/gh/sooooooooooooooooootheby/Wonderland-PopUP/src/pop-up.js

在<head>标签内使用
# css
https://cdn.jsdelivr.net/gh/sooooooooooooooooootheby/Wonderland-PopUP/src/pop-up.css
```

## 使用

### 弹窗1

```

<button click="popup('ciallo (∠・ω )⌒★', 3000, #000000)">ciallo (∠・ω )⌒★</button>

```

`popup('ciallo (∠・ω )⌒★', 3000, #000000)` 第一个参数是文本内容，第二个是超时时间（单位ms），如果不设置默认3000ms（3s）

### 窗口1
```
# 通过按钮触发
<button onclick="win({text: '输入你需要显示的文本'})">按钮2</button>

# 在页面加载完成后触发
document.addEventListener("DOMContentLoaded", function () {
    win({
        text: "输入你需要的文本",
    });
});

```

# 更新日志

## v1.0.1

更新了颜色参数。
`popup('ciallo (∠・ω )⌒★', 3000, #000000)`新增的第三个参数是背景颜色参数，如果不设置默认为#869379

## v1.0.2
更新了窗口1