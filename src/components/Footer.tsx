const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-lg font-semibold bg-gradient-hero bg-clip-text text-transparent mb-2">
            김신입 Portfolio
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 김신입. 모든 권리 보유.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            울산 동구 출신 | 현대고등학교 | 부경대학교
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;