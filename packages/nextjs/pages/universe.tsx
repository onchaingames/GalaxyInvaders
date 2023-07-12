import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Planets } from "~~/components/example-ui/planets";
import { ContractInteraction } from "~~/components/example-ui/stats";

const ExampleUI: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="Example UI | Scaffold-ETH 2"
        description="Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features."
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="grid lg:grid-rows-2 flex-grow" data-theme="exampleUi">
        <Planets />
        <ContractInteraction />
      </div>
    </>
  );
};

export default ExampleUI;
