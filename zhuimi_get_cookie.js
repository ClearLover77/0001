// 🎯 脚本名称：获取 PHPSESSID（追觅音乐网）
const cookieName = '追觅音乐网'
const cookieKey = 'phpsessid_zhuimi'
const chavy = init()

if ($request && $request.headers && $request.headers.Cookie) {
  const cookie = $request.headers.Cookie
  const match = cookie.match(/PHPSESSID=([^;]+)/)
  if (match) {
    const sessionid = match[1]
    chavy.setdata(sessionid, cookieKey)
    chavy.msg(cookieName, '获取 PHPSESSID 成功 ✅', sessionid)
  } else {
    chavy.msg(cookieName, '未找到 PHPSESSID ❌', '')
  }
}

function init() {
  isSurge = () => typeof $httpClient !== 'undefined'
  isQuanX = () => typeof $task !== 'undefined'
  getdata = (key) => (isSurge() ? $persistentStore.read(key) : isQuanX() ? $prefs.valueForKey(key) : null)
  setdata = (val, key) => (isSurge() ? $persistentStore.write(val, key) : isQuanX() ? $prefs.setValueForKey(val, key) : null)
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  done = (value = {}) => $done(value)
  return { isSurge, isQuanX, msg, log, getdata, setdata, done }
}
chavy.done()
