import React from "react";
import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';

describe("ProfileStatus Component", () => {

    test("Status from props should be in the state", () => {
        const mockCallback = jest.fn()
        const testRenderer = TestRenderer.create(<ProfileStatus status={"it-kamasutra.com"}
                                                                updateStatus={mockCallback}/>)
        const testInstance = testRenderer.root.instance
        expect(testInstance.state.status).toBe("it-kamasutra.com")
    });

    test("after creation span should be displayed with correct status", () => {
        const mockCallback = jest.fn()
        const testRenderer = TestRenderer.create(<ProfileStatus status={"it-kamasutra.com"}
                                                                updateStatus={mockCallback}/>)
        const testInstance = testRenderer.root
        expect(() => testInstance.findByType("span")).not.toBeNull()
    });

    test("after creation input should be displayed with correct status", () => {
        const mockCallback = jest.fn()
        const testRenderer = TestRenderer.create(<ProfileStatus status={"it-kamasutra.com"}
                                                                updateStatus={mockCallback}/>)
        const testInstance = testRenderer.root
        expect(() => testInstance.findByType("input")).toThrow()
    });

    test("input should be displayed in editMode instead of span", async () => {
        const mockCallback = jest.fn()
        const testRenderer = TestRenderer.create(<ProfileStatus status={"it-kamasutra.com"}
                                                                updateStatus={mockCallback}/>)
        const testInstance = testRenderer.root
        const span = await testInstance.findByType("span")
        span.props.onDoubleClick()
        const input = await testInstance.findByType("input")
        expect(input.props.value).toBe("it-kamasutra.com")
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const testRenderer = TestRenderer.create(<ProfileStatus status={"it-kamasutra.com"}
                                                                updateStatus={mockCallback}/>)
        const testInstance = testRenderer.root.instance
        testInstance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
})