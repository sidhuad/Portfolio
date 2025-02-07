import "../styles/contact.css";

export default function Contact() {
  
  return (
    <form className="container bg-light rounded" id="form" target="self">
      <section className="mt-5 mb-3 pt-4" >
        {/* <label for="username" className="form-label font">Name:</label> */}
        <input type="text" className="form-control" id="username" placeholder="Enter Name" required/>
        <article className="valid-feedback">valid.</article>
        <article className="invalid-feedback">Please fill out this field</article>
      </section>
      <section className="mb-3">
        {/* <label for="email" className="form-label">Email:</label> */}
        <input type="email" className="form-control" id="email" placeholder="Email" required/>
        <article className="valid-feedback">valid.</article>
        <article className="invalid-feedback">Please fill out this field</article>
      </section>
      <section className="mb-3 ">
        {/* <label for="message">Message:</label> */}
        <textarea className="form-control" rows="5" id="message"></textarea>
      </section>
      <section className="mb-4 pb-4">
        <button type="submit" class="btn btn-primary">Submit</button>
      </section>
    </form>
  );
}
