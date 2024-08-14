import Link from "next/link";

export const CharacterList = () => {
  const characters = [
    {
      name: {
        ja: "リュウ",
        en: "ryu",
      },
    },
    {
      name: {
        ja: "ケン",
        en: "ken",
      },
    },
  ];

  return (
    <nav>
      <ul>
        {characters.map((character) => {
          return (
            <li>
              {/* <Link
                href={`/${character.name.en}/`}
                className={buttonVariants({ variant: "outline" })}
              >
                {character.name.ja}
              </Link> */}
              <Link href={`/${character.name.en}/`}> {character.name.ja}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
