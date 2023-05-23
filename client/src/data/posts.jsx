import "./posts.css";

const posts = [
  {
    id: 0,
    title:
      "Exploring Git - Code Collaboration and Version Control Organization",
    content: (
      <main>
        <div className="line-break">
          Hello again from the blog! Today I’m going to be talking about a topic
          that might be intimidating to some - Git. This past week I had the
          experience of working with Git branches for the first time (in my
          first collaboration project!) and I’d like to share my experience and
          what I learned along the way.
          <br />
          <br />
          But first - unless you’re my potential employer reading this, you
          might be thinking - “What is Git? I don’t Git it…” and believe me,
          you’re not alone in those thoughts. Git is NOT intuitive and can be a
          bit intimidating when you’re starting out. Let’s begin with a quick
          overview of Git in general.
          <br />
          <br />
        </div>
        <br />
        <div className="line-break">
          <strong>
            I’ve heard of GitHub - is that what you’re talking about?
          </strong>
          <br />
          <br />
          No, Git is not the same thing as GitHub (more on that later). Git is a
          version control system. What is version control, you ask? Basically,
          it’s a way for programmers to track changes to their code as they
          develop it.
          <br />
          <br />
          Version control is useful for many reasons, including:
          <li>
            Tracking the history of the code, which can be helpful to review if
            a bug arises
          </li>
          <li>
            Code safety and backups - version control allows you to store code
            at different stages of the development process
          </li>
          <li>
            Adding comments when you commit your code - helpful for others who
            want to see your development process
          </li>
          <li>
            Collaboration - developers working on a team can easily see changes
            made by other team members, and pull those changes to their local
            machine
          </li>
          <li>Branching - more on this in a bit!</li>
          <br />
          Developers use Git as a way of communicating between their local
          machines (developer-speak for whatever device one is coding on) and a
          cloud based repository hosting platform where you can store your code,
          such as GitHub. Typically, Git commands are typed into a CLI (Command
          Line Interface). In the CLI you can add the changes you’ve made to
          your code, commit them with a message describing those changes, and
          push them to your repository hosting platform of choice.
          <br />
          <br />
          <strong>Umm.. a CLI? What is that?</strong>
          <br />
          <br />
          Great question! Think of the computer you use at home. You probably
          have various programs installed, and sometimes you need to access
          those program files. To do so, you likely use a graphical user
          interface (GUI) to find the program you are looking for. A CLI
          (terminal) is the same concept, but has a text-based user experience
          rather than a GUI. Developers type commands into the terminal to
          navigate from one project to another, and can also type Git commands
          for version control purposes.
          <br />
          <br />
          There ARE ways of using Git without a CLI, and programs exist which
          provide a user interface for working with Git. However, using a CLI
          provides a quick, streamlined process so developers can make changes
          with efficiency.
          <br />
          <br />
          <strong>And so… what is a branch and why would I use one?</strong>
          <br />
          <br />
          A branch is an optional separate line of development from the main
          branch. Branches are useful for working on features of a project
          without immediately affecting the main codebase. They also enable
          groups of developers to work on different elements simultaneously.
          <br />
          <br />
          Once you have finished working on a feature in a branch, you can
          submit a pull request to the owner of the repository. A pull request
          allows everyone on the team to review the new code, compare it to the
          existing code, and make any necessary changes before merging with the
          main branch.
          <br />
          <br />
          To put things in perspective - let’s say I was working on a team to
          develop this blog, and my boss wanted me to implement an email form
          feature. I could create a new branch called “email” on my local
          machine, push that branch to the GitHub repository, and add and commit
          my changes as normal as I worked to develop the feature. Once I got
          the form working, I would submit a pull request for review before
          merging with the main branch.
          <br />
          <br />
          <strong>What could go wrong?</strong>
          <br />
          <br />
          Welcome to the world of merge conflicts! A merge conflict happens when
          there are discrepancies in the code between your main branch and the
          branch you are trying to merge. It’s important to note that these
          discrepancies go beyond the changes you made to build the new feature
          in your branch. Changes in the code from the feature addition alone
          shouldn’t be enough to trigger a merge conflict.
          <br />
          <br />
          Admittedly, my personal experience with merge conflicts is low at this
          point in time. As I understand it, though, merge conflicts are mostly
          an inevitable part of software development. That being said - there
          are things you can do to prevent the frequency (and manage the
          intensity) of merge conflicts. It’s important to remember to pull the
          most recent changes to your local machine before beginning work on a
          new branch. And above all, communicate and coordinate with your
          teammates about the changes you plan to make and the branches you are
          working on.
          <br />
          <br />
        </div>
        <br />
        Have you ever experienced a merge conflict? What are your tips and
        tricks for working with Git? In time I plan to add a comment feature to
        this blog… but for now, if you’re reading this, you probably know how to
        contact me!
        <br />
        <br />
        It’s been exciting to expand my experience in working with Git. I’m
        looking forward to sharing additional knowledge as I learn it.
        <br />
        <br />
        Note - if you happen to notice any inaccuracies, please don’t hesitate
        to reach out! I’ve tried to only speak within my understanding, but I am
        new to this. I’m hoping to get an email form feature up and running
        soon, but in the meantime, please contact me on{" "}
        <a href="https://www.linkedin.com/in/amberhunt955/" target="blank">
          LinkedIn
        </a>
        .
        <br />
        <br />
        Thanks for taking the time to read this post! Stay tuned for more
        updates.
      </main>
    ),
    truncatedContent: "Hello again from the blog! Today I’m going to be talking about a topic that might be intimidating to some - Git. This past week I had the experience of working with Git branches for the",
    img: "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "https://unsplash.com/photos/mWRR1xj95hg",
    alt: "stock of forest landscape, perhaps yosemite? looks like el capitan in the background with a river in front of it. completely unrelated to blog post...one day i'll get some relevant photos on here",
    date: (
      <p>
        Posted on May 22, 2023 by <a href="/about">Amber Hunt</a>
      </p>
    ),
  },
  {
    id: 1,
    title: "Welcome to my new blog!",
    alt: "stock of mountainous valley sunrise with clouds hanging well below the mountain peaks",
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
    truncatedContent: "Hi there, and welcome to my new blog, Code with Amber! Just over a week ago, I graduated from a MERN stack program at Per Scholas. I am now embarking on a",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    url: "https://unsplash.com/photos/1527pjeb6jg",
    date: (
      <p>
        Posted May 16, 2023 by <a href="/about">Amber Hunt</a>
      </p>
    ),
  },
];

export default posts;
