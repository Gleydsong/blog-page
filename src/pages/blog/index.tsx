import Link from "next/link";

export default function Blog() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Página Principal do Blog</h1>
      <p>Esta é a raiz do blog. Aqui você lista todos os artigos.</p>

      <div style={{ marginTop: "2rem" }}>
        <h2>Artigos Disponíveis:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <Link
              href="/blog/posts/meu-primeiro-artigo"
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Meu Primeiro Artigo
            </Link>
            <p style={{ margin: "0.5rem 0 0", color: "#555" }}>
              Uma introdução ao mundo do desenvolvimento web.
            </p>
          </li>

          <li style={{ marginBottom: "1rem" }}>
            <Link
              href="/blog/posts/dicas-de-produtividade/ferramentas-essenciais"
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Dicas de Produtividade / Ferramentas Essenciais
            </Link>
            <p style={{ margin: "0.5rem 0 0", color: "#555" }}>
              Como organizar seu dia de trabalho com as melhores ferramentas.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
