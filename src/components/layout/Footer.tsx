export default function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-identity">
        <p>© {new Date().getFullYear()} Gamefreak.</p>
        <p>Remote • Available for UTC / EST overlap</p>
        <p>AWS • Cybersecurity • Network Engineering • gamefreakdev.xyz</p>
      </div>

      <div className="footer-links">
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
