import { camelcaseit } from '../common/functions';

it("camelcases a simple object", () => 
    expect(camelcaseit({"foo-bar":"baz"})).toStrictEqual({"fooBar":"baz"}));

it("camelcase a nested object", () => {
    const original = {
        "foo-bar" : "baz",
        "nested" : {
            "test_camel-case" : "works"
        }
    };

    const expected = {
        "fooBar" : "baz",
        "nested" : {
            "testCamelCase" : "works"
        }
    };

    expect(camelcaseit(original)).toStrictEqual(expected);
});