import { Card } from "@/components/ui/card";
import { Award, BookOpen, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">✨</div>
      <div className="absolute bottom-20 right-20 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>💜</div>
      <div className="absolute top-1/2 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>☁️</div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span> ✨
          </h2>
          <div className="flex items-center justify-center gap-2 text-2xl mb-2">
            <span className="animate-bounce">💫</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>⭐</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💫</span>
          </div>
          <p className="text-muted-foreground text-lg">Passionate about building robust cloud solutions</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card p-8 hover-lift relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl shadow-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  Current Role 💼
                </h3>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium gradient-text">InfraOps Engineer - DevOps I</span> at ScaleReal Technologies
                </p>
                <p className="text-sm text-muted-foreground mt-2">Sep 2025 - Present ⚡</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-8 hover-lift relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  Education 🎓
                </h3>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium gradient-text">MA in Public Administration</span> - Madras Christian College
                </p>
                <p className="text-sm text-muted-foreground mt-1">BCom in Computer Applications - VELS University ✨</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="glass-card p-10 max-w-4xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 text-4xl opacity-20 animate-float">🚀</div>
          
          <div className="relative z-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a <span className="text-primary font-semibold">Cloud and DevOps Engineer</span>, 
              building and maintaining cloud infrastructure with a strong focus on 
              <span className="text-secondary font-semibold"> automation</span>, 
              <span className="text-accent font-semibold"> scalability</span>, and 
              <span className="text-primary font-semibold"> reliability</span>. 
              Working extensively with <span className="font-semibold">AWS services</span>, using 
              <span className="text-secondary font-semibold"> Terraform</span> to provision and manage resources as code. 
              Developing <span className="font-semibold">CI/CD pipelines</span> with 
              <span className="text-accent font-semibold"> GitHub Actions</span> to automate build, test, and deployment processes 🔄
            </p>
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-muted-foreground">
                Managing containerized workloads using <span className="text-primary font-semibold">Docker</span> and 
                <span className="text-secondary font-semibold"> ECS</span>, while implementing secure access through 
                <span className="text-accent font-semibold"> SSM</span>. Utilizing 
                <span className="text-primary font-semibold"> Prometheus</span> and 
                <span className="text-secondary font-semibold"> Grafana</span> for real-time metrics and alerting 📊
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
