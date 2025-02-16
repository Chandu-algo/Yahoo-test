document.addEventListener("DOMContentLoaded", function() {
    const stockData = [
        { ticker: "AAPL", name: "Apple Inc.", lastClose: 244.60, prevClose: 241.57, weight: 7.00, rsi: 55.2, ema20: 243.00, ema50: 240.50 },
        { ticker: "MSFT", name: "Microsoft Corp.", lastClose: 408.43, prevClose: 410.62, weight: 6.50, rsi: 52.8, ema20: 409.50, ema50: 405.00 },
        { ticker: "GOOGL", name: "Alphabet Inc.", lastClose: 185.23, prevClose: 186.19, weight: 4.00, rsi: 48.6, ema20: 185.80, ema50: 183.50 },
        { ticker: "AMZN", name: "Amazon.com Inc.", lastClose: 228.68, prevClose: 230.40, weight: 3.80, rsi: 47.3, ema20: 229.50, ema50: 227.00 },
        { ticker: "NVDA", name: "NVIDIA Corp.", lastClose: 138.85, prevClose: 135.34, weight: 3.00, rsi: 60.1, ema20: 137.00, ema50: 133.50 },
        { ticker: "TSLA", name: "Tesla Inc.", lastClose: 355.84, prevClose: 355.90, weight: 2.50, rsi: 50.5, ema20: 356.00, ema50: 352.00 },
        { ticker: "META", name: "Meta Platforms Inc.", lastClose: 736.67, prevClose: 728.61, weight: 2.30, rsi: 62.3, ema20: 732.00, ema50: 725.00 },
        { ticker: "SPY", name: "SPDR S&P 500 ETF", lastClose: 609.70, prevClose: 609.78, weight: "N/A", rsi: 51.0, ema20: 610.00, ema50: 605.00 }
    ];

    const lastCloseDate = "2025-02-14";
    const prevCloseDate = "2025-02-13";

    document.getElementById("lastCloseDate").textContent = lastCloseDate;
    document.getElementById("prevCloseDate").textContent = prevCloseDate;

    const tableBody = document.querySelector("#stockTable tbody");

    stockData.forEach(stock => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${stock.ticker}</td>
            <td>${stock.name}</td>
            <td>$${stock.lastClose.toFixed(2)}</td>
            <td>$${stock.prevClose.toFixed(2)}</td>
            <td>${stock.weight}%</td>
            <td>${stock.rsi}</td>
            <td>$${stock.ema20.toFixed(2)}</td>
            <td>$${stock.ema50.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
});
