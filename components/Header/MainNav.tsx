import Link from "next/link";

const MainNav = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <Link
        href="/"
        className="header-logo inline-block text-2xl tracking-[0.01em]"
      >
        <span
          className="font-normal text-foreground"
          style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
        >
          Steel Bros<span className="text-primary">.</span>
        </span>
      </Link>
    </div>
  );
};

export default MainNav;

