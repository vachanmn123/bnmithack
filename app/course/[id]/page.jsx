import React from "react";
const { courses, chapters } = require("@/lib/data");
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const getCourse = (id) => {
  return courses.find((course) => course.id === id);
};

const getChapters = (courseId) => {
  return chapters.filter((chapter) => chapter.course === courseId);
};

/**
 *
 * @param {{params: {id: string}}} param0
 * @returns
 */
export default function CoursePage({ params }) {
  const { id } = params;
  const course = getCourse(id);
  const chapters = getChapters(id);
  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <div className="flex flex-col gap-6">
      <div class="relative">
        <Image
          src={course.image}
          alt={course.name}
          width={1000}
          height={500}
          className="w-screen h-48 top-0 left-0 right-0"
        />
        <h1 className="text-3xl absolute font-bold z-10 bottom-5 bg-black/50 w-full min-h-5 px-3">
          {course.name}
        </h1>
        <small className="text-sm absolute z-10 bottom-0 bg-black/50 w-full min-h-5 px-3">
          {course.description}
        </small>
      </div>
      <div className="flex flex-col gap-6 mx-3 my-5 mb-24">
        <div>
          <h2 className="text-2xl font-bold">Return to your last section</h2>
          <small className="text-sm text-muted">
            Continue from where you left off
          </small>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5 bg-accent text-black p-5 rounded-md">
          <h2 className="text-2xl font-bold font-secondary">
            {chapters[1].name}
          </h2>
          <small className="text-sm text-secondary font-thin">
            {chapters[1].description}
          </small>
          <Link href={`/course/${id}/chapter/${chapters[1].id}`}>
            <button className="bg-black/50 text-black rounded-md p-2 w-full">
              Continue
            </button>
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold">All Chapters</h2>
          <small className="text-sm text-muted">
            See all chapters in this course
          </small>
        </div>
        <Accordion type="single" collapsible>
          {chapters.map((chapter) => (
            <AccordionItem value={chapter.id} key={chapter.id}>
              <AccordionTrigger>{chapter.name}</AccordionTrigger>
              <AccordionContent>
                <p className="mb-5">
                  {chapter.description} Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Excepturi porro fugit corporis quis,
                  consequatur enim, in sed ut quod maxime soluta voluptatem
                  tempore ea eum fuga expedita explicabo rem ab. Aliquam saepe
                  molestiae, inventore non deserunt sequi odit illo ullam
                  architecto earum, sapiente totam perspiciatis vel nam
                  doloribus, in est. Neque recusandae corporis obcaecati, eaque
                  exercitationem debitis asperiores sed a numquam porro et
                  veritatis.
                </p>
                <Link
                  href={`/course/${id}/chapter/${chapter.id}`}
                  className="w-full mt-5"
                >
                  <button className="bg-accent text-black rounded-md p-2 w-full">
                    Go to Chapter
                  </button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div>
          <p className="text-center text-sm text-muted">
            &copy; 2024 Vachan MN
          </p>
        </div>
      </div>
    </div>
  );
}
