import {
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from "react-google-login";
import { act } from "react-dom/test-utils";

export function isGoogleLogingResponseOffline(
	res: GoogleLoginResponse | GoogleLoginResponseOffline
): res is GoogleLoginResponseOffline {
	return (res as GoogleLoginResponseOffline).code !== undefined;
}

export const updateState = (): Promise<undefined> =>
	act(async () => {
		await new Promise((resolve) => setTimeout(resolve, 0));
	});

interface FieldValidation<T> {
	isError?: (attrs: T) => boolean | null | undefined;
	message: string;
}

/**
 * Kiểm tra tính hợp lệ của dự liệu
 * @func
 * @param {Object} input - Dữ liệu cần kiểm tra tính hợp lệ
 * @param option
 * @returns {Array}
 */
export function validate<T>(
	input: T,
	option: Partial<Record<keyof T, FieldValidation<T>>>
): [boolean, Record<keyof T, string>] {
	let isError = false;
	const errorMessage = Object.keys(input).reduce<
		Record<string, string | null>
	>((result, key) => {
		// @ts-ignore
		if (option[key]?.isError(input)) {
			// @ts-ignore
			isError = option[key]?.isError(input);
		}
		/* eslint-disable */
		result[key] = result[key] || ({} as any);
		// @ts-ignore
		result[key] = option[key]?.isError(input)
			? // @ts-ignore
			  option[key].message
			: null;
		return result;
	}, {});
	// @ts-ignore
	return [isError, errorMessage];
}
