import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import Authorize from "components/authorize/Authorize";
import { render as r } from "utils/test";
import {
	GetRolesDocument,
	GetPermissonsConfigDocument,
} from "generated/graphql";
import { updateState } from "utils";

describe("Authorization", () => {
	it("should render loading ui", () => {
		r(<Authorize />);

		screen.getByText("Loading ...");
	});
	it("should render groups api and get exactly roles", async () => {
		const getRolesMock: MockedResponse = {
			request: {
				query: GetRolesDocument,
			},
			result: {
				data: {
					getRoles: [
						{
							_id: "604f88e6e0e4792750541617",
							name: "user",
							permissions: ["devices", "createDevices"],
							__typename: "Role",
						},
						{
							_id: "604f88e6e0e4792750541547",
							name: "modifier",
							permissions: ["devices", "createDevices", "device"],
							__typename: "Role",
						},
					],
				},
			},
		};

		const getPermissionsConfigMock: MockedResponse = {
			request: {
				query: GetPermissonsConfigDocument,
			},
			result: {
				data: {
					getPermissionsConfig: [
						{
							api: "createDevices",
							group: "devices",
							permissions: ["createDevices"],
						},
						{
							api: "devices",
							group: "devices",
							permissions: ["devices"],
						},
						{
							api: "device",
							group: "devices",
							permissions: ["device"],
						},
						{
							api: "editDevices",
							group: "devices",
							permissions: ["editDevices"],
						},
					],
				},
			},
		};
		r(<Authorize />, [getPermissionsConfigMock, getRolesMock]);
		await updateState();
		expect(screen.getByText("user")).toBeInTheDocument;
		expect(screen.getByText("modifier")).toBeInTheDocument;
		expect(screen.getByText("createDevices")).toBeInTheDocument;
	});
});
