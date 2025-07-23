const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-lg font-semibold bg-gradient-hero bg-clip-text text-transparent mb-2">
            박창준 Portfolio
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 박창준. 모든 권리 보유.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            울산대학교병원 IT팀 | 울산광역시 동구 서부동 거주 | 현대고등학교 | 부경대학교 위성정보시스템공학·컴퓨터공학
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;