import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope,
  Laptop,
  BookOpen,
  Brain 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "의료정보시스템",
      description: "X Platform UX Studio 개발 경험",
      skills: ["X Platform", "UX Studio", "간호시스템(병동,투약)", "모바일 EMR"]
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "애플리케이션 개발",
      description: "웹, 앱 서비스 개발 경험",
      skills: ["Python", "Django", "Java", "Android studio"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "인공지능",
      description: "AI 모델 구축 및 데이터 분석",
      skills: ["딥러닝", "TensorFlow", "멀티모달", "데이터 분석"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "자격증",
      description: "보유 자격증 현황",
      skills: ["정보처리기사", "SQLD", "데이터분석준전문가", "네트워크관리사 2급"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">기술 스택</span>
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