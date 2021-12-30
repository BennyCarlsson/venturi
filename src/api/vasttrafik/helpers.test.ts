import { Token } from "types";
import { isTokenValid, getExpireTime, getTime } from "./helpers";

describe("api vasttrafik helpers getTime", () => {
  it("should match getTime", () => {
    const mockDate = new Date(1995, 11, 17, 3, 11, 12);
    const spy = jest
      .spyOn(global, "Date")
      .mockReturnValueOnce(mockDate as unknown as string);
    const { date, time } = getTime();
    expect(date).toEqual("1995-12-17");
    expect(time).toEqual("03:11");
    spy.mockRestore();
  });
});

describe("api vasttrafik helpers getExpireTime", () => {
  it("should match getExpired Time", () => {
    const mockDate = new Date();
    const spy = jest
      .spyOn(global, "Date")
      .mockReturnValueOnce(mockDate as unknown as string);
    const secondsToExpires = 123;
    const expiredTime = getExpireTime(secondsToExpires);
    mockDate.setSeconds(mockDate.getSeconds() + secondsToExpires);
    expect(expiredTime).toEqual(mockDate);
    spy.mockRestore();
  });

  it("should also match getExpireTime", () => {
    const mockDate = new Date(1995, 11, 17, 3, 24, 0);
    const compareDate = new Date(1995, 11, 17, 3, 25, 3);
    const spy = jest
      .spyOn(global, "Date")
      .mockReturnValueOnce(mockDate as unknown as string);
    const secondsToExpires = 63;
    const expiredTime = getExpireTime(secondsToExpires);
    expect(expiredTime).toEqual(compareDate);
    spy.mockRestore();
  });
});

describe("api vasttrafik helpers token", () => {
  it("token should be valid", () => {
    const validToken: Token = {
      accessToken: "123",
      expires: new Date(Date.now() + 1000 * 60),
    };
    expect(isTokenValid(validToken)).toBeTruthy();
  });

  it("token should be invalid", () => {
    const inValidToken: Token = {
      accessToken: "",
      expires: new Date(Date.now() + 1000 * 60),
    };
    expect(isTokenValid(inValidToken)).toBeFalsy();
  });

  it("token should be invalid and expired", () => {
    const inValidToken: Token = {
      accessToken: "",
      expires: null,
    };
    expect(isTokenValid(inValidToken)).toBeFalsy();
  });

  it("token should be expired", () => {
    const inValidToken: Token = {
      accessToken: "123",
      expires: new Date(Date.now() - 1000 * 60),
    };
    expect(isTokenValid(inValidToken)).toBeFalsy();
  });

  it("token should be invalid because no expires date", () => {
    const inValidToken: Token = {
      accessToken: "123",
      expires: null,
    };
    expect(isTokenValid(inValidToken)).toBeFalsy();
  });
});
