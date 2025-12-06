export default function Footer() {
  return (
    <footer className="bg-[#fafafa] px-10 pt-16 pb-8 mt-25">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between mb-12">
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-2xl font-black mb-2 tracking-tight">
            moccet labs
          </h3>
          <div className="text-sm text-gray-500">San Francisco, CA</div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-25">
          <div>
            <h4 className="text-sm font-semibold mb-5 text-black">
              For companies
            </h4>
            <a
              href="/contact"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Get in touch
            </a>
            <a
              href="/medical-data"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Medical data
            </a>
            <a
              href="/guide"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Guide
            </a>
            <a
              href="/process"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Process
            </a>
            <a
              href="/data-pipelines"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Data pipelines
            </a>
            <a
              href="/incentives"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Incentives
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 text-black">
              For physicians
            </h4>
            <a
              href="/all-roles"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Apply
            </a>
            <a
              href="/opportunities"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Opportunities
            </a>
            <a
              href="/payment"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Payment
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 text-black">Support</h4>
            <a
              href="mailto:support@moccet.com"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              support@moccet.com
            </a>
            <a
              href="mailto:press@moccet.com"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              press@moccet.com
            </a>
            <a
              href="mailto:gtm@moccet.com"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              gtm@moccet.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-5 text-black">
              Resources
            </h4>
            <a
              href="/careers"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Careers
            </a>
            <a
              href="/blog"
              className="block text-gray-500 no-underline text-sm mb-3 hover:text-black transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center max-w-[1400px] mx-auto gap-4">
        <div className="text-[13px] text-gray-400">© 2025 moccet labs</div>

        <div className="flex gap-4">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center no-underline text-gray-500 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            𝕏
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center no-underline text-gray-500 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            in
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center no-underline text-gray-500 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            ig
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center no-underline text-gray-500 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            yt
          </a>
        </div>
      </div>
    </footer>
  );
}
