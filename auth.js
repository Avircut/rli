window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        document.querySelector("#login").value == "администратор" &&
        document.querySelector("#password").value == "777"
      ) {
        window.location.href = "index.html";
      } else document.querySelector('.errorMsg').innerHTML = 'Проверьте введенные данные';
    });  
  })
