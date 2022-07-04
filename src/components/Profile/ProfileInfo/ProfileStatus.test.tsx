import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={() => {}}/>)
        expect(component.root.instance.state.status).toBe("it-kamasutra.com")
    })
})