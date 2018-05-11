const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
    
var Canvas = require('canvas')
var jimp = require('jimp')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

if (msg.content == '+edit') {
  if (msg.guild.id === "426715585930461184" || msg.guild.id == '439033827499835414') {
      
  
    
    const w = ['./img/w1.jpg','./img/w2.jpg','./img/w3.jpg','./img/w4.jpg','./img/w6.jpg'];
    
            let Image = Canvas.Image,
                canvas = new Canvas(401, 202),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err);
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 401, 202);
    
    })
    
                    let url = msg.author.displayAvatarURL.endsWith(".webp") ? msg.author.displayAvatarURL.slice(5, -20) + ".png" : msg.author.displayAvatarURL;
                    jimp.read(url, (err, ava) => {
                        if (err) return console.log(err);
                        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                            if (err) return console.log(err);
    
                            //Avatar
                            let Avatar = Canvas.Image;
                            let ava = new Avatar;
                            ava.src = buf;
                            ctx.drawImage(ava, 152, 27, 95, 95);
                            
                                                    //wl
                            ctx.font = '20px Arial Bold';
                            ctx.fontSize = '25px';
                            ctx.fillStyle = "#FFFFFF";
                            ctx.textAlign = "center";
                            ctx.fillText(`Welcome To ${msg.guild.name} Server`, 210, 154);
                            
                            //ur name
                            ctx.font = '20px Arial';
                            ctx.fontSize = '28px';
                            ctx.fillStyle = "#FFFFFF";
                            ctx.textAlign = "center";
                            ctx.fillText(msg.author.username, 213, 190);
                            
    msg.channel.sendFile(canvas.toBuffer())
    msg.channel.send(`Welcome ${msg} To __${msg.guild.name}__`)
    
    
    })
    })
    
    }
  }
  if (msg.content == '+reedit') {
        
var Canvas = require('canvas')
var jimp = require('jimp')
      //10px Impact
      let Image = Canvas.Image,
      canvas = new Canvas(401, 202),
      ctx = canvas.getContext('2d');
  ctx.patternQuality = 'bilinear';
  ctx.filter = 'bilinear';
  ctx.antialias = 'subpixel';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.font = '10px Impact';

  fs.readFile(`./img/s1.png`, function (err, Background) {
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image;
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 401, 202);

})

          let url = msg.author.displayAvatarURL.endsWith(".webp") ? msg.author.displayAvatarURL.slice(5, -20) + ".png" : msg.author.displayAvatarURL;
          jimp.read(url, (err, ava) => {
              if (err) return console.log(err);
              ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                  if (err) return console.log(err);
                  ctx.font = '10px Impact';
                  ctx.fontSize = '10px';
                  ctx.fillStyle = "#FFFFFF";
                  ctx.textAlign = "center";
                  ctx.fillText(`فقط تجربة`, 205, 116);
                       
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

    msg.channel.sendFile(canvas.toBuffer())
              })
            })
  }
});
client.on('guildMemberAdd', member => {
  if (member.guild.id === "426715585930461184") {
    var Canvas = require('canvas')
    var jimp = require('jimp')
    
    const w = ['./img/w1.jpg','./img/w2.jpg','./img/w3.jpg','./img/w4.jpg','./img/w6.jpg'];
    
            let Image = Canvas.Image,
                canvas = new Canvas(401, 202),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err);
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 401, 202);
    
    })
    
                    let url = member.displayAvatarURL.endsWith(".webp") ? member.displayAvatarURL.slice(5, -20) + ".png" : member.displayAvatarURL;
                    jimp.read(url, (err, ava) => {
                        if (err) return console.log(err);
                        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                            if (err) return console.log(err);
   
                            //Avatar
                            let Avatar = Canvas.Image;
                            let ava = new Avatar;
                            ava.src = buf;
                            ctx.drawImage(ava, 152, 27, 95, 95);
                            
                                                    //wl
                            ctx.font = '20px Arial Bold';
                            ctx.fontSize = '25px';
                            ctx.fillStyle = "#FFFFFF";
                            ctx.textAlign = "center";
                            ctx.fillText(`مرحبًا بك في سيرفر ${member.guild.name}`, 210, 154);
                            
                            //ur name
                            ctx.font = '20px Arial';
                            ctx.fontSize = '28px';
                            ctx.fillStyle = "#FFFFFF";
                            ctx.textAlign = "center";
                            ctx.fillText(member.username, 213, 190);
                            
    client.channels.get("426715585930461186").sendFile(canvas.toBuffer())
    client.channels.get("426715585930461186").send(`منور ${member} سيرفرنا \n\ ${member.guild.name}__`)
    
    
    
    })
    })
  }
  //10px Impact

});

client.login(process.env.BOT_TOKEN);
