"use client";
import React, { useEffect } from "react";
import { chapters, notes } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Select from "react-select";
import Image from "next/image";
import { IoArrowForward, IoSend } from "react-icons/io5";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const getChapter = (chapId) => {
  return chapters.find((chap) => chap.id === chapId);
};

const getNotes = (chapId) => {
  return notes.filter((note) => note.chapter === chapId);
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
  const notes = getNotes(chap_id);
  const [curPresenter, setCurPresenter] = React.useState({
    id: "1",
    chapter: "1",
    language: "english",
    presenterName: "John Doe",
    presenterPhoto: "/images/presenters/johndoe.jpg",
    videoUrl: "/videos/physics.mp4",
  });
  const [lang, setLang] = React.useState("english");
  const [message, setMessage] = React.useState([]);

  useEffect(() => {
    console.log("Language changed to", lang);
  }, [lang]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("Message sent");
    setMessage([
      ...message,
      {
        sender: "user",
        message: data.get("message"),
      },
    ]);
    setTimeout(() => {
      switch (data.get("message").toLowerCase()) {
        case "hello":
          setMessage((message) => [
            ...message,
            {
              sender: "bot",
              message: "Hello! How can I help you today?",
            },
          ]);
          break;
        case "what is the chapter about?":
          setMessage((message) => [
            ...message,
            {
              sender: "bot",
              message: chapter.description,
            },
          ]);
          break;
        case "what are the newton laws?":
          setMessage((message) => [
            ...message,
            {
              sender: "bot",
              message:
                "Newton's laws are three laws of motion that laid the foundation for classical mechanics. They describe the relationship between a body and the forces acting on it, and its motion in response to those forces.",
            },
          ]);
          break;
        default:
          setMessage((message) => [
            ...message,
            {
              sender: "bot",
              message: "I'm sorry, I don't understand that.",
            },
          ]);
          break;
      }
    }, 1000);
    e.target.reset();
  };

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
        <TabsContent value="notes">
          <h3 className="text-xl font-bold mt-3 mx-2">Chapter Notes</h3>
          <div className="flex flex-col gap-5 mx-3 mt-5">
            {notes.map((note) => {
              return (
                <Link
                  key={note.id}
                  href={`/course/${id}/chapter/${chap_id}/note/${note.id}`}
                  className="flex flex-col relative gap-2 p-2 rounded-md bg-secondary hover:bg-accent hover:text-black transition-all duration-100 cursor-pointer"
                >
                  <h4 className="text-lg font-bold">{note.title}</h4>
                  <p>{note.content}</p>
                  <IoArrowForward className="absolute right-2 top-[45%]" />
                </Link>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="help">
          <h3 className="text-xl font-bold mt-3 mx-2">Get Help</h3>
          <p className="mx-3 mt-5 mb-3">
            Chat with our expert bot to get help on this chapter
          </p>
          <Dialog>
            <DialogTrigger className="w-full">
              <button className="bg-accent text-black w-full py-3 rounded-md">
                Chat with Bot
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Chat with Bot</DialogTitle>
              </DialogHeader>
              <p>Chat with our expert bot to get help on this chapter</p>
              <div className="relative w-full h-96 bg-secondary rounded-md">
                <div className="flex flex-col gap-5 h-full overflow-y-scroll p-2 pb-24">
                  {message.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-md ring-1 bg-accent text-black`}
                    >
                      <span className="font-bold">
                        {msg.sender === "user" ? "You: " : "Bot: "}
                      </span>
                      {msg.message}
                    </div>
                  ))}
                </div>
                <form
                  className="absolute justify-items-center grid grid-cols-10 bottom-0 left-0 w-full bg-secondary p-2 gap-1"
                  onSubmit={handleSendMessage}
                >
                  <input
                    type="text"
                    name="message"
                    placeholder="Type your doubt here"
                    className="w-full bg-secondary text-white p-2 rounded-md col-span-8"
                  />
                  <button className="bg-accent text-3xl text-black p-3 rounded-md mt-2 col-span-2">
                    <IoSend />
                  </button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>
      </Tabs>
    </div>
  );
}
