const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  // ouvre le formulaire d'inscription
  $.getElementById("login").addEventListener("click", () => {
    $.querySelector(".modal").classList.add("show-modal");
    $.body.classList.add("stop-scrolling");
  });

  // ferme le formulaire d'inscription
  $.querySelector(".close-modal").addEventListener("click", () => {
    $.querySelector(".modal").classList.remove("show-modal");
    $.body.classList.remove("stop-scrolling");
  });

  // soumission du formulaire
  $.querySelector(".register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = $.getElementById("firstName").value,
      lastName = $.getElementById("lastName").value,
      email = $.getElementById("email").value,
      password = $.getElementById("password").value,
      description = $.getElementById("description").value;

    if (firstName && lastName && email && password && description) {
      const data = {
        firstName,
        lastName,
        email,
        password,
        description,
      };

      const response = await axios.post(
        "https://tripadvisor-backend.herokuapp.com/form",
        data
      );

      console.log("status = ", response.status);
      if (response.status === 200) {
        alert("Un mail de confirmation vous a été adressé.");
        $.querySelector(".modal").classList.remove("show-modal");
        $.body.classList.remove("stop-scrolling");
      } else {
        console.log(response);
      }
    } else {
      alert(
        "Veuillez entrer toutes les informations demandées pour vous inscrire."
      );
    }
  });
});
