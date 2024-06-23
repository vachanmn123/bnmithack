import React from "react";
import { courses } from "@/lib/data";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6 mt-2 mx-1">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link href={`/course/${course.id}`} key={course.id}>
            <div className="flex flex-col gap-2 shadow-md rounded-md p-2 ring-1 ring-secondary transition-all duration-100">
              <img
                src={course.image}
                alt={course.name}
                className="rounded-md w-full aspect-video"
              />
              <div className="text-xl">{course.name}</div>
              <small className="">{course.description}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
