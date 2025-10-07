import { Card } from "@/components/ui/card";
import { 
  Cloud, 
  Container, 
  Server, 
  Settings, 
  GitBranch, 
  Database,
  Shield,
  Activity,
  Terminal,
  Boxes
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS (EC2, ECS, S3, ECR)", "Secrets Manager", "CloudWatch", "VPC", "Route 53"],
    color: "text-primary"
  },
  {
    title: "Infrastructure as Code",
    icon: Settings,
    skills: ["Terraform", "CloudFormation", "Configuration Management"],
    color: "text-secondary"
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "ECS Fargate", "Docker Compose"],
    color: "text-accent"
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    skills: ["GitHub Actions", "Automated Pipelines", "Deployment Automation"],
    color: "text-primary"
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "AlertManager", "CloudWatch"],
    color: "text-secondary"
  },
  {
    title: "Operating Systems",
    icon: Terminal,
    skills: ["Linux Administration", "Ubuntu", "CentOS", "Shell Scripting"],
    color: "text-accent"
  },
  {
    title: "Version Control",
    icon: Boxes,
    skills: ["Git", "GitHub", "GitOps", "Branch Management"],
    color: "text-primary"
  },
  {
    title: "Security & Access",
    icon: Shield,
    skills: ["SSM", "IAM", "Security Groups", "Secrets Management"],
    color: "text-secondary"
  }
];

const certifications = [
  {
    title: "AWS Command Line Interface (CLI) Basics",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2025",
    emoji: "🎓"
  },
  {
    title: "Getting Started with DevOps on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2025",
    emoji: "⚡"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span> 💪
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="glass-card p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent`} />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Certifications</span> 🏆
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card p-6 hover-lift">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{cert.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
