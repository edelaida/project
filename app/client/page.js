import Link from "next/link";

export default function Client() {
  return (
    <div>
      <h1>Client PAGE</h1>
      <Link href='/' >Головна</Link> <br />
      <Link href='/client/12345'>Кліент 12345</Link>
    </div>
     
  );
}