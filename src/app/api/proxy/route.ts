import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch("https://cmapi.barrzen.com/items/news_presenter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ error: "Error submitting form" }, { status: 500 });
  }
}
