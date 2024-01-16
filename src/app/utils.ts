interface SubstackPost {
  title: string;
  link: string;
  img: string;
  desc: string;
}

async function fetchSubstackData() {
  //NOTE: need to change later to anna-kajsa.se
  const res = await fetch('http://localhost:3000/api/rss');

  if (!res.ok) {
    throw new Error('failed to fetch data.');
  }

  const resJson = res.json();

  return resJson;
}

export async function getSubstackPosts() {
  const data = await fetchSubstackData();
  const substackPosts: SubstackPost[] = [];

  data.items.forEach((post: any) => {
    const substackPost: SubstackPost = {
      img: post.enclosure.url,
      title: post.title,
      link: post.link,
      desc: post['content:encodedSnippet'],
    };

    substackPosts.push(substackPost);
  });

  return substackPosts;
}
