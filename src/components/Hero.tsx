import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Multiple Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-accent/30" />
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 via-transparent to-primary/20" />

      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Sparkle Elements */}
      <div className="absolute top-32 right-32 text-primary/40 animate-glow-pulse">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute bottom-32 left-32 text-accent/40 animate-glow-pulse" style={{ animationDelay: '1s' }}>
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-secondary/40 animate-glow-pulse" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="h-4 w-4" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Cute emoji decoration */}
          <div className="flex items-center justify-center gap-4 mb-4 text-4xl animate-float">
            <span>✨</span>
            <span>☁️</span>
            <span>💜</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="gradient-text relative inline-block">
              Joshini V
              <div className="absolute -top-6 -right-6 text-2xl animate-bounce">🚀</div>
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-accent animate-glow-pulse" />
            <p className="text-2xl md:text-3xl font-light">
              <span className="gradient-text font-semibold">☁️ Cloud & DevOps Engineer ⚡</span>
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-accent via-secondary to-transparent animate-glow-pulse" />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Building scalable cloud infrastructure and automating deployments with 
            <span className="text-primary font-semibold"> AWS</span>, 
            <span className="text-secondary font-semibold"> Terraform</span>, 
            <span className="text-accent font-semibold"> Docker</span>, and 
            <span className="text-primary font-semibold"> Kubernetes</span> 🚀
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 hover:scale-105 transition-all duration-300 glow-effect group shadow-2xl"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get in Touch ✨
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="glass-card border-2 border-primary/50 hover:border-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <a href="#projects">
                View Projects 🚀
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/joshinijose1210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all transform hover:scale-125 hover:-rotate-12 duration-300 glow-effect"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/joshini-v01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all transform hover:scale-125 hover:rotate-12 duration-300 glow-effect"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};
