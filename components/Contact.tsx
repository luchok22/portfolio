import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing projects, improving your online
          presence, and assisting with various aspects of web development and
          marketing challenges.
        </p>
        <a href="mailto:uluwka08@icloud.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            What`s up!
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/luchok22" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/ulukbek-aitbaev-12738b269"
        />
        <SocialLink
          title="Instagram"
          link="https://www.instagram.com/ulukbtsxcss"
        />
      </div>
    </div>
  );
};

export default Contact;
