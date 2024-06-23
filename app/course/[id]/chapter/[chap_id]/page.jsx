"use client";
import React, { useEffect } from "react";
import { chapters } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Select from "react-select";
import Image from "next/image";

const getChapter = (chapId) => {
  return chapters.find((chap) => chap.id === chapId);
};

const presenterVideos = {
  english: [
    {
      id: "1",
      chapter: "1",
      language: "english",
      presenterName: "John Doe",
      presenterPhoto: "/images/presenters/johndoe.jpg",
      videoUrl: "/videos/physics.mp4",
    },
    {
      id: "2",
      chapter: "1",
      language: "english",
      presenterName: "Jane Doe",
      presenterPhoto: "/images/presenters/janedoe.jpg",
      videoUrl: "/videos/physics.mp4",
    },
  ],
};

export default function ChapterPage({ params }) {
  const { id, chap_id } = params;
  const chapter = getChapter(chap_id);
  const [curPresenter, setCurPresenter] = React.useState({
    id: "1",
    chapter: "1",
    language: "english",
    presenterName: "John Doe",
    presenterPhoto: "/images/presenters/johndoe.jpg",
    videoUrl: "/videos/physics.mp4",
  });
  const [lang, setLang] = React.useState("english");
  useEffect(() => {
    console.log("Language changed to", lang);
  }, [lang]);
  return (
    <div className="flex flex-col gap-6 mx-1">
      <video
        controls
        className="w-full aspect-video"
        autoPlay
        loop
        muted
        key={curPresenter.id}
        src={curPresenter.videoUrl}
        playsInline
      ></video>
      <h2 className="text-2xl font-bold pt-3 mx-2">{chapter.name}</h2>
      <p className="text-muted mx-2">{chapter.description}</p>
      <Tabs defaultValue="presenter" className="w-full mb-24">
        <TabsList className="flex justify-between w-full overflow-x-scroll overflow-y-hidden">
          <TabsTrigger value="presenter" className="text-md">
            Change Presenter
          </TabsTrigger>
          <TabsTrigger value="notes" className="text-md">
            Chapter Notes
          </TabsTrigger>
          <TabsTrigger value="help" className="text-md">
            Get Help
          </TabsTrigger>
        </TabsList>
        <TabsContent value="presenter" className="flex flex-col gap-2">
          <h3 className="text-xl font-bold mt-3 mx-2">Choose Presenter</h3>
          <label htmlFor="language" className="mx-3">
            Language
          </label>
          <Select
            options={Object.keys(presenterVideos).map((l) => ({
              value: l,
              label: l.at(0).toUpperCase() + l.slice(1),
            }))}
            value={{
              value: lang,
              label: lang.at(0).toUpperCase() + lang.slice(1),
            }}
            onChange={(selected) => {
              setLang(selected.value);
            }}
            className="mx-3 text-black"
          />
          <div className="grid grid-cols-2 gap-2 mx-3 mt-5">
            <h2 className="text-xl font-bold col-span-2">Presenters</h2>
            {presenterVideos[lang].map((presenter) => (
              <div
                key={presenter.id}
                onClick={() =>
                  curPresenter.id !== presenter.id && setCurPresenter(presenter)
                }
                className={`flex flex-col items-center gap-1 p-2 rounded-md ${
                  curPresenter.id === presenter.id
                    ? "bg-accent text-black"
                    : "bg-secondary text-muted"
                }`}
              >
                <Image
                  src={presenter.presenterPhoto}
                  alt={presenter.presenterName}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-fill"
                />
                <span>{presenter.presenterName}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="notes">Change your password here.</TabsContent>
        <TabsContent value="help">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
