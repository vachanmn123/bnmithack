import React from "react";
import Select from "react-select";

const careers = {
  Engineering: [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Aerospace Engineering",
    "Biomedical Engineering",
    "Environmental Engineering",
    "Industrial Engineering",
    "Materials Engineering",
    "Nuclear Engineering",
    "Software Engineering",
  ],
  Medical: [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Infectious Disease",
    "Nephrology",
    "Oncology",
    "Pulmonology",
    "Rheumatology",
    "Urology",
  ],
  Business: [
    "Accounting",
    "Business Administration",
    "Finance",
    "Human Resources",
    "Marketing",
    "Operations Management",
    "Project Management",
    "Sales",
    "Supply Chain Management",
    "Entrepreneurship",
  ],
  Arts: [
    "Architecture",
    "Art History",
    "Creative Writing",
    "Dance",
    "Fashion Design",
    "Film",
    "Graphic Design",
    "Interior Design",
    "Music",
    "Photography",
    "Theatre",
    "Visual Arts",
  ],
};

export default function Step3({ dataPost, data }) {
  const [careerStream, setCareerStream] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false);

  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center">
      <div className="flex flex-col gap-1 w-full items-center">
        <h2 className="text-3xl font-bold text-center">Set your Goals</h2>
        <p className="text-gray-500 text-center mb-6">
          Let&apos;s start by setting up your goals
        </p>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="careerStream">Choose your career stream</label>
          <Select
            options={Object.keys(careers).map((career) => ({
              value: career,
              label: career,
            }))}
            id="careerStream"
            name="careerStream"
            className="border-2 border-gray-400 rounded-lg p-2 w-full text-black"
            onChange={(selected) => setCareerStream(selected.value)}
          />
          <small className="text-gray-500 text-sm text-center">
            Select the career stream you are interested in
          </small>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="career">Choose your interested career</label>
          <Select
            options={
              careerStream
                ? careers[careerStream].map((career) => ({
                    value: career,
                    label: career,
                  }))
                : []
            }
            id="career"
            name="career"
            className="border-2 border-gray-400 rounded-lg p-2 w-full text-black"
            isDisabled={!careerStream}
          />
          <small className="text-gray-500 text-sm text-center">
            Select the career you are interested in traning towards
          </small>
        </div>
      </div>
      <button
        className="bg-accent text-black p-2 rounded-lg mt-2 w-full disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200"
        disabled={submitting}
        onClick={() => {
          setSubmitting(true);
          setTimeout(() => {
            dataPost(
              {
                careerStream,
                career: document.getElementById("career").value,
              },
              3
            );
          }, 2000);
        }}
      >
        {submitting ? "Setting up..." : "Set Goals"}
      </button>
    </div>
  );
}
