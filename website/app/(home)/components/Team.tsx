import { HoverEffect } from "./ui/card-hover-effect";

export function Team() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-lime-300 text-center">Meet our Team 😎</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Asma Khanam",
    description:
      "Chairperson of IEEE SPS Club",
  },
  {
    title: "Mohd Ikram Hyderi ",
    description:
      "Vice-Chairperson of IEEE SPS Club",
  },
  {
    title: "Ahmer hyder",
    description:
      "General Secretary of IEEE SPS Club",
  },
  {
    title: "P Mahaboob Sana",
    description:
      "Joint Secretary of IEEE SPS Club",
  },
  {
    title: "Akheel",
    description:
      "Treasurer of IEEE SPS Club",
  },
  {
    title: "Syed Tajuddin",
    description:
      "Human Resource of IEEE SPS Club",
  },
];
