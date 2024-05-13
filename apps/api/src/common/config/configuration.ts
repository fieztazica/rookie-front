export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 3000,
});
