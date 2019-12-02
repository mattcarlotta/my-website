import moment from "moment-timezone";
import { User } from "models";
import {
  clearSession,
  createDate,
  createColumnSchedule,
  createMemberAvailabilityAverage,
  createMemberEventCount,
  createMemberResponseCount,
  createRandomToken,
  createSignupToken,
  createUniqueName,
  createUserSchedule,
  convertId,
  generateFilters,
  getUsers,
  sortScheduledUsersByLastName,
} from "shared/helpers";
import { badCredentials } from "shared/authErrors";

describe("Helpers", () => {
  let db;
  beforeAll(() => {
    db = connectDatabase();
  });

  afterAll(async () => {
    await db.close();
  });

  it("clears the session", () => {
    const mockResponse = () => {
      const res = {};
      res.clearCookie = jest.fn().mockReturnValue(res);
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      res.send = jest.fn().mockReturnValue(res);
      return res;
    };

    const res = mockResponse();

    clearSession(res, 400, badCredentials);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.clearCookie).toHaveBeenCalledWith("SJSITApp", { path: "/" });
    expect(res.json).toHaveBeenCalledWith({
      role: "guest",
      err: badCredentials,
    });
  });

  it("builds a column for scheduling", async () => {
    const admin = await User.findOne({ role: "admin" });
    const staff = await User.findOne({ role: "staff" });

    const members = [
      {
        _id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
      },
      { _id: staff._id, firstName: staff.firstName, lastName: staff.lastName },
    ];

    const callTimeId = "2019-08-09T17:45:26-07:00";

    const event = {
      schedule: [
        {
          _id: callTimeId,
          employeeIds: [staff._id],
        },
      ],
      scheduledIds: [staff._id],
    };

    const column = createColumnSchedule({ event, members });

    expect(column).toEqual([
      {
        _id: "employees",
        title: "Employees",
        employeeIds: [admin._id],
      },
      {
        _id: callTimeId,
        title: moment(callTimeId).format("hh:mm a"),
        employeeIds: [staff._id],
      },
    ]);
  });

  it("builds a users response array for scheduling", async () => {
    const admin = await User.findOne({ role: "admin" });
    const staff = await User.findOne({ role: "staff" });

    const members = [
      {
        _id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
      },
      { _id: staff._id, firstName: staff.firstName, lastName: staff.lastName },
    ];

    const event = {
      employeeResponses: [
        {
          _id: admin._id,
          response: "I want to work.",
          notes: "",
        },
      ],
    };

    const users = createUserSchedule({ event, members });

    expect(users).toEqual([
      {
        _id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        response: "I want to work.",
        notes: "",
      },
      {
        _id: staff._id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        response: "No response.",
        notes: "",
      },
    ]);
  });

  it("creates a member availability average", () => {
    const eventCounts = 3;
    const eventResponses = [
      {
        responses: ["I want to work.", "Available to work.", "Not available."],
      },
    ];

    const averages = createMemberAvailabilityAverage({
      eventCounts,
      eventResponses,
    });

    expect(averages).toEqual([
      {
        id: "available",
        label: "available",
        value: 66,
      },
      {
        id: "unavailable",
        label: "unavailable",
        value: 33,
      },
    ]);
  });

  it("returns an member's scheduled event count", () => {
    const members = [
      {
        _id: convertId("5d978d372f263f41cc624727"),
        name: "Test Test",
      },
      {
        _id: convertId("5d978d372f263f41cc624728"),
        name: "Test Test",
      },
    ];

    const memberEventCounts = [
      { _id: convertId("5d978d372f263f41cc624727"), eventCount: 2 },
    ];

    const memberEventCount = createMemberEventCount({
      members,
      memberEventCounts,
    });

    expect(memberEventCount).toEqual([
      {
        name: members[0].name,
        "Event Count": 2,
      },
      {
        name: members[1].name,
        "Event Count": 0,
      },
    ]);
  });

  it("returns a members event response count", () => {
    const eventResponses = [
      {
        _id: null,
        responses: [
          "No response.",
          "No response.",
          "No response.",
          "No response.",
          "No response.",
        ],
      },
    ];

    const eventResponseCount = createMemberResponseCount(eventResponses);
    expect(eventResponseCount).toEqual([
      {
        id: "I want to work.",
        label: "I want to work.",
        color: "#247BA0",
        value: 0,
      },
      {
        id: "Available to work.",
        label: "Available to work.",
        color: "#2A9D8F",
        value: 0,
      },
      {
        id: "Prefer not to work.",
        label: "Prefer not to work.",
        color: "#F4A261",
        value: 0,
      },
      {
        id: "Not available to work.",
        label: "Not available to work.",
        color: "#FF8060",
        value: 0,
      },
      {
        id: "No response.",
        label: "No response.",
        color: "#BFBFBF",
        value: 5,
      },
    ]);
  });

  it("creates a random 64 character string", () => {
    const token = createRandomToken();
    expect(token).toEqual(expect.any(String));
    expect(token.length).toEqual(64);
  });

  it("creates a random 32 character string", () => {
    const signupToken = createSignupToken();
    expect(signupToken).toEqual(expect.any(String));
    expect(signupToken.length).toEqual(64);
  });

  it("creates a unique snake-cased template string", () => {
    const template = createUniqueName("Employee Newsletter");
    expect(template).toEqual("employee-newsletter");
  });

  it("creates a current Date object", () => {
    const date = "2000-08-09T17:45:26-07:00";
    expect(createDate()).toEqual(expect.any(moment));
    expect(createDate(date)).toEqual(expect.any(moment));
  });

  it("generates a list of mongo filters", () => {
    const format = "MM-DD-YYYY";
    const date = "11-05-2020";
    const startOfDay = moment(date, format)
      .startOf("day")
      .format();
    const endOfDay = moment(date, format)
      .endOf("day")
      .format();

    const authorizedEmail = "test@test.com";
    const firstName = "bob";
    const lastName = "smith";
    const opponent = "ducks";
    const seasonId = "20202021";
    const sentEmails = "sent";
    const sentEmailReminders = "sent";
    const status = "active";
    const team = "sharks";
    const type = "game";

    const query = {
      authorizedEmail,
      endDate: date,
      endMonth: date,
      expirationDate: date,
      firstName,
      lastName,
      opponent,
      seasonId,
      sendDate: date,
      sentEmails,
      sentEmailReminders,
      startDate: date,
      startMonth: date,
      status,
      team,
      type,
    };

    const filters = generateFilters(query);

    expect(filters).toEqual({
      authorizedEmail: { $regex: "test@test.com", $options: "i" },
      eventDate: {
        $lte: endOfDay,
        $gte: startOfDay,
      },
      endMonth: { $lte: endOfDay },
      expirationDate: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
      firstName: { $regex: "bob", $options: "i" },
      lastName: { $regex: "smith", $options: "i" },
      opponent: { $regex: "ducks", $options: "i" },
      seasonId: { $regex: "20202021", $options: "i" },
      sendDate: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
      sentEmails: { $eq: true },
      sentEmailReminders: { $eq: true },
      startMonth: { $gte: startOfDay },
      status: { $eq: "active" },
      team: { $regex: "sharks", $options: "i" },
      eventType: { $regex: "game", $options: "i" },
    });
  });

  it("grabs all members from the database and projects accordingly", async () => {
    const members = await getUsers({
      match: {
        role: { $ne: "admin" },
        status: "active",
      },
      project: {
        email: {
          $concat: ["$firstName", " ", "$lastName", " ", "<", "$email", ">"],
        },
      },
    });

    expect(members).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: expect.any(ObjectId),
          email: expect.any(String),
        }),
      ]),
    );
  });

  it("sorts users by last name", () => {
    const unsortedUsers = [
      {
        scheduledIds: [
          {
            _id: "88",
            firstName: "Matt",
            lastName: "Zebra",
          },
          {
            _id: "99",
            firstName: "Bob",
            lastName: "Aardvark",
          },
        ],
      },
    ];

    const sortedUsers = sortScheduledUsersByLastName(unsortedUsers);
    expect(sortedUsers).toEqual([
      {
        scheduledIds: [
          {
            _id: "99",
            firstName: "Bob",
            lastName: "Aardvark",
          },
          {
            _id: "88",
            firstName: "Matt",
            lastName: "Zebra",
          },
        ],
      },
    ]);

    const noScheduledUsers = [];
    const noSortedUsers = sortScheduledUsersByLastName(noScheduledUsers);
    expect(noSortedUsers).toEqual(noScheduledUsers);
  });
});
