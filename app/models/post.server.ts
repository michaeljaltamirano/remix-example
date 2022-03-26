interface Post {
  slug: string;
  title: string;
}

export async function getPosts(): Promise<Post[]> {
  return Promise.resolve([
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ]);
}
