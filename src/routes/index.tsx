import { Title } from "solid-start";
// import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Palistha Saving & Credit Co-operative Ltd.</Title>
      <h1 style={{"font-size": '48px'}}>Palistha Saving & Credit Co-operative Ltd.</h1>
      <div style={{"font-size": '20px'}}>
        <p>@ Thecho, Godawari Municipality-12, Lalitpur, Nepal</p>
      <p>Call: 01-5572691</p>
      <p>E-mail: <a href="mailto:palistha.sccl@gmail.com">palistha.sccl@gmail.com</a></p>
      </div>
      {/* <Counter /> */}
      {/* <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p> */}
    </main>
  );
}
