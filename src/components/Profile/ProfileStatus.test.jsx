import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

describe("Profile status component", () => {
    test("It show expected ...", () => {
        const component = create(<ProfileStatus status="IT-kamasutra"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("IT-kamasutra");
    });

    
});
