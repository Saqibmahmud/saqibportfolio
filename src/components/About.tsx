export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">About Me</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto">
          Get to know more about my background, experience, and passion for technology
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Introduction */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
            <p className="text-foreground/70 leading-relaxed">
            I&apos;m <span className="font-medium text-foreground">Saqib Al Mahmud</span> — a curious, growth-driven individual who loves solving problems 
            and building meaningful tech solutions. Easygoing yet focused, 
            I enjoy collaborating, learning, and constantly pushing myself to explore new ideas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3"> Experience</h3>
            <p className="text-foreground/70 leading-relaxed">
               I&apos;m currently gaining hands-on industry experience through my internship at 
              <span className="font-medium text-foreground"> Datasoft Systems Bangladesh Limited</span>, 
              one of the leading software companies in the country. My role focuses on coding, 
              maintaining applications, and fixing bugs, giving me real-world exposure to 
              large-scale system development and maintenance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Beyond Coding</h3>
            <p className="text-foreground/70 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new tech trends, refining my projects, 
              or brainstorming research ideas or simply wandering the world. I&apos;m passionate about continuous learning and 
              staying up-to-date with the latest developments in technology.
            </p>
          </div>
        </div>

        {/* Right Column - Skills & Education */}
        <div className="space-y-6">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="bg-foreground/5 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-foreground">BSc in Computer Science & Engineering</h4>
                  <p className="text-sm text-foreground/70">American International University-Bangladesh</p>
                </div>
                <span className="text-sm font-medium text-foreground/70">2021 - 2024</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-foreground/70">
                <span>CGPA: <span className="font-medium text-foreground">3.94</span></span>
                <span>•</span>
                <span>Final Semester</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Development Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Development Skills</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                I have extensive experience in both <span className="font-medium text-foreground">Frontend and Backend Development</span>, 
                with expertise in:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "ASP.NET MVC", "ASP.NET Core", "Laravel", "Node.js", "Next.js","NestJS", "CodeIgniter",
                  "Tailwind CSS", "JavaScript", "TypeScript", "MySQL","PostgreSQL", "REST APIs", 
                  "Git", "GitHub", "Sourcetree", "Figma"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm bg-foreground/5 text-foreground/70 rounded-md text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Science & ML Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Data Science & Machine Learning</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                I specialize in <span className="font-medium text-foreground">data analysis and machine learning</span>, 
                with expertise in:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Python", "R",  "LSTM/xLSTM", "Machine Learning", "Data Analysis",
                  "Statistical Modeling", "Data Visualization", "Pandas", "NumPy", "nlp"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm bg-foreground/5 text-foreground/70 rounded-md text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}


