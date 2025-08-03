function checkAuth() {
    const token = localStorage.getItem('token');
    let toDo = document.getElementById('toDo_page');
    let loginPage = document.getElementById('login_page');
    if(token) {
        toDo.style.display = "block";
        loginPage.style.display = "none";
    } else {
        loginPage.style.display = "block";
        toDo.style.display = "none";
    }
}