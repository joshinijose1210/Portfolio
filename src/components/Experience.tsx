import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "ScaleReal Technologies Pvt. Ltd.",
    role: "InfraOps Engineer - DevOps I",
    period: "Sep 2025 - Present",
    location: "Chennai, Tamil Nadu (Remote)",
    description: "Building and maintaining cloud infrastructure with focus on automation, scalability, and reliability",
    highlights: [
      "Provisioning AWS resources using Terraform",
      "Developing CI/CD pipelines with GitHub Actions",
      "Managing containerized workloads with Docker and ECS",
      "Implementing monitoring with Prometheus and Grafana"
    ],
    skills: ["Terraform", "AWS", "Docker", "ECS", "GitHub Actions", "Prometheus", "Grafana", "SSM"]
  },
  {
    company: "AVASOFT",
    role: "Cloud and DevOps Engineer",
    period: "Jul 2024 - Mar 2025",
    location: "On-site",
    description: "Designed, deployed, and maintained scalable, secure infrastructure across cloud and on-prem environments",
    highlights: [
      "Managed AWS services including ECS, EC2, S3, ECR, Secrets Manager",
      "Built CI/CD pipelines for automated Docker deployments",
      "Managed bare-metal servers ensuring performance",
      "Implemented monitoring systems for proactive issue detection"
    ],
    skills: ["AWS", "Terraform", "Docker", "GitHub Actions", "Prometheus", "Grafana", "Kubernetes"]
  },
  {
    company: "Cerchilo",
    role: "AWS Intern",
    period: "Nov 2023 - Apr 2024",
    location: "Chennai, Tamil Nadu",
    description: "Gained hands-on experience in cloud computing and infrastructure management",
    highlights: [
      "Learned AWS services including EC2, S3, RDS",
      "Configured and managed virtual servers",
      "Implemented automated scaling solutions",
      "Developed understanding of AWS security practices"
    ],
    skills: ["AWS", "EC2", "S3", "RDS", "CloudWatch", "IAM"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span> 💼
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey in Cloud & DevOps</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card p-8 hover-lift relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary" />
              
              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                      {exp.period}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
