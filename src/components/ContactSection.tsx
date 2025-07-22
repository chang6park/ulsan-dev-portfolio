import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "이메일",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "전화번호",
      value: "010-0000-0000",
      link: "tel:010-0000-0000"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "위치",
      value: "울산광역시 동구",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      link: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn", 
      link: "https://linkedin.com/in/yourusername"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            연락<span className="bg-gradient-hero bg-clip-text text-transparent">하기</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            새로운 기회와 협업에 언제나 열려있습니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 연락처 정보 */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">연락처 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 border-t">
                  <p className="font-medium mb-4">소셜 미디어</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a 
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          {social.icon}
                          <span>{social.title}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 메시지 카드 */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">메시지 보내기</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Mail className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    새로운 프로젝트나 협업 기회에 대해 
                    <br />
                    언제든 연락해 주세요!
                  </p>
                  
                  <Button 
                    variant="hero" 
                    size="lg"
                    asChild
                  >
                    <a href="mailto:your.email@example.com">
                      <Mail className="w-5 h-5 mr-2" />
                      이메일 보내기
                    </a>
                  </Button>
                </div>
                
                <div className="text-center pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    보통 24시간 이내에 답변드립니다
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;