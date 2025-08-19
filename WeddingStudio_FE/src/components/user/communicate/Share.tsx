import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Share: React.FC = () => (
  <div className="bg-[#f7f7f7] p-4 my-6 flex items-center">
    <span className="text-[#e74c3c] font-amatic text-xl mr-4">CHIA SẺ:</span>
    <a href="#" className="mr-3 text-[#3b5998] hover:opacity-80 text-2xl">
      <FaFacebookF />
    </a>
    <a href="#" className="mr-3 text-[#1da1f2] hover:opacity-80 text-2xl">
      <FaTwitter />
    </a>
    <a href="#" className="text-[#db4437] hover:opacity-80 text-2xl">
      <FaGooglePlusG />
    </a>
  </div>
);

export default Share;
