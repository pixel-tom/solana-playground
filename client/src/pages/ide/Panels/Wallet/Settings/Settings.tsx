import styled from "styled-components";

import Button from "../../../../../components/Button";
import Menu from "../../../../../components/Menu";
import { ClassName, Id } from "../../../../../constants";
import { ThreeDots } from "../../../../../components/Icons";
import { useAirdrop } from "./Airdrop";
import { useNewWallet } from "./NewWallet";
import { useConnectSol } from "./ConnectSol";
import { useImportKeypair } from "./ImportKeypair";
import { useExportKeypair } from "./ExportKeypair";

export const WalletSettings = () => {
  const { pgCond, solCond, airdropPg, airdropSol } = useAirdrop();
  const { importKeypair } = useImportKeypair();
  const { exportKeypair } = useExportKeypair();
  const { handleNewWallet } = useNewWallet();
  const { connectSol, solButtonStatus } = useConnectSol();

  return (
    <Wrapper>
      <Menu
        kind="dropdown"
        items={[
          {
            name: "Airdrop",
            onClick: airdropPg,
            showCondition: pgCond,
          },
          {
            name: "Airdrop Phantom",
            onClick: airdropSol,
            showCondition: solCond,
          },
          {
            name: "Import Keypair",
            onClick: importKeypair,
          },
          {
            name: "Export Keypair",
            onClick: exportKeypair,
          },
          {
            name: "New Wallet",
            onClick: handleNewWallet,
          },
          {
            name: solButtonStatus,
            onClick: connectSol,
          },
        ]}
        onToggle={() => {
          document
            .getElementById(Id.WALLET_MAIN)
            ?.classList.toggle(ClassName.DARKEN);
        }}
      >
        <Button kind="icon" title="More">
          <ThreeDots />
        </Button>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 1rem;
`;