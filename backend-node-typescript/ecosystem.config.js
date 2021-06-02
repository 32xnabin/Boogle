module.exports = {
  apps: [
    {
      ignore_watch: ["database"],
      script: "dist/services/database/service.js",
      watch: ".",
    },
    {
      ignore_watch: ["database"],
      script: "dist/app.js",
      watch: ".",
    },
  ],
};
