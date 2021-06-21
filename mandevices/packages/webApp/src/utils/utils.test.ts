import { validate } from "utils";

describe("validate function util", () => {
	it("should emit error with custom error message when input is invalid", () => {
		const input = { name: "abc", age: 16 };
		const [isError, { name, age }] = validate(input, {
			name: {
				isError: ({ name }) => name.length > 5,
				message: "custom name error message",
			},
			age: {
				isError: ({ age }) => age < 18,
				message: "custom name error message",
			},
		});
		expect(isError).toBe(true);
		expect(name).toBeNull();
		expect(age).toBe("custom name error message");
	});

	it("should not emit error when input is valid", () => {
		const input = { name: "abc", age: 21 };
		const [isError, { name, age }] = validate(input, {
			name: {
				isError: ({ name }) => name.length > 5,
				message: "custom name error message",
			},
			age: {
				isError: ({ age }) => age < 18,
				message: "custom name error message",
			},
		});
		expect(isError).toBe(false);
		expect(name).toBeNull();
		expect(age).toBe(null);
	});
});
