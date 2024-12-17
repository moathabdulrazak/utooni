import Link from "next/link";

export default function Footer() {
    return (
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-white/70 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-white/70 hover:text-white">Pricing</Link></li>
                <li><Link href="/roadmap" className="text-white/70 hover:text-white">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-white/70 hover:text-white">Blog</Link></li>
                <li><Link href="/tutorials" className="text-white/70 hover:text-white">Tutorials</Link></li>
                <li><Link href="/support" className="text-white/70 hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-white">About</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-white/70 hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="text-white/70 hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-white/50 pt-8 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} Utooni. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }