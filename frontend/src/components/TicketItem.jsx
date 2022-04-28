import { Link } from 'react-router-dom';

function TicketItem({ ticket }) {
  return (
    <div className="ticket">
      <div>{new Date(ticket.createdAt).toLocaleString('en-GB')}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
      View ticket
      </Link>
    </div>
  )
}

export default TicketItem