// 适用于 Loon / Surge / Quantumult X 的获取 Cookie 脚本

const cookie = $request.headers["Cookie"] || $request.headers["cookie"];

if (cookie) {
  // 储存 Cookie
  $persistentStore.write(cookie, "moyu_php_cookie");
  console.log("✅ Cookie 获取成功:\n" + cookie);
  $notification.post("摸鱼儿签到", "Cookie 获取成功", "可以去关闭本规则了");
} else {
  console.log("❌ Cookie 获取失败: 未找到 Cookie");
  $notification.post("摸鱼儿签到", "Cookie 获取失败", "请检查请求头");
}
$done({});
