import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
      <p className="mb-8 text-body-color">Strona nie została znaleziona.</p>
      <Link
        href="/"
        className="rounded-md bg-primary py-3 px-8 text-base font-semibold text-white hover:bg-primary/80"
      >
        Strona główna
      </Link>
    </div>
  );
}
