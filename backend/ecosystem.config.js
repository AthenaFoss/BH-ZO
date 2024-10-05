module.exports = {
  apps: [
    {
      name: "bhzo-backend",
      script: "./dist/server.js",
      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
