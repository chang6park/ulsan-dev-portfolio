import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Card className="max-w-md mx-auto bg-card border shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-2xl">GitHub</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a 
                href="https://github.com/chang6park"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg"
              >
                <img 
                  src="/images/github.png" 
                  alt="GitHub" 
                  className="w-6 h-6"
                />
                <span className="text-lg">https://github.com/chang6park</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;