import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { body } = req;
  const client = createServerSupabaseClient({ req, res });

  const { data, error } = await client.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  });

  if (error || !data) {
    res.status(403).json(error);
  }

  res.status(200).json(data.session);
};

export default handler;
