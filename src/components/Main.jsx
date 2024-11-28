import ActionCard from "./ActionCard";

function Main() {
  return (
    <main>
      <div className="w-100">
        <img
          src="/images/image-hero-desktop.jpg"
          className="w-100 object-fit-cover"
          alt="Hero Img"
        />
      </div>
      <ActionCard />
    </main>
  );
}

export default Main;
