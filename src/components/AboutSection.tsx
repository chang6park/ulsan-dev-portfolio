import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building } from "lucide-react";
import uuhLogo from "@/assets/uuh-logo.png";

const AboutSection = () => {
  const experiences = [
    {
      icon: <img src={uuhLogo} alt="울산대학교병원" className="w-8 h-8 rounded-full" />,
      title: "울산대학교병원 IT팀",
      period: "현재",
      role: "신입개발자", 
      description: "의료 정보 시스템 개발 및 운영",
      type: "current"
    },
    {
      icon: <img src="/lovable-uploads/6aa37475-1302-4c53-9222-ea5aaebc1aaf.png" alt="경북대학교병원" className="w-8 h-8 rounded-full" />,
      title: "경북대학교병원 의료정보과",
      period: "계약직",
      role: "전산직",
      description: "하드웨어 관리, 시스템 운영, Genian NAC, 원격제어, 리모트뷰 운영, X Platform HiMED UX Studio 개발 (간호/병동/투약/신생아 담당)",
      type: "experience"
    },
    {
      icon: <img src="/lovable-uploads/3c4a4785-efe5-4080-837d-70b85529201b.png" alt="부산지방항공청" className="w-8 h-8 rounded-full" />,
      title: "부산지방항공청",
      period: "인턴",
      role: "청년인턴",
      description: "항공 관련 업무 지원 및 시스템 운영",
      type: "experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            소개 및 <span className="bg-gradient-hero bg-clip-text text-transparent">경력</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            의료 정보 시스템 분야에서의 경험과 성장 과정을 소개합니다
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-glow transition-all duration-300 hover:-translate-y-1 ${
                exp.type === 'current' ? 'border-primary bg-gradient-to-r from-card to-primary/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">
                      {exp.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={exp.type === 'current' ? 'default' : 'secondary'}>
                          {exp.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">|</span>
                        <span className="text-sm font-medium text-accent">{exp.role}</span>
                      </div>
                    </div>
                  </div>
                  {exp.type === 'current' && (
                    <Badge variant="default" className="bg-primary">
                      현재 근무
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;