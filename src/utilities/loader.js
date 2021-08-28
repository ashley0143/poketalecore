 var fs = require("fs"),
    files = fs.readdirSync("./src/commands/"),
    props,
    {Collection} = require("discord.js");

module.exports = (client) => {
  
  client.commands = new Collection()
  
  for(var file in files) {
    
    props = require("../commands/" + files[file])
    
    client.commands.set(props.name, props)
    
    console.log("Paktayıl | Komut yüklenildi: " + files[file])
    
  }
  
  client.on("message", (Message) => {
    
    var content = Message.content,
        args,
        command,
        cmd;
    
    if (!content.startsWith("pt!") || Message.author.bot) return
    
    command = content.split(" ")[0].replace("pt!", ""),
    args = content.split(" ").slice(1);
    
    if (client.commands.get(command)) {
      cmd = client.commands.get(command)
    } else if (client.commands.filter(a => a.aliases.includes(command) === true).size !== 0) {
      cmd = client.commands.get(client.commands.filter(a => a.aliases.includes(command) === true).first())
    }
    
    if (!cmd) return
    cmd.run(client, Message, args)
    
  })
  
}
