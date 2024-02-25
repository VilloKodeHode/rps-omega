import Link from "next/link";

export const Navigation = () => {
  return (
    <>
      <nav className="absolute z-50 grid gap-4 p-2 m-2 top-2 right-2 h-fit w-fit">
        <Link className="h-fit w-fit" href="/RockPaperScissorsLizardSpock">
          <img
            className="w-16 h-16 p-2 rounded-xl opacity-80 bg-lightBlue"
            src="/logo-bonus.svg"
          />
        </Link>
        <Link
          className=" h-fit w-fit"
          href="/RockPaperScissorsLizardSpockFireWater"
        >
          <img
            className="w-16 h-16 p-2 bg-lightBlue rounded-xl opacity-80"
            src="/logo-firewater.png"
          />
        </Link>
      </nav>
    </>
  );
};
