const starCount = document.getElementById("star-count");

if (starCount) {
  fetch("https://api.github.com/repos/ngdream/devicon-packages", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
      return response.json();
    })
    .then((repository) => {
      if (Number.isInteger(repository.stargazers_count)) {
        starCount.textContent = new Intl.NumberFormat("en").format(repository.stargazers_count);
      }
    })
    .catch(() => {
      // Keep the count rendered in HTML if GitHub's API is unavailable.
    });
}
