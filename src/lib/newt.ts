import { createClient } from "newt-client-js";

export const newtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID!,
  token: process.env.NEWT_CDN_API_TOKEN!,
  apiType: "api",
});

export type Career = {
  career: string;
  title: string;
  _id: string;
};

export const getCareer = async (): Promise<Career> => {
  return await newtClient.getContent({
    appUid: "resume-site",
    modelUid: "career",
    contentId: "6422f7ba337c0de26e101909",
  });
};

export const getResume = async (): Promise<Career> => {
  return await newtClient.getContent({
    appUid: "resume-site",
    modelUid: "resume",
    contentId: "6425acf886e7de37b829ac7a",
  });
};
