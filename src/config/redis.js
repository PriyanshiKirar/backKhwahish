const redis = require("redis");

const redisClient = redis.createClient({
  socket: {
    host: "127.0.0.1",
    port: 6379, // Default Redis port (change if needed)
    connectTimeout: 10000, // Timeout after 10 seconds if Redis doesn't connect
  },
});

// Connect to Redis
(async () => {
  try {
    await redisClient.connect();
    console.log("✅ Redis client connected successfully!");
  } catch (err) {
    console.error("❌ Failed to connect Redis client:", err);
  }
})();

// Handle errors
redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

// Export the client
module.exports = redisClient;
