import Logo from "./components/logo";
import camImg from "./assets/cam.png";
import brosImg from "./assets/man.png";
import { projects } from "./components/list";
import WorkList from "./components/list";

const mainLinks = [
  { label: "work", href: "/work" },
  { label: "studio", href: "/studio" },
  { label: "contact", href: "/contact" },
];

const socialLinks = [
  { label: "twitter", href: "https://twitter.com/ZajnoCrew" },
  { label: "instagram", href: "https://www.instagram.com/zajno" },
];

export default function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-clip bg-[#ebebeb] px-[clamp(0.75rem,1.05vw,1.5rem)] pb-6 text-[#1a1a1a]">
        <nav
          id="n"
          className="absolute inset-x-0 top-[1.0938vw] z-10 grid grid-cols-6 gap-x-[1.04vw] px-[1.15vw]
                   text-[.8333vw] leading-[1.0417vw] font-semibold lowercase"
        >
          <div>
            zajno<sup className="align-super text-[.5em]">®</sup>
          </div>
          <div>digital studio</div>
          <div aria-hidden="true" />
          <ul>
            {mainLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul>
            {socialLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="text-right">los angeles, ca</div>
        </nav>

        <section
          aria-label="Zajno digital design studio"
          className="w-full pt-[clamp(1.25rem,1.4vw,2rem)]"
        >
          <Logo />
        </section>

        <section
          id="ho-sh-ba"
          aria-label="Showreel"
          className="relative h-[46.9792vw] w-full overflow-hidden bg-[#f5f5f5] mt-16"
        >
          <img
            src={camImg}
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover object-[center_20%]"
          />

          <button
            type="button"
            className="group absolute left-[46.6%] top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[1vw] text-white"
          >
            <span className="grid size-[max(64px,5.2vw)] place-items-center rounded-full bg-white text-[#1a1a1a] transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="ml-[.25vw] w-[max(14px,1.1vw)]"
              >
                <path d="M7 4.5v15l12-7.5z" />
              </svg>
            </span>

            <span className="text-left">
              <span className="block text-[max(18px,1.5vw)] font-bold leading-none tracking-tight">
                Watch Showreel
              </span>
              <span className="mt-[.4vw] block text-[max(11px,.7vw)] font-semibold leading-none">
                2015-26
              </span>
            </span>
          </button>
        </section>
      </main>

      {/* -------------- work - section ------------- */}
      <section className="flex justify-center items-center px-6 mt-8">
        <section
          aria-label="About"
          className=" mt-[clamp(1.25rem,1.4vw,2rem)] grid grid-cols-6 gap-x-[1.04vw] mx-4
             text-[1.5625vw] font-semibold leading-none tracking-[-0.02em]"
        >
          <a href="/work" className="col-start-1 inline-flex h-[1.5625vw] items-center self-start">
            Work
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="ml-[.8333vw] w-[.9375vw]"
            >
              <path d="M3 3l10 10M13 5v8H5" />
            </svg>
          </a>

          <p className="col-span-2 col-start-2">
            At Zajno, we know your time is precious, and that’s why we prioritize
            simplicity and efficiency. Our team has the expertise and creativity to
            handle everything from research and planning to custom design and
            development, freeing you from the burden of micromanagement.
          </p>

          <p className="col-start-6 text-right">©2015-26</p>
        </section>
      </section>

      <WorkList projects={projects} />


      {/* ----------- studio section  -----------*/}

      <section className="flex flex-col w-full px-8 ">
        <section
          aria-label="About"
          className="-mx-[clamp(0.75rem,1.05vw,1.5rem)] border-t border-black pt-16 mt-[clamp(1.25rem,1.4vw,2rem)] grid grid-cols-6 gap-x-[1.04vw] 
             text-[1.5625vw] font-semibold leading-none tracking-[-0.02em]"
        >
          <a href="/work" className="col-start-1 inline-flex h-[1.5625vw] items-center self-start">
            Studio
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="ml-[.8333vw] w-[.9375vw]"
            >
              <path d="M3 3l10 10M13 5v8H5" />
            </svg>
          </a>

          <p className="col-span-2 col-start-2">
            We're a digital design studio that's all about breaking the mold! We don't do boring websites or ordinary apps - we specialize in crafting the wildest, most unconventional digital experiences out there.
          </p>

        </section>

        {/* create that shown section from here */}
        <section className="-mx-[clamp(0.75rem,1.05vw,1.5rem)] mt-[5vw] grid grid-cols-6 gap-x-[1.04vw] px-[1.15vw] w-full mb-[5vw]">
          <div className="col-span-3">
            <img
              src={brosImg}
              alt="Studio team"
              className="w-full h-auto object-cover grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
            />
          </div>

          <div className="col-start-5 self-start border-l border-[#1a1a1a] pl-[1vw]">
            <div className="text-[1.5vw] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
              <h4 className="mb-[1.5vw]">Services:</h4>
              <ul className="flex flex-col gap-[0.25vw] ">
                <li className="hover:text-[#ff3928] transition-colors duration-300 cursor-pointer">Branding</li>
                <li className="hover:text-[#ff3928] transition-colors duration-300 cursor-pointer">Web Design</li>
                <li className="hover:text-[#ff3928] transition-colors duration-300 cursor-pointer">Web Development</li>
                <li className="hover:text-[#ff3928] transition-colors duration-300 cursor-pointer">Motion Graphics</li>
                <li className="hover:text-[#ff3928] transition-colors duration-300 cursor-pointer">3D Illustration</li>
              </ul>
            </div>
          </div>

          <div className="col-start-6 self-start border-l border-[#1a1a1a] pl-[1vw]">
            <div className="text-[1.5vw] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
              <h4 className="mb-[1.5vw]">Stats:</h4>
              <ul className="flex flex-col gap-[0.25vw]">
                <li>Founded 2015</li>
                <li>Clients 300+</li>
                <li>Countries 12</li>
                <li>Awwwards 62</li>
                <li>Team 28</li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      {/* ------------ playgrounds section  -----------*/}

      <section>
        <section
          aria-label="Playgrounds"
          className="mx-4 border-t border-black pt-16 mt-[clamp(1.25rem,1.4vw,2rem)] grid grid-cols-3 gap-x-[1.04vw]
             text-[1.5625vw] font-semibold leading-none tracking-[-0.02em] mb-[4vw]"
        >
          <a href="/work" className="col-start-1 inline-flex h-[1.5625vw] items-center self-start">
            Playground Z15™
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="ml-[.8333vw] w-[.9375vw]"
            >
              <path d="M3 3l10 10M13 5v8H5" />
            </svg>
          </a>

          <p className="col-start-3 border-l border-black pl-[1.25vw] text-[1.25vw] font-bold leading-[1.1]">
            We dare to be different: to experiment, innovate, bring things into being, and spark emotions in the hearts of people interacting with us. We proudly stand with our heads up in the midst of today’s reality that is oversaturated with templated solutions, and we invite you to join us in creating something truly unique.
          </p>

        </section>
      </section>

      <footer className="mb-[4vw] border-t border-black pt-16 mx-4 grid grid-col-[1fr_1fr]">
        <div className="flex  h-[16vw] justify-start items-start  col-start-1">
          <img src="../../public/logo.svg" alt="" className="w-[9vw]" />

        </div>
        <div className="col-start-2 w-full grid grid-col-[1fr_1fr] text-3xl">
          <div className="grid grid-col-[1fr_1fr] gap-x-[1.04vw] col-start-1">
            <div className="col-start-1 border-l border-black pl-[1vw]">
              <ul>
                <li>Work</li>
                <li>Studio</li>
                <li>Contact</li>
              </ul>
              <br />
              <p>©zajno 2026</p>
            </div>
            <div className="col-start-2 border-l border-black pl-[1vw]">
              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Linkedin</li>
                <li>Clutch</li>
                <li>Dribble</li>
                <li>Behance</li>
              </ul>
            </div>
          </div>
          <div className="col-start-2"></div>
        </div>
      </footer>
    </>
  );
}