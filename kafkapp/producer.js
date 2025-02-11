const {kafka}=require('./client')
async function init() {
    const producer=kafka.producer()
    console.log("producer conncted")
    await producer.connect()
    console.log("producer sending message")
   await producer.send({
        topic:"rider-updates",
        messages:[{
            partition:0,
            key:'rider-01',
            value:JSON.stringify({name:"vishnu",location:"nuzvidu"})
            
        }]
    });
    producer.disconnect();
    console.log("producer disconnected");
    
}
init();
