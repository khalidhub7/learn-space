import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-diagonal min-h-screen pb-24">
      <Component {...pageProps} />
    </main>
  );
}
