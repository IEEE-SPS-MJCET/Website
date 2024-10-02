import { FocusCards } from "./ui/focus-cards";

export function Events() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/gssoc19.png",
    },
    {
        title: "Forest Adventure",
        src: "/gssoc19.png",
      },
      {
        title: "Forest Adventure",
        src: "/gssoc19.png",
      },
    // {
    //   title: "Valley of life",
    //   src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   title: "Sala behta hi jayega",
    //   src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   title: "Camping is for pros",
    //   src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   title: "The road not taken",
    //   src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   title: "The First Rule",
    //   src: "https://assets.aceternity.com/the-first-rule.png",
    // },
  ];

  return (
  <div className="min-h-[50vh] gap-14">
  <h1 className="text-3xl lg:text-4xl font-bold text-lime-300 text-center">Events</h1>

  <div className="flex flex-col lg:flex-row justify-between items-center pt-11">
  <FocusCards cards={cards} />;
  </div>
  </div>
  )
}
