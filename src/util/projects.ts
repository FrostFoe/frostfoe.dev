import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src", "content", "projects");

export type Project = {
	slug: string;
	title: string;
	description: string;
	date?: string;
	published: boolean;
	repository?: string;
	url?: string;
	body: string;
	[key: string]: any;
};

export function getProjects(): Project[] {
	const fileNames = fs.readdirSync(projectsDirectory);
	const allProjectsData = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(projectsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			...data,
			body: content,
		} as Project;
	});

	return allProjectsData.sort((a, b) => {
		if (a.date && b.date) {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		}
		return 0;
	});
}

export function getProject(slug: string): Project | undefined {
	const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
	if (!fs.existsSync(fullPath)) {
		return undefined;
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		...data,
		body: content,
	} as Project;
}
