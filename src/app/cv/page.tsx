export const metadata = {
  title: "Saqib Al Mahmud - CV/Resume",
  description: "Curriculum Vitae of Saqib Al Mahmud",
};

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-lg overflow-hidden text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">Saqib Al Mahmud</h1>
        <div className="flex flex-wrap items-center gap-4 mb-4 text-white/90">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>01712644758</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span>saqibalmahmud@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Mohammadpur, Dhaka-1207</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a
            href="/Saqib_Al_Mahmud_CV_Resume.pdf"
            download="Saqib_Al_Mahmud_CV.pdf"
            className="ml-auto inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16l4-4m-4 4l-4-4m4 4V4m8 12v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
            </svg>
            Download PDF
          </a>
        </div>
      </header>

      <main className="p-8">
        {/* Profile */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Profile</h2>
          <p className="text-gray-700">
            Full-stack developer with strong expertise in NestJS, Laravel, ASP.NET, React, and Next.js. Experienced in building responsive web applications, developing RESTful APIs, and managing both frontend and backend systems. Passionate about writing clean code, optimizing performance, and continuously learning new technologies.
          </p>
        </section>

        {/* Tech Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Tech Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Redux",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "NestJS", "ASP.NET", "PHP", "Laravel"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "MySQL",
                  "PostgreSQL",
                  "Git",
                  "REST APIs",
                  "Figma",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Education</h2>
          <div className="mb-6">
            <h3 className="font-bold text-lg">Bachelor of Computer Science and Engineering (BSc)</h3>
            <p className="text-blue-600 font-semibold">American International University-Bangladesh (AIUB)</p>
            <p className="text-gray-600">2021-2025 | <b>CGPA: 3.94 / 4.0</b></p>
            <p className="text-gray-700">Major: Software Engineering</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Higher Secondary Certificate (HSC)</h3>
            <p className="text-blue-600 font-semibold">Dhaka City College</p>
            <p className="text-gray-600">2018-2020 | <b>GPA: 5.0 / 5.0</b></p>
            <p className="text-gray-700">Group: Science</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">School Management System</h3>
              <p className="text-gray-700 mb-4">Developed a web-based School Management System using ASP.NET MVC Entity Framework and SQL Server with role-based access control.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ASP.NET</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Entity Framework</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">SQL Server</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Finance Management System</h3>
              <p className="text-gray-700 mb-4">Implemented clean RESTful backend with NestJS. Collected and evaluated peer/user feedback to refine UI/UX.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Next.js</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">NestJS</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Clerk</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Gemini-Clone</h3>
              <p className="text-gray-700 mb-4">Wrote modular, testable code with reusable React components. Documented API handling and optimized rendering logic.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Gemini API</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Personal Blog-System</h3>
              <p className="text-gray-700 mb-4">Built a personal blog system where users can view, post, and comment on blogs created by others.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Laravel</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Blade</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MySQL</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publications */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Publications</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Chlorella vulgaris image classification</h3>
              <p className="text-gray-700">Using EfficientNetV2-5, RestNet50 and InceptionResNetV2 with Grand-CAM Analysis in CIIR 2025</p>
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Soft Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-700">Teamwork</li>
              <li className="text-gray-700">Time Management</li>
              <li className="text-gray-700">Fast learner of new technologies</li>
              <li className="text-gray-700">Performance-conscious development</li>
              <li className="text-gray-700">Critical Thinking</li>
            </ul>
          </section>

          {/* Co-Curriculars */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Co-Curriculars</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-700">Solved Problems on Codeforces, LeetCode, and other platforms.</li>
              <li className="text-gray-700">Studied and trained various Machine Learning models</li>
              <li className="text-gray-700">Obtained a certificate of HTML from Open classroom</li>
              <li className="text-gray-700">Attended several online programming contests</li>
            </ul>
          </section>

          {/* Reference */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-500 pb-2">Reference</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Md. Faruk Abdulah Al Sohan</h3>
              <p className="text-gray-700">Lecturer</p>
              <p className="text-gray-700">American International University Bangladesh</p>
              <p className="text-blue-600">faruk.sohan@aiub.edu</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6">
        <p>© 2023 Saqib Al Mahmud. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="mailto:saqibalmahmud@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
        </div>
      </footer>
    </div>
  );
}


