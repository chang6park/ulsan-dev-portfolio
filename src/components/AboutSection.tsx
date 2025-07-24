import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      icon: <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img src="/images/uuh.png" alt="울산대학교병원" className="w-14 h-14 object-contain" />
            </div>,
      title: "울산대학교병원 IT팀",
      period: "정규직",
      role: "개발",
      description: "HIS(병원정보시스템) 프로그램 개발 및 유지보수",
      type: "current",
      url: "https://www.uuh.ulsan.kr/kr/index.php?pCode=MN0000051"
    },
    {
      icon: <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img src="/images/knuh.png" alt="경북대학교병원" className="w-14 h-14 object-contain" />
            </div>,
      title: "경북대학교병원 의료정보과",
      period: "계약직",
      role: "전산",
      description: "Ginian NAC, MDM 원가드 하드웨어 관리, 리모트뷰 운영, HIS 간호/병동/투약/신생아 파트 개발(X Platform)",
      type: "experience",
      url: "https://www.knuh.kr/content/06introduce/05_01.asp"
    },
    {
      icon: <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img src="/images/intern.png" alt="부산지방항공청" className="w-14 h-14 object-contain" />
            </div>,
      title: "부산지방항공청",
      period: "인턴",
      role: "청년인턴",
      description: "항공 관련 업무 지원",
      type: "experience",
      url: "https://www.molit.go.kr/broa/USR/WPGE0201/m_11965/DTL.jsp"
    }
  ];

  return (
    <>
      <div id="about"></div>
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">경력</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              저의 경험과 성장 과정을 소개합니다
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <a 
                key={index}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Card 
                  className={`${
                    exp.type === 'current' ? 'border-primary bg-gradient-to-r from-card to-primary/5' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-6">
                        <div className="text-primary">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant={exp.type === 'current' ? 'default' : 'secondary'} className="text-base px-3 py-1">
                              {exp.period}
                            </Badge>
                            <span className="text-base text-muted-foreground">|</span>
                            <span className="text-base font-medium text-accent">{exp.role}</span>
                          </div>
                        </div>
                      </div>
                      {exp.type === 'current' && (
                        <Badge variant="default" className="bg-primary text-base px-3 py-1">
                          현재 근무
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;