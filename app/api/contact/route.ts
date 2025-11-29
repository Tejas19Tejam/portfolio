export async function POST(req: Request) {
  console.log(req);

  return new Response(
    JSON.stringify({ success: true, data: { user: "Vasudev" } }),
    { status: 200 }
  );
}
