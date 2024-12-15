import fs from "fs/promises";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const components = {
  img: (props: any) => (
    <Image {...props} alt={props.alt || "MDX Image"} width={800} height={400} />
  ),
  h1: (props: any) => <h1 className="mb-4 text-3xl font-bold" {...props} />,
  h2: (props: any) => (
    <h2 className="mb-3 mt-8 text-2xl font-semibold" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 text-gray-600 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="mb-4 list-disc pl-6 text-gray-600" {...props} />
  ),
  li: (props: any) => <li className="mb-2" {...props} />,
  code: (props: any) => (
    <code
      className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-800"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 font-mono text-sm"
      {...props}
    />
  ),
};

async function getProjectContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`
  );
  try {
    const content = await fs.readFile(filePath, "utf8");
    return content;
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return null;
  }
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params: rawParams }: PageProps) {
  const params = await rawParams; // Await the params
  console.log("Received params:", params);

  if (!params?.id) {
    console.error("Error: Missing or undefined id parameter.");
    return <div>Invalid project: Missing id</div>;
  }

  console.log("Attempting to fetch content for id:", params.id);
  const content = await getProjectContent(params.id);

  if (!content) {
    console.error("Project content not found for id:", params.id);
    return <div className="mt-24">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
        <div className="mb-8 overflow-hidden rounded-xl"></div>
        <article className="prose prose-gray max-w-none">
          <MDXRemote source={content} components={components} />
        </article>
      </div>
    </div>
  );
}
