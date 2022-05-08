export async function getRepos() {
  try {
    const response = await fetch("https://api.github.com/users/Usponso/repos");
    const repos = await response.json();
    return repos;
  } catch (e) {
    console.log(e);
  }
}
