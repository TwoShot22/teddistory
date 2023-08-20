const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Mansoo Kim",
    image: "/profile.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Developer",
    bio: "Everyday Happy Coding",
    email: "manpaca99@gmail.com",
    linkedin: "mansoo-kim-43a75923b",
    github: "TwoShot22",
    instagram: "man_s000",
  },
  // projects: [
  //   {
  //     name: `teddistory`,
  //     href: "https://github.com/TwoShot22/teddistory",
  //   },
  // ],
  projects: undefined,
  // blog setting (required)
  blog: {
    title: "Teddistory | 김테디의 기술 블로그",
    description: "개발부터 DevRel까지 제가 걸어가는 길을 기록합니다",
  },

  // CONFIG configration (required)
  link: "https://blog.teddy-kim.com/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "/og_image.png", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
