import { newtClient } from "@/lib/newt";

export async function GET() {
  return await newtClient.getContent({
    appUid: "resume-site",
    modelUid: "resume",
    contentId: "6425acf886e7de37b829ac7a",
  });
}
