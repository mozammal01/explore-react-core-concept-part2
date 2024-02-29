export default function Friend({ friend }) {
  const { id, name, email } = friend;
  return (
    <div className="box">
      <h2>Id: {id}</h2>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  )
}