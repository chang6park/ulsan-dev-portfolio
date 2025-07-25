import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Calendar, Heart, School, BookOpen, Gamepad2, Music, Dumbbell, Circle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full bg-secondary/20 pb-16">
      <section id="home" className="min-h-screen flex items-start justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 items-center max-w-4xl mx-auto">
            {/* 메인 소개 */}
            <div className="text-center w-full">
              <div className="flex flex-col items-center mb-16">
                <div className="w-80 mb-6 overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src="/images/uuh_full.png"
                    alt="울산대학교병원 로고" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold">
                  <span className="mt-1 block">IT팀 박창준</span>
                </h1>
              </div>
              
              <div className="mb-8">
                <p className="text-xl font-semibold text-foreground mb-4 leading-relaxed">
                  "안녕하십니까. 제 경험과 성장을 바탕으로<br />
                  울산대학교병원에서 의료 IT 솔루션을 만들고자하는<br />
                  개발자 박창준입니다."
                </p>
              </div>
            </div>

            {/* 개인정보 카드 */}
            <Card className="bg-background w-full max-w-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-glow border-4 border-primary/20">
                    <img 
                      src="/images/profile.png" 
                      alt="박창준 프로필 사진" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                   <h1 className="text-3xl font-bold mb-2">박창준</h1>
                  <p className="text-accent text-lg font-medium">IT팀 신입 개발자</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div className="flex items-center">
                      <span className="font-medium">생년월일:</span>
                      <span className="ml-2">1998년 09월 14일</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div>現 울산광역시 동구 남목동</div>
                      <div className="text-sm">(前 울산광역시 동구 서부동)</div>
                    </div>
                  </div>

                  {/* 학력 섹션 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <School className="w-5 h-5 text-primary" />
                      <div>
                        <div>현대고등학교 졸업</div>
                        <div className="text-sm">2017년</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <div>
                        <div>부경대학교 졸업</div>
                        <div className="text-sm">위성정보시스템공학 전공</div>
                        <div className="text-sm">컴퓨터공학 복수전공</div>
                      </div>
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

                  <div className="flex items-start space-x-3 text-muted-foreground pt-2 border-t">
                    <div className="flex items-center space-x-2">
                      <Circle className="w-4 h-4 text-primary" />
                      <Gamepad2 className="w-4 h-4 text-primary" />
                      <Dumbbell className="w-4 h-4 text-primary" />
                      <Music className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="text-sm">야구, 헬스(3대 460), 보드게임, 기타연주, 노래방</div>
                      <div className="text-sm mt-1 flex items-center text-left"><Heart className="w-4 h-4 text-primary mr-1" /><span className="text-destructive font-medium">솔로(애인 구함)</span></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
