import { socialMedia } from "@/data/Data";
function SocialMedia() {
  return (
    <div className="flex gap-3">
      {socialMedia.map((s, index) => {
        return (
          <a key={index} href={s.link} className="hover:text-primary-purple">
            {s.icon}
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
