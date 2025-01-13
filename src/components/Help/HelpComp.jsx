import React from 'react';

const HelpPage = () => {
  const sections = [
    {
      title: "Learn",
      items: [
        "Getting Started",
        "@import with Sass",
        "About JS Bin",
        "Delete a bin",
        "FAQ",
        "Feature list",
        "How do I set default code in all new bins?",
        "How do I share the latest bin?",
        "How to change your password",
        "How to clear the console",
        "How to customise the editor settings",
        "How to link multiple bins",
        "How to show & hide line numbers",
        "Keyboard shortcuts",
        "Pronounceable URLs",
        "SSL opt-in support",
        "Test out code on other devices",
        "Transferring ownership of a bin",
        "What is JS Bin?",
        "When do revisions change?",
        "Why register?",
      ],
    },
    {
      title: "Fix & contribute",
      items: [
        "Making JS Bin better for everyone, and advanced usage",
        "Adding new pre-processors",
        "Design principles",
        "How to disable JS Bin keyboard shortcuts",
        "My Github username isn't available",
        "Session Secrets",
        "The state of SSL on JS Bin",
        "Versions: Processors & core libraries",
        "Vision",
        "What to do if your embed doesn't load",
        "Why do full previews expired?",
        "Why doesn't <object> work?",
      ],
    },
    {
      title: "Teach & share your knowledge",
      items: [
        "Using JS Bin to teach others via blogs and published websites",
        "multi-user environments",
        "Gists: how to export to a gist",
        "Gists: how to import a gist",
        "Gists: how to import a gist",
        "How to pre-populate bins and inject content",
      ],
    },
    {
      title: "Pro features",
      items: [
        "What to expect from a Pro subscription",
        "Asset uploading",
        "Dropbox integration",
        "Experimental Features",
        "Private bins",
        "Sandbox mode",
        "Vanity URLs",
      ],
    },
    {
      title: "Hacking & play",
      items: [
        "Adding Libraries",
        "Prototypes, demos, and sharing your work",
        "Ajax request to bins",
        "Debbugging your preferences",
        "How to add more libraries to the library list",
        "Local JS Bin: 2 second guide",
        "Local JS Bin: the detailed how-to",
      ],
    },
    {
      title: "Legals",
      items: [
        "Our terms and privacy policy that we run JS Bin under",
        "Privacy Policy",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Help</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.title} className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="list-disc list-inside">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;