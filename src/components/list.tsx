import symbImg from '../assets/symb.png';
import appleImg from '../assets/apple.png';
import golaImg from '../assets/gola.png';
import toonImg from '../assets/toon.png';
import mobileImg from '../assets/mobile.png';

type ProjectRowProps = {
    index: string
    title: string;        // "Full-cycle product development"
    client: string;       // "Acquire"
    details: string;
    subtitle: string;     // "Marketplace"
    image: string;        // imported asset or URL
    accent?: string;      // client name colour
    href?: string;
};

export const projects = [
    {
        index: "01",
        title: "Full-cycle product development",
        details: "Producthhunt x 1 </br> Awards x 2 </br> CSS X 1",
        client: "Acquire",
        subtitle: "Marketplace",
        image: symbImg,
        href: "/work/acquire",
    },
    {
        index: "02",
        title: "Full-cycle website creation",
        details: "Producthhunt x 1 </br> Awards x 2 </br> CSS X 1",
        client: "Evergreen",
        subtitle: "Biotech",
        image: appleImg,
        href: "/work/acquire",
    },
    {
        index: "03",
        title: "Full-cycle website creation, branding",
        details: "Producthhunt x 1 </br> Awards x 2 </br> CSS X 1",
        client: "8Finance",
        subtitle: "Fintech",
        image: golaImg,
        href: "/work/8finance",
    },
    {
        index: "04",
        title: "Full-cycle website creation",
        details: "Producthhunt x 1 </br> Awards x 2 </br> CSS X 1",
        client: "Generation.ai",
        subtitle: "Educational",
        image: toonImg,
        href: "/work/acquire",
    },
    {
        index: "05",
        title: "Design & Development of the website's 3 pages",
        details: "Producthhunt x 1 </br> Awards x 2 </br> CSS X 1",
        client: "BrightMark",
        subtitle: "Technology",
        image: mobileImg,
        href: "/work/acquire",
    },
]
function ProjectRow({
    index,
    title,
    client,
    details,
    subtitle,
    image,
    accent = "#ff3928",
    href = "#",
}: ProjectRowProps) {
    return (
        <li className="group border-t border-[#1a1a1a] py-[1.5625vw] flex justify-end w-[83%] hover:text-[#ff3928] transition-colors duration-300">
            <a
                href={href}
                className="grid w-full grid-cols-5 text-[1.5625vw] font-semibold leading-[1.05] tracking-[-0.02em]"
            >
                <span>{index}</span>

                <div className="col-span-1">
                    <h3 className="font-semibold">{title}</h3>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                            <div className="pt-[0.8vw] text-[0.85vw] font-bold leading-[1] tracking-normal">
                                {details.split(" </br> ").map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <p className="col-start-4">
                    <span className="block" style={{ color: accent }}>
                        {client}
                    </span>
                    <span className="block text-[#1a1a1a]">{subtitle}</span>
                </p>

                <div className="col-start-5 overflow-hidden aspect-square w-full relative z-10">
                    <img
                        src={image}
                        alt=""
                        draggable={false}
                        className="h-full w-full select-none bg-[#dcdcdc] object-cover grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
                    />
                </div>
            </a>
        </li>
    );
}

type WorkListProps = {
    projects: ProjectRowProps[];
};

export default function WorkList({ projects }: WorkListProps) {
    return (
        <ul className="mx-[clamp(0.75rem,1.05vw,1.5rem)] flex flex-col items-end pt-40">
            {projects.map((p) => (
                <ProjectRow key={p.index} {...p} />
            ))}
        </ul>
    );
}