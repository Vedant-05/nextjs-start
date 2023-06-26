import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>This Is Homepage!!</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
