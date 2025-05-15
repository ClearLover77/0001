// zhuimi_cookie.js
// 抓取请求头中的 Cookie，并保存

const cookie = $request.headers['Cookie'] || $request.headers['cookie'];

if (cookie) {
  $notification.post("🍪 Cookie 获取成功", "zhuimi 的请求 Cookie：", cookie);
  $persistentStore.write(cookie, "zhuimi_cookie");
  console.log("✅ 保存 Cookie 成功: " + cookie);
} else {
  $notification.post("❌ 未获取到 Cookie", "请求中没有 Cookie", "");
  console.log("❌ 请求中未找到 Cookie");
}

$done({});
