export const metadata = {
  title: " Our Technical Projects",
  description: "Showcase of our system architecture and technical projects",
  openGraph: {
    title: "Our Technical Projects",
    description: "Showcase of our system architecture projects",
    type: "website",
    url: "https://yourdomain.com/portfolio",
    images: [
      {
        url: "/portfolio-preview.jpg",
        alt: "Our Technical Projects",
      },
    ],
  },
};

const projects = [
  {
    id: 1,
    title: "ERP System",
    description: "Enterprise resource planning solution with real-time analytics",
    tags: ["Node.js", "React", "PostgreSQL"],
    image: "https://www.phphr.com/wp-content/uploads/User-management-system-1600x700.png",
  },
  {
    id: 2,
    title: "IoT Platform",
    description: "Scalable infrastructure for IoT device management",
    tags: ["Python", "Kubernetes", "MQTT"],
    image: "https://www.phphr.com/wp-content/uploads/User-management-system-software-1600x700.png",
  },
  {
    id: 3,
    title: "Healthcare Data System",
    description: "FHIR-compliant patient data integration",
    tags: ["Java", "HL7", "MongoDB"],
    image: "https://i.ytimg.com/vi/a9-hYY_rdHA/maxresdefault.jpg",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">System Building Portfolio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Technical showcase of our system architecture and engineering projects
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} System Builders. All rights reserved.</p>
      </footer>
    </main>
  );
}