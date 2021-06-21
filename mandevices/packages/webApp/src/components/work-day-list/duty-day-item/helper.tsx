import { MockedResponse } from "@apollo/client/testing";
import {
	NewSubscriberDocument,
	NewUnsubscriberDocument,
} from "generated/graphql";
import React from "react";
import { render, RenderResult } from "utils/test";

function customRender<T>(
	ui: React.ReactElement,
	mockData: MockedResponse<T>[] = []
): RenderResult {
	return render(ui, [
		{
			request: {
				query: NewSubscriberDocument,
			},
			result: {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				// data: {
				// 	newSubscriber: {},
				// },
			},
		},
		{
			request: {
				query: NewUnsubscriberDocument,
			},
			result: {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				// data: {
				// 	newUnsubscriber: {},
				// },
			},
		},
		...mockData,
	]);
}

export { customRender as default };
