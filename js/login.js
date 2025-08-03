
 async function handleLoginFormSubmit(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!areFieldsFilled(email, password)) {
        alert("All fields are required.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email.");
        return;
    }
    if (!isValidPassword(password)) {
        alert("The password must contain at least 8 characters, at least one letter and one number.");
        return;
    }


 

    try {
         const proxy = 'https://cors-anywhere.herokuapp.com/';
         const apiUrl = 'https://reqres.in/api/login';
            
        const response = await fetch(proxy + apiUrl, {
            method: "POST",
            headers : {
               'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
            body: JSON.stringify({ email, password })
        });

        if(!response.ok) {
            const error = await response.json();
            alert("❌ Login failed:: " + (error.message || "Unknown error"))
            return; 
        }

        const data = await response.json();

        const token = data.token;

        localStorage.setItem('token', token);

        checkAuth();
    }   catch (err) {
        console.error("Login error:", err);
        alert("❌ Error connecting to server.");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", handleLoginFormSubmit);
});
