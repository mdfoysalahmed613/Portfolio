import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import quickblog from "@/public/QuickBlog.png";
import { FaUser } from "react-icons/fa6";
import { IProjects } from "@/config/projects";

export default function ProjectCard({ project }: { project: IProjects }) {
  const { Name, WebsiteLink, ShortDescription, Category, Personal } = project;
  return (
    <div className="relative p-6 max-w-sm border border-border rounded-lg">
      <div className="relative w-full h-[200px]">
        <Link href={WebsiteLink} target="_blank" rel="noreferrer">
          <Image
            className="rounded-lg border border-border object-cover"
            src={quickblog}
            alt="img"
            fill
          />
        </Link>
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          <Link href={WebsiteLink} target="_blank" rel="noreferrer">
            {Name}
          </Link>
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {ShortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <div className="flex my-3 gap-2 flex-wrap">
            {Category.map((cat, index) => (
              <div key={index} className="inline-block select-none rounded-xs py-2 px-3 font-sans text-xs font-bold text-[#c75605] border">{cat}
              </div>
            ))}
          </div>
        </div>
        <Link href={`/projects/${Name.toLowerCase()}`}>
          <Button size={"lg"} className="mt-2">
            Read more
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-5 right-5 p-3 rounded-full border">
        {Personal ? (
          <FaUser />
        ) : (
          <BriefcaseBusiness />
        )}
      </div>
    </div>
  );
}
