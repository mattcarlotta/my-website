import isEmpty from "lodash/isEmpty";
import moment from "moment-timezone";
import random from "lodash/random";
import sortBy from "lodash/sortBy";
import { Types } from "mongoose";
import { Event, User } from "models";
import {
  newAuthorizationKeyTemplate,
  newStaffTemplate,
} from "services/templates";

const { ObjectId } = Types;
const { CLIENT } = process.env;

const responseTypes = [
  "I want to work.",
  "Available to work.",
  "Prefer not to work.",
  "Not available to work.",
  "No response.",
];

const COLORS = ["#247BA0", "#2A9D8F", "#F4A261", "#FF8060", "#BFBFBF"];

const toAverage = (num, total) => parseInt(((num / total) * 100).toFixed(2), 10);

/**
 * Helper function to generate an auth token email.
 *
 * @function createAuthMail
 * @param authorizedEmail
 * @param token
 * @param expiration
 * @param role
 * @returns {object}
 */
const createAuthMail = (authorizedEmail, token, expiration, role) => {
  const isEmployee = role === "employee";
  return {
    sendTo: `${authorizedEmail}`,
    sendFrom: "San Jose Sharks Ice Team <noreply@sjsiceteam.com>",
    sendDate: moment().tz("America/Los_Angeles").toDate(),
    subject: `${
      isEmployee ? "Congratulations" : "Welcome"
    }, you have been invited to join the San Jose Sharks Ice Team!`,
    message: isEmployee
      ? newAuthorizationKeyTemplate(CLIENT, token, expiration.calendar())
      : newStaffTemplate(CLIENT, token, expiration.calendar()),
  };
};

/**
 * Helper function to generate a user event availability based upon their responses.
 *
 * @function createMemberAvailabilityAverage
 * @param object - eventCounts: number, eventResponses: an array of responses
 * @returns {array}
 */
const available = Array.from(responseTypes).splice(0, 2);
const createMemberAvailabilityAverage = ({ eventCounts, eventResponses }) => eventResponses.reduce((acc, { responses }) => {
  let avail = 0;
  let unavail = 0;
  responses.forEach(response => {
    if (available.includes(response)) {
      avail += 1;
    } else {
      unavail += 1;
    }
  });

  return [
    {
      id: "available",
      label: "available",
      value: toAverage(avail, eventCounts),
    },
    {
      id: "unavailable",
      label: "unavailable",
      value: toAverage(unavail, eventCounts),
    },
  ];
}, []);

/**
 * Helper function to generate all user event availability based upon their responses.
 *
 * @function createMemberAvailabilityAverages
 * @param object -  eventCounts: number, eventResponses: [_id, availability], members: [_id, name]
 * @returns {array}
 */
const createMemberAvailabilityAverages = ({
  eventCounts,
  eventResponses,
  members,
}) => members.reduce((acc, member) => {
  const hasResponse = !isEmpty(eventResponses)
      && eventResponses.find(doc => doc._id.equals(member._id));

  return [
    ...acc,
    {
      id: member.name,
      availability: hasResponse
        ? toAverage(hasResponse.availability, eventCounts)
        : 0,
    },
  ];
}, []);

/**
 * Helper function to generate a unique token.
 *
 * @function
 * @returns {token}
 */
const tokenGenerator = (str, tlen) => {
  const arr = [...str];
  const max = arr.length - 1;
  let token = "";
  for (let i = 0; i < tlen; i += 1) {
    const int = random(max);
    token += arr[int];
  }
  return token;
};

/**
 * Helper function to clear the user session.
 *
 * @function
 * @param {object} res
 * @param {number} status
 * @param {string} err
 * @returns {response}
 */
const clearSession = (res, status, err) => res
  .status(status)
  .clearCookie("SJSITApp", { path: "/" })
  .json({ role: "guest", err });

/**
 * Helper function to generate a schedule based upon calltimes.
 *
 * @function createColumnSchedule
 * @param event - an object containing event details
 * @param members - an array of members
 * @returns {array}
 */
const createColumnSchedule = ({ event, members }) => [
  {
    _id: "employees",
    title: "Employees",
    employeeIds: members.reduce((result, member) => {
      const isScheduled = event.scheduledIds.some(id => member._id.equals(id));

      return !isScheduled ? [...result, member._id] : result;
    }, []),
  },
  ...event.schedule.map(({ _id, employeeIds }) => ({
    _id,
    title: moment(_id).format("hh:mm a"),
    employeeIds,
  })),
];

/**
 * Helper function to create a current date.
 *
 * @function
 * @returns {Date}
 */
const createDate = date => moment(date || Date.now()).tz("America/Los_Angeles");

/**
 * Helper function to generate a user event count based upon their scheduled events.
 *
 * @function createMemberEventCount
 * @param members - an array of members
 * @param memberEventCounts - an array of members and their eventCount
 * @returns {array}
 */
const createMemberEventCount = ({ members, memberEventCounts }) => members.map(member => {
  const hasEventCount = !isEmpty(memberEventCounts)
      && memberEventCounts.find(doc => doc._id.equals(member._id));

  return {
    name: member.name,
    "Event Count": hasEventCount ? hasEventCount.eventCount : 0,
  };
});

/**
 * Helper function to generate a user event count based upon their scheduled events.
 *
 * @function createMemberResponseCount
 * @param eventResponses - an array of responses
 * @returns {array}
 */
const createMemberResponseCount = eventResponses => eventResponses.reduce((acc, { responses }) => {
  responseTypes.forEach((rspType, index) => {
    acc.push({
      id: rspType,
      label: rspType,
      color: COLORS[index],
      value: responses.filter(rsp => rsp === rspType).length,
    });
  });

  return acc;
}, []);

/**
 * Helper function to create a 64 length random string.
 *
 * @function createRandomToken
 * @returns {String}
 */
const createRandomToken = () => tokenGenerator(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$/.",
  64,
);

/**
 * Helper function to generate a schedule based upon calltimes.
 *
 * @function createSchedule
 * @param callTimes - an array of dates
 * @returns {object}
 */
const createSchedule = callTimes => callTimes.map(time => ({
  _id: time,
  employeeIds: [],
}));

/**
 * Helper function to generate a schedule based upon calltimes.
 *
 * @function createUserSchedule
 * @param event - an object containing event details
 * @param members - an array of members
 * @returns {array}
 */
const createUserSchedule = ({ event, members }) => [
  ...members.map(member => {
    const eventResponse = event.employeeResponses.find(response => response._id.equals(member._id));

    return {
      ...member,
      response: eventResponse ? eventResponse.response : "No response.",
      notes: eventResponse ? eventResponse.notes : "",
    };
  }),
];

/**
 * Helper function to generate a mongo ObjectId.
 *
 * @function convertId
 * @returns {ObjectId}
 */
const convertId = id => ObjectId(id);

/**
 * Helper function to strip and convert template names to snaked lowercase name.
 *
 * @function
 * @returns {String}
 */
const createUniqueName = name => name
  .trim()
  .toLowerCase()
  .replace(/[^\w\s]/gi, "")
  .replace(/ /g, "-");

/**
 * Helper function to create a 64 length random string.
 *
 * @function createSignupToken
 * @returns {String}
 */
const createSignupToken = () => tokenGenerator(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  64,
);

/**
 * Helper function to get 90 days date from current date.
 *
 * @function
 * @returns {month}
 */
const expirationDate = () => moment()
  .add(90, "days")
  .endOf("day");

/**
 * Helper function to generate table filters.
 *
 * @function generateFilters
 * @param {object} - query
 * @returns {object}
 */
const format = "MM-DD-YYYY";
const generateFilters = query => (!isEmpty(query)
  ? Object.keys(query).reduce((acc, item) => {
    switch (item) {
      case "authorizedEmail": {
        acc.authorizedEmail = { $regex: query[item], $options: "i" };
        break;
      }
      case "email": {
        acc.email = { $regex: query[item], $options: "i" };
        break;
      }
      case "endDate": {
        acc.eventDate = {
          ...acc.eventDate,
          $lte: moment(query[item], format)
            .endOf("day")
            .format(),
        };
        break;
      }
      case "endMonth": {
        acc.endMonth = {
          $lte: moment(query[item], format)
            .endOf("day")
            .format(),
        };
        break;
      }
      case "expirationDate": {
        acc.expirationDate = {
          $gte: moment(query[item], format)
            .startOf("day")
            .format(),
          $lte: moment(query[item], format)
            .endOf("day")
            .format(),
        };
        break;
      }
      case "firstName": {
        acc.firstName = { $regex: query[item], $options: "i" };
        break;
      }
      case "lastName": {
        acc.lastName = { $regex: query[item], $options: "i" };
        break;
      }
      case "opponent": {
        acc.opponent = { $regex: query[item], $options: "i" };
        break;
      }
      case "seasonId": {
        acc.seasonId = { $regex: query[item], $options: "i" };
        break;
      }
      case "sendDate": {
        acc.sendDate = {
          $gte: moment(query[item], format)
            .startOf("day")
            .format(),
          $lte: moment(query[item], format)
            .endOf("day")
            .format(),
        };
        break;
      }
      case "sentEmails": {
        acc.sentEmails = { $eq: query[item] === "sent" };
        break;
      }
      case "sentEmailReminders": {
        acc.sentEmailReminders = { $eq: query[item] === "sent" };
        break;
      }
      case "startDate": {
        acc.eventDate = {
          ...acc.eventDate,
          $gte: moment(query[item], format)
            .startOf("day")
            .format(),
        };
        break;
      }
      case "startMonth": {
        acc.startMonth = {
          $gte: moment(query[item], format)
            .startOf("day")
            .format(),
        };
        break;
      }
      case "status": {
        acc.status = { $eq: query[item] };
        break;
      }
      case "team": {
        acc.team = { $regex: query[item], $options: "i" };
        break;
      }
      case "type": {
        acc.eventType = { $regex: query[item], $options: "i" };
        break;
      }
      default: {
        break;
      }
    }
    return acc;
  }, {})
  : {});

/**
 * Helper function to generate a date.
 *
 * @function getEndOfDay
 * @param date
 * @returns {object}
 */
const getEndOfDay = () => moment()
  .endOf("day")
  .format();

/**
 * Helper function to get event counts.
 *
 * @function getEndOfDay
 * @param startMonth
 * @param endMonth
 * @returns {object}
 */
const getEventCounts = (startMonth, endMonth) => Event.countDocuments({
  eventDate: {
    $gte: moment(startMonth).toDate(),
    $lte: moment(endMonth).toDate(),
  },
});

/**
 * Helper function to generate a date range.
 *
 * @function getMonthDateRange
 * @param date
 * @returns {object}
 */
const getMonthDateRange = date => {
  const startOfMonth = moment(date)
    .startOf("month")
    .toDate();
  const endOfMonth = moment(date)
    .endOf("month")
    .toDate();

  return { startOfMonth, endOfMonth };
};

/**
 * Helper function to generate a date.
 *
 * @function getStartOfDay
 * @param date
 * @returns {object}
 */
const getStartOfDay = () => moment()
  .startOf("day")
  .format();

/**
 * Helper function to generate a date range.
 *
 * @function getUsers
 * @param role - user role
 * @param project - projected data structure
 * @returns {array}
 */
const getUsers = async ({ match, project }) => {
  const members = await User.aggregate([
    {
      $match: match,
    },
    { $sort: { lastName: 1 } },
    {
      $project: project,
    },
  ]);

  return members;
};

/**
 * Helper function to find an event by id.
 *
 * @function findEventById
 * @returns {function}
 */
const findEventById = async _id => {
  const existingEvent = await Event.findOne({ _id }, { __v: 0 });
  return existingEvent;
};

/**
 * Helper function to send an error to the client.
 *
 * @function
 * @returns {function}
 */
const sendError = (err, res) => res.status(400).json({ err: err.toString() });

/**
 * Helper function to sort a schedule list based upon last name.
 *
 * @function sortScheduledUsersByLastName
 * @param event - an object containing event details
 * @returns {array}
 */
const sortScheduledUsersByLastName = events => (!isEmpty(events)
  ? events.map(({ scheduledIds, ...rest }) => ({
    ...rest,
    scheduledIds: sortBy(scheduledIds, "lastName"),
  }))
  : []);

/**
 * Helper function to check if an array contains duplicate values.
 *
 * @function
 * @returns {bool}
 */
const uniqueArray = arr => arr.length === new Set(arr).size;

/**
 * Helper function to convert stringified ids to objectids.
 *
 * @function updateScheduleIds
 * @param schedule - an array of ids
 * @returns {array}
 */
const updateScheduleIds = schedule => schedule.reduce(
  (result, { employeeIds }) => [
    ...result,
    ...employeeIds.map(id => ObjectId(id)),
  ],
  [],
);

export {
  clearSession,
  convertId,
  createAuthMail,
  createColumnSchedule,
  createDate,
  createMemberAvailabilityAverage,
  createMemberAvailabilityAverages,
  createMemberEventCount,
  createMemberResponseCount,
  createRandomToken,
  createSchedule,
  createUserSchedule,
  createSignupToken,
  createUniqueName,
  expirationDate,
  findEventById,
  generateFilters,
  getEndOfDay,
  getEventCounts,
  getMonthDateRange,
  getStartOfDay,
  getUsers,
  sendError,
  sortScheduledUsersByLastName,
  uniqueArray,
  updateScheduleIds,
};
