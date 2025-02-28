async function fetchPlayerCount() {
        const apiUrl = "https://api.mcsrvstat.us/2/194.146.13.186";
    
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const element = document.getElementById("player-count");
    
            element.textContent = data.online
                ? `🟢 ${data.players.online} graczy`
                : "🔴 Serwer jest wyłączony";
        } catch (error) {
            console.error("Błąd pobierania danych:", error);
            document.getElementById("player-count").textContent = "Błąd ładowania danych";
        }
    }
    
    window.onload = () => {
        fetchPlayerCount(); // Pierwsze wywołanie
        setInterval(fetchPlayerCount, 30000); // Aktualizacja co 30 sekund
    };