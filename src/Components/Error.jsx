function Error({ message }) {
  if (!message) return null;

  return <p style={{ color: "red", marginTop: "10px" }}>{message}</p>;
}

export default Error;
