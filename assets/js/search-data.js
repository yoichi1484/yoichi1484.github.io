// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/yoichi1484.github.io/assets/pdf/cv.pdf";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "Personal interests and hobbies",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-joined-kyoto-university-as-a-postdoctoral-researcher",
          title: 'I have joined Kyoto University as a postdoctoral researcher.',
          description: "",
          section: "News",},{id: "news-our-paper-evaluating-the-robustness-of-discrete-prompts-has-been-accepted-to-eacl-2023",
          title: 'Our paper Evaluating the Robustness of Discrete Prompts has been accepted to EACL...',
          description: "",
          section: "News",},{id: "news-a-column-on-our-recent-paper-on-prompt-learning-has-been-published-at-journal-of-natural-language-processing",
          title: 'A column on our recent paper on prompt learning has been published at...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-knowledge-sanitization-of-large-language-models-is-available-on-arxiv",
          title: 'Our paper, titled Knowledge Sanitization of Large Language Models, is available on arXiv....',
          description: "",
          section: "News",},{id: "news-our-paper-subspace-representations-for-soft-set-operations-and-sentence-similarities-has-been-accepted-to-naacl-2024",
          title: 'Our paper Subspace Representations for Soft Set Operations and Sentence Similarities has been...',
          description: "",
          section: "News",},{id: "news-our-paper-can-large-language-models-invent-algorithms-to-improve-themselves-is-available-on-arxiv",
          title: 'Our paper Can Large Language Models Invent Algorithms to Improve Themselves? is available...',
          description: "",
          section: "News",},{id: "news-our-paper-can-large-language-models-invent-algorithms-to-improve-themselves-has-been-accepted-to-naacl-2025",
          title: 'Our paper Can Large Language Models Invent Algorithms to Improve Themselves? has been...',
          description: "",
          section: "News",},{id: "news-our-paper-mining-hidden-thoughts-from-texts-evaluating-continual-pretraining-with-synthetic-data-for-llm-reasoning-is-available-on-arxiv",
          title: 'Our paper Mining Hidden Thoughts from Texts: Evaluating Continual Pretraining with Synthetic Data...',
          description: "",
          section: "News",},{id: "news-our-paper-lamdagent-an-autonomous-framework-for-post-training-pipeline-optimization-via-llm-agents-has-been-accepted-to-emnlp-2025",
          title: 'Our paper LaMDAgent: An Autonomous Framework for Post-Training Pipeline Optimization via LLM Agents...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yoichi1484", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yoichi-ishibashi-linkdin/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7JsG0KUAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/__tuxi__", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
