import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-lg font-semibold bg-gradient-hero bg-clip-text text-transparent mb-4">
            박창준 Portfolio
          </div>

          <p className="text-muted-foreground text-sm">
            © 2025 박창준. 모든 권리 보유.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            울산대학교병원 IT팀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;