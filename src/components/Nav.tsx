import Link from "next/link";
const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-center p-4">
        <div className="flex gap-8">
          <Link
            href={`/`}
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Home
          </Link>
          {["Thoughts", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
