const username = "welldotdocx"; // Ganti dengan username GitHub kamu

fetch(`https://api.github.com/users/${username}/repos`)
  .then((res) => res.json())
  .then((repos) => {
    const container = document.getElementById("repos");
    repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5)
      .forEach((repo) => {
        const div = document.createElement("div");
        div.className = "repo";
        div.innerHTML = `
              <a href="${repo.html_url}" target="_blank">
                <i class="fas fa-code-branch"></i> ${repo.name}
              </a>
              <p>${repo.description || "There is no description."}</p>
            `;
        container.appendChild(div);
      });
  })
  .catch(() => {
    document.getElementById("repos").innerHTML +=
      "<p style='color: red;'>Gagal mengambil repo.</p>";
  });
