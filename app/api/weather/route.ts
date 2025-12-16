import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "Tokyo";

  const API_KEY = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
