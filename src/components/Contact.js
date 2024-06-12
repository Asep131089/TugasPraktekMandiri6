import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = () => {
    const { name, email, phone, message } = formData;
    if (name && email && phone && message) {
      setSuccessMessage(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      alert('Semua Form wajib diisi.');
    }
  }

  return (
    <div className="container-fluid pt-5 pb-5 kontak">
      <div className="container">
        <h2 className="display-3 text-center" id="kontak">Kontak Kami</h2>
        <p className="text-center">Ini adalah halaman Kontak Kami, silahkan hubungi kami jika ada kendala</p>
        <div className="row pb-3">
          <div className="col-md-6">
            <input className="form-control form-control-lg mb-3" type="text" id="name" placeholder="Nama" value={formData.name} onChange={handleChange} required />
            <input className="form-control form-control-lg mb-3" type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input className="form-control form-control-lg" type="tel" id="phone" placeholder="No. Phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <textarea className="form-control form-control-lg" id="message" rows="5" placeholder="Pesan" value={formData.message} onChange={handleChange} required></textarea>
          </div>
        </div>
        <div className="col-md-3 mx-auto text-center">
          <button type="button" id="submitButton" className="btn btn-danger btn-lg" onClick={handleSubmit}>
            Kirim Pesan
          </button>
        </div>
        {successMessage && (
          <div id="successMessage" className="alert alert-success mt-5">
            Berhasil Dikirim
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
