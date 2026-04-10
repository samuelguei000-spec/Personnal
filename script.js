function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "samuelguei2023@gmail.com" && password === "bonjourD23") {
    localStorage.setItem("user", email);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText =
      "Email ou mot de passe incorrect";
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

// Vérification session + graphique
if (window.location.pathname.includes("dashboard")) {
  const user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("user").innerText = user;

    const ctx = document.getElementById("chart");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Avr", "Mai"],
        datasets: [
          {
            label: "Revenus",
            data: [1000, 2000, 1500, 3000, 4000],
          },
        ],
      },
    });
  }
}
