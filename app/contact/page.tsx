export const metadata = {
  title: 'Contact Me | RafDev',
  description: 'Get in touch with Rafael',
};

export default function ContactPage() {
  return (
    <main className="page">
      <h1 className="page__title">Contact Me</h1>
      <p className="page__subtitle">
        Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll
        get back to you as soon as possible.
      </p>

      <form className="contact-form" action="#" method="POST">
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form__input"
            placeholder="Your name"
            required
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form__input"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="contact-form__textarea"
            placeholder="Tell me about your project..."
            rows={6}
            required
          />
        </div>

        <button type="submit" className="contact-form__submit">
          Send Message
        </button>
      </form>
    </main>
  );
}
