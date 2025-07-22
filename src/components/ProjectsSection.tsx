import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Django 웹 애플리케이션",
      description: "Python Django를 활용한 풀스택 웹 애플리케이션 개발. 사용자 인증, CRUD 기능, 반응형 UI를 구현했습니다.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Android 모바일 앱",
      description: "네이티브 Android 앱 개발. 로컬 데이터베이스 연동, REST API 통신, 사용자 친화적 UI/UX를 구현했습니다.",
      image: "/api/placeholder/400/250",
      technologies: ["Android", "Java", "SQLite", "Retrofit", "Material Design"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "AI 머신러닝 모델",
      description: "딥러닝을 활용한 이미지 분류 모델 구축. 데이터 전처리부터 모델 훈련, 평가까지 전체 파이프라인을 구현했습니다.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "크로스 플랫폼 프로젝트",
      description: "X 플랫폼을 활용한 다중 플랫폼 지원 애플리케이션. 효율적인 코드 재사용과 플랫폼별 최적화를 구현했습니다.",
      image: "/api/placeholder/400/250",
      technologies: ["Cross Platform", "API", "Database", "UI Framework"],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            주요 <span className="bg-gradient-hero bg-clip-text text-transparent">프로젝트</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            다양한 기술 스택을 활용한 프로젝트 경험을 소개합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video bg-gradient-card rounded-t-xl flex items-center justify-center">
                <div className="text-6xl text-primary/20">🖼️</div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    코드
                  </Button>
                  <Button variant="hero" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    데모
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;