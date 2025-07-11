import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

const root = process.cwd();

interface FrontMatter {
  [key: string]: any;
  wordCount: number;
  slug: string | null;
}

interface FileData {
  mdxSource: MDXRemoteSerializeResult;
  tweetIDs: string[];
  frontMatter: FrontMatter;
}

export async function getFiles(type: string): Promise<string[]> {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type: string, slug?: string): Promise<FileData> {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const [remarkSlug, remarkAutolink, remarkCodeTitles] = await Promise.all([
    import("remark-slug"),
    import("remark-autolink-headings"),
    import("remark-code-titles"),
  ]);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkSlug.default,
        [
          remarkAutolink.default,
          {
            linkProperties: {
              className: ["anchor"],
            },
          },
        ],
        remarkCodeTitles.default,
      ],
    },
  });
  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  const tweetIDs = tweetMatches?.map((tweet) => {
    const match = tweet.match(/[0-9]+/g);
    return match ? match[0] : '';
  }).filter(Boolean);

  return {
    mdxSource,
    tweetIDs: tweetIDs || [],
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type: string): Promise<any[]> {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce<any[]>((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
