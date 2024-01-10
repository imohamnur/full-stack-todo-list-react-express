import React, { useState } from 'react'

const Modal = ({ id }) => {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("");

  const handleCancel = () => {
    setModal(false);
  }

  const handleEdit = async (id) => {
    setModal(false);
    const body = { description };
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  }


  return (
    <>
      <button className='btn btn-edit' onClick={() => setModal(true)}>Edit</button>

      {modal && <section className='modal'>
        <div>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button className='btn btn-edit' onClick={() => handleEdit(id)}>Edit</button>
          <button className='btn btn-delete' onClick={handleCancel}>Close</button>
        </div>
      </section>}
    </>
  )
}

export default Modal