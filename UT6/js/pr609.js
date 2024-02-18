    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginContent = document.getElementById('loginContent');
    const signupContent = document.getElementById('signupContent');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    loginTab.addEventListener('click', function () {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginContent.classList.add('active');
        signupContent.classList.remove('active');
    });

    signupTab.addEventListener('click', function () {
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
        loginContent.classList.remove('active');
        signupContent.classList.add('active');
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        modal.style.display = 'none';
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        modal.style.display = 'none';
    });

