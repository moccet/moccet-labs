export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-10 py-20 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/desert.png')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-25 mb-15">
          <div className="text-center">
            <div className="text-[32px] font-semibold text-white leading-none drop-shadow-lg">
              $250/hr
            </div>
            <div className="text-sm text-white/90 mt-1">Average pay</div>
          </div>
          <div className="text-center">
            <div className="text-[32px] font-semibold text-white leading-none drop-shadow-lg">
              12.3k
            </div>
            <div className="text-sm text-white/90 mt-1">Medical experts</div>
          </div>
          <div className="text-center">
            <div className="text-[32px] font-semibold text-white leading-none drop-shadow-lg">
              $4.2M+
            </div>
            <div className="text-sm text-white/90 mt-1">Daily payouts</div>
          </div>
        </div>

        <h1
          style={{
            fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: 500,
            fontStretch: 'expanded',
            color: '#ffffff',
            lineHeight: '1.15',
            letterSpacing: '0.5px',
            marginTop: 'clamp(16px, 3vw, 32px)',
            marginBottom: 'clamp(20px, 4vw, 32px)',
            textAlign: 'center',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
            padding: '0 20px'
          }}
        >
          Shape the future of medical AI
        </h1>

        <p className="text-xl text-white/95 max-w-[600px] mx-auto mb-10 leading-snug drop-shadow-lg">
          Find board-certified physicians for your healthcare AI training needs.
          Available only on moccet labs.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-black border-none px-7 py-3.5 rounded-lg text-base font-medium cursor-pointer inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
            Start working →
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-7 py-3.5 text-base font-medium cursor-pointer rounded-lg hover:bg-white/20 transition-colors">
            Search roles
          </button>
        </div>
      </div>
    </section>
  );
}
