import Head from "next/head"
import styles from "./page.module.css";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucas Portfolio</title>
      </Head>
      <main className="px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">deployedbylucas</h1>
            <ul className="flex items-center">
                <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"></BsFillMoonStarsFill></li>
                <li>
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="#">Resume</a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Lucas M. Gómez</h2>
            <h3 className="text-2xl py-2">Full Stack Developer</h3>
          </div>
          <div className="text-5xl flex justify-center gap-6">
            <AiFillLinkedin><a href="https://www.linkedin.com/in/lucas-mariano-gomez-villasuso/" target="_blank"></a></AiFillLinkedin>
            <AiFillGithub></AiFillGithub>
          </div>
        </section>
      </main>
    </div>
  );
}
