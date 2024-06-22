import { NextResponse } from "next/server";
const { courses, newCourses } = require("@/lib/data");

export async function GET(req, { params }) {
  const { id } = params;
  const course = courses.find((course) => course.id === id);
  if (!course) {
    return NextResponse.error({ status: 404 });
  }
  return NextResponse.json({ course });
}
