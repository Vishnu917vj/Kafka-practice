const {kafka}=require('./client')
async function init() {
    const consumer=kafka.consumer({groupId:'group-1'})
    await consumer.connect();
    console.log("consumer connected");
   await  consumer.subscribe({topics:["rider-updates"],fromBeginning:true})
   await consumer.run({
eachMessage:async ({topic,partition,message,heartbeat,pause})=>{
        console.log(`topic : ${topic},"message:${message},"partition${partition}`);
    },
   })
    
}
init();