import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
