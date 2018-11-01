const net = require('net')
const crypto = require('crypto')

// 1.创建一个tcp服务器
let server = net.createServer(socket => {
  console.log('有人连接我了')
  // 2.客户端连接服务器

  // 3.服务器处理特殊请求头，处理，返回结果
  socket.once('data', data => {
    // 3.1第一次请求头处理，once一次即可
    let strHeaders = data.toString()
    let aHeaders = strHeaders.split('\r\n')

    aHeaders.shift()
    aHeaders.pop()
    aHeaders.pop()

    let headers = {}

    aHeaders.forEach(str => {
      let [name, value] = str.split(': ')
      headers[name] = value
    })

    // 3.2 校验
    if (headers['Connection'] != 'Upgrade' || headers['Upgrade'] != 'websocket') {
      console.log('接到一个ws以外的协议，扔掉')
      socket.end()
    } else {
      // 3.3 处理ws专有头
      if(headers['Sec-WebSocket-Version'] != 13) {
        console.log('出现了以外的ws版本')
        socket.end()
      } else {
        // 4. 处理key
        // C -> S       "zRiwlWbGogepUzKR2WRFdw==""
        // S -> C       base64(sha1("zRiwlWbGogepUzKR2WRFdw==" + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"))

        let cryHash = crypto.createHash('sha1')

        cryHash.update(headers['Sec-WebSocket-Key'] + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
        let base64Key = cryHash.digest('base64')

        socket.write(`HTTP/1.1 101 switting Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${base64Key}\r\n\r\n`)
        console.log('握手完成')
      }
    }
  })

  socket.on('end', () => {
    console.log('连接已断开')
  })
})
server.listen(8099)
