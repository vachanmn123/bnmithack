import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { courses, newCourses } from "@/lib/data";

const greetings = [
  "Good morning",
  "Good afternoon",
  "Good evening",
  "Good night",
];

export default function Home() {
  const date = new Date();
  const hour = date.getHours();
  let greeting = greetings[0];
  if (hour >= 12 && hour < 17) {
    greeting = greetings[1];
  } else if (hour >= 17 && hour < 20) {
    greeting = greetings[2];
  } else if (hour >= 20 || hour < 4) {
    greeting = greetings[3];
  }
  return (
    <div className="flex flex-col gap-6">
      <div class="relative">
        <Image
          src={"/images/heroBg.png"}
          alt="Hero background image"
          width={1000}
          height={500}
          className="w-screen h-48 top-0 left-0 right-0"
        />
        <h1 className="text-3xl absolute font-bold z-10 bottom-5 bg-black/50 w-full min-h-5 px-3">
          {greeting}, Vachan
        </h1>
        <small className="text-sm absolute z-10 bottom-0 bg-black/50 w-full min-h-5 px-3">
          {date.toDateString()}
        </small>
      </div>
      <div className="flex flex-col gap-6 mx-3 my-5 mb-24">
        <div>
          <h2 className="text-2xl font-bold">Return to your last section</h2>
          <small className="text-sm text-muted">
            Continue from where you left off
          </small>
        </div>
        <div className="w-full gap-5">
          <div className="flex flex-col gap-3 shadow-md rounded-md p-2 ring-1 ring-secondary transition-all duration-100">
            <Image
              src="/images/subjects/physics.jpg"
              alt="Physics"
              width={1920}
              height={1080}
              className="rounded-md w-full aspect-video"
            />
            <div className="text-xl">Basic Engineering Physics</div>
            <small className="">Learn Physics for Engineering</small>
            <Progress value={10} />
            <Link href={`/course/csdasd-saddsf-dsfdg`} className="w-full">
              <button className="bg-accent text-black rounded-md p-2 w-full">
                Resume Learning
              </button>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Get Back into Learning</h2>
          <small className="text-sm text-muted">
            Get back into your learning stream!
          </small>
        </div>
        <div className="grid grid-cols-1 w-full gap-5">
          {courses.map((course) => (
            <div
              className="flex flex-col gap-3 shadow-md rounded-md p-2 ring-1 ring-secondary transition-all duration-100"
              key={course.name}
            >
              <Image
                src={course.image}
                alt={course.name}
                width={1920}
                height={1080}
                className="rounded-md w-full aspect-video"
              />
              <div className="text-xl">{course.name}</div>
              <small className="">{course.description}</small>
              <Progress value={course.progress} />
              <Link href={`/course/${course.id}`} className="w-full">
                <button className="bg-accent text-black rounded-md p-2 w-full">
                  Resume Learning
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold">Start a new Course</h2>
          <small className="text-sm text-muted">
            Start a new course from the list below
          </small>
        </div>
        <div className="grid grid-cols-1 w-full gap-5">
          {newCourses.map((course) => (
            <div
              className="flex flex-col gap-3 shadow-md rounded-md p-2 ring-1 ring-black"
              key={course.name}
            >
              <Image
                src={course.image}
                alt={course.name}
                width={1920}
                height={1080}
                className="rounded-md w-full aspect-video"
              />
              <div className="text-xl">{course.name}</div>
              <small className="text-white">{course.description}</small>
              <button className="bg-accent text-black rounded-md p-2">
                Start Learning
              </button>
            </div>
          ))}
        </div>
        <div>
          <p className="text-center text-sm text-muted">
            &copy; 2024 Vachan MN
          </p>
        </div>
      </div>
    </div>
  );
}
