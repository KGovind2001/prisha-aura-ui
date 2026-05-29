function Contact() {
  return (
    <div className='container py-5'>
      <h1>Contact Us</h1>

      <form className='mt-4'>
        <input
          type='text'
          placeholder='Your Name'
          className='form-control mb-3'
        />

        <input
          type='email'
          placeholder='Your Email'
          className='form-control mb-3'
        />

        <textarea
          placeholder='Message'
          className='form-control mb-3'
        ></textarea>

        <button className='btn btn-dark'>Send</button>
      </form>
    </div>
  )
}

export default Contact