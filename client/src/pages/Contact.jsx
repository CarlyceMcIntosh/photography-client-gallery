export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label>Name:</label><input type="text" placeholder="Your Name" />
        <label>Email:</label><input type="email" placeholder="you@example.com" />
        <label>Message:</label><textarea placeholder="Say hello..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
