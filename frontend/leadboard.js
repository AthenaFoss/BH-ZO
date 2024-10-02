






function leadboard() {
    const leadboardBody = document.getElementById("leadboard-body")

    playerData.forEach((player, index) => {



        const playerRow = document.createElement("tr")



        const playerRank = document.createElement("td")


        playerRank.textContent = index + 1

        const playerName = document.createElement("td")
        playerName.textContent = player.twitterUsername

        const playerScore = document.createElement("td")
        playerScore.textContent = player.score;

        playerRow.appendChild(playerRank)
        playerRow.appendChild(playerName)
        playerRow.appendChild(playerScore)

        leadboardBody.appendChild(playerRow)
    });
}

leadboard()