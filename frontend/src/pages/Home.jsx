import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="heading">
        <h1>How can we assist you today?</h1>
        <p>Select an option below</p>
      </section>

      <Link to='newticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle />Submit new ticket
      </Link>
      <Link to='tickets' className='btn btn-block'>
        <FaTicketAlt />View current tickets
      </Link>
    </>
  )
}

export default Home