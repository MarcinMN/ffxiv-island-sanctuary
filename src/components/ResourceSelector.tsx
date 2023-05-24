import { Checkbox, CheckboxGroup, SimpleGrid } from "@chakra-ui/react";

const ResourceSelector = () => {
  return (
    <CheckboxGroup
      onChange={(value) => {
        console.log(value);
      }}
    >
      <SimpleGrid columns={2} spacing={2} padding="20px">
        <Checkbox value="Island Apple">Apple</Checkbox>
        <Checkbox value="Island Beehive Chips">Beehive Chips</Checkbox>
        <Checkbox value="Island Branch">Branch</Checkbox>
        <Checkbox value="Island Cabbage Seeds">Cabbage Seeds</Checkbox>
        <Checkbox value="Island Clam">Clam</Checkbox>
        <Checkbox value="Island Clay">Clay</Checkbox>
        <Checkbox value="Island Coconut">Coconut</Checkbox>
        <Checkbox value="Island Copper Ore">Copper Ore</Checkbox>
        <Checkbox value="Island Coral">Coral</Checkbox>
        <Checkbox value="Island Cotton Boll">Cotton Boll</Checkbox>
        <Checkbox value="Island Hemp">Hemp</Checkbox>
        <Checkbox value="Island Iron Ore">Iron Ore</Checkbox>
        <Checkbox value="Islefish">Islefish</Checkbox>
        <Checkbox value="Islewort">Islewort</Checkbox>
        <Checkbox value="Island Jellyfish">Jellyfish</Checkbox>
        <Checkbox value="Island Laver">Laver</Checkbox>
        <Checkbox value="Island Leucogranite">Leucogranite</Checkbox>
        <Checkbox value="Island Limestone">Limestone</Checkbox>
        <Checkbox value="Island Log">Log</Checkbox>
        <Checkbox value="Multicolored Isleblooms">
          Multicolored Isleblooms
        </Checkbox>
        <Checkbox value="Island Palm Leaf">Palm Leaf</Checkbox>
        <Checkbox value="Island Palm Log">Palm Log</Checkbox>
        <Checkbox value="Island Parsnip Seeds">Parsnip Seeds</Checkbox>
        <Checkbox value="Island Popoto Set">Popoto Set</Checkbox>
        <Checkbox value="Island Pumpkin Seeds">Pumpkin Seeds</Checkbox>
        <Checkbox value="Island Quartz">Quartz</Checkbox>
        <Checkbox value="Island Resin">Resin</Checkbox>
        <Checkbox value="Island Rocksalt">Rock Salt</Checkbox>
        <Checkbox value="Island Sand">Sand</Checkbox>
        <Checkbox value="Island Sap">Sap</Checkbox>
        <Checkbox value="Island Squid">Squid</Checkbox>
        <Checkbox value="Island Stone">Stone</Checkbox>
        <Checkbox value="Island Sugar Cane">Sugar Cane</Checkbox>
        <Checkbox value="Island Tinsand">Tinsand</Checkbox>
        <Checkbox value="Island Vine">Vine</Checkbox>
        <Checkbox value="Island Wood Opal">Wood Opal</Checkbox>
      </SimpleGrid>
    </CheckboxGroup>
  );
};

export default ResourceSelector;
