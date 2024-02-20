import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">
          <button>Meals</button>
        </Link>
      </p>
      <p>
        <Link href="/meals/share">
          <button>Share a meal</button>
        </Link>
      </p>
      <p>
        <Link href="/community">
          <button>Community</button>
        </Link>
      </p>
    </main>
  );
}
