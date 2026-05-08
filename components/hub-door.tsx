import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { cx } from "@/lib/utils";

type HubDoorProps = {
  href: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  locked?: boolean;
  revealed?: boolean;
};

export function HubDoor({ href, title, description, Icon, locked, revealed = true }: HubDoorProps) {
  const content = (
    <>
      <span className="door-glow" />
      <span className="door-icon">{locked ? <LockKeyhole size={28} /> : <Icon size={28} />}</span>
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
    </>
  );

  if (!revealed) {
    return (
      <div className="hub-door hidden-door">
        <span className="door-icon">
          <LockKeyhole size={28} />
        </span>
        <span>
          <strong>A sealed passage</strong>
          <small>Something waits beyond the forge.</small>
        </span>
      </div>
    );
  }

  if (locked) {
    return <div className="hub-door locked-door">{content}</div>;
  }

  return (
    <Link className={cx("hub-door", revealed && "revealed-door")} href={href}>
      {content}
    </Link>
  );
}
