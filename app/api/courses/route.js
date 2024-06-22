import { courses, newCourses } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ courses, newCourses });
}
