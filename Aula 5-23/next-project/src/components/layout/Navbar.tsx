import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        padding: "15px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
        position: "fixed",
      }}
    >
      <div>Project Name</div>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
