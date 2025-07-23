import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Card className="max-w-md mx-auto bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl">GitHub</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub 프로필</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;