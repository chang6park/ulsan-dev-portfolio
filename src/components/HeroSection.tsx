import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, School, GraduationCap, Mail, Phone } from "lucide-react";
import uuhLogo from "@/assets/uuh-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 개인정보 카드 */}
          <Card className="bg-gradient-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-glow border-4 border-primary/20">
                  <img 
                    src="/lovable-uploads/aa690b30-2e03-4150-bf0c-318077132163.png" 
                    alt="박창준 프로필 사진" 
                    className="w-full h-full object-cover"
                  />
                </div>
                 <h1 className="text-3xl font-bold mb-2">박창준</h1>
                <p className="text-accent text-lg font-medium">울산대학교병원 IT팀 신입개발자</p>
              </div>
              
                <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <span className="font-medium">생년월일:</span>
                  <span>1998년 09월 14일</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>울산광역시 동구 서부동</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <School className="w-5 h-5 text-primary" />
                  <span>현대고등학교 졸업</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <div>부경대학교 졸업</div>
                    <div className="text-sm">위성정보시스템공학 전공</div>
                    <div className="text-sm">컴퓨터공학 복수전공</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>ckdwns2487@uuh.ulsan.kr</span>
                </div>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>010-4339-2487</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 메인 소개 */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <img 
                src={uuhLogo} 
                alt="울산대학교병원 로고" 
                className="w-16 h-16 rounded-full"
              />
              <h1 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  울산대학교병원
                </span>
                <br />
                IT팀 박창준
              </h1>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">소개</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                의료 정보 시스템과 다양한 플랫폼 개발 경험을 바탕으로 
                환자 중심의 혁신적인 의료 IT 솔루션을 만들어가는 
                열정적인 개발자입니다.
              </p>
              <div>
                <h3 className="text-lg font-medium mb-2">취미</h3>
                <p className="text-muted-foreground">
                  야구, 헬스, 노래 부르기/듣기, 보드게임
                </p>
              </div>
            </div>
            
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