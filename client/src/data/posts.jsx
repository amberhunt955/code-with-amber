const posts = [
  {
    id: 0,
    title: "Welcome to my new blog!",
    content: (
      <p>
        Hi there, and welcome to my new blog, <strong>Code with Amber!</strong>
        <br />
        <br />
        Just over a week ago, I graduated from a MERN stack program at Per
        Scholas. I am now embarking on a full-time, self-paced learning journey
        as I search for my first role in software development.
        <br />
        <br />
        So, what have I been up to since graduating?
        <br />
        <br />
        Here's a quick summary:
        <br />
        <br />
        <ul>
          <li>
            <strong>Connecting with climate leaders:</strong> On May 6th I
            attended the{" "}
            <a
              href="https://givebackhack.com/stories/new-givebackhack-event-series-givebacklabs/"
              target="blank"
            >
              GiveBackLabs
            </a>{" "}
            climate tech event here in Columbus. I had a chance to learn from
            local climate leaders and work alongside other tech-driven members
            of our community to brainstorm solutions to climate issues. This was
            my first hackathon type experience, and it was really exciting!
            Although this event was more of a sprint than an actual full
            Hackathon would be, it was a great introduction, and I can't wait
            for the next one.
          </li>
          <li>
            <strong>Cybersecurity presentation:</strong> I'm always on the
            lookout for ways to expand my knowledge, so I attended a
            presentation on cybersecurity at one of my favorite local tech
            meetups, Code and Coffee, on May 13th. Jonathan Hernandez gave a
            beginner friendly talk about the significance of writing secure
            code, along with some really helpful job search pointers applicable
            to all fields.
          </li>
          <li>
            <strong>Fine-tuning old projects and building a new app:</strong> I
            revisited few of my projects, working to clean up the code and add
            better comments. I also created a simple app I named{" "}
            <a
              href="https://github.com/amberhunt955/vite-recipe-app"
              target="blank"
            >
              Menu Magic
            </a>
            , which pulls data from an API to display random recipes to users.
          </li>
          <li>
            <strong>Exploring tech ethics:</strong> One of my biggest interests
            is humane tech, so I've been working through the{" "}
            <a href="https://www.humanetech.com/course" target="blank">
              Foundations of Humane Technology
            </a>{" "}
            course.
          </li>
          <li>
            <strong>Seeking feedback and applying to jobs:</strong> I've been
            reaching out to various members of the tech community, asking for
            advice on my learning journey, project ideas, and overall job search
            tips. Meanwhile, I'm also applying to jobs non-stop, hoping to find
            a role that allows for ample growth.
          </li>
          <li>
            <strong>Taking care of my furry friends:</strong> I'm making sure to
            give my cats plenty of love and attention. They're always there to
            help me unwind after a long day of coding, so it's the least I can
            do!
          </li>
          <li>
            <strong>Creating and deploying this blog:</strong> Last but not
            least: I designed this blog and wrote my first post! At the moment,
            it's just frontend, but I am actively working on connecting it to a
            database. Although I've only worked with MongoDB in the past, I'm
            hoping to use MySQL for this particular project so that I can gain
            experience working with a relational database and expand my backend
            skills. I'll also be researching deployment options, as Heroku no
            longer has a free option.
          </li>
        </ul>
        <br />
        I'm excited to share this journey with you and see where it takes us.
        <br />
        <br />
        Thanks for reading, and stay tuned for more updates!
      </p>
    ),
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: (
      <p>
        Posted May 16, 2023 by <a href="/about">Amber Hunt</a>
      </p>
    ),
  },
];

export default posts;
