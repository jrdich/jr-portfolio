import { Badge } from "@/components/ui/badge"

export default function ResumeDetails() {
  return (
    <div className="mt-8 space-y-8 rounded-lg border p-6">
      <section>
        <h3 className="mb-4 text-xl font-semibold">Profile</h3>
        <p className="text-muted-foreground">
          Detail-oriented and innovative Associate Frontend Developer with 1 year of experience in building responsive,
          user-friendly web applications. Proficient in Next.js, React.js, JavaScript, and modern UI/UX principles.
          Passionate about creating seamless user experiences and optimizing web performance. Seeking to contribute my
          skills to dynamic projects and grow in a forward-thinking team.
        </p>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Contact</h3>
        <div className="space-y-2">
          <p>09930522381</p>
          <p>Bangate Barcelona Sorsogon</p>
          <p>humsschavaria13ict@gmail.com</p>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Projects</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Organic Market Project</h4>
            <p className="mt-1 text-muted-foreground">
              At Strastan Solutions, a project focused on creating a seamless and user-friendly platform for promoting
              and selling organic products online.
            </p>
          </div>

          <div>
            <h4 className="font-medium">Solutions Chapter Project</h4>
            <p className="mt-1 text-muted-foreground">
              Developing a dynamic and scalable web platform using Next.js for the frontend and AWS services for backend
              infrastructure. Leveraging AWS Lambda, API Gateway, DynamoDB, and Cognito to ensure secure authentication,
              efficient data handling, and seamless performance. Focused on delivering a responsive, user-friendly
              experience with optimized functionality.
            </p>
          </div>

          <div>
            <h4 className="font-medium">CMS Project</h4>
            <p className="mt-1 text-muted-foreground">
              A robust CMS built with Next.js and Tailwind CSS,
              leveraging AWS services like Lambda, DynamoDB, and API
              Gateway. It offers full customization options, content
              scheduling, user roles, and an analytics dashboard.
            </p>
          </div>

          <div>
            <h4 className="font-medium">Web Based Diet Diary System</h4>
            <p className="mt-1 text-muted-foreground">
              Develop a web based Diet Diary System using PHP and MySql, enabling efficient built-in calendar with time,
              menu plan and diary note.
            </p>
          </div>

          <div>
            <h4 className="font-medium">In-Demand Sales Forecasting</h4>
            <p className="mt-1 text-muted-foreground">
              Develop a Sales Forecasting Application using PHP and MySQL to efficiently gather sales transaction data,
              integrate forecasting algorithms, and generate reports.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Interests</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Exploring new web development trends</Badge>
          <Badge variant="outline">Solving Coding Problems</Badge>
          <Badge variant="outline">Watching tech-related content</Badge>
          <Badge variant="outline">Experimenting with UI/UX designs</Badge>
          <Badge variant="outline">Engaging in team collaborations</Badge>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Languages</h3>
        <div className="space-y-2">
          <p>English - B1 (Intermediate)</p>
          <p>Tagalog - C1 (Advanced)</p>
        </div>
      </section>
    </div>
  )
}

