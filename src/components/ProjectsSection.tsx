import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "X platform HIS 간호시스템 개발",
      description: <>
        UX studio와 java eclipse를 통한<br />
        간호시스템 개발 및 화면 예외처리,<br />
        데이터 처리 수행.
      </>,
      image: "/images/projectImg_3.jpg",
      demo: "https://demo.his.com"
    },
    {
      title: "퍼스널컬러 진단  AI 웹 서비스 개발",
      description: <>
        Django framework 기반 웹 애플리케이션 개발.<br />
        AI 모델 구축 및 결과값 연동 API 구현과<br />
        CRUD 기능·반응형 UI까지 개발.
      </>,
      image: "/images/projectImg_11.png",
      demo: "https://demo.django-web-app.com"
    },
    {
      title: "AI 예측 모델 개발",
      description: <>
        피부색 이미지를 분류하여 4계절 톤으로 나누는 퍼스널컬러 분석 AI 모델 개발.<br />
        해양 데이터 분석하여 토사 유입량을 예측 회귀 모델 구축.
      </>,
      image: "/images/projectImg_2.PNG",
      demo: "https://demo.ai-ml-model.com"
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">주요 프로젝트</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              저의 프로젝트 경험을 소개합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div 
                  className="aspect-video bg-gradient-card rounded-t-xl flex items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="space-y-3 flex-1">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-end">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="hero" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        데모
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full mx-4">
            <img 
              src={selectedImage} 
              alt="프로젝트 이미지" 
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
            <button
              className="absolute -right-2 -top-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;