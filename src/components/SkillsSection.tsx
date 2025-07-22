import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Brain, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "의료정보시스템",
      description: "X Platform HiMED UX Studio 개발 경험",
      skills: ["X Platform", "HiMED", "UX Studio", "간호시스템", "병동관리", "투약관리", "신생아관리"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "웹 개발",
      description: "Python Django를 활용한 백엔드 개발",
      skills: ["Python", "Django", "HTML/CSS", "JavaScript", "REST API", "Database"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "시스템 운영",
      description: "하드웨어 및 네트워크 관리, 보안 시스템 운영",
      skills: ["하드웨어 관리", "시스템 운영", "Genian NAC", "원격제어", "리모트뷰", "네트워크 보안"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "인공지능",
      description: "AI 모델 구축 및 머신러닝 프로젝트",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Data Analysis", "Model Training"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            기술 <span className="bg-gradient-hero bg-clip-text text-transparent">스택</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            다양한 분야에서의 개발 경험과 기술력을 보유하고 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="text-primary mx-auto mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;