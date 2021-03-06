import { Property } from "link-redux";
import * as React from "react";

import { InfoListTopology } from "../../canvasses";
import { InfoListSection } from "../../canvasses/InfoList/InfoListSection";
import { GenderProps, HeightProps, PersonTypes, SpouseProps } from "../../helpers/types";
import { NS } from "../../LRS";

export class PersonInfoList extends React.PureComponent {
    public static type = PersonTypes;

    public static topology = InfoListTopology;

    public render() {
        return (
            <InfoListSection>
                <Property forceRender label={NS.app("bornInfo")}/>
                <Property forceRender label={NS.app("deathInfo")}/>
                <Property label={GenderProps} />
                <Property label={NS.dbo("occupation")} />
                <Property label={NS.dbo("nationality")} />
                <Property label={NS.dbo("almaMater")} />
                <Property label={SpouseProps} />
                <Property label={NS.dbo("children")} />

                <Property label={HeightProps} />
            </InfoListSection>
        );
    }
}
