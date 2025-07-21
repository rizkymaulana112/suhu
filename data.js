const dbURL = "https://esp32-c2bdf-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

async function ambilData() {
  try {
    const response = await fetch(dbURL);
    const data = await response.json();

    console.log("Data dari Firebase:", data);

    // Kalau data.suhu adalah objek { suhuC: ..., suhuF: ... }
    const suhuC = data.suhu?.suhuC;
    const suhuF = data.suhu?.suhuF;

    document.getElementById("nilai_suhu").innerText = `Suhu: ${suhuC ?? "--"} °C`;
    document.getElementById("nilai_farenheit").innerText = `Fahrenheit: ${suhuF ?? "--"} °F`;
  } catch (err) {
    console.error("Gagal ambil data:", err);
  }
}

setInterval(ambilData, 3000);
ambilData();
