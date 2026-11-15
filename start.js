const { spawn } = require('child_process');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '=======================================================');
console.log('\x1b[33m%s\x1b[0m', '🚀 Starting JanaSahay Full-Stack Portal in 1 Terminal...');
console.log('\x1b[32m%s\x1b[0m', '🏛️  Backend: http://localhost:5000');
console.log('\x1b[34m%s\x1b[0m', '💻 Frontend: http://localhost:3000');
console.log('\x1b[36m%s\x1b[0m', '=======================================================\n');

// 1. Start Backend Server
const server = spawn('node', ['server/server.js'], {
  cwd: __dirname,
  stdio: 'pipe',
  shell: true
});

server.stdout.on('data', (data) => {
  process.stdout.write(`\x1b[32m[Backend]\x1b[0m ${data}`);
});

server.stderr.on('data', (data) => {
  process.stderr.write(`\x1b[31m[Backend Error]\x1b[0m ${data}`);
});

server.on('close', (code) => {
  console.log(`\x1b[32m[Backend]\x1b[0m Process exited with code ${code}`);
});

// 2. Start Frontend Client (Vite Dev Server)
const client = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'client'),
  stdio: 'pipe',
  shell: true
});

client.stdout.on('data', (data) => {
  process.stdout.write(`\x1b[34m[Frontend]\x1b[0m ${data}`);
});

client.stderr.on('data', (data) => {
  process.stderr.write(`\x1b[31m[Frontend Error]\x1b[0m ${data}`);
});

client.on('close', (code) => {
  console.log(`\x1b[34m[Frontend]\x1b[0m Process exited with code ${code}`);
});

// Graceful exit handling on Ctrl+C
const shutdown = () => {
  console.log('\n\x1b[33m%s\x1b[0m', '🛑 Shutting down JanaSahay frontend & backend...');
  if (process.platform === 'win32') {
    // Windows taskkill to ensure child process trees terminate cleanly
    try { spawn('taskkill', ['/pid', server.pid, '/f', '/t']); } catch (e) {}
    try { spawn('taskkill', ['/pid', client.pid, '/f', '/t']); } catch (e) {}
  } else {
    server.kill('SIGINT');
    client.kill('SIGINT');
  }
  process.exit();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
