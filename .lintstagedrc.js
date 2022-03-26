module.exports = {
  "*.ts": ["npx eslint --fix", "npx tsc"],
  "*.json": "npx prettier --write",
  "*.yml": "npx prettier --write",
};
