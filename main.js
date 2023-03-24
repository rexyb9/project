console.info("javascript ready...");
const footer = document.getElementById("footer");

//! responsive navigation bar
function showMobileNav() {
  var navbar = document.getElementById("navbar");
  if (navbar.className === "navibar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navibar";
  }
}

// footer
footer.style.backgroundColor = "#333";
footer.style.padding = "10px";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%";

// sweet alert
function github() {
  Swal.fire({
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/rexyb9`).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url,
      });
    }
  });
}
