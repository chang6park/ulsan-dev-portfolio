import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, School, GraduationCap, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 개인정보 카드 */}
          <Card className="bg-gradient-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <span className="text-4xl font-bold text-primary-foreground">박</span>
                </div>
                 <h1 className="text-3xl font-bold mb-2">박창준</h1>
                <p className="text-accent text-lg font-medium">울산대학교병원 IT팀 신입개발자</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>울산광역시 남목</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <School className="w-5 h-5 text-primary" />
                  <span>현대고등학교 졸업</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>부경대학교 졸업</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>your.email@example.com</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>010-0000-0000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 메인 소개 */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              안녕하세요!
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                울산대학교병원
              </span>
              <br />
              IT팀 박창준입니다
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              의료 정보 시스템과 다양한 플랫폼 개발 경험을 바탕으로 
              <br />
              환자 중심의 혁신적인 의료 IT 솔루션을 만들어가는 
              <br />
              열정적인 개발자입니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                프로젝트 보기
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                연락하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;