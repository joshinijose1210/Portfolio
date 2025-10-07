import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating emojis */}
      <div className="absolute top-10 left-10 text-5xl opacity-30 animate-float">💌</div>
      <div className="absolute top-20 right-20 text-4xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-30 animate-float" style={{ animationDelay: '1s' }}>💜</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span> 💬
          </h2>
          <div className="flex items-center justify-center gap-2 text-2xl mb-3">
            <span className="animate-bounce">✉️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💫</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
          </div>
          <p className="text-muted-foreground text-lg">Always open to discussing cloud infrastructure and DevOps opportunities</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-10 relative overflow-hidden">
            {/* Decorative Glow with more layers */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 gradient-text">Get in Touch ✨</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat about cloud technologies! 🚀
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card p-6 border-primary/30 hover-lift group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold gradient-text">Email</h4>
                  </div>
                  <a 
                    href="mailto:joshinijose786@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    joshinijose786@gmail.com
                  </a>
                </Card>

                <Card className="glass-card p-6 border-secondary/30 hover-lift group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold gradient-text">Location</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Chennai, Tamil Nadu, India 🇮🇳
                  </p>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 hover:scale-105 transition-all duration-300 glow-effect w-full sm:w-auto shadow-2xl"
                  asChild
                >
                  <a href="mailto:joshinijose786@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email 💌
                  </a>
                </Button>

                <Button 
                  size="lg" 
                  className="glass-card border-2 border-primary/50 hover:border-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/joshini-v01" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn ✨
                  </a>
                </Button>

                <Button 
                  size="lg" 
                  className="glass-card border-2 border-secondary/50 hover:border-secondary hover:bg-secondary/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://github.com/joshinijose1210" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub 💻
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-muted-foreground">
          <p className="mb-2">Built with 💜 using React, TypeScript, and Tailwind CSS</p>
          <p className="text-sm">© 2025 Joshini V. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
