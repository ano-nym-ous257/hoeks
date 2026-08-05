export default function Footer() {
  return (
    <footer className="container footer">
      <p>© {new Date().getFullYear()} Gamefreak.</p>

      <div>
        <a
          href="https://github.com/ano-nym-ous257"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
