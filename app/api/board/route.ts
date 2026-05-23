import { NextResponse } from "next/server";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function GET() {
  try {
    const records = await base(process.env.AIRTABLE_BOARD_TABLE_ID!).select().all();
    const tasks = records.map((record) => ({
      id: record.id,
      title: record.get("업무명") as string,
      date: record.get("날짜") as string,
      grade: record.get("학년") as string,
    }));
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const record = await base(process.env.AIRTABLE_BOARD_TABLE_ID!).create({
      업무명: body.title,
      날짜: body.date,
      학년: body.grade,
    });
    return NextResponse.json({ id: record.id });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}