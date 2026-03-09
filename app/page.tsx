import Image from "next/image";
import Link from "next/link";
import Icons from "./components/Icons"
import Intro from "./components/Intro"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Awards from "./components/Awards"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="bg-[#F4F1EC] text-[#2E2E2E] padding-10 margin-10 justify-content: center">
      <div className="flex flex-row gap-4">
        <header className="text-[#17326E]"><b>Claudia Jimenez</b></header>
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
      <Skills></Skills>
      <Awards></Awards>
      <Contact></Contact>
    </div>
  );
}
