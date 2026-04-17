import { ContactForm } from "@/components/contact/contact-form";

const contactLinks = [
  { href: "mailto:jasanbadelldev@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/jasanbadelldev", label: "LinkedIn" },
  { href: "https://github.com/JasanBadell", label: "GitHub" },
];

export default function ContactPage() {
  return (
    <section className="panel page-stack">
      <p className="page-eyebrow">Contacto</p>
      <h1 className="page-title">Construyamos algo útil y memorable.</h1>

      <p className="page-copy">
        Estoy abierto a oportunidades remotas, colaboraciones por proyecto y
        equipos que busquen mejorar sus productos digitales con una visión
        moderna de frontend.
      </p>

      <p className="page-copy">
        Si necesitas una interfaz más rápida, accesible y enfocada en conversión,
        podemos conversar y definir un roadmap claro.
      </p>

      <article className="contact-box-next">
        <p>
          Escríbeme a <strong>jasanbadelldev@gmail.com</strong>
        </p>
        <p>Tiempo estimado de respuesta: 24-48 horas.</p>
      </article>

      <ContactForm />

      <div className="link-row">
        {contactLinks.map((link) => (
          <a key={link.href} href={link.href} className="next-home__btn" target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
