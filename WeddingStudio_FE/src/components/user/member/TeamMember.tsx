interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  imageAlt,
}: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-[#e74c3c] font-medium">{role}</p>
    </div>
  );
};

export default TeamMember;
