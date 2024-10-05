async function getScore() {
    try {
        const response = await fetch("http://localhost:3030/api/leaderboard");
        const data = await response.json();

        return data
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        return [];
    }
}

async function leadboard() {
    const leaderboardData = await getScore();

    const leadboardBody = document.getElementById("leadboard-body");

    leadboardBody.innerHTML = '';


    leaderboardData.forEach((player, index) => {
        const playerRow = document.createElement("tr");
        playerRow.classList.add("board-row")

        const playerRank = document.createElement("td");
        playerRank.textContent = index + 1;

        const playerName = document.createElement("td");
        playerName.textContent = player.twitterUsername || 'Unknown';

        const playerScore = document.createElement("td");
        playerScore.textContent = player.score || 0;

        playerRow.appendChild(playerRank);
        playerRow.appendChild(playerName);
        playerRow.appendChild(playerScore);

        leadboardBody.appendChild(playerRow);
    });

}


leadboard();
