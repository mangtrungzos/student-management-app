const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userCode = document.getElementById('username').value;
    const passwd = document.getElementById('password').value;
    if (userCode === '2051150186' && passwd === '30122002') {
        window.location.href = "/student-management-app/client/pages/home.html";
    } else{
        alert('Username or Password is not correct!');
    }

})

