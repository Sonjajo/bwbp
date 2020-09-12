export type TableValues = string | boolean | Array<unknown> | Airtable.Attachment;
export type TableRecord =
  | UserRecord
  | ClassRecord
  | MessageRecord
  | JobRecord
  | ContactRecord
  | ClassEventRecord
  | PDFRecord
  | VideoRecord;

export type Row = {
  get: (key: string) => TableValues;
  getId: () => string;
};

interface Record {
  rid: string;
}

export interface UserRecord extends Record {
  uname: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  cohort: string;
  cohortName: string;
  location: string;
  graduated: boolean;
  admin: boolean;
}

export interface ClassRecord extends Record {
  name: string;
  address: string;
  startDate: string;
  endDate: string;
  classStartTime: string;
  classEndTime: string;
  classEventRefs: string[];
  classEvents: ClassEventRecord[];
}

export interface ClassEventRecord extends Record {
  eventType: string;
  date: string;
  startTime: string;
  endTime: string;
}

// added keep property on line 66 to be able to filter and update newJobs
export interface JobRecord extends Record {
  storeName: string;
  jobName: string;
  jobDescription: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  hours: string;
  schedule: string[];
  timeOfDay: string[];
  filled: boolean;
  users: string[];
  keep: boolean;
}

/* Messages */
export interface Message {
  body: string;
  date: string;
  subject: string;
  sender: ContactRecord;
}

export interface Metadata {
  isEvent: boolean;
  senderRef: string;
}

export interface EventDetails {
  eventDate: string;
  eventTime: string;
  eventAddress: string;
  eventCity: string;
  eventState: string;
  eventZipcode: string;
}

export type MessageRecord = Message & EventDetails & Metadata & Record;

/* POC */
export interface ContactRecord extends Record {
  name: string;
  imageRef: Airtable.Attachment[];
  image?: string;
  role: string;
  phone: string;
}

/* Brewguide */
export interface PDFRecord extends Record {
  file: Airtable.Attachment[];
  type: string;
  name: string;
  filename: string;
  url: string;
  answerKey: string;
}

export interface VideoRecord extends Record {
  name: string;
  link: string;
  description: string;
  thumbnailUrl?: string;
}
