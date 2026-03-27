import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image
        src="/assets/images/brand-logo.svg"
        alt="Logo site"
        width={116}
        height={32}
      />
    </Link>
  );
};
