import { Smile, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4">
        <div>
          <a href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Smile className="h-6 w-6 text-white" />
            <span className="font-bold text-lg text-white">Poonguzhali Dental Care</span>
          </a>
          <p className="text-sm">Your smile, our specialty. © {new Date().getFullYear()}</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>24-5/9A, TAMS Complex, Narasimman street, Town BSNL Office South Side, Dharmapuri 636701</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-4 w-4" />
              <span>04342-451515, 9443936207</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-4 w-4" />
              <span>poonguzhali.bds@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-sm">
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
            <li>Sat: 10:00 AM - 4:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;