const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('error');

const USERS = {
  'diretor': { password: '123456', role: 'diretoria' },
  'joao': { password: 'abc123', role: 'cardiologia' },
  'maria': { password: 'xyz789', role: 'nefrologia' },
};

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = USERS[username];

  if (user && user.password === password) {
    localStorage.setItem('user', JSON.stringify({ username, role: user.role, timestamp: new Date().toISOString() }));
    if (user.role === 'diretoria') {
      window.location.href = 'diretoria.html';
    } else {
      window.location.href = `setores/${user.role}.html`;
    }
  } else {
    errorMsg.classList.remove('hidden');
  }
});