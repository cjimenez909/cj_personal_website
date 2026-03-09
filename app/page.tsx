import Image from "next/image";
import Link from "next/link";
import Hello from "./components/Hello"
import Icons from "./components/Icons"
import Intro from "./components/Intro"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"

export default function Home() {
  return (
    <div className="bg-F4F1EC">
      <div className="flex flex-row gap-4">
        <header>Claudia Jimenez</header>
        <header>Home</header>
        <Link href="/about">About</Link>
        <header>Experience</header>
        <header>Skills</header>
        <header>Awards</header>
        <Link href="/contact">Contact</Link>
        <Icons></Icons>
      </div>

      <div className="flex flex-row">
          <Intro></Intro>
          <div className="flex flex-col">
            <img src="/headshot.jpg"></img>
            <button className="border-style:solid">Resume</button>
          </div>
      </div>
      <AboutMe></AboutMe>
      <Experience></Experience>
    </div>
  );
}
