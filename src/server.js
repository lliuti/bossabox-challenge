import server from './app';

const PORT = process.env.SERVER_PORT || 3000;

server.listen(PORT, () => {
  console.log(`Running on: ${PORT}`);
});
