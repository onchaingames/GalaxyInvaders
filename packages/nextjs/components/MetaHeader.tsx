import React from "react";
import Head from "next/head";

type MetaHeaderProps = {
  title?: string;
  description?: string;
  image?: string;
  twitterCard?: string;
  children?: React.ReactNode;
};

// Images must have an absolute path to work properly on Twitter.
// We try to get it dynamically from Vercel, but we default to relative path.
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/` : "/";

export const MetaHeader = ({
  title = "Galaxy Invaders - Defi, but funner! Compete for staked Eth Yields",
  description = "Mint a Spaceship Nft by staking Eth in Lido through GalaxyInvaders. Battle other Spaceships for their yield! Defeat Aliens to earn Gov tokens.",
  image = "twittercard.png",
  twitterCard = "summary_large_image",
  children,
}: MetaHeaderProps) => {
  const imageUrl = baseUrl + image;

  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:image" content={imageUrl} />
        </>
      )}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      <link rel="icon" type="image/png" sizes="32x32" href="monster.webp" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      {children}
    </Head>
  );
};
