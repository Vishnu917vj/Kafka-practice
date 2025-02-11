const {kafka}=require('./client')
async function init() {
    const admin = kafka.admin();
    
    try {
        console.log("Admin connecting...");
        await admin.connect();  // Await connection
        console.log("Admin connected");

        console.log("Creating topics...");
        await admin.createTopics({
            topics: [{
                topic: 'rider-updates',
                numPartitions: 2
            }]
        });
        console.log("Topics created");
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        console.log("Admin disconnecting...");
        await admin.disconnect();  // Ensure proper cleanup
        console.log("Admin disconnected");
    }
}

init();
