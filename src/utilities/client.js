module.exports = (client) => {
  
  client.login("ur token")
  
  client.on("ready", async () => {
    
    await client.user.setActivity("Paktayl", {type: "COMPETING"})
    await client.user.setStatus("idle")
     
  })
  
}
