const io = require("socket.io-client");
const socket = io("http://www.windows93.net:8081", {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "www.windows93.net",
				"Origin": "http://www.windows93.net",
				"Pragma": "no-cache",
				"Referer": 'http://www.windows93.net/trollbox/index.php',
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
});
const moment = require("moment")
const readline = require("readline")

let temp = Math.floor((Math.random() * 99) + 1)
let color = temp<=1?"#97FFFF":temp<10?"#00FFFF":temp<20?"#00FFA5":temp<30?"#2AFF00":temp<40?"#FFFF00":temp<50?"#FFC200":temp<60?"#FFA500":temp<70?"#FF8C00":temp<80?"#FF6A00":temp<90?"#FF4500":"#FF1C00"

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	});

	rl.on('line', (content) => {
		socket.send(content);
		});

		socket.emit("user joined", (temp) + "°C "+ moment().format("HH:mm:ss"), color, "", "");
		
		setInterval(() => {
		temp = Math.floor((Math.random() * 99) + 1)
		color=temp<=1?"#97FFFF":temp<10?"#00FFFF":temp<20?"#00FFA5":temp<30?"#2AFF00":temp<40?"#FFFF00":temp<50?"#FFC200":temp<60?"#FFA500":temp<70?"#FF8C00":temp<80?"#FF6A00":temp<90?"#FF4500":"#FF1C00"
		socket.emit("user joined", temp + "°C "+ moment().format("HH:mm:ss"), color, "", "")
		}, 363627);

		socket.on("message", function(data) {
/*
			if(data.msg.toLowerCase().includes("tut")){
				socket.send("Too much \"T\" sound!")
			}
*/
		})