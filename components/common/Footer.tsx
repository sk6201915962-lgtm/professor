import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-white font-semibold mb-3">Address</h3>
          <p className="text-sm leading-6">
            School of Computer Engineering <br />
            KIIT Deemed to be University <br />
            Bhubaneswar, Odisha, India
          </p>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-white font-semibold mb-3">Say Hello</h3>
          <a
            href="mailto:soumyaranjan.nayakfcs@kiit.ac.in"
            className="text-sm hover:text-[#EBB884] transition"
          >
            mail for soumyaranjan.nayakfcs@kiit.ac.in
          </a>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Social</h3>
          <ul className="space-y-2 text-sm tracking-wider">
            <li>
              <Link href="https://www.facebook.com/soumyaranjan.nayak.391" target="blank" className="hover:text-[#EBB884]">FACEBOOK</Link>
            </li>
            <li>
              <Link href="https://x.com/SoumyaR28911292" target="blank" className="hover:text-[#EBB884]">TWITTER</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/dr-soumya-ranjan-nayak-1ab05715b/" target="blank" className="hover:text-[#EBB884]">LINKEDIN</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/nayak.soumya17/" target="blank" className="hover:text-[#EBB884]">INSTAGRAM</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm tracking-wider">
            <li>
              <a href="#" className="hover:text-[#EBB884]">PUBLICATIONS</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EBB884]">STUDENTS</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EBB884]">MEMORIES</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EBB884]">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-center">
        <div className="flex items-center space-x-2 mb-3 md:mb-0">
          <span className="bg-white text-black font-bold px-2 py-1 rounded-full">SR</span>
          <span className="text-white font-semibold">SOUMYA RANJAN NAYAK</span>
        </div>
        <p className="text-sm text-gray-400">
          © 2025 Dr. Soumya Ranjan Nayak. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;