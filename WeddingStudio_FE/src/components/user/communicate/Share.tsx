import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Share: React.FC = () => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    shareUrl
  )}`;
  const googleShare = `https://plus.google.com/share?url=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <div className="bg-[#f7f7f7] p-4 my-6 flex items-center">
      <span className="text-[#e74c3c] font-amatic text-xl mr-4">CHIA SẺ:</span>
      <a
        href={facebookShare}
        className="mr-3 text-[#3b5998] hover:opacity-80 text-2xl group"
        target="_blank"
        rel="noopener noreferrer"
        title="Chia sẻ Facebook"
      >
        <span className="inline-block transition-transform duration-300 group-hover:rotate-180">
          <FaFacebookF />
        </span>
      </a>
      <a
        href={twitterShare}
        className="mr-3 text-[#1da1f2] hover:opacity-80 text-2xl group"
        target="_blank"
        rel="noopener noreferrer"
        title="Chia sẻ Twitter"
      >
        <span className="inline-block transition-transform duration-300 group-hover:rotate-180">
          <FaTwitter />
        </span>
      </a>
      <a
        href={googleShare}
        className="text-[#db4437] hover:opacity-80 text-2xl group"
        target="_blank"
        rel="noopener noreferrer"
        title="Chia sẻ Google Plus"
      >
        <span className="inline-block transition-transform duration-300 group-hover:rotate-180">
          <FaGooglePlusG />
        </span>
      </a>
    </div>
  );
};

export default Share;
