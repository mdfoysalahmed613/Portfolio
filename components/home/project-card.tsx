import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectInterface } from "@/config/projects";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import quickblog from "@/public/QuickBlog.png";
import { FaUser } from "react-icons/fa6";
interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { companyName, websiteLink, shortDescription, category, type } = project;
  return (
    <div className="relative p-6 max-w-sm border border-border rounded-lg">
      <div className="relative w-full h-[200px]">
        <Link href={websiteLink} target="_blank" rel="noreferrer">
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
          <Link href={websiteLink} target="_blank" rel="noreferrer">
            {companyName}
          </Link>
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <div className="flex my-3 gap-2 flex-wrap">
            {category.map((it, ind) => (
              <div key={ind} className="center relative inline-block select-none whitespace-nowrap rounded-md py-2 px-3 align-baseline font-sans text-xs font-bold leading-none text-primary border border-border bg-background">{it}
              </div>
            ))}
          </div>
        </div>
        <Link href={`/projects/${companyName.toLowerCase()}`}>
          <Button size={"lg"} className="mt-2">
            Read more
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full border">
        {type === "Personal" ? (
          <FaUser />
        ) : (
          <BriefcaseBusiness />
        )}
      </div>
    </div>
  );
}
