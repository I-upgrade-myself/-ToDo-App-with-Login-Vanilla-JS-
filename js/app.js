
function initApp() {
    console.log("🚀 App initializing...");
    
    checkAuth();
  loadTodos();
  renderUI();

}

document.addEventListener('DOMContentLoaded', initApp);
