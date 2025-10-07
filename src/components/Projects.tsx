import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Activity } from "lucide-react";
import projectBg from "@/assets/project-bg.jpg";

const projects = [
  {
    icon: Cloud,
    title: "Infrastructure as Code with Terraform + ECS Deployment Pipeline",
    description: "Designed and implemented a fully automated, scalable container deployment solution using Terraform, AWS ECS, and CI/CD workflows",
    details: [
      "Provisioned ECS Cluster (Fargate) with Terraform including IAM roles, task definitions, load balancers, and networking",
      "Integrated AWS Secrets Manager for secure credential management and SSM for secure instance access",
      "Built CI/CD pipeline with GitHub Actions for automated Docker builds and ECR deployments",
      "Automated ECS task definition updates and zero-downtime service redeployments"
    ],
    outcome: "Enabled fast, reliable, and secure deployments with complete automation from code push to live service",
    tech: ["Terraform", "AWS ECS", "Fargate", "ECR", "GitHub Actions", "Docker", "Secrets Manager", "SSM"],
    gradient: "from-primary to-accent"
  },
  {
    icon: Server,
    title: "Migration of Resources from On-Premises to AWS Cloud",
    description: "Led comprehensive migration of enterprise applications and infrastructure from on-premises data centers to AWS cloud platform",
    details: [
      "Assessed existing on-prem infrastructure and designed cloud-native AWS architecture",
      "Migrated databases, applications, and services with minimal downtime using AWS Migration Hub",
      "Implemented secure VPC networking, VPN connections, and hybrid cloud connectivity",
      "Set up automated backup solutions using AWS Backup and disaster recovery procedures",
      "Optimized costs by right-sizing instances and implementing auto-scaling policies"
    ],
    outcome: "Achieved 40% cost reduction, improved scalability, and enhanced disaster recovery capabilities with cloud infrastructure",
    tech: ["AWS Migration Hub", "EC2", "RDS", "S3", "VPC", "CloudFormation", "Route 53", "AWS Backup"],
    gradient: "from-secondary to-primary"
  },
  {
    icon: Activity,
    title: "Prometheus & Grafana Monitoring Setup for Multi-Website Infrastructure",
    description: "Built comprehensive monitoring and alerting system for multiple production websites hosted on shared server infrastructure",
    details: [
      "Deployed Prometheus for metrics collection across multiple application instances",
      "Configured custom exporters for application-specific metrics and system-level monitoring",
      "Designed Grafana dashboards with real-time visualization of CPU, memory, network, and application performance",
      "Implemented alerting rules with Prometheus AlertManager for proactive incident detection",
      "Set up multi-tenant monitoring with isolated dashboards per application team"
    ],
    outcome: "Reduced mean time to detection (MTTD) by 70% and enabled data-driven capacity planning with real-time insights",
    tech: ["Prometheus", "Grafana", "AlertManager", "Node Exporter", "Nginx", "Docker", "Linux"],
    gradient: "from-accent to-secondary"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectBg})` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span> 🚀
          </h2>
          <p className="text-muted-foreground text-lg">Building scalable and automated cloud solutions</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="glass-card p-8 hover-lift relative overflow-hidden">
                {/* Gradient Border Top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Key Implementations:</h4>
                      {project.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1 text-sm">▹</span>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-muted/30 border border-primary/20 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-secondary mb-2">💡 Outcome:</h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary border-secondary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
