"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  name?: string;
  weather?: {
    description: string;
    icon: string;
  }[];
  main?: {
    temp: number;
  };
};

export default function Home() {
  const [city, setCity] = useState("Tokyo");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      setError(null);
      setWeather(null);

      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      if (data.cod && data.cod !== 200) {
        setError(data.message);
        return;
      }

      setWeather(data);
    } catch {
      setError("通信エラーが発生しました");
    }
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>天気アプリ</h1>

      {/* 都市名入力フォーム */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="都市名を入力（例: Tokyo）"
        />
        <button onClick={fetchWeather} style={{ marginLeft: "5px" }}>
          検索
        </button>
      </div>

      {error && <p style={{ color: "red" }}>エラー: {error}</p>}
      {!weather && !error && <p>読み込み中...</p>}

      {weather?.weather && weather.main && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p className="temp">{weather.main.temp} ℃</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </main>
  );
}
